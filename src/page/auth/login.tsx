import banner from '../../assets/AI6.jpg';
import LoginForm from '../../components/LoginForm';
import AuthLayout from '../../layouts/AuthLayout';

const Login = (): JSX.Element => {
  return (
    <div className="h-screen flex items-center justify-center">
      <AuthLayout imageSource={banner}>
        <LoginForm />
      </AuthLayout>
    </div>
  );
};

export default Login;
