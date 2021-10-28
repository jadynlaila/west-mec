import React from "react";
import { useAppContext } from "../util/context";
import { FaBars } from "react-icons/fa";

const SidebarButton = () => {
  const { openSidebar } = useAppContext();
  return (
    <button onClick={openSidebar} className="sidebar-toggle">
      <FaBars />
    </button>
  );
};

export default SidebarButton;


