import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <>
      <Header />
      {/* Background gradient */}
      <div className="w-full h-screen fixed top-0 left-0 bg-hero -z-30"></div>
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
