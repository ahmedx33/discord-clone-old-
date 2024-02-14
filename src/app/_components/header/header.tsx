import Logo from "@/components/logo";
import Nav from "./components/nav";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Header() {
    return (
        <header className="w-full h-fit absolute top-0 left-0 z-50">
            <div className="container mx-auto py-5 flex justify-between">
                <Logo className="text-white [&>svg]:fill-white" />
                <Nav />
                <Button asChild>
                    <Link href="/login">login</Link>
                </Button>
            </div>
        </header>
    );
}
