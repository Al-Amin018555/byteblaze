const EmptyState = ({ message, address, label }) => {
    return (
        <div className="flex flex-col min-h-[calc(100vh-116px)] justify-center pb-16 gap-5 items-center">
            <p className="text-gray-400 text-2xl lg:text-4xl ">{message}</p>
            <a href={address} className="relative inline-block px-4 py-2 font-medium group">
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white border-2 border-secondary group-hover:bg-primary"></span>
                <span className="relative text-black group-hover:text-white">{label}</span>
            </a>
        </div>
    );
};

export default EmptyState;