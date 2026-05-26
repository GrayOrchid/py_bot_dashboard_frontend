import { useRef, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import { useClickOutside, useHotkeys } from '@/shared/lib/hooks';
import type { ModalProps } from '../types/model';
import './modal.scss';
import { modalVariants, overlayVariants } from '../configs/animations';

const Modal = (props: ModalProps) => {
  const { className, children, isOpen, onClose, withOverlay = true } = props;

  const contentRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  // Передаем contentRef. Хук будет следить за кликами вне этого контейнера.
  useClickOutside(contentRef, () => {
    if (isOpen && onClose) onClose();
  });

  const hotkeyConfig = useMemo(() => [
    { key: 'Escape', ref: closeBtnRef }
  ], []);

  useHotkeys(hotkeyConfig, isOpen);

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={clsx('modal', { 'with-overlay': withOverlay }, className)}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={overlayVariants}
        >
          <motion.div
            ref={contentRef} // Привязываем реф к контенту
            className="modal-content"
            variants={modalVariants}
          >
            <button
              ref={closeBtnRef}
              onClick={onClose}
              style={{ display: 'none' }}
              aria-hidden="true"
              tabIndex={-1}
            />
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default Modal;