import Image from "next/image";

export default function Invite() {
	return (
		<section className="w-full  h-[40rem] relative py-24">
			<div className="container px-40 mx-auto flex justify-between">
				<Image
					width={600}
					height={600}
					src="/sections/invite.svg"
					alt="invite"
				/>
				<div className="flex gap-2 w-96 flex-col h-full items-start pt-16">
					<h1 className="text-4xl font-bold mb-3">
						Create an invite-only place where you belong
					</h1>
					<p>
						Discord servers are organized into topic-based
						channels where you can collaborate, share, and
						just talk about your day without clogging up a
						group chat.
					</p>
				</div>
			</div>
		</section>
	);
}
