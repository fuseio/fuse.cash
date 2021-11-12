import React, { useRef, useEffect } from 'react';

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
    <div className={`accordion__item ${isActive ? 'accordion__item--active' : ''}`}>
      <div className='accordion__title' onClick={() => onOpen(id)}>
        {title}
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
