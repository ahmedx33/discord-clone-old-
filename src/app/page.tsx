import Footer from "./_components/footer/footer";
import Header from "./_components/header/header";
import Sections from "./_components/landing/sections";

export default function Home() {
    return (
        <div className="min-h-screen w-full">
            <Header />
            <Sections />
            <Footer />
        </div>
    );
}
