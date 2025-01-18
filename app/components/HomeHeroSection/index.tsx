export default function HomeHeroSection() {
  return (
    <div className="bg-gradient-to-r from-emerald-900 to-green-900 font-[sans-serif]">
      <div className="relative overflow-hidden">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:py-44">
          <div className="relative z-10 text-center lg:text-left">
            <h1 className="text-4xl font-extrabold leading-10 tracking-tight text-white sm:text-5xl sm:leading-none md:text-6xl lg:text-7xl">
              Welcome to
              <br className="xl:hidden" />
              <span className="text-emerald-400"> Green Wardrobe</span>
            </h1>
            <p className="mt-4 max-w-md text-lg text-white sm:text-xl md:mt-6 md:max-w-3xl">
              Elevate your culinary experience with our exclusive premium
              services. Indulge in exquisite flavors and extraordinary moments.
            </p>

            <div className="mt-12 flex gap-4 max-sm:flex-col sm:justify-center lg:justify-start">
              <div>
                <button className="flex w-full items-center justify-center rounded-full bg-emerald-500 px-8 py-3 text-base tracking-wide text-white transition duration-150 ease-in-out hover:bg-emerald-400">
                  Start Shopping
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
            src="/hero-image.jpg"
            alt="People showing off our range of clothing"
          />
        </div>
      </div>
    </div>
  );
}
