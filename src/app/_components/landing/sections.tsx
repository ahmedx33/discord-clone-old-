import Call from "./sections/call";
import Channels from "./sections/channels";
import Download from "./sections/download";
import Hang from "./sections/hang";
import Home from "./sections/home";
import Invite from "./sections/invite";

export default function Sections() {
	return (
		<div className="min-h-screen">
			<Home />
			<Invite />
			<Hang />
			<Channels />
			<Call />
			<Download />
		</div>
	);
}
