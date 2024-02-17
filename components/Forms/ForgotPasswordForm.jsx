import React, { useState } from "react";
import {Button} from "../../components/button";
import {Img} from "../../components/img";
import {Text} from "../../components/text";
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import FormControl from '@mui/material/FormControl';


const ForgetPasswordForm = () => {

    const [email, setEmail] = useState("");
    const [isEmailCorrect, setIsEmailCorrect] = useState(false);

    const emailValidation = (e) => {
        const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        const emailValue = e.target.value;
        setEmail(emailValue);

        if (emailValue.match(pattern)) {
            setIsEmailCorrect(true);
        } else {
            setIsEmailCorrect(false);
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        const trimmedEmail = email.trim();

        console.log("Email:", trimmedEmail);

        if (trimmedEmail === "amdtamim3@gmail.com") {
            ("/verificationcordpage");
        } else {
            alert("You are not a user,please register");
        }
    };

    const responsiveInput = {
        height: '50px',
        borderRadius: '10px',
        transition: 'border-color 0.3s',

    };

    const responsiveInputLabel = {
        backgroundColor: 'white',
        fontSize: '15px',
        marginLeft: '5px',
    };

    const isDisabled = !email;


    return (
        <>
            <form onSubmit={handleSubmit} className="w-full md:w-full">
                <div className="flex flex-col gap-[22px] items-end justify-start w-full ">

                    <FormControl sx={{ width: '80%', mr:"12%"}}>
                        <InputLabel
                            htmlFor="outlined-adornment-Email or Number"
                            sx={responsiveInputLabel}
                        >
                            Email or Number*
                        </InputLabel>
                        <OutlinedInput
                            style={responsiveInput}
                            sx={{
                                paddingRight: '10px',
                                fontSize: '20px',
                            }}
                          
                            aria-describedby="outlined-weight-helper-text"
                            id="email"
                            type="email"
                            onChange={emailValidation}
                            value={email}
                            className={email.length === 0 ? "input-control fill-email" : isEmailCorrect ? "input-control valid-email" : "input-control invalid-email"}
                            endAdornment={
                                <InputAdornment position="end">
                                    {isEmailCorrect && (
                                        <IconButton color="secondary">
                                            <TaskAltIcon />
                                        </IconButton>
                                    )}
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                    <a
                        href="https://accounts.google.com/v3/signin/identifier?dsh=S520939501%3A1679419157919013&continue=https%3A%2F%2Faccounts.google.com%2Fb%2F0%2FAddMailService&followup=https%3A%2F%2Faccounts.google.com%2Fb%2F0%2FAddMailService&ifkv=AWnogHc7FxscS196j77AiTpXPIdS5GX2FzPGLGgdl26wSt9KbGBg-38wBsDhm1Pzhl8T5ioDw9r6Ag&passive=1209600&flowName=GlifWebSignIn&flowEntry=ServiceLogin"
                        className="font-semibold text-[15px] text-deep_purple-A200 sm:text-lg md:text-md underline mr-[12%]"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Text>Resend Code </Text>
                    </a>
                </div>
                <Button
                    type="submit"
                    className="cursor-pointer font-bold w-[80%] mt-[50px] rounded-[15px] md:mb-10 sm:text-2xl md:text-[20px] text-[20px] text-center ml-[8%]"
                    color="deep_purple_A200"
                    size="md"
                    variant="fill"
                    disabled={isDisabled}
                    style={{ backgroundColor: "#000000" }}
                >
                    Send Email
                </Button>
            </form>
        </>
    );
};

export default ForgetPasswordForm;
