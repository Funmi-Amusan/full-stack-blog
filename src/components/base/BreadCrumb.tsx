import React from "react";
import { Link } from "react-router";

const BreadCrumb = () => {
    return (
        <div className="flex-gap-4">
            <Link to="/">Home</Link>
            <span>.</span>
            <span>Blogs and Articles</span>
        </div>
    );
};

export default BreadCrumb;
