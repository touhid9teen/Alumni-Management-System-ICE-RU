import banner from "../../assets/AI6.jpg";
import SignUpForm from "../../components/SignUpForm";
import AuthLayout from "../../layouts/AuthLayout";

const Signup = (): JSX.Element => {
    return (
        <div className="h-screen w-screen flex items-center justify-center">
            <AuthLayout imageSource={banner}>
                <SignUpForm />
            </AuthLayout>
        </div>
    );
};

export default Signup;
