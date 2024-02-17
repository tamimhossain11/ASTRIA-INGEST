import React from "react";
import { Img } from "../../components/img";
import RegistrationForm from "../../components/Forms/ContactForm";

const Contact = () => {


    return (
        <>
            <div className="bg-black-900 flex flex-col font-sfpro items-center justify-start mx-auto p-[20px] md:px-10 sm:px-5 w-full">
                <div className="bg-white grid grid-cols-1 gap-3 md:grid-cols-1 md:gap-[1.875rem] lg:grid-cols-2 rounded-[30px]">
                    <div className="flex md:flex-1 flex-col items-center justify-start w-[51%] md:w-full">
                        <div className=" h-[650px]   relative w-full">
                            <Img
                                className=" h-[650px]  m-auto object-cover rounded-[30px] w-full"
                                src="/images/nonuser/Astriabg.jpg"
                                alt="rectangle66495"

                            />
                        </div>
                    </div>
                    <div className="flex md:flex-1 flex-col items-center justify-start  md:mt-0 mt-[55px] w-[39%] md:w-full">
                        <div className="flex flex-col items-center justify-start w-full">
                            <div
                                className="sm:text-xl md:text-[30px] text-[30px] text-black text-center font-bold mt-5"
                            >
                                Contact with us
                            </div>
                            <div
                                className="mt-[15px] sm:text-2xl md:text-[20px] text-[28px] text-black text-center"
                                size="txtSFProMedium28"
                            >
                                Please fill the form
                            </div>
                            <div className="flex flex-col items-start justify-start mt-[54px] w-full">

                                {/*Form starts from here */}

                                <RegistrationForm />

                                {/*Form ends from here */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
