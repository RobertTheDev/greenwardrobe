import FaqAccordion from './FaqAccordion';
import faqsList from './faqsList';

export default function FaqGroup() {
  return (
    <div className="accordion-group" data-accordion="default-accordion">
      {faqsList.map((props, index) => (
        <FaqAccordion props={props} key={index} />
      ))}
    </div>
  );
}
