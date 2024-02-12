import "./App.css";
import Header from "./component/Header";
import Navbar from "./component/Navbar";
import MilkCarton from "./component/body/MilkCarton";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      {isOpen ? (
        <aside className={`md:hidden  w-full h-screen bg-black/85 relative`}>
          <div
            className={`bg-slate-300 ${
              isOpen ? " w-2/3 " : "w-0 "
            }  h-full text-xl flex flex-col items-center pt-10`}
          >
            <ul>
              <li className="mb-5">
                <a href="#">หน้าแรก</a>
              </li>
              <li className="flex mb-5">
                <p className="pr-2">สินค้าทั้งหมด</p>
                <img
                  src="../icon/triangle_icon_176936.svg"
                  alt=""
                  width={15}
                  height={15}
                />
              </li>
              <li className="mb-5">
                <a href="#">กิจกรรม</a>
              </li>
              <li>
                <a href="#" className="flex mb-5">
                  <p className="pr-2">แหล่งความรู้</p>
                  <img
                    src="../icon/triangle_icon_176936.svg"
                    alt=""
                    width={15}
                    height={15}
                  />
                </a>
              </li>
            </ul>
          </div>
          <button
            className="absolute top-2 right-2"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <img src="../icon/x.svg" alt="" className="w-10 h-10" />
          </button>
        </aside>
      ) : (
        <>
          <Header />
          <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
          <MilkCarton />
        </>
      )}
    </div>
  );
}

export default App;
