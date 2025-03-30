import { SignIn } from "@clerk/react-router";

const LoginPage = () => {
    return (
        <div className="flex-center w-full h-[calc(100vh-80px)]">
            <SignIn signInUrl="/register" />
        </div>
    );
};

export default LoginPage;
