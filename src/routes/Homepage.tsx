import BreadCrumb from "../components/base/BreadCrumb";
import SlideUpButton from "../components/base/slideUpButton";
import Categories from "../components/Categories";
import FeaturedPosts from "../components/FeaturedPosts";
import PostList from "../components/PostList";

const Homepage = () => {
    return (
        <div className="flex-gap-4 flex-col !items-start ">
            <BreadCrumb />
            <div className="flex-between gap-4">
                <div>
                    <h1 className="primary-text">
                        Rapidly build modern websites without ever leaving your
                        HTML.
                    </h1>
                    <p className="secondary-text mt-8">
                        Tailwind is unapologetically modern, and takes advantage
                        of all the latest and greatest CSS features to make the
                        developer experience as enjoyable as possible.
                    </p>
                </div>
                <SlideUpButton />
            </div>
            <Categories />
            <FeaturedPosts />
            <PostList />
        </div>
    );
};

export default Homepage;
