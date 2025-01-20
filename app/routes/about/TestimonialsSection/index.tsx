export default function TestimonialSection() {
  return (
    <section className="bg-gray-50 py-14 lg:py-24">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 rounded-full">
          <h2 className="font-manrope text-center text-4xl font-bold text-gray-900">
            What our happy user says!
          </h2>
        </div>

        <div>
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="relative mb-20">
                <div className="mx-auto max-w-max lg:max-w-4xl">
                  <p className="mb-8 text-center text-lg leading-8 text-gray-500">
                    I have been using pagedone for several months now, and I
                    must say that it has made my life a lot easier. The
                    platform&#39;s intuitive interface and ease of use have
                    allowed me to manage my finances more effectively and make
                    informed investment decisions. I particularly like the
                    product&#39;s auto-tracking feature, which has saved me a
                    lot of time and effort.
                  </p>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="relative mb-20">
                <div className="mx-auto max-w-max lg:max-w-4xl">
                  <p className="mb-8 text-center text-lg leading-8 text-gray-500">
                    I have been using pagedone for several months now, and I
                    must say that it has made my life a lot easier. The
                    platform&#39;s intuitive interface and ease of use have
                    allowed me to manage my finances more effectively and make
                    informed investment decisions. I particularly like the
                    product&#39;s auto-tracking feature, which has saved me a
                    lot of time and effort.
                  </p>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="relative mb-20">
                <div className="mx-auto max-w-max lg:max-w-4xl">
                  <p className="mb-8 text-center text-lg leading-8 text-gray-500">
                    I have been using pagedone for several months now, and I
                    must say that it has made my life a lot easier. The
                    platform&#39;s intuitive interface and ease of use have
                    allowed me to manage my finances more effectively and make
                    informed investment decisions. I particularly like the
                    product&#39;s auto-tracking feature, which has saved me a
                    lot of time and effort.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper mySwiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <img
                src="https://pagedone.io/asset/uploads/1704349534.png"
                alt=""
                className="swiper-slide:w-16 swiper-slide:border-indigo-600 mx-auto scale-90 rounded-full border object-cover transition-all duration-300"
              />
            </div>
            <div className="swiper-slide">
              <img
                src="https://pagedone.io/asset/uploads/1704349572.png"
                alt=""
                className="swiper-slide:w-16 swiper-slide:border-indigo-600 mx-auto scale-90 rounded-full border object-cover transition-all duration-300"
              />
            </div>
            <div className="swiper-slide">
              <img
                src="https://pagedone.io/asset/uploads/1704349514.png"
                alt=""
                className="swiper-slide:w-16 swiper-slide:border-indigo-600 mx-auto scale-90 rounded-full border object-cover transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
