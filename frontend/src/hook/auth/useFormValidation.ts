import { useState } from 'react';

export const useFormValidation = () => {
  const [errors, setErrors] = useState<
    Record<string, string>
  >({});

  const validate = (
    values: Record<string, string>,
    validators: Record<
      string,
      (value: string) => string
    >
  ) => {
    const newErrors: Record<string, string> =
      {};

    Object.keys(values).forEach((key) => {
      if (validators[key]) {
        const error = validators[key](
          values[key]
        );

        if (error) {
          newErrors[key] = error;
        }
      }
    });

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  return {
    errors,
    validate,
  };
};