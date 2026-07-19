import AdsGallery from "./AdsGallery";

const FeaturedAdsSection = () => {
  return (
    <section
      id="campaigns"
      className="relative overflow-hidden bg-[#0f1c2e] py-16 text-white dark:bg-[#0a1220] md:py-20"
    >
      <div
        className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-[#2b6cb0]/20 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-16 bottom-0 h-64 w-64 rounded-full bg-[#e31c23]/15 blur-3xl"
        aria-hidden
      />

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-10 px-6 sm:px-10 lg:grid-cols-2 lg:gap-16 lg:px-12">
        <div data-aos="fade-right">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-[#2b6cb0]">
            From our field work
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Real treatments.
            <br />
            <span className="text-[#e31c23]">Real protection.</span>
          </h2>
          <p className="mt-4 max-w-md font-body text-base leading-relaxed text-white/70">
            A look at recent campaigns and service work across Davao — the same
            care we bring to every home and business we protect.
          </p>
        </div>

        <div
          data-aos="fade-left"
          className="mx-auto w-full max-w-md drop-shadow-[0_20px_40px_rgba(0,0,0,0.45)] lg:max-w-none"
        >
          <AdsGallery />
        </div>
      </div>
    </section>
  );
};

export default FeaturedAdsSection;
