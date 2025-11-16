import banner from "../../assets/AI6.jpg";
import SignUpForm from "../../components/SignUpForm";
import AuthLayout from "../../layouts/AuthLayout";

const Signup = (): JSX.Element => {
  return (
    <AuthLayout imageSource={banner}>
      <SignUpForm />
    </AuthLayout>
  );
};

export default Signup;
