import { validateCpf } from "../src/validateCpf";

test("Deve testar um CPF válido", () => {
  const cpf = "93541134780";
  expect(validateCpf(cpf)).toBe(true);
});
