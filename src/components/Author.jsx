import { useLoaderData } from "react-router-dom";

const Author = () => {
     const blog = useLoaderData();
     const {cover_image,title,description,published_at,user} = blog;
    return (
        <div>
            <h1>{user.name}</h1>            
        </div>
    );
};

export default Author;