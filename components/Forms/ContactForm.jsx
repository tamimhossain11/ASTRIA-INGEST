import React, { useState } from "react";
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import WifiCalling3Icon from '@mui/icons-material/WifiCalling3';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { BsFillCaretDownFill } from 'react-icons/bs';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Checkbox from '@mui/material/Checkbox';
import { Button } from "../button";
import { FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton, Select, MenuItem } from '@mui/material';
import Box from '@mui/joy/Box';
import Textarea from '@mui/joy/Textarea';
import Typography from '@mui/joy/Typography';

const RegistrationForm = () => {
    const [email, setEmail] = useState("");
    const [isEmailCorrect, setIsEmailCorrect] = useState(false);

    const [mobileNumber, setMobileNumber] = useState("");
    const [isMobileValid, setIsMobileValid] = useState(false);

    const [username, setUsername] = useState("");
    const [isUsernameValid, setIsUsernameValid] = useState(false);

    const [gender, setGender] = useState("male");
    const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);



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
    const handleMobileNumberChange = (e) => {
        const mobileValue = e.target.value;

        // Validate mobile number - allow only numbers and check for 11 digits
        const isValid = /^[0-9]{11}$/.test(mobileValue);

        setMobileNumber(mobileValue);
        setIsMobileValid(isValid);
    };
    const handleUsernameChange = (e) => {
        const usernameValue = e.target.value;

        // Validate the username
        const isValid = /^[a-zA-Z0-9]{6,}$/.test(usernameValue);

        setUsername(usernameValue);
        setIsUsernameValid(isValid);
    };
   


    const handleSubmit = (e) => {
        e.preventDefault();

        const trimmedEmail = email.trim();

        if (!gender || gender === "") {
            alert("Please select a gender option.");
            return;
        }

        if (trimmedEmail && isMobileValid && isUsernameValid) {
            navigate("/homepage");
        } else {
            alert("Invalid email, mobile number, or username");
        }
        if (!isCheckboxChecked) {
            alert("Please agree to the Terms & Conditions and Privacy Policy.");
            return;
        }
    }





    const responsiveInput = {
        height: '50px',
        borderRadius: '10px',

    };

    const responsiveInputLabel = {
        backgroundColor: 'white',
        fontSize: '15px',
        marginLeft: '5px',
        border: '2px solid #FFFFFF'
    };
    const selectIconStyle = {
        color: "black",
        fontSize: "30px",
        borderRadius: "15px",
        marginRight: "10px"
    };
    const [text, setText] = React.useState('');
  const addEmoji = (emoji) => () => setText(`${text}${emoji}`);

    return (
        <>
            {/*Form starts from here */}


            <form onSubmit={handleSubmit} className="w-[100%] ml-[8%] md:w-full">
                {/* Username */}
                <FormControl sx={{ width: "80%", marginBottom: "30px" }}>
                    <InputLabel htmlFor="outlined-adornment-username" sx={responsiveInputLabel}>
                        Name*
                    </InputLabel>
                    <OutlinedInput
                        style={responsiveInput}
                        sx={{
                            paddingLeft: "10px",
                            fontSize: "20px",
                        }}
                        aria-describedby="outlined-weight-helper-text"
                        id="username"
                        type="text"
                        onChange={handleUsernameChange}
                        value={username}
                        className={username.length < 6 || !isUsernameValid ? "input-control invalid-username" : "input-control valid-username"}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton color="secondary">
                                    <PersonOutlineIcon />
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
                <FormControl sx={{ width: '80%', }}>
                    <InputLabel
                        htmlFor="outlined-adornment-email"
                        color="secondary"
                        shrink={true}
                        sx={responsiveInputLabel}
                    >
                        Email*
                    </InputLabel>
                    <OutlinedInput
                        style={responsiveInput}
                        sx={{
                            paddingLeft: '10px',
                            fontSize: '20px',
                        }}
                        color="secondary"
                        focused
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

                <Textarea
                    placeholder="Type in here…"
                    value={text}
                    onChange={(event) => setText(event.target.value)}
                    minRows={2}
                    maxRows={4}
                    startDecorator={
                        <Box sx={{ display: 'flex', gap: 0.5, flex: 1 }}>
                            <IconButton variant="outlined" color="neutral" onClick={addEmoji('👍')}>
                                👍
                            </IconButton>
                            <IconButton variant="outlined" color="neutral" onClick={addEmoji('🏖')}>
                                🏖
                            </IconButton>
                            <IconButton variant="outlined" color="neutral" onClick={addEmoji('😍')}>
                                😍
                            </IconButton>
                        </Box>
                    }
                    endDecorator={
                        <Typography level="body-xs" sx={{ ml: 'auto' }}>
                            {text.length} character(s)
                        </Typography>
                    }
                    sx={{ width: "80%", marginTop: "30px" }}
                />



                {/* Remember Me and Forgot Password links */}
                {/* You can add Remember Me and Forgot Password links as in your original code */}
                {/* Remember to handle the state for Remember Me checkbox */}
                <div className="flex gap-2.5 items-start justify-start mt-5 w-[86%] md:w-full">
                    <input
                        type="checkbox"
                        id="rememberMe"
                        onChange={(e) => setIsCheckboxChecked(e.target.checked)}
                        style={{
                            width: '16px',
                            height: '16px',
                            borderRadius: '2px',
                            border: '2px solid #000000',
                        }}
                    />
                    <div
                        className="text-black  md:text-md"

                    >
                        <span className="text-black font-sfpro text-left font-normal">
                            I agree to the{" "}
                        </span>
                        <a href="/termsofservicepage" className="text-black font-sfpro text-left font-bold underline">
                            Terms & Conditions
                        </a>
                        {" and "}
                        <a href="/loginpage1" className="text-deep_purple-A200 font-sfpro text-left font-bold underline">
                            Privacy Policy.
                        </a>
                    </div>
                </div>
                {/* Submit Button */}
                <Button
                    type="submit"
                    className="cursor-pointer font-bold w-[80%] min:w-[520px] mt-[46px] rounded-[15px] sm:text-2xl md:text-[20px] text-[28px] text-center ml-2"
                    color="jacarta_200"
                    size="md"
                    variant="fill"
                    style={{ backgroundColor: "#000000" }}
                >
                    Submit
                </Button>
            </form>


            {/*Form ends from here */}
        </>
    );
};

export default RegistrationForm;
