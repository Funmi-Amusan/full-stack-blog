import { SignUp } from "@clerk/react-router";

const Registerpage = () => {
    return (
        <div className="flex-center w-full h-[calc(100vh-80px)]">
            <SignUp signInUrl="/login" />
        </div>
    );
};

export default Registerpage;
