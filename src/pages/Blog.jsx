import GetBlogPosts from "../GetBlogPosts";

const Blog = (props) => {
    return (
        <div>
            <h2 className="h3">Blog</h2>
            <p>Much more of a record keeping excersise for solutions, technologies and techniques that I am interested in or have worked with than a blog.</p>
            <p><strong>Browse by tag</strong></p>
            <GetBlogPosts />
        </div>
    );
};

export default Blog;
