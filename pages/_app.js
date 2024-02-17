import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import Layout from "../components/layout";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { useRouter } from "next/router";
import Meta from "../components/Meta";
import UserContext from "../components/UserContext";
import { useRef } from "react";

if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const pid = router.asPath;
  const scrollRef = useRef({
    scrollPos: 0,
  });

  return (
    <>
      <Meta title="Home 1" />
      <Provider store={store}>
        <ThemeProvider enableSystem={true} attribute="class">
            <UserContext.Provider value={{ scrollRef: scrollRef }}>
            {pid === "/loginpage" 
          || pid === "/contact"
          || pid === "/new_password_page" 
          || pid === "/forgetpasswordpage" 
          || pid === "/verificationcodepage"
          ? (
                <Component {...pageProps} />
              ) : (
                <Layout>
                  <Component {...pageProps} />
                </Layout>
              )}
            </UserContext.Provider>
        </ThemeProvider>
      </Provider>
     
    </>
  );
}

export default MyApp;
