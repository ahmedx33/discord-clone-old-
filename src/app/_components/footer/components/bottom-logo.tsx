import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";

export default function BottomLogo() {
    return <div className="w-full h-1/6 pt-6 flex items-center justify-between">
        <Logo className="text-white" />
        <Button>login</Button>
    </div>
}
