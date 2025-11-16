import banner from "../../assets/AI6.jpg";
import LoginForm from "../../components/LoginForm";
import AuthLayout from "../../layouts/AuthLayout";

const Login = (): JSX.Element => {
  return (
    <AuthLayout imageSource={banner}>
      <LoginForm />
    </AuthLayout>
  );
};

export default Login;
