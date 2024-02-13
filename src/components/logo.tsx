import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { ComponentPropsWithoutRef } from "react";

export default function Logo({ ...restProps }: ComponentPropsWithoutRef<"a">) {
	return (
		<Link
			{...restProps}
			href="/"
			className={cn(
				"flex items-center gap-2 font-bold",
				restProps.className,
			)}
		>
			<Image
				src="/svgs/discord.svg"
				width={30}
				height={30}
				alt="Discord"
				draggable="false"
			/>
			Discord
		</Link>
	);
}
