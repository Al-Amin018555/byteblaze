import toast from "react-hot-toast";

export const getBlogs = () => {
    let blogs = [];
    const storedBlogs = localStorage.getItem('blogs');
    if (storedBlogs) {
        blogs = JSON.parse(storedBlogs);
    }
    return blogs;
}

//save
export const savedBlog = (blog) => {
    let blogs = getBlogs();
    const isExist = blogs.find(b => b.id === blog.id);
    if (isExist) {
        return toast.error("Already Bookmarked!");
    }
    blogs.push(blog);
    localStorage.setItem('blogs', JSON.stringify(blogs));
    toast.success('Blog Bookmarked Successfully!')
}