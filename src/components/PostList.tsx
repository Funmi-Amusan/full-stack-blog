import { posts as allPosts } from "../../data";
import PostListItem from "./PostItem";

const PostList = () => {
    return (
        // <InfiniteScroll
        //     dataLength={allPosts.length}
        //     next={fetchNextPage}
        //     hasMore={!!hasNextPage}
        //     loader={<h4>Loading more posts...</h4>}
        //     endMessage={
        //         <p>
        //             <b>All posts loaded!</b>
        //         </p>
        //     }
        // >
        <div>
            {allPosts.map((post) => (
                <PostListItem key={post._id} />
            ))}
        </div>
    );
    {
        /* </InfiniteScroll> */
    }
};

export default PostList;
