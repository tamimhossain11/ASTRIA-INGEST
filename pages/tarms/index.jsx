import Head from "next/head";
import React from "react";
import Meta from "../../components/Meta";
import Image from "next/image";

const Tarms = () => {
  return (
    <div>
      <Meta title="Tarms || Astria Ingest | Modern Forensics Tool Next.js Template" />
      <div className="pt-[5.5rem] lg:pt-24">
        {/* <!-- TOS --> */}
        <section className="dark:bg-jacarta-800 relative py-16 md:py-24">
          <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
            <Image
              width={1519}
              height={773}
              priority
              src="/images/gradient_light.jpg"
              alt="gradient"
              className="h-full w-full object-cover"
            />
          </picture>
          <div className="container">
            <h1 className="font-display text-jacarta-700 text-center text-4xl font-medium dark:text-white">
              Terms Of Service
            </h1>
            <div className="article-content mx-auto max-w-[48.125rem]">
              <h2 className="text-base">Introduction</h2>
              <p>
                {
                  "These Terms of Service (“Terms”) govern your access to and use of the Astria Ingest website(s), our APIs, mobile app (the “App”), and any other software, tools, features, or functionalities provided on or in connection with our services; including without limitation using our services to view, explore, and create Digital_Forensicss and use our tools, at your own discretion, to connect directly with others to purchase, sell, or transfer Digital_Forensicss on public blockchains (collectively, the “Service”). “Digital_Forensics” in these Terms means a non-fungible token or similar digital item implemented on a blockchain (such as the Ethereum blockchain), which uses smart contracts to link to or otherwise be associated with certain content or data. For purposes of these Terms, “user”, “you”, and “your” means you as the user of the Service. If you use the Service on behalf of a company or other entity then “you” includes you and that entity, and you represent and warrant that (a) you are an authorized representative of the entity with the authority to bind the entity to these Terms, and (b) you agree to these Terms on the entity's behalf."
                }
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Unde quos assumenda aperiam, est aliquam doloremque similique 
                eos vel quis amet illum! Nisi quas eum assumenda fugit vero optio
                 perferendis tempora voluptate provident, corporis exercitationem sed 
                 voluptatem? Ut necessitatibus beatae, magni accusantium quasi dolorem 
                 doloremque. At incidunt omnis adipisci quos porro?
              </p>
              <p>
                BY CLICKING TO ACCEPT AND/OR USING OUR SERVICE, YOU AGREE TO BE
                BOUND BY THESE TERMS AND ALL OF THE TERMS INCORPORATED HEREIN BY
                REFERENCE. IF YOU DO NOT AGREE TO THESE TERMS, YOU MAY NOT
                ACCESS OR USE THE SERVICE.
              </p>

              <p>
                Astria Ingest is not a Lorem ipsum, dolor sit amet consectetur adipisicing
                 elit. Illo aut iure cupiditate delectus! Laudantium maxime nam iusto repudiandae
                  fugit veritatis.
              </p>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Voluptate rerum voluptatum laudantium laborum molestias reprehenderit placeat 
                 dolorum fuga, deserunt exercitationem! Dicta omnis incidunt laboriosam? Beatae 
                 delectus repellat tempora ipsam eos.
              </p>

              <h2>Ownership</h2>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci explicabo 
                sed nostrum numquam eius quo possimus sunt sapiente reiciendis distinctio aut,
                 exercitationem in, dicta repudiandae itaque nisi veritatis eveniet illum! Voluptates 
                 similique ab, quibusdam laudantium omnis voluptas. Odit molestias, architecto, 
                 assumenda dolorum libero earum maxime minima dicta enim, ipsam ipsum rem. Architecto,
                  labore eligendi? Ducimus optio quam reprehenderit excepturi earum.
              </p>

              <h2>License to Access and Use Our Service and Content</h2>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Accusantium enim incidunt recusandae quasi, nostrum illum, 
                dolorum itaque praesentium, laudantium dignissimos voluptas. Sapiente,
                 minus! Nam et non impedit, perferendis, ducimus nostrum sed rerum commodi 
                 aut illo unde ea consequuntur quaerat ab iusto. Exercitationem quos dignissimos
                  assumenda ex minus. Accusamus mollitia voluptatem ipsum asperiores sint laborum 
                  placeat voluptas aspernatur, tempora, illum repellendus possimus temporibus architecto,
                   autem quas exercitationem accusantium facere eligendi aliquid.
              </p>

              <h2>Intellectual Property Rights</h2>

              <p>
                You are solely responsible for your use of the Service and for
                any information you provide, including compliance with
                applicable laws, rules, and regulations, as well as these Terms,
                including the User Conduct requirements outlined above.
              </p>

              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Assumenda vero aut quo atque doloribus hic corporis excepturi 
                voluptas accusamus earum veritatis eveniet nulla cumque quibusdam 
                fuga dignissimos, nisi minus expedita sapiente ipsum, itaque tempore? 
                Aliquid molestias, earum delectus, perferendis aut voluptatem laudantium 
                ex, perspiciatis hic eos? Expedita praesentium fugiat perspiciatis quae culpa,
                iusto sapiente ipsum consequatur distinctio neque illum?
              </p>

              <h2>Miscellaneous</h2>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                 quae voluptatibus molestias facere earum minus dolores? Nihil aliquam
                  tempora delectus voluptate, nemo quam enim ullam corrupti necessitatibus a adipisci,
                   temporibus possimus cum quaerat repellendus dicta modi. Nihil harum soluta maxime culpa
                    eum sunt blanditiis, illo vitae eligendi dignissimos aliquam quae quod ipsa labore 
                    at quia. Enim a blanditiis ullam at?
              </p>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam optio
                 molestiae quis provident facilis, rerum reprehenderit voluptatibus 
                 vitae excepturi distinctio eligendi. Rerum a nulla laboriosam minima 
                 odio modi reprehenderit quo.
              </p>

              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam hic fugiat officiis,
                 animi quis debitis optio? Necessitatibus perferendis,
                  quod impedit eveniet nesciunt debitis optio eaque corporis dolores perspiciatis labore in?
              </p>
            </div>
          </div>
        </section>
        {/* <!-- end TOS --> */}
      </div>
    </div>
  );
};

export default Tarms;
