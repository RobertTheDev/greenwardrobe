export default function MainContentSection() {
  return (
    <section>
      <div className="relative py-14 lg:py-24">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-9 lg:grid-cols-2">
            <div className="img-box">
              <img
                src="https://pagedone.io/asset/uploads/1702034769.png"
                alt=""
                className="object-cover max-lg:mx-auto"
              />
            </div>
            <div className="flex items-center lg:pl-[100px]">
              <div className="data w-full">
                <h2 className="font-manrope relative mb-9 text-4xl font-bold text-black max-lg:text-center lg:text-5xl">
                  About Us
                </h2>
                <p className="mx-auto max-w-2xl text-xl font-normal leading-8 text-gray-500 max-lg:text-center">
                  Driven by a passion for seamless user experiences, we&#39;ve
                  meticulously curated pagedone to empower creators, designers,
                  and developers alike. Our mission is to provide a
                  comprehensive toolkit, enabling you to build intuitive,
                  beautiful interfaces that resonate with users on every
                  interaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative py-14 lg:py-24">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-9">
            <div className="flex items-center lg:pr-24">
              <div className="data w-full">
                <img
                  src="https://pagedone.io/asset/uploads/1702034785.png"
                  alt=""
                  className="mx-auto mb-9 block object-cover lg:hidden"
                />
                <h2 className="font-manrope mb-9 text-4xl font-bold text-black max-lg:text-center lg:text-5xl">
                  We are Creative Since 2005
                </h2>
                <p className="mx-auto max-w-2xl text-xl font-normal leading-8 text-gray-500 max-lg:text-center">
                  Pagedone isn’t just a collection of components and guidelines;
                  it&#39;s a philosophy. We go beyond aesthetics, prioritizing
                  accessibility, scalability, and usability. Every element, from
                  the tiniest detail to the grandest layout, is meticulously
                  crafted to enhance functionality and elevate user
                  satisfaction.
                </p>
              </div>
            </div>
            <div className="img-box">
              <img
                src="https://pagedone.io/asset/uploads/1702034785.png"
                alt=""
                className="hidden object-cover lg:block"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
