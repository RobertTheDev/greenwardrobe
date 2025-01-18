import ITestimonial from '~/interfaces/Testimonial';

export default function TestimonialCard({
  testimonial,
}: {
  testimonial: ITestimonial;
}) {
  return (
    <div className="relative mx-auto rounded-lg bg-gray-100 p-6">
      <div className="flex flex-wrap items-center gap-4">
        <img
          alt=""
          src={testimonial.image}
          className="h-14 w-14 rounded-full border-4 border-white"
        />
        <div>
          <h4 className="whitespace-nowrap text-sm font-bold text-gray-800">
            {testimonial.name}
          </h4>
          <p className="mt-0.5 text-xs text-gray-600">{testimonial.title}</p>
        </div>
      </div>

      <div className="mt-4 flex space-x-1">
        {Array.from({ length: 5 }).map((_, index) => {
          return (
            <svg
              key={index}
              className={`w-4 ${index < testimonial.rating ? 'fill-[#facc15]' : 'fill-[#CED5D8]'}`}
              viewBox="0 0 14 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
            </svg>
          );
        })}
      </div>

      <div className="mt-6">
        <p className="text-sm leading-relaxed text-gray-800">
          {testimonial.content}
        </p>
      </div>
    </div>
  );
}
