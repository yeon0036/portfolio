import React, { useState, useRef } from "react";
import AccordionMenu from "./AccordionMenu";
import styles from "./Accordion.module.css";
import PortfolioDetail from "./FrontedDetail";
import DesignDetail from "./DesignDetail";
import { PortfolioProps } from "./FrontendData";

type AccordionProps = {
  items: PortfolioProps[];
};

const Accordion: React.FC<AccordionProps> = ({ items }) => {
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

  return (
    <div>
      {items.map((item, index) => (
        <AccordionMenu
          key={item.id}
          thumbnail={item.image}
          title={item.title}
          intro={item.intro}
          isOpen={openIndex === index}
          onClick={() => handleToggle(index)}
          ref={(el: HTMLDivElement | null) => {
            itemRefs.current[index] = el;
          }}
        >
          <div className={styles.container}>
            {item.category === "Design" ? (
              <DesignDetail />
            ) : (
              <PortfolioDetail id={item.id} />
            )}
          </div>
        </AccordionMenu>
      ))}
    </div>
  );
};

export default Accordion;
