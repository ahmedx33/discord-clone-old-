import Image from "next/image";

export default function Channels() {
	return (
		<section className="w-full  h-[40rem] relative py-24">
			<div className="container px-40 mx-auto flex justify-between">
				<Image
					width={600}
					height={600}
					src="/sections/channels.svg"
					alt="invite"
				/>
				<div className="flex gap-2 w-96 flex-col h-full items-start pt-16">
					<h1 className="text-4xl font-bold mb-3">
						From few to a fandom
					</h1>
					<p>
						Get any community running with moderation tools
						and custom member access. Give members special
						powers, set up private channels, and more.
					</p>
				</div>
			</div>
		</section>
	);
}
