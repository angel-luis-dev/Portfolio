import { useLockBodyScroll } from '@/hooks/useLockBodyScroll';
import { ReactNode, useEffect } from 'react';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: ReactNode;
  children?: ReactNode;
}

const Modal = ({ open, onClose, title, children }: ModalProps) => {
  // block scroll
  useLockBodyScroll(open);

  // close with Esc
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    // 2. Agregamos el "escuchador" solo si el modal está abierto
    if (open) {
      window.addEventListener('keydown', handleKeyDown);
    }
    // 3. Limpieza: Eliminamos el escuchador cuando el componente se desmonta
    // o cuando isOpen cambia a false para evitar fugas de memoria.
    return () => {
      console.log('Destroy listener');
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="modal-back" onClick={onClose}>
      <div
        className="modal-area"
        onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
      >
        <div className="modal-title">
          <span>{title}</span>
          <button className="modal-close" onClick={onClose}>
            X
          </button>
        </div>
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
