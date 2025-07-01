import React, { forwardRef } from "react";
import Image from "next/image";
import styles from "./Accordion.module.css";

type AccordionMenuProps = {
  thumbnail: string;
  title: string;
  intro: string;
  isOpen: boolean;
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
};

const AccordionMenu = forwardRef<HTMLDivElement, AccordionMenuProps>(
  ({ thumbnail, title, intro, isOpen, onClick, children, className }, ref) => {
    return (
      <div ref={ref} className={`${className}`}>
        <div className={styles.menuBar} onClick={onClick}>
          <div className={styles.infoSection}>
            <Image
              src={thumbnail}
              alt={`${title} 썸네일`}
              width={80}
              height={80}
            />
            <div className={styles.titleSection}>
              <p className={styles.title}>{title}</p>
              <p className={styles.intro}>{intro}</p>
            </div>
          </div>
          <span>{isOpen ? "-" : "+"}</span>
        </div>
        {isOpen && <div>{children}</div>}
      </div>
    );
  }
);

AccordionMenu.displayName = "AccordionMenu";

export default AccordionMenu;
