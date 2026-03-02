import axios from "axios";

test("Deve criar uma conta", async () => {
  //when
  const input = {
    name: "John Doe",
    email: "john.doe@gmail.com",
    document: "97456321558",
    password: "lalala",
  };

  //then
  const response = await axios.post("http://localhost:3000/signup", input);
  const output = response.data;

  //expect
  expect(output.accountId).toBeDefined();
});
