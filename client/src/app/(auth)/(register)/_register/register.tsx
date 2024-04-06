import Image from "next/image";
import RegisterForm from "./_components/register-form";

interface RegisterPageInterface {
    goBackBtn?: boolean
}

export default function RegisterPage({ goBackBtn }: RegisterPageInterface) {
    return (
        <div className="select-none">
            <Image
                src="/svgs/loginSvgs/background.svg"
                draggable="false"
                fill
                alt="background"
            />
            <div className="z-[99] w-full h-screen flex items-center justify-center">
                <RegisterForm goBackButton={goBackBtn} />
            </div>
        </div>
    )
}
