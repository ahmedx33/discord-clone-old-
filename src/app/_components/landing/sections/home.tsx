import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Image from "next/image";

export default function Home() {
	return (
		<section className="w-full h-[40rem] bg-blue relative flex items-center justify-center">
			<LandingImage />
			<div className="flex items-center flex-col w-[45rem] mb-16 z-10">
				<h1 className="font-bold text-6xl uppercase text-white mb-6">
					Image a place...
				</h1>
				<p className="text-center text-white mb-4">
					...where you can belong to a school club, a gaming
					group, or a worldwide art community. Where just you and
					a handful of friends can spend time together. A place
					that makes it easy to talk every day and hang out more
					often.
				</p>
				<div className="flex gap-4 items-center">
					<Button
						variant="white"
						className="w-fit text-xl py-3 h-26 px-6"
					>
						<Download className="mr-2" />
						Download for windows
					</Button>
					<Button className="w-fit text-xl py-3 h-26 px-6">
					Open discord in your browser
					</Button>
				</div>
			</div>
		</section>
	);
}

function LandingImage() {
	return (
		<div className="flex justify-between px-12 h-fit w-full absolute bottom-0">
			<Image
				width={600}
				height={600}
				alt="one"
				src="/sections/landing/1.svg"
				draggable="false"
			/>
			<Image
				width={600}
				height={600}
				alt="2"
				src="/sections/landing/2.svg"
				draggable="false"
			/>
		</div>
	);
}
