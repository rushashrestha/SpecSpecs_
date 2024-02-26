
import './App.css';

import { useEffect, useState } from "react";

import Loader from './Components/Loader/loading';
import Navbar from './Components/Navbar/Navbar';

function App() {

  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 2000);

    return () => clearTimeout(timer);
  });

  if (showLoader) {
    return <Loader/>;
  }

  return (
    <div >
    <Navbar/>
    </div>
  );
}

export default App;
