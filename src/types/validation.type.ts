export type ValidationRule<T> = {
  field: keyof T;
  validate: (value: any, data?: T) => string | null;
};

export type ValidationError<T> = {
  field: keyof T;
  message: string;
};
