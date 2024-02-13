import { Button } from "@/components/ui/button";
import { DownloadIcon } from "lucide-react";

export default function Download() {
	return (
		<section className="w-full h-[15rem] flex items-center justify-center flex-col gap-4">
			<h1 className="text-4xl font-semibold mb-6">
				Ready to start the journey?
			</h1>
			<Button>
				<DownloadIcon className="mr-2" size="16" />
				download for windows
			</Button>
		</section>
	);
}
