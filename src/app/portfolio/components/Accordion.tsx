// Accordion.tsx
import React, { useState, useRef } from "react";
import AccordionMenu from "./AccordionMenu";
import styles from "./Accordion.module.css";
import GlobalNomad from "./PortfolioDetail/GlobalNomad";
import Rolling from "./PortfolioDetail/Rolling";
import Whyne from "./PortfolioDetail/WHYNE";
import With from "./PortfolioDetail/With";
import { PortfolioProps } from "../PortfolioData";

type AccordionProps = {
  items: PortfolioProps[];
};

const componentMap: Record<string, React.ReactElement> = {
  GlobalNomad: <GlobalNomad />,
  Rolling: <Rolling />,
  WHYNE: <Whyne />,
  With: <With />,
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
            {componentMap[item.id] ?? <p>준비 중입니다.</p>}
          </div>
        </AccordionMenu>
      ))}
    </div>
  );
};

export default Accordion;
