import PropTypes from "prop-types";

function Navbar({ setIsOpen, isOpen }) {
  return (
    <>
      <nav className="bg-[#4299f8] h-16  max-md:h-20">
        <ul className="max-w-screen-lg w-full mx-auto flex justify-between items-center text-white font-bold max-md:hidden">
          <li>
            <a href="#">
              <img src="../../logo/logo200.webp" alt="" className="h-16 w-16" />
            </a>
          </li>

          <li>
            <a href="#">หน้าแรก</a>
          </li>

          <li className=" flex">
            <p className="pr-2">สินค้าทั้งหมด</p>
            <img
              src="../../icon/triangle_icon_176936.svg"
              alt=""
              width={15}
              height={15}
            />
          </li>

          <li>
            <a href="#">กิจกรรม</a>
          </li>

          <li>
            <a href="#" className=" flex">
              <p className="pr-2">แหล่งความรู้</p>
              <img
                src="../../icon/triangle_icon_176936.svg"
                alt=""
                width={15}
                height={15}
              />
            </a>
          </li>

          <li>
            <a href="#" className="bg-[#e3782f] rounded-3xl px-5 py-3">
              สั่งซื้อออนไลน์
            </a>
          </li>
        </ul>

        {/* mobile */}
        <ul className="md:hidden flex justify-between items-center h-full px-3">
          <li>
            <div
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              <img src="../../icon/hbg.svg" alt="" className="h-16 w-16" />
            </div>
          </li>

          <li>
            <a href="#">
              <img src="../../logo/logo200.webp" alt="" className="h-16 w-16" />
            </a>
          </li>

          <li>
            <a href="#">
              <img src="../../icon/cart.png" alt="" className="w-18 h-14" />
            </a>
          </li>
        </ul>
        {/* mobile */}
      </nav>
    </>
  );
}

Navbar.propTypes = {
  setIsOpen: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default Navbar;
