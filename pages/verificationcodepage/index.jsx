import React from "react";
import {Img} from "../../components/img";
import {Text} from "../../components/text";
import VerificationCodeForm from "../../components/Forms/VerificationCodeForm";


const VerificationCodepagePage = () => {
  
  return (
    <>
      <div className="bg-black-900 flex flex-col font-sfpro items-center justify-start mx-auto p-[20px] md:px-10 sm:px-5 w-full">
      <div className="bg-white grid grid-cols-1 gap-3 md:grid-cols-1 md:gap-[1.875rem] lg:grid-cols-2 rounded-[30px]">
          <div className="flex md:flex-1 flex-col items-center justify-start w-[48%] md:w-full">
          <div className=" h-[650px]   relative w-full">
              <Img
                className=" h-[650px]  m-auto object-cover rounded-[30px] w-full"
                src="/images/nonuser/Astriabg.jpg"
                alt="rectangle66495"
               
              />
            </div>
          </div>
            <div className="flex flex-col gap-[51px] items-center justify-start w-[41%] md:w-full">
              <div className="flex flex-col gap-[13px] items-center justify-start mt-10">
                <Text
                  className="sm:text-4xl md:text-[38px] text-[40px] text-black text-center"
                  size="txtSFProBold40"
                >
                  Verification Code
                </Text>
                <Text
                  className="sm:text-2xl md:text-[26px] text-[28px] text-black text-center"
                  size="txtSFProMedium28"
                >
                  Check The Email & Enter The Code
                </Text>
              </div>
              <VerificationCodeForm/>

            </div>
          </div>
        </div>
    </>
  );
};

export default VerificationCodepagePage;
