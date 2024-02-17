import React from "react";
import {Img} from "../../components/img";
import {Text} from "../../components/text";
import NewPasswordForm from "../../components/Forms/NewPasswordForm";


const NewPasswordpage = () => {
  

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
          <div className="flex md:flex-1 flex-col gap-14 items-center justify-start w-[41%] md:w-full">
            <div className="flex flex-col gap-[13px] items-center justify-start">
              <Text
                className="sm:text-4xl md:text-[34px] text-[36px] text-black text-cente mt-5"
                size="txtSFProBold40"
              >
                Add new Password
              </Text>
              <Text
                className="sm:text-2xl md:text-[24px] text-[26px] text-black text-center"
                size="txtSFProMedium28"
              >
                Put Your New Password
              </Text>
            </div>
            <div className="flex flex-col gap-[50px] items-center justify-start w-full">
             <NewPasswordForm/>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default NewPasswordpage;
