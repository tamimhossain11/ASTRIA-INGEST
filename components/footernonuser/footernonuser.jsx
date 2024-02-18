import Link from "next/link";
import { footerMenuList, socialIcons } from "../../data/footer_data";
import Image from "next/image";
import { Line } from "../line";

const Footernonuser = () => {
  return (
    <>
      {/* <!-- Footer --> */}

      <section className="dark:bg-black-900 page-footer bg-white">
        <div className="container">
          <div className="grid grid-cols-6 gap-x-7 gap-y-14 pt-24 pb-12 md:grid-cols-12">
            <div className="col-span-3 md:col-span-4">
              {/* <!-- Logo --> */}
              <Link href="#" className="mb-6 inline-block">
                <Image
                   height={60}
                   width={63}
                   src="/images/logo_white.jpg"
                 
                  className="max-h-10 dark:hidden"
                  alt="Astria Ingest | Modern Forensics Tool"
                />
              </Link>

              <Link href="#" className=" mb-6 inline-block">
                <Image
                  height={60}
                  width={63}
                  src="/images/logo_white.jpg"
                  className="hidden max-h-10 dark:block mb-6"
                  alt="Astria Ingest | Modern Forensics Tool"
                />
              </Link>
              <p className="dark:text-jacarta-300 mb-12">
                Create, Upload, analize and investigate the evdance through modern forensics  technology.
              </p>

              {/* <!-- Socials --> */}
              
            </div>

            {footerMenuList.map((single) => (
              <div
                className={`col-span-full sm:col-span-3 md:col-span-2 ${single.diffClass}`}
                key={single.id}
              >
                <h3 className="font-display text-jacarta-700 mb-6 text-sm dark:text-white">
                  {single.title}
                </h3>
                <ul className="dark:text-jacarta-300 flex flex-col space-y-1">
                  {single.list.map((item) => {
                    const { id, href, text } = item;
                    return (
                      <li key={id}>
                        <Link
                          href={href}
                          className="hover:text-accent dark:hover:text-white"
                        >
                          {text}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
          <Line className="bg-whiter-A700 h-px w-full" />
          <div className="flex flex-col items-center justify-between space-y-2 py-6 sm:flex-row sm:space-y-0">
           <span className="dark:text-jacarta-400 text-sm">
              <span>© {new Date().getFullYear()} Astria Ingest — All right reserve</span>
              <Link
                href="https://www.astria.ph"
                className="hover:text-accent dark:hover:text-white"
              >
                {" "}
                Astria Ingest
              </Link>
            </span>
            <div className="flex space-x-5">
              <p>Follow Us:</p>
                {socialIcons.map((item) => {
                  const { id, href, text } = item;
                  return (
                    <Link
                      href={href}
                      key={id}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group cursor-pointer"
                    >
                      <svg className="icon group-hover:fill-accent fill-jacarta-300 h-5 w-5 dark:group-hover:fill-white">
                        <use xlinkHref={`/icons.svg#icon-${text}`}></use>
                      </svg>
                    </Link>
                  );
                })}
              </div>
            </div>
        </div>
        
      </section>
    </>
  );
};

export default Footernonuser;
