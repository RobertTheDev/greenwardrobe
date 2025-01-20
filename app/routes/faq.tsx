import { MetaFunction } from '@remix-run/react';
import {
  generateMetaDescription,
  generateMetaTitle,
} from '~/utils/generateMetaHandlers';

export const meta: MetaFunction = () => {
  return [
    { title: generateMetaTitle('Frequently Asked Questions') },
    {
      name: 'description',
      content: generateMetaDescription(),
    },
  ];
};

export default function FaqComponent() {
  const faqsList = [
    {
      id: '1',
      q: 'What are some random questions to ask?',
      a: "That's exactly the reason we created this random question generator. There are hundreds of random questions to choose from so you're able to find the perfect random question.",
    },
    {
      id: '2',
      q: 'Do you include common questions?',
      a: "This generator doesn't include most common questions. The thought is that you can come up with common questions on your own so most of the questions in this generator.",
    },
    {
      id: '3',
      q: 'Can I use this for 21 questions?',
      a: "Yes! there are two ways that you can use this question generator depending on what you're after. You can indicate that you want 21 questions generated.",
    },
    {
      id: '4',
      q: 'Are these questions for girls or for boys?',
      a: 'The questions in this generator are gender neutral and can be used to ask either male of females (or any other gender the person identifies with).',
    },
    {
      id: '5',
      q: 'What do you wish you had more talent doing?',
      a: "If you've been searching for a way to get random questions, you've landed on the correct webpage. We created the Random Question Generator to ask you as many random questions as your heart desires.",
    },
  ];

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center gap-12 lg:flex-row lg:justify-between xl:gap-24">
          <div className="w-full lg:w-2/5">
            <div className="mb-16">
              <h6 className="mb-1 text-center text-base font-medium uppercase text-indigo-600 lg:text-left">
                MOST ASKED QUESTIONS
              </h6>
              <h2 className="mb-4 text-center text-4xl font-bold leading-[3.25rem] text-gray-900 lg:text-left">
                FAQs
              </h2>
              <p className="mb-7 text-center text-gray-500 lg:text-left">
                Trusted In More Than 100 Countries And 5 Million Customers.
                Transact Easily And Quickly With Just One Click.
              </p>
              <img
                src="https://pagedone.io/asset/uploads/1696231386.png"
                alt="Faq tailwind section"
                className="mx-auto rounded-2xl object-cover lg:mx-0"
              />
            </div>
          </div>
          <div className="w-full lg:w-3/5">
            <div className="accordion-group" data-accordion="default-accordion">
              {faqsList.map((faq) => (
                <div
                  key={faq.id}
                  className="accordion accordion-active:bg-indigo-50 accordion-active:border-indigo-600 mb-8 rounded-xl border border-solid border-gray-300 p-4 lg:p-4"
                  id="basic-heading-six-with-icon"
                >
                  <button
                    className="accordion-toggle accordion-active:font-medium accordion-active:text-indigo-600 group inline-flex w-full items-center justify-between text-left text-base font-normal leading-8 text-gray-900 transition duration-500 hover:text-indigo-600"
                    aria-controls="basic-collapse-six-with-icon"
                  >
                    <h5>{faq.q}</h5>
                    <svg
                      className="accordion-active:text-indigo-600 accordion-active:hidden block h-6 w-6 text-gray-900 transition duration-500 group-hover:text-indigo-600"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 12H18M12 18V6"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <svg
                      className="accordion-active:text-indigo-600 accordion-active:block hidden h-6 w-6 text-gray-900 transition duration-500 group-hover:text-indigo-600"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 12H18"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </button>
                  <div
                    id="basic-collapse-six-with-icon"
                    className="accordion-content w-full overflow-hidden pr-4"
                    aria-labelledby="basic-heading-six"
                  >
                    <p className="text-base leading-6 text-gray-900">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
