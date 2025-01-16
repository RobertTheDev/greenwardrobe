import { useState } from 'react';
import faqs from './faqs';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mx-auto max-w-2xl p-4">
      <h2 className="mb-6 text-center text-2xl font-bold">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-200 pb-2">
            <button
              onClick={() => toggleFAQ(index)}
              className="flex w-full items-center justify-between text-left text-lg font-medium text-gray-800 focus:outline-none"
            >
              {faq.question}
              <span className="text-gray-500">
                {openIndex === index ? '-' : '+'}
              </span>
            </button>
            {openIndex === index && (
              <p className="mt-2 text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
