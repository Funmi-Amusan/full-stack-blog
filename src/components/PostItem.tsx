import Image from "./base/Image";
import { post } from "../../data";

const PostListItem = () => {
    return (
        <div className="flex flex-col xl:flex-row gap-8 mb-12">
            {/* image */}
            {post.img && (
                <div className="md:hidden xl:block xl:w-1/3">
                    <Image
                        path={post.img}
                        alt={post.title}
                        className="rounded-2xl object-cover"
                    />
                </div>
            )}
            {/* details */}
            <div className="flex flex-col gap-4 xl:w-2/3">
                <p to={`/${post.title}`} className="text-4xl font-semibold">
                    {post.title}
                </p>
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <span>Written by</span>
                    <p className="text-blue-800">{post.title}</p>
                    <span>on</span>
                    <p className="text-blue-800">{post.category}</p>
                    <span>{post.date}</span>
                </div>
                <p>{post.description}</p>
                <p className="underline text-blue-800 text-sm">Read Mor</p>
            </div>
        </div>
    );
};

export default PostListItem;
