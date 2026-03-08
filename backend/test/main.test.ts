import axios from "axios";
axios.defaults.validateStatus = () => true;

test("Deve criar uma conta", async () => {
  // Given
  const input = {
    name: "John Doe",
    email: "john.doe@gmail.com",
    document: "97456321558",
    password: "asdQWE123",
  };
  // When
  const responseSignup = await axios.post(
    "http://localhost:3000/signup",
    input,
  );
  const outputSignup = responseSignup.data;
  // Then
  const responseGetAccount = await axios.get(
    `http://localhost:3000/accounts/${outputSignup.accountId}`,
  );
  const outputGetAccount = responseGetAccount.data;
  expect(outputGetAccount.name).toBe(input.name);
  expect(outputGetAccount.email).toBe(input.email);
  expect(outputGetAccount.document).toBe(input.document);
  expect(outputGetAccount.password).toBe(input.password);
});

test("Não deve criar uma conta se o nome for invalido", async () => {
  //Given
  const input = {
    name: "John",
    email: "john.doe@gmail.com",
    document: "97456321558",
    password: "asdQWE123",
  };

  //When
  const responseSignup = await axios.post(
    "http://localhost:3000/signup",
    input,
  );

  //Then
  expect(responseSignup.status).toBe(422);
  const output = responseSignup.data;
  expect(output.message).toBe("Invalid name");
});

test("Não deve criar uma conta se o e-mail for invalido", async () => {
  //Given
  const input = {
    name: "John Doe",
    email: "john.doe@gmail",
    document: "97456321558",
    password: "asdQWE123",
  };

  //When
  const responseSignup = await axios.post(
    "http://localhost:3000/signup",
    input,
  );

  //Then
  expect(responseSignup.status).toBe(422);
  const output = responseSignup.data;
  expect(output.message).toBe("Invalid email");
});

test("Não deve criar uma conta se o documento for invalido", async () => {
  //Given
  const input = {
    name: "John Doe",
    email: "john.doe@gmail.com",
    document: "9745632155",
    password: "asdQWE123",
  };

  //When
  const responseSignup = await axios.post(
    "http://localhost:3000/signup",
    input,
  );

  //Then
  expect(responseSignup.status).toBe(422);
  const output = responseSignup.data;
  expect(output.message).toBe("Invalid document");
});

test("Não deve criar uma conta se a senha for invalida", async () => {
  //Given
  const input = {
    name: "John Doe",
    email: "john.doe@gmail.com",
    document: "97456321558",
    password: "asdQWE",
  };

  //When
  const responseSignup = await axios.post(
    "http://localhost:3000/signup",
    input,
  );

  //Then
  expect(responseSignup.status).toBe(422);
  const output = responseSignup.data;
  expect(output.message).toBe("Invalid password");
});
