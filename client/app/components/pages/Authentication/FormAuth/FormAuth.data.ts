import { FieldProps } from "@/components/ui/Field";

export const authFields: FieldProps[] = [
  {
    field: {
      name: 'email',
      legend: 'Email',
    },
    type: 'text',
  },
  {
    field: {
      name: 'password',
      legend: 'Password',
      description: 'Min 6 characters, number & letters',
    },
    type: 'password',
  }
]