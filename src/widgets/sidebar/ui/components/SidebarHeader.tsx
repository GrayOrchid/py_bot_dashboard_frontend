import { X } from 'lucide-react';
import type { SidebarHeaderProps } from '../../model/types';
import { Logo } from '@/shared/ui';

 const SidebarHeader = ({ onClose, closeRef }: SidebarHeaderProps) => (
  <div className="sidebar__top">
    <Logo/>
    <button ref={closeRef} className="sidebar__close-btn" onClick={onClose}>
      <X size={24} />
    </button>
  </div>
);

export default SidebarHeader