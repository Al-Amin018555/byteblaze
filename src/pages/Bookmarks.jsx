import { useEffect, useState } from "react";
import { deleteBlog, getBlogs } from "../Utils";
import BlogCard from "../components/BlogCard";
import EmptyState from "../components/EmptyState";

const Bookmarks = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const storedBlogs = getBlogs();
        setBlogs(storedBlogs);
    }, [])

    const handleDelete = (id) => {
        deleteBlog(id);
        const remainingBlogs = getBlogs();
        setBlogs(remainingBlogs);
    }

    if (blogs.length < 1) return <EmptyState message="No Bookmarks Available!" address='/blogs' label='Go to Blogs'></EmptyState>

    return (
        <div className="grid gap-8 container mx-auto px-4 sm:px-8 lg:px-34 grid-cols-1 py-8 sm:grid-cols-2 lg:grid-cols-3">
            {
                blogs.map(blog => <BlogCard handleDelete={handleDelete} deletable={true} blog={blog} key={blog.id}></BlogCard>)
            }
        </div>
    );
};

export default Bookmarks;