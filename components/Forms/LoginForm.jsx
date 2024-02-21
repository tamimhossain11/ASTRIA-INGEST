import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router"; // Import useRouter hook
import { Button } from "../../components/button";
import { Text } from "../../components/text";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material";
import Link from "next/link";

const LoginForm = () => {
  const [username, setUsername] = useState(""); // Add username state
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value); // Update username state
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const router = useRouter(); // Initialize useRouter hook

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send POST request to authentication API route
      const response = await axios.post("/api/authenticate", {
        username, // Use username state
        password,
      });

      // If authentication is successful, redirect to profile page
      router.push("/profile");
    } catch (error) {
      // If authentication fails, display error message
      alert("Invalid username or password");
    }
  };

  const responsiveInput = {
    height: "50px",
    borderRadius: "10px",
  };

  const responsiveInputLabel = {
    backgroundColor: "white",
    fontSize: "15px",
    marginLeft: "5px",
    border: "white",
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="w-[100%] ml-[8%] md:w-full">
        <FormControl sx={{ mb: 2, width: "80%" }}>
          <InputLabel
            htmlFor="outlined-adornment-Email or Number"
            sx={responsiveInputLabel}
          >
            User Name*
          </InputLabel>
          <OutlinedInput
            style={responsiveInput}
            sx={{
              paddingLeft: "10px",
              fontSize: "20px",
            }}
            id="username"
            type="text" // Change type to "text"
            onChange={handleUsernameChange} // Use handleUsernameChange function
            value={username} // Use username state
            endAdornment={
              <InputAdornment position="end">
                <IconButton>
                  <TaskAltIcon />
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>

        <FormControl sx={{ mt: 2, width: "80%" }}>
          <InputLabel
            htmlFor="outlined-adornment-password"
            sx={responsiveInputLabel}
          >
            Password*
          </InputLabel>
          <OutlinedInput
            style={responsiveInput}
            sx={{
              paddingLeft: "10px",
              fontSize: "20px",
            }}
            aria-describedby="outlined-weight-helper-text"
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
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
