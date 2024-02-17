import React, { useState } from "react";
import {Button} from "../../components/button";
import {Text} from "../../components/text";
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton,} from '@mui/material';
import Link from "next/link";


const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isEmailCorrect, setIsEmailCorrect] = useState(false);
    const [rememberMe, setRememberMe] = useState(false); // Add rememberMe state

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

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        const trimmedEmail = email.trim();
        const trimmedPassword = password.trim();

        console.log("Email:", trimmedEmail);
        console.log("Password:", trimmedPassword);

        if (trimmedEmail === "amdtamim3@gmail.com" && trimmedPassword === "1234") {
            ("/home");
        } else {
            alert("Invalid email or password");
        }
    };
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const responsiveInput = {
        height: '50px',
        borderRadius: '10px',

    };

    const responsiveInputLabel = {
        backgroundColor: 'white',
        fontSize: '15px',
        marginLeft: '5px',
        border:'white'
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="w-[100%] ml-[8%] md:w-full">
                <FormControl sx={{ mb: 2,  width: '80%', }}>
                    <InputLabel
                        htmlFor="outlined-adornment-Email or Number"
                        
                        sx={responsiveInputLabel}
                    >
                        Email or Number*
                    </InputLabel>
                    <OutlinedInput
                        style={responsiveInput}
                        sx={{
                            paddingLeft: '10px',
                            fontSize: '20px',
                        }}
                    
                   
                        
                        id="email"
                        type="email"
                        onChange={emailValidation}
                        value={email}
                        className={email.length === 0 ? "input-control fill-email" : isEmailCorrect ? "input-control valid-email" : "input-control invalid-email"}
                        endAdornment={
                            <InputAdornment position="end">
                                {isEmailCorrect && (
                                    <IconButton>
                                        <TaskAltIcon />
                                    </IconButton>
                                )}
                            </InputAdornment>
                        }
                    />
                </FormControl>

                <FormControl sx={{ mt: 2, width: '80%' }}>
                    <InputLabel
                        htmlFor="outlined-adornment-password"
                        sx={responsiveInputLabel}
                    >
                        Password*
                    </InputLabel>
                    <OutlinedInput
                        style={responsiveInput}
                        sx={{
                            paddingLeft: '10px',
                            fontSize: '20px',
                        }}

                        aria-describedby="outlined-weight-helper-text"
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        onChange={handlePasswordChange}
                        value={password}
                        endAdornment={
                            <InputAdornment position="end" style={{ padding: "10px" }}>
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>

                <div className="grid grid-cols-2 lg:grid-cols-2  ml-2 items-start justify-between mt-[19px] w-full ">
                    <div className="flex flex-row gap-2 items-center justify-start mb-0.5">
                        <input
                            type="checkbox"
                            id="rememberMe"
                            checked={rememberMe}
                            onChange={() => setRememberMe(!rememberMe)}
                            style={{
                                width: '20px',
                                height: '20px',
                                borderRadius: '2px',
                                border: '2px solid #000000',
                            }}
                        />
                        <Text
                            className="text-[22px] text-black sm:text-md md:text-md"
                            size="txtSFProRegular22"
                        >
                            Remember me
                        </Text>
                    </div>
                    <Link
                        href="/forgetpasswordpage"
                        className="mt-0.5 text-[22px] text-black sm:text-lg md:text-md underline"
                    >
                        <Text size="txtSFProMedium22">Forgot password?</Text>
                    </Link>
                </div>

                <Button
                    type="submit"
                    className="cursor-pointer font-bold w-[80%] mt-[46px] rounded-[15px] sm:text-2xl md:text-[20px] text-[28px] text-center ml-2"
                    size="md"
                    variant="fill"
                    style={{ backgroundColor: "#000000" }}
                >
                    Log In
                </Button>
            </form>
        </>
    );
};

export default LoginForm;
