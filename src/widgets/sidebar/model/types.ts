import type { RefObject } from "react";

export interface SidebarHeaderProps {
  onClose: () => void;
  closeRef: RefObject<HTMLButtonElement | null>;
}