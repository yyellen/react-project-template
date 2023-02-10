import Navbar from "../Navbar";
import Footer from "../Footer";
import FullPageLoader from "../FullPageLoader";
import { useState } from "react";

const Layout = (props) => {
  const {children} = props;
  const [showLoader, setShowLoader] = useState(false);

  return (
    <div>
      <Navbar />
      <FullPageLoader show={showLoader} setShowInLoader={setShowLoader}/>
      <button onClick={() => {setShowLoader(true)}} className="w-full h-8 bg-cyan-900 text-white">Show Loader</button>
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;