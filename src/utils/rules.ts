import { ValidationRule } from "@/types/validation.type";

export const required = <T>(field: keyof T): ValidationRule<T> => ({
  field,
  validate: (value: any) => (value ? null : `${String(field)} is required.`),
});

export const minLength = <T>(
  field: keyof T,
  length: number
): ValidationRule<T> => ({
  field,
  validate: (value: any) =>
    value && value.length >= length
      ? null
      : `${String(field)} must be at least ${length} characters.`,
});

export const matchField = <T>(
  field: keyof T,
  matchField: keyof T
): ValidationRule<T> => ({
  field,
  validate: (value: any, data?: T) =>
    value === data?.[matchField]
      ? null
      : `${String(field)} must match ${String(matchField)}.`,
});
