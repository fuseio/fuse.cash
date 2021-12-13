import React, { useRef, useEffect } from 'react';
import ArrowDown from "@/assets/images/arrow-down.png"
import ArrowUp from "@/assets/images/arrow-up.png"
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
          link={item.link}
          extraAns={item.extraAns}
          key={index}
          id={index}
          isActive={index === activeIndex}
          onOpen={onOpen}
        />
      ))}
    </div>
  );
}

function AccordionItem({ id, title, content, isActive, onOpen, contentBottomPadding = 40, link, extraAns }) {
  const ref = useRef(null);

  return (
    <div  onClick={() => onOpen(id)} className={`accordion__item ${isActive ? 'accordion__item--active' : ''}`}>
      <div  style={{display:"flex", justifyContent:"space-between", alignItems:"center", marginTop:"10px",marginBottom:"10px"}}>
      <div className='accordion__title'>
        {title}
      </div>
      {isActive ?  (<img src={ArrowUp} alt="arrow-down"/>) : (<img src={ArrowDown} alt="arrow-down"/>) }
      </div>
      <div
        ref={ref}
        style={{ height: isActive ? ref.current.scrollHeight + contentBottomPadding : 0 }}
        className={`accordion__content ${isActive ? 'accordion__content--active' : ''}`}
      >
        {content}
        {extraAns ? (<div><br/> <br/></div>) :("")}
        {extraAns}  
        <br/> 
         <a  href={link} target="_blank">learn more ></a>
      </div>
    </div>
  );
}
