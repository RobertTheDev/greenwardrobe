interface IFeature {
  id: string;
  title: string;
  description: string;
  icon: JSX.Element;
}

const features: IFeature[] = [
  {
    id: '1',
    title: 'Easy Payment',
    description:
      'We Provide Various Methods For You To Carry Out All Transactions Related To Your Finances',
    icon: (
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M24.7222 11.6667V7.22225C24.7222 5.99495 23.7273 5 22.5 5H4.72222C3.49492 5 2.5 5.99492 2.5 7.22222V22.7778C2.5 24.0051 3.49492 25 4.72222 25H22.5C23.7273 25 24.7222 24.005 24.7222 22.7777V17.7778M20.8333 17.7778H25.2778C26.5051 17.7778 27.5 16.7829 27.5 15.5556V13.8889C27.5 12.6616 26.5051 11.6667 25.2778 11.6667H20.8333C19.606 11.6667 18.6111 12.6616 18.6111 13.8889V15.5556C18.6111 16.7829 19.606 17.7778 20.8333 17.7778Z"
          stroke="#4F46E5"
          strokeWidth="2"
        />
      </svg>
    ),
  },
  {
    id: '2',
    title: 'Easy Payment',
    description:
      'We Provide Various Methods For You To Carry Out All Transactions Related To Your Finances',
    icon: (
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M24.7222 11.6667V7.22225C24.7222 5.99495 23.7273 5 22.5 5H4.72222C3.49492 5 2.5 5.99492 2.5 7.22222V22.7778C2.5 24.0051 3.49492 25 4.72222 25H22.5C23.7273 25 24.7222 24.005 24.7222 22.7777V17.7778M20.8333 17.7778H25.2778C26.5051 17.7778 27.5 16.7829 27.5 15.5556V13.8889C27.5 12.6616 26.5051 11.6667 25.2778 11.6667H20.8333C19.606 11.6667 18.6111 12.6616 18.6111 13.8889V15.5556C18.6111 16.7829 19.606 17.7778 20.8333 17.7778Z"
          stroke="#4F46E5"
          strokeWidth="2"
        />
      </svg>
    ),
  },
  {
    id: '3',
    title: 'Easy Payment',
    description:
      'We Provide Various Methods For You To Carry Out All Transactions Related To Your Finances',
    icon: (
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M24.7222 11.6667V7.22225C24.7222 5.99495 23.7273 5 22.5 5H4.72222C3.49492 5 2.5 5.99492 2.5 7.22222V22.7778C2.5 24.0051 3.49492 25 4.72222 25H22.5C23.7273 25 24.7222 24.005 24.7222 22.7777V17.7778M20.8333 17.7778H25.2778C26.5051 17.7778 27.5 16.7829 27.5 15.5556V13.8889C27.5 12.6616 26.5051 11.6667 25.2778 11.6667H20.8333C19.606 11.6667 18.6111 12.6616 18.6111 13.8889V15.5556C18.6111 16.7829 19.606 17.7778 20.8333 17.7778Z"
          stroke="#4F46E5"
          strokeWidth="2"
        />
      </svg>
    ),
  },
  {
    id: '4',
    title: 'Easy Payment',
    description:
      'We Provide Various Methods For You To Carry Out All Transactions Related To Your Finances',
    icon: (
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M24.7222 11.6667V7.22225C24.7222 5.99495 23.7273 5 22.5 5H4.72222C3.49492 5 2.5 5.99492 2.5 7.22222V22.7778C2.5 24.0051 3.49492 25 4.72222 25H22.5C23.7273 25 24.7222 24.005 24.7222 22.7777V17.7778M20.8333 17.7778H25.2778C26.5051 17.7778 27.5 16.7829 27.5 15.5556V13.8889C27.5 12.6616 26.5051 11.6667 25.2778 11.6667H20.8333C19.606 11.6667 18.6111 12.6616 18.6111 13.8889V15.5556C18.6111 16.7829 19.606 17.7778 20.8333 17.7778Z"
          stroke="#4F46E5"
          strokeWidth="2"
        />
      </svg>
    ),
  },
];

function HomeFeatureCard({ feature }: { feature: IFeature }) {
  return (
    <div className="group relative w-full rounded-2xl bg-gray-100 p-4 transition-all duration-500 hover:bg-indigo-600 max-md:mx-auto max-md:max-w-md md:h-64 md:w-2/5 xl:w-1/4 xl:p-7">
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-white">
        {feature.icon}
      </div>
      <h4 className="mb-3 text-xl font-semibold capitalize text-gray-900 transition-all duration-500 group-hover:text-white">
        {feature.title}
      </h4>
      <p className="text-sm font-normal leading-5 text-gray-500 transition-all duration-500 group-hover:text-white">
        {feature.description}
      </p>
    </div>
  );
}

export default function HomeFeaturesSection() {
  return (
    <section className="mx-auto max-w-6xl font-[sans-serif]">
      <h2 className="mb-16 text-center text-2xl font-extrabold text-gray-800 sm:text-4xl">
        Discover Our Exclusive Features
      </h2>
      <div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-8 md:flex-wrap lg:flex-row lg:flex-nowrap lg:justify-between lg:gap-x-8 lg:gap-y-0">
            {features.map((feature) => {
              return <HomeFeatureCard key={feature.id} feature={feature} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
