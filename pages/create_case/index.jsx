import React, { useState } from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional
import {
  collectionDropdown2_data,
  EthereumDropdown2_data,
} from "../../data/dropdown";
import { FileUploader } from "react-drag-drop-files";
import { useDispatch } from "react-redux";

import Meta from "../../components/Meta";
import Image from "next/image";
import CreateCaseForm from "../../components/Forms/CreateCaseForm";

const Create = () => {
 

  return (
    <div>
      <Meta title="Create Case|| Astria Ingest " />
      {/* <!-- Create --> */}
      <section className="relative py-24 dark:bg-black-900">
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
        <div className="container ">
          <h1 className="font-display text-jacarta-700 py-16 text-center text-4xl font-medium dark:text-white">
            Create Case
          </h1>

          <div className="mx-auto max-w-[48.125rem]">

          <CreateCaseForm/>
          </div>
        </div>
      </section>
      {/* <!-- end create --> */}
    </div>
  );
};

export default Create;
