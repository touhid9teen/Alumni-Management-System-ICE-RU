import { FC } from 'react';
import { useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';

import Button from '../elements/Button';
import InputField from '../elements/InputField';
import Toggle from '../elements/Toggle';

interface FormData {
  email: string;
  password: string;
}

const LoginForm: FC = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
  };
 

  return (
    <div className="w-[821px] h-[900px] bg-white">
      {/* message top */}
      <div className="flex justify-center items-center">
        <div className="w-full mt-12 mr-28">
          <p className="flex text-sm font-normal justify-end  ">
            Don’t have an account?&nbsp;
            <span
              className=" text-indigo-600 text-sm font-medium cursor-pointer"
              onClick={() => {
                navigate('/signup');
              }}
            >
              Sign Up!
            </span>
          </p>
        </div>
      </div>

      {/* headline */}
      <div className="mt-16 flex flex-col justify-center items-center">
        <h2 className="text-black text-4xl font-semibold leading-10">Welcome Back</h2>
        <h2 className="text-black text-lg font-normal leading-7">Login into your account</h2>      
      </div>


      {/* Login Form */}
      <div className="flex flex-col justify-center items-center mt-6">
        <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
          {[
            { name: 'Email', key: 'email', placeholder: 'Email' },
            { name: 'Password', key: 'password', placeholder: 'Password' },
          ].map((field) => (
            <div key={field.key}>
             
                  <InputField
                    {...register(field.key)}
                    type={field.key === 'password' ? 'password' : 'text'}
                    customInputClass="w-100 h-16 px-6 py-7 h-18 text-[#5A5A5A] border-zinc-300 bg-white flex-shrink-0 rounded-lg placeholder:text-sm placeholder:text-zinc-600 placeholder:font-normal"
                    id={field.key}
                    name={field.name}
                    placeholder={field.placeholder}
                  />
             
            </div>
          ))}

          {/* Toggle button  */}
          <div className="flex justify-between">
            <Toggle
              id={'cn'}
              name={'cn'}
              initialChecked={false}
              checkedOnLabel="Remember me"
              checkedOffLabel="Remember me"
              onChangeToggle={function ({ name, checked }: { name: string; checked: boolean }): void {
                console.log(':: TODO => user data should be saved for future login', name, checked);
              }}
            />
            <p className="text-red-600 text-sm font-normal cursor-pointer">
              Recover Password
            </p>
          </div>
          <Button
            customClass="flex justify-center item-center w-100 h-14 font-semibold text-lg mt-10"
            buttonType="submit"
            buttonVariant="primary"
          >
            Log In
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
