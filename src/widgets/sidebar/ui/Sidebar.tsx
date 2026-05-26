import './sidebar.scss'
import { useClickOutside, useHotkeys } from "@/shared/lib/hooks";
import { Menu } from "lucide-react";
import { useRef, useState } from "react";
import { SidebarFooter, SidebarHeader, SidebarServices, SidebarUser } from "./components";

 const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef<HTMLElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  const close = () => {
    setIsOpen(false);
    if (document.activeElement instanceof HTMLElement) document.activeElement.blur();
  };

  useClickOutside(sidebarRef, close);
  useHotkeys([{ key: 'Escape', ref: closeBtnRef }], isOpen);

  return (
    <>
      <button className={`sidebar-trigger ${isOpen ? 'hidden' : ''}`} onClick={() => setIsOpen(true)}>
        <Menu size={24} />
      </button>
      <div className={`sidebar-backdrop ${isOpen ? 'active' : ''}`} onClick={close} />
      <aside ref={sidebarRef} className={`sidebar ${isOpen ? 'open' : ''}`}>
        <SidebarHeader onClose={close} closeRef={closeBtnRef} />
        <div className="sidebar__inner">
          <div className="sidebar__main">
            <SidebarUser />
            <SidebarServices />
          </div>
          <SidebarFooter />
        </div>
      </aside>
    </>
  );
};

export default Sidebar



