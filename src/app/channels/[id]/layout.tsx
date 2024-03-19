import SideBarInfo from "../_components/sidebar/SideBarInfo";

export default function layout({ params: { id }, children }: { params: { id: string }; children: string }) {
    return (
        <div className="flex w-full overflow-hidden">
            <SideBarInfo serverId={id} />
            {children}
            <div id="sidebar"></div>
        </div>
    );
}
