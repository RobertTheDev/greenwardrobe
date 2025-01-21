import features from './features';

export default function HomeFeaturesSection() {
  return (
    <section className="py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <h2 className="py-5 text-center text-4xl font-bold text-gray-900">
            Green Wardrobe: Our Four Pillars
          </h2>
          <p className="mx-auto max-w-md text-lg font-normal text-gray-500 md:max-w-2xl">
            We provide Wardrobe essentials that don&#39;t cost the Earth.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-8 md:flex-wrap lg:flex-row lg:flex-nowrap lg:justify-between lg:gap-x-8 lg:gap-y-0">
          {features.map((feature) => {
            return (
              <div
                key={feature.id}
                className="relative flex w-full flex-col items-center rounded-2xl bg-gray-100 p-4 max-md:mx-auto max-md:max-w-md md:h-64 md:w-2/5 xl:w-1/4 xl:p-7"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-white">
                  {feature.icon}
                </div>
                <h4 className="mb-3 text-xl font-semibold capitalize text-gray-900">
                  {feature.title}
                </h4>
                <p className="text-center text-sm font-normal text-gray-500">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
