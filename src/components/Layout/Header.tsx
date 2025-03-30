import { useState } from "react";
import MobileMenuSwitch from "../base/MobileMenuSwitch";
import Image from "../base/Image";
import { Link } from "react-router";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="flex-between py-4 w-full h-16 md:h-20">
            <div className=" flex-gap-2">
                <Image path="/blog/logo.png" className="w-10 h-10" alt="Logo" />
                <span className=" text-xl font-bold">Logo</span>
            </div>
            <div className="md:hidden">
                <MobileMenuSwitch isOpen={isOpen} setIsOpen={setIsOpen} />
                <div
                    className={
                        `w-full h-screen fixed top-16 pt-10 font-medium z-10 flex flex-col right-0 items-center gap-4 ` +
                        (isOpen ? "translate-x-0" : "translate-x-full")
                    }
                >
                    <Link to="/home">Home </Link>
                    <Link to="/trending">Trending </Link>
                    <Link to="/most-popular">Most Popular </Link>
                    <Link to="/about">About </Link>
                    <a className="btn btn-primary" href="/login">
                        Login 🫰
                    </a>
                </div>
            </div>
            <div className="hidden md:flex flex-gap-4 font-medium">
                <Link to="/home">Home </Link>
                <Link to="/trending">Trending </Link>
                <Link to="/most-popular">Most Popular </Link>
                <Link to="/about">About </Link>

                <SignedOut>
                    <a className="btn btn-primary" href="/login">
                        Login 🫰
                    </a>
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>
        </header>
    );
};

export default Header;
