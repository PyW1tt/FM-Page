function Header() {
  return (
    <header className="bg-[#7fbdf0] h-16 max-md:hidden">
      <div className="max-w-screen-lg w-full mx-auto flex justify-end h-full items-center text-sm font-bold text-white ">
        <div className="underline mr-5 flex hover:cursor-pointer">
          <p className="pr-2">เกี่ยวกับ Foremost</p>
          <img
            src="../../icon/triangle_icon_176936.svg"
            alt=""
            className="-translate-y-1 "
          />
        </div>
        <div className="underline flex hover:cursor-pointer">
          <p className="pr-2">สำหรับเกษตรโคนม</p>
          <img
            src="../../icon/triangle_icon_176936.svg"
            alt=""
            className="-translate-y-1"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
