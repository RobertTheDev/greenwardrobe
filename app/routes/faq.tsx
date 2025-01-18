import { MetaFunction } from '@remix-run/react';
import { useRef, useState } from 'react';
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

interface FaqProps {
  q: string;
  a: string;
}

interface FaqsCardProps {
  faqsList: FaqProps;
  idx: number;
}

const FaqsCard = ({ faqsList, idx }: FaqsCardProps) => {
  const answerElRef = useRef<HTMLDivElement | null>(null);
  const [state, setState] = useState(false);
  const [answerH, setAnswerH] = useState('0px');

  const handleOpenAnswer = () => {
    if (answerElRef.current) {
      const answerElH = answerElRef.current.childNodes[0] as HTMLElement;
      const height = answerElH.offsetHeight;
      setState(!state);
      setAnswerH(`${height + 20}px`);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      handleOpenAnswer();
    }
  };

  return (
    <div
      className="mt-5 space-y-3 overflow-hidden border-b"
      key={idx}
      role="button"
      tabIndex={0}
      onClick={handleOpenAnswer}
      onKeyDown={handleKeyDown}
    >
      <h4 className="flex cursor-pointer items-center justify-between pb-5 text-lg font-medium text-gray-700">
        {faqsList.q}
        {state ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ml-2 h-5 w-5 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M20 12H4"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ml-2 h-5 w-5 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
        )}
      </h4>
      <div
        ref={answerElRef}
        className="duration-300"
        style={state ? { height: answerH } : { height: '0px' }}
      >
        <div>
          <p className="text-gray-500">{faqsList.a}</p>
        </div>
      </div>
    </div>
  );
};

export default function FaqComponent() {
  const faqsList = [
    {
      q: 'What are some random questions to ask?',
      a: "That's exactly the reason we created this random question generator. There are hundreds of random questions to choose from so you're able to find the perfect random question.",
    },
    {
      q: 'Do you include common questions?',
      a: "This generator doesn't include most common questions. The thought is that you can come up with common questions on your own so most of the questions in this generator.",
    },
    {
      q: 'Can I use this for 21 questions?',
      a: "Yes! there are two ways that you can use this question generator depending on what you're after. You can indicate that you want 21 questions generated.",
    },
    {
      q: 'Are these questions for girls or for boys?',
      a: 'The questions in this generator are gender neutral and can be used to ask either male of females (or any other gender the person identifies with).',
    },
    {
      q: 'What do you wish you had more talent doing?',
      a: "If you've been searching for a way to get random questions, you've landed on the correct webpage. We created the Random Question Generator to ask you as many random questions as your heart desires.",
    },
  ];

  return (
    <section className="mx-auto mt-12 max-w-screen-xl px-4 leading-relaxed md:px-8">
      <div className="space-y-3 text-center">
        <h1 className="text-3xl font-semibold text-gray-800">
          Frequently Asked Questions
        </h1>
        <p className="mx-auto max-w-lg text-lg text-gray-600">
          Answered all frequently asked questions, Still confused? feel free to
          contact us.
        </p>
      </div>
      <div className="mx-auto mt-14 max-w-2xl">
        {faqsList.map((item, idx) => (
          <FaqsCard key={item.q} idx={idx} faqsList={item} />
        ))}
      </div>
    </section>
  );
}
