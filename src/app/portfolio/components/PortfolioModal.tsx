"use client";

import { useEffect } from "react";
import CloseButton from "@/components/CloseButton/CloseButton";
import styles from "./PortfolioModal.module.css";

interface Props {
  onClose: () => void;
  children: React.ReactNode;
}

export default function PortfolioModal({ onClose, children }: Props) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div
      className={styles.overlay}
      onClick={() => {
        onClose();
      }}
    >
      <div className={styles.modal}>
        <CloseButton className={styles.closeBtn} onClick={onClose} />
        <div className={styles.modalContent}>{children} </div>
      </div>
    </div>
  );
}
