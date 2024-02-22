import SideBarInfo from "../_components/sidebar/SideBarInfo";


export default function layout({ params: { id }, children }: { params: { id: string }; children: string }) {
      return (
            <div className="flex">
                  <SideBarInfo serverId={id} />
                  {children}
            </div>
      );
}
