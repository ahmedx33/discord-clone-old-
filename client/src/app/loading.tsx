export default function loading() {
    return (
        <div className="w-full h-screen bg-[#1E1F22] flex items-center justify-center text-white">
            <video muted loop autoPlay width="300px" height="300px">
                <source src="spinner.webm" type="video/webm" />
            </video>
        </div>
    );
}
