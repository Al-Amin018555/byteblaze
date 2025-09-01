import { useEffect, useState } from "react";
import { getBlogs } from "../Utils";
import BlogCard from "../components/BlogCard";

const Bookmarks = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        const storedBlogs = getBlogs();
        setBlogs(storedBlogs);
    }, [])
    return (
        <div className="grid gap-6 container mx-auto px-4 sm:px-8 lg:px-40 grid-cols-1 py-8 sm:grid-cols-2 lg:grid-cols-3">
            {
                blogs.map(blog => <BlogCard blog={blog} key={blog.id}></BlogCard>)
            }
        </div>
    );
};

export default Bookmarks;