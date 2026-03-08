import { validateCpf } from "../src/validateCpf";

test.each(["97456321558", "71428793860", "87748248800"])(
  "Deve testar um CPF válido",
  (cpf) => {
    const isValid = validateCpf(cpf);
    expect(isValid).toBe(true);
  },
);

test.each([null, undefined, "1234567890", "123456789012", "11111111111"])(
  "Deve testar um CPF inválido",
  (cpf: any) => {
    const isValid = validateCpf(cpf);
    expect(isValid).toBe(false);
  },
);
