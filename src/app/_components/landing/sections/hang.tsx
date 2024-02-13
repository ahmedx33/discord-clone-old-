import Image from "next/image";

export default function Hang() {
	return (
		<section className="w-full  h-[40rem] relative py-24 bg-[#F6F6F6]">
			<div className="container px-40 mx-auto flex justify-between">
				<div className="flex gap-2 w-96 flex-col h-full items-start pt-16">
					<h1 className="text-4xl font-bold mb-3">
						Where hanging out is easy
					</h1>
					<p>
						Grab a seat in a voice channel when you’re free.
						Friends in your server can see you’re around and
						instantly pop in to talk without having to call.
					</p>
				</div>
				<Image
					width={600}
					height={600}
					src="/sections/hang.svg"
					alt="invite"
				/>
			</div>
		</section>
	);
}
