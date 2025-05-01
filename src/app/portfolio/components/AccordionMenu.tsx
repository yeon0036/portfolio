import React, { forwardRef } from "react";
import styles from "./Accordion.module.css";

type AccordionMenuProps = {
  title: string;
  isOpen: boolean;
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
};

const AccordionMenu = forwardRef<HTMLDivElement, AccordionMenuProps>(
  ({ title, isOpen, onClick, children, className }, ref) => {
    return (
      <div ref={ref} className={`${className}`}>
        <div className={styles.menu} onClick={onClick}>
          <p className={styles.title}>{title}</p>
          <span>{isOpen ? "-" : "+"}</span>
        </div>
        {isOpen && <div>{children}</div>}
      </div>
    );
  }
);

AccordionMenu.displayName = "AccordionMenu";

export default AccordionMenu;
