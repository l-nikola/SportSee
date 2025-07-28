import SidebarButton from "../SidebarButton";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div>
        <SidebarButton icon={"public/icons/meditation.svg"} />
        <SidebarButton icon={"public/icons/swimming.svg"} />
        <SidebarButton icon={"public/icons/bike.svg"} />
        <SidebarButton icon={"public/icons/dumbbell.svg"} />
      </div>
      <span>Copiryght, SportSee 2020</span>
    </aside>
  );
}
