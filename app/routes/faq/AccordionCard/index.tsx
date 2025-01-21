import { LuLeaf } from 'react-icons/lu';

export default function AccordionCard({
  faq,
}: {
  faq: { id: string; q: string; a: string };
}) {
  return (
    <div
      key={faq.id}
      className="group flex w-full flex-col gap-4 rounded-t-2xl border-b border-r-0 border-solid border-gray-200 p-5 md:rounded-tl-2xl md:rounded-tr-none md:border-r lg:flex-row lg:gap-6 lg:p-10"
    >
      <div className="relative flex h-10 w-10 flex-none items-center justify-center rounded-full bg-emerald-600 md:h-16 md:w-16">
        <LuLeaf size={24} className="text-white" />
      </div>
      <div className="block w-full">
        <h3 className="font-manrope my-4 text-2xl font-medium text-gray-900">
          {faq.q}
        </h3>
        <p className="leading-7 text-gray-500">{faq.a}</p>
      </div>
    </div>
  );
}
