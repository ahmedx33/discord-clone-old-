import ChannelsList from "../_components/nav/ChannelsList";
import InfoNav from "../_components/nav/InfoNav";

export default function page() {

    return (
        <div className="flex items-center">
            <ChannelsList />
            <InfoNav />
        </div>
    );
}
