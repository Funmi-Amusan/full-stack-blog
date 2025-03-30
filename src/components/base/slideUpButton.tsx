const SlideUpButton = () => {
    return (
        <button className="cursor-pointer group relative bg-accent text-white font-semibold text-lg px-6 py-3 rounded-full transition-all duration-200 ease-in-out shadow hover:shadow-lg w-fit h-16 flex-nowrap ">
            <div className="relative flex items-center justify-center gap-2">
                <span className="relative inline-block overflow-hidden">
                    <span className="block whitespace-nowrap transition-transform duration-300 group-hover:-translate-y-full">
                        Start Writing
                    </span>
                    <span className="absolute whitespace-nowrap inset-0 transition-transform duration-300 translate-y-full group-hover:translate-y-0">
                        Right Now
                    </span>
                </span>
                <svg
                    className="w-4 h-4 transition-transform duration-200 group-hover:rotate-45"
                    viewBox="0 0 24 24"
                >
                    <circle fill="none" r={11} cy={12} cx={12} />
                    <path
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth={2}
                        stroke="white"
                        d="M7.5 16.5L16.5 7.5M16.5 7.5H10.5M16.5 7.5V13.5"
                    />
                </svg>
            </div>
        </button>
    );
};

export default SlideUpButton;
