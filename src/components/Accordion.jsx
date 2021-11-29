import React, { useRef, useEffect } from 'react';
import ArrowDown from "@/assets/images/arrow-down.png"
export default function Accordion({ items, titleKey, contentKey }) {
  const [activeIndex, setActiveIndex] = React.useState(null);

  const onOpen = (index) => {
    setActiveIndex((currIndex) => (currIndex === index ? null : index));
  };

  return (
    <div className='accordion'>
      {items.map((item, index) => (
        <AccordionItem
          title={item[titleKey]}
          content={item[contentKey]}
          key={index}
          id={index}
          isActive={index === activeIndex}
          onOpen={onOpen}
        />
      ))}
    </div>
  );
}

function AccordionItem({ id, title, content, isActive, onOpen, contentBottomPadding = 40 }) {
  const ref = useRef(null);

  return (
    <div  onClick={() => onOpen(id)} className={`accordion__item ${isActive ? 'accordion__item--active' : ''}`}>
      <div  style={{display:"flex", justifyContent:"space-between", alignItems:"center", marginTop:"10px",marginBottom:"10px"}}>
      <div className='accordion__title'>
        {title}
      </div>
      <img src={ArrowDown} alt="arrow-down"  />
      </div>
      <div
        ref={ref}
        style={{ height: isActive ? ref.current.scrollHeight + contentBottomPadding : 0 }}
        className={`accordion__content ${isActive ? 'accordion__content--active' : ''}`}
      >
        {content}
      </div>
    </div>
  );
}
