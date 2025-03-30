import React from "react";
import { Link } from "react-router";

const Categories = () => {
    return (
        <div className=" hidden md:flex w-full flex gap-4 bg-white rounded-3xl xl:rounded-full p-4 shadow-md items-center justify-center">
            <div className="flex-1 flex-between">
                <Link
                    className="bg-accent py-2 px-3 text-white rounded-full"
                    to="/"
                >
                    All posts
                </Link>
                <Link
                    className=" hover:bg-gray-100 py-2 px-3 text-black rounded-full"
                    to="/"
                >
                    Work
                </Link>
                <Link
                    className="hover:bg-gray-100 py-2 px-3 text-black rounded-full"
                    to="/"
                >
                    Rants
                </Link>
                <Link
                    className="hover:bg-gray-100 py-2 px-3 text-black rounded-full"
                    to="/"
                >
                    Random
                </Link>
                <Link
                    className="hover:bg-gray-100 py-2 px-3 text-black rounded-full"
                    to="/"
                >
                    Decisions
                </Link>
            </div>
            <span className=" text-black font-medium">|</span>
            <div>
                <input
                    className="bg-gray-100 rounded-full px-4 py-2 focus:outline-none focus:border-transparent"
                    type="text"
                    placeholder="Search"
                />
            </div>
        </div>
    );
};

export default Categories;
