import Footer from "./footer";
import { useRouter } from "next/router";
import Header01 from "./header/Header01";


export default function Layout({ children }) {

  return (
    <> 
     
      <Header01/>
      <main>{children}</main>
      <Footer />
    </>
  );
}
