import { posts } from "../../data";
import Image from "./base/Image";

const FeaturedPosts = () => {
    return (
        <div className="mt-8 flex flex-col lg:flex-row gap-8">
            {/* First */}
            <div className="w-full lg:w-1/2 flex flex-col gap-4">
                {/* image */}
                {posts[0].img && (
                    <Image
                        path={posts[0].img}
                        className="rounded-3xl object-cover w-full h-96"
                        alt={posts[0].title}
                    />
                )}
                {/* details */}
                <div className="flex items-center gap-4">
                    <h1 className="font-semibold lg:text-lg">01.</h1>
                    <p className="text-blue-800 lg:text-lg">
                        {posts[0].category}
                    </p>
                    <span className="text-gray-500">{posts[0].date}</span>
                </div>
                {/* title */}
                <p className="text-xl lg:text-3xl font-semibold lg:font-bold">
                    {posts[0].title}
                </p>
            </div>
            {/* Others */}
            <div className="w-full lg:w-1/2 flex flex-col gap-4">
                {/* second */}
                {posts[1] && (
                    <div className="lg:h-1/3 flex justify-between gap-4">
                        {posts[1].img && (
                            <div className="w-1/3 aspect-video">
                                <Image
                                    path={posts[1].img}
                                    alt={posts[1].title}
                                    className="rounded-3xl object-cover w-full h-full"
                                />
                            </div>
                        )}
                        {/* details and title */}
                        <div className="w-2/3">
                            {/* details */}
                            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
                                <h1 className="font-semibold">02.</h1>
                                <p className="text-blue-800">
                                    {posts[1].category}
                                </p>
                                <span className="text-gray-500 text-sm">
                                    {posts[1].date}
                                </span>
                            </div>
                            {/* title */}
                            <p className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium">
                                {posts[1].title}
                            </p>
                        </div>
                    </div>
                )}
                {/* third */}
                {posts[2] && (
                    <div className="lg:h-1/3 flex justify-between gap-4">
                        {posts[2].img && (
                            <div className="w-1/3 aspect-video">
                                <Image
                                    path={posts[2].img}
                                    className="rounded-3xl object-cover w-full h-full"
                                    alt={posts[2].title}
                                />
                            </div>
                        )}
                        {/* details and title */}
                        <div className="w-2/3">
                            {/* details */}
                            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
                                <h1 className="font-semibold">02.</h1>
                                <p className="text-blue-800">
                                    {posts[2].category}
                                </p>
                                <span className="text-gray-500 text-sm">
                                    {posts[2].date}
                                </span>
                            </div>
                            {/* title */}
                            <p className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium">
                                {posts[2].title}
                            </p>
                        </div>
                    </div>
                )}
                {/* fourth */}
                {posts[3] && (
                    <div className="lg:h-1/3 flex justify-between gap-4">
                        {posts[3].img && (
                            <div className="w-1/3 aspect-video">
                                <Image
                                    path={posts[3].img}
                                    className="rounded-3xl object-cover w-full h-full"
                                    alt={posts[3].title}
                                />
                            </div>
                        )}
                        <div className="w-2/3">
                            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
                                <h1 className="font-semibold">02.</h1>
                                <p className="text-blue-800">
                                    {posts[3].category}
                                </p>
                                <span className="text-gray-500 text-sm">
                                    {posts[3].date}
                                </span>
                            </div>
                            <p className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium">
                                {posts[3].title}
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default FeaturedPosts;
