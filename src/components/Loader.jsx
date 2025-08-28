import { ScaleLoader } from "react-spinners";
const Loader = () => {
    return (
        <div className="flex justify-center items-center min-h-[calc(100vh-116px)]">
            <ScaleLoader color="#e516e1"></ScaleLoader>
        </div>
    );
};

export default Loader;