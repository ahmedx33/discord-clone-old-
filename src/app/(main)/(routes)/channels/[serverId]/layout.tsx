import SideBarInfo from "../_components/sidebar/SideBarInfo";

export default function layout({ params: { serverId }, children }: { params: { serverId: string }; children: string }) {
    return (
        <div className="flex w-full overflow-hidden">
            <SideBarInfo serverId={serverId} />
            {children}
            <div id="sidebar"></div>
        </div>
    );
}
