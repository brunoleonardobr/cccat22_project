import { validatePassword } from "../src/validatePassword";

test.each([
  ["asdQWE123", true],
  ["ASDQWE123", false],
  ["asdqwe123", false],
  ["asdQWEabc", false],
])("Deve validar uma senha", (password: string, expected: boolean) => {
  const isValid = validatePassword(password);
  expect(isValid).toBe(expected);
});
