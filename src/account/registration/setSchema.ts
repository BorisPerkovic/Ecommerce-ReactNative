import * as yup from 'yup';

export const passwordSchema = {
  password: yup
    .string()
    .trim()
    .required('passwordRequired')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9 @#$%^&*\-_!+=[\]{}|\\:',.?/`~"();<>])(?=.{8,})/,
      'passwordRequirements',
    ),
  repassword: yup
    .string()
    .trim()
    .oneOf([yup.ref('password'), null], 'repeatPasswordMustMatch')
    .required('repeatPasswordRequired'),
};

export const emailSchema = {
  name: yup
    .string()
    .trim()
    .required('fisrNameRequired')
    .matches(/^([^0-9]*)$/, 'nameValidFormat'),
  lastname: yup
    .string()
    .trim()
    .required('lastnNameRequired')
    .matches(/^([^0-9]*)$/, 'lastNameValidFormat'),
  email: yup
    .string()
    .trim()
    .required('emailRequired')
    .matches(
      /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'mustBeEmail',
    ),
};

export const signInEmailSchema = {
  email: yup
    .string()
    .trim()
    .required('emailRequired')
    .matches(
      /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'mustBeEmail',
    ),
  password: yup.string().trim().required('passwordRequired'),
};

export const setPasswordSchema = yup.object().shape(passwordSchema);
export const setEmailSchema = yup.object().shape(emailSchema);
export const setSignInEmailSchema = yup.object().shape(signInEmailSchema);
