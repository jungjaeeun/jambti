import { ValidationError, ValidationRule } from "@/types/validation.type";

export const validate = <T>(
  data: T,
  rules: ValidationRule<T>[]
): ValidationError<T>[] => {
  const errors: ValidationError<T>[] = [];

  for (const rule of rules) {
    const errorMessage = rule.validate(data[rule.field], data);
    if (errorMessage) {
      errors.push({ field: rule.field, message: errorMessage });
    }
  }

  return errors;
};
