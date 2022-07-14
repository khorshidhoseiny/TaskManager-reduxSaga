import { useState } from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "./component/Context/ThemeContext";
import { store } from "./component/features/Store";
import Main from "./component/Main";
import NavBar from "./component/Navbar";
import LeftSideBar from "./component/LeftSideBar";

function App() {
  const [open, setOpen] = useState(true);

  
  return (
    <Provider store={store}>
      <ThemeProvider>
      <NavBar open={open} setOpen={setOpen} />
      <div className="flex ">
        {open ? <LeftSideBar /> : ""}
        <div className="left-0  w-screen h-[90vh] transition-all duration-500 bg-gray-100 dark:bg-gray-900 dark:text-gray-200 text-slate-800 flex flex-col justify-start ">
          <Main />
        </div>
      </div>
      </ThemeProvider>
     
      
    </Provider>
  );
}

export default App;
