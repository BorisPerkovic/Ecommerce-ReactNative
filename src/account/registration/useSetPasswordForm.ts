import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {useForm} from 'react-hook-form';

function usePasswordForm<FormData>(schema: yup.ObjectSchema<any>) {
  const {
    control,
    handleSubmit,
    formState: {isValid, errors, isDirty},
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    mode: 'onBlur',
  });

  return {control, handleSubmit, isValid, errors, isDirty};
}

export const useSetPasswordForm = usePasswordForm;
