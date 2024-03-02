import Image from "next/image";
import LoginForm from "./_compoenents/LoginForm";

export default async function Page() {
    return (
        <div className="select-none">
            <Image src="/svgs/loginSvgs/background.svg" draggable="false" fill alt="background" />
            <div className="relative w-full h-screen flex items-center justify-center">
                <LoginForm />
            </div>
        </div>
    );
}
