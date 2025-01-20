export default function FaqAccordion({
  props,
}: {
  props: { id: string; q: string; a: string };
}) {
  return (
    <div
      key={props.id}
      className="accordion accordion-active:bg-indigo-50 accordion-active:border-indigo-600 mb-8 rounded-xl border border-solid border-gray-300 p-4 lg:p-4"
      id="basic-heading-six-with-icon"
    >
      <button
        className="accordion-toggle accordion-active:font-medium accordion-active:text-indigo-600 group inline-flex w-full items-center justify-between text-left text-base font-normal leading-8 text-gray-900 transition duration-500 hover:text-indigo-600"
        aria-controls="basic-collapse-six-with-icon"
      >
        <h5>{props.q}</h5>
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
        <p className="text-base leading-6 text-gray-900">{props.a}</p>
      </div>
    </div>
  );
}
