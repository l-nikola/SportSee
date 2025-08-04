import SidebarButton from "../SidebarButton";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div>
        <SidebarButton icon={"/icons/meditation.svg"} />
        <SidebarButton icon={"/icons/swimming.svg"} />
        <SidebarButton icon={"/icons/bike.svg"} />
        <SidebarButton icon={"/icons/dumbbell.svg"} />
      </div>
      <span>Copiryght, SportSee 2020</span>
    </aside>
  );
}
