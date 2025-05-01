import React, { useState, useRef } from "react";
import GlobalNomad from "./PortfolioDetail/GlobalNomad";
import Rolling from "./PortfolioDetail/Rolling";
import Whyne from "./PortfolioDetail/WHYNE";
import AccordionMenu from "./AccordionMenu";
import styles from "./Accordion.module.css";

const Accordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleToggle = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));

    setTimeout(() => {
      itemRefs.current[index]?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 0);
  };

  const items = [
    { title: "GlobalNomad", content: <GlobalNomad /> },
    { title: "Rolling", content: <Rolling /> },
    { title: "WHYNE", content: <Whyne /> },
  ];

  return (
    <div>
      {items.map((item, index) => (
        <AccordionMenu
          key={index}
          title={item.title}
          isOpen={openIndex === index}
          onClick={() => handleToggle(index)}
          ref={(el: HTMLDivElement | null) => {
            itemRefs.current[index] = el;
          }}
        >
          <div className={styles.container}>{item.content}</div>
        </AccordionMenu>
      ))}
    </div>
  );
};

export default Accordion;
