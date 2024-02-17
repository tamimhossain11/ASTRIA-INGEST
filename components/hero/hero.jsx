import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      {/* <!-- Hero --> */}
      <section className="hero dark:bg-black-900 relative py-20 md:pt-32">
        <div className="container">
          <div className="mx-auto max-w-2xl pt-24 text-center">
            <h1 className="mb-6 font-display text-5xl dark:text-white text-black-900 lg:text-3xl">
              Welcome to the
            </h1>
            <h2 className="mb-6 font-display text-5xl dark:text-white text-black-900 lg:text-6xl">Astria Ingest</h2>
            <h3>The Universe of Digital forensics</h3>
            <p className="mx-auto mb-8 max-w-[100%] text-lg leading-normal dark:text-white text-black-900">
            The online platform to provide easy and quick step to process evidance with expart support
            in the field of Digital Forensics
            </p>
            <Link
              href="/registration"
              className="inline-block rounded-md bg-black-900 dark:bg-jacarta-700 py-3 px-8 text-center font-semibold text-white shadow-md transition-all hover:bg-black-700"
            >
              Join us today
            </Link>
          </div>
        </div>
      </section>
      {/* <!-- end hero --> */}
    </>
  );
};

export default Hero;
