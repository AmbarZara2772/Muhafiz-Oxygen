import AccordionItem from "./AccordionItem";

export default function Accordion({ items }) {
  return (
    <div className="space-y-2" role="tablist" aria-multiselectable="true">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          id={`accordion-item-${index}`}
          title={item.question}
          type={item.answer_type}
          content={item.answer_content}
        />
      ))}
    </div>
  );
}
