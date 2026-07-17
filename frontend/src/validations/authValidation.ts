export const validators = {
  name: (value: string) => {
    if (!value.trim())
      return 'Name is required';

    return '';
  },

  email: (value: string) => {
    if (!value.trim())
      return 'Email is required';

    if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
    )
      return 'Invalid email';

    return '';
  },

  password: (value: string) => {
    if (!value)
      return 'Password is required';

    if (value.length < 8)
      return 'Minimum 8 characters';

    return '';
  },

  role: (value: string) => {
    if (!value)
      return 'Select a role';

    return '';
  },
};