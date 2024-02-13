import Image from "next/image";

export default function Call() {
	return (
		<section className="w-full h-[50rem] relative py-12">
			<div className="container px-40 mx-auto flex flex-col gap-2 items-center">
				<h1 className="text-5xl font-bold mb-2">
					RELIABLE TECH FOR STAYING CLOSE
				</h1>
				<p className="text-center">
					Low-latency voice and video feels like you’re in the
					same room. Wave hello over video, watch friends stream
					their games, or gather up and have a drawing session
					with screen share.
				</p>
				<Image
					src="/sections/call.svg"
					alt="call"
					width={3000}
					height={3000}
				/>
			</div>
		</section>
	);
}
