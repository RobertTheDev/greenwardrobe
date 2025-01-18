import testimonials from '~/data/testimonials';
import TestimonialCard from '../TestimonialCard';

export default function HomeTestimonialsSection() {
  return (
    <div className="mx-auto mt-4 max-w-6xl bg-white font-[sans-serif] max-md:max-w-md">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-extrabold text-gray-800">
          What our happy clients say
        </h2>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((testimonial) => {
          return (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          );
        })}
      </div>
    </div>
  );
}
