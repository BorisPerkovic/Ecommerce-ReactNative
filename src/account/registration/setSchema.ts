import * as yup from 'yup';

export const passwordSchema = {
  password: yup
    .string()
    .trim()
    .required('password is required')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9 @#$%^&*\-_!+=[\]{}|\\:',.?/`~"();<>])(?=.{8,})/,
      'password must match requirements',
    ),
  repassword: yup
    .string()
    .trim()
    .oneOf([yup.ref('password'), null], 'must match password')
    .required('repeat password is required'),
};

export const emailSchema = {
  name: yup
    .string()
    .trim()
    .required('name is required')
    .matches(/^([^0-9]*)$/, 'name must be in valid format'),
  lastname: yup
    .string()
    .trim()
    .required('last name is required')
    .matches(/^([^0-9]*)$/, 'lastname must be in valid format'),
  email: yup
    .string()
    .trim()
    .required('email is required')
    .matches(
      /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'email must be in valid format',
    ),
};

export const setPasswordSchema = yup.object().shape(passwordSchema);
export const setEmailSchema = yup.object().shape(emailSchema);
