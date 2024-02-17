import React, { useState } from "react";
import {Button} from "../../components/button";
import ReactCodeInput from "react-code-input";

const CORRECT_PIN_CODE = "4089";

const VerificationCodeForm = () => {
    const [isPinCodeValid, setIsPinCodeValid] = useState(true);
    const [pinCode, setPinCode] = useState("");
    const [btnIsPressed, setBtnIsPressed] = useState(false);

    const checkPinCode = () => {
        const isPinCodeValid = pinCode === CORRECT_PIN_CODE;

        setBtnIsPressed(true);
        setIsPinCodeValid(isPinCodeValid);
        if (!isPinCodeValid) setPinCode("");
        else {
            ("/newpasswordpage");
        }
    };

    const handlePinChange = (pin) => {
        setPinCode(pin);
        setBtnIsPressed(false);
    };

    const inputStyle = isPinCodeValid
        ? {
            fontFamily: "sfpro",
            width: "15%",
            fontSize: "32px",
            backgroundColor: "white",
            color: "#05011D",
            border: "none",
            borderBottom: "2.5px solid black",
            textAlign: "center",
            fontWeight: "590",
            marginLeft: "2.5%",
        }
        : {
            fontFamily: "sfpro",
            width: "15%",
            fontSize: "32px",
            backgroundColor: "white",
            color: "red",
            border: "none",
            borderBottom: "2.5px solid red",
            textAlign: "center",
            fontWeight: "590",
            marginLeft: "2.5%",
        };
    return (
        <>

            <div className="min:w-[700px] ml-[25%] w-full">
                <ReactCodeInput
                    id="pinCode"
                    type="text"
                    fields={4}
                    onChange={handlePinChange}
                    value={pinCode}
                    inputStyle={inputStyle}
                />

            </div>
            <Button
                className="cursor-pointer font-bold  w-[80%] md:mb-5 rounded-[15px] sm:text-2xl md:text-[20px] text-[20px] text-center"
                color="deep_purple_A200"
                size="md"
                variant="fill"
                onClick={checkPinCode}
                style={{ backgroundColor: "#000000" }}
            >
                Verify
            </Button>
        </>
    );
};

export default VerificationCodeForm;
