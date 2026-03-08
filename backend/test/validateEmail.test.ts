import { validateEmail } from "../src/validateEmail";

test.each([
  ["john.doe@gmail.com", true],
  ["john.doe@gmail", false],
  ["john.doe", false],
  ["john.doe@", false],
  ["@gmail.com", false],
])("Deve validar um email", (email: string, expected: boolean) => {
  const isValid = validateEmail(email);
  expect(isValid).toBe(expected);
});
