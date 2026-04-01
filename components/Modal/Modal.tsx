"use client";
import { useRouter } from "next/navigation";

interface ModalProps {
  children: React.ReactNode;
}

function Modal({ children }: ModalProps) {
  const router = useRouter();

  const handleClick = () => {
    router.back();
  };

  return (
    <div>
      {children}
      <button onClick={handleClick}>Close</button>
    </div>
  );
}

export default Modal;
