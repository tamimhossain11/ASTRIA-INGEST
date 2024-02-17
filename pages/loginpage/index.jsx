import React from "react";
import { Button } from "../../components/button";
import { Img } from "../../components/img";
import { Text } from "../../components/text";
import { Line } from "../../components/line";
import { AiFillApple } from 'react-icons/ai';
import { BiLogoGoogle } from 'react-icons/bi';
import LoginForm from "../../components/Forms/LoginForm";


const Loginpage = () => {

  return (
    <>
      <div className="bg-black-900 flex flex-col font-sfpro items-center justify-start mx-auto p-[20px] w-full">
        <div className="bg-white grid grid-cols-1 gap-2 md:grid-cols-1 md:gap-[1.875rem] lg:grid-cols-2 rounded-[30px]">
          <div className="flex md:flex-1 flex-col items-center justify-start w-[49%] md:w-full">
            <div className=" h-[650px]   relative w-full">
              <Img
                className=" h-[650px]  m-auto object-cover rounded-[30px] w-full"
                src="/images/nonuser/Astriabg.jpg"
                alt="loginfeature"

              />
            </div>
          </div>
          <div className="custom-scrollbar flex md:flex-1 flex-col  justify-start md:mt-0 w-[49%] md:w-full  md:pr-0">
            <div className="flex flex-col gap-[55px]  mt-10 items-center justify-start w-full">
              <div className="flex flex-col gap-3 items-center justify-start">
                <Text
                  className="sfprotext-regular sm:text-4xl md:text-[30px] text-[30px] text-black text-center"
                  size="txtSFProBold40"
                >
                  Login Your Account
                </Text>
                <Text
                  className="sm:text-2xl md:text-[20px] text-[20px] text-black text-center"
                  size="txtSFProMedium28"
                >
                  Sign In to Continue
                </Text>
              </div>
              <div className="flex flex-col gap-[20px] w-full">

                <LoginForm />

                <div className="flex flex-row items-start justify-center mt-[29px] w-[90%] md:w-full">

                </div>
              </div>
            </div>
            <div className="h-[22px] md:h-[20px] mt-11 relative w-[90%] md:w-full ">
              <Img
                className="absolute bottom-[45%]  inset-x-[0] mx-auto object-cover"
                src="/images/nonuser/img_group1000009849.png"
                alt="group1000009849"
              />
              <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto">
                <div

                  className="mb-0.5 text-[10px] text-black sm:text-md text-right md:text-md"
                >
                  <Text size="txtSFProRegular22">Don’t have an account?<a href="contact" style={{color:"blue"}}>Book a call with us</a> </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loginpage;
