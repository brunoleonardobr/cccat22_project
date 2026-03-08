import { validateName } from "../src/validateName";

test.each([
  ["John Doe", true],
  ["John", false],
])("Deve validar o nome", (name: string, expected: boolean) => {
  const isValid = validateName(name);
  expect(isValid).toBe(expected);
});
