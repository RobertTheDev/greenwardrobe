interface IGrowthResult {
  growthTotal: string;
  growthType: string;
  growthDescription: string;
}

const growthResults: IGrowthResult[] = [
  {
    growthTotal: '240%',
    growthType: 'Company growth',
    growthDescription:
      "Company's remarkable growth journey as we continually innovate and drive towards new heights of success.",
  },
  {
    growthTotal: '175+',
    growthType: 'Company growth',
    growthDescription:
      'Our very talented team members are the powerhouse of of pagedone and pillars of our success.',
  },
  {
    growthTotal: '625+',
    growthType: 'Projects Completed',
    growthDescription:
      'We have accomplished more than 625 projects worldwide and we are still counting many more.',
  },
];

function GrowthResultCard({ props }: { props: IGrowthResult }) {
  return (
    <div className="mx-auto w-full rounded-2xl bg-white p-6 shadow-md shadow-gray-100 max-lg:max-w-2xl lg:mx-0 lg:w-1/3">
      <div className="flex gap-5">
        <div className="font-manrope text-2xl font-bold text-indigo-600">
          {props.growthTotal}
        </div>
        <div className="flex-1">
          <h4 className="mb-2 text-xl font-semibold text-gray-900">
            {props.growthType}
          </h4>
          <p className="text-xs leading-5 text-gray-500">
            {props.growthDescription}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function GrowthResultsSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-manrope mb-14 text-center text-4xl font-bold text-gray-900">
          Our results in numbers
        </h2>
        <div className="flex flex-col gap-5 lg:flex-row lg:justify-between xl:gap-8">
          {growthResults.map((result, index) => {
            return <GrowthResultCard key={index} props={result} />;
          })}
        </div>
      </div>
    </section>
  );
}
