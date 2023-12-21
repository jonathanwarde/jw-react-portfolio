import GetBlogPosts from "../GetBlogPosts";

const Blog = (props) => {
    return (
        <div>
            <h2 className="h3">Bits n Bobs</h2>
            <p>Record keeping, notes and scribbles relating to solutions, technologies and techniques that I am interested in or have been working with.</p>
            <GetBlogPosts />
        </div>
    );
};

export default Blog;
