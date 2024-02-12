const shopIcon = [
  {
    name: "big-c",
    img: "../../../img/big-c.png",
  },
  {
    name: "makro",
    img: "../../../img/makro.png",
  },
  {
    name: "lotus",
    img: "../../../img/lotus.png",
  },
  {
    name: "tops",
    img: "../../../img/tops.png",
  },

  {
    name: "lazada",
    img: "../../../img/lazada.png",
  },
  {
    name: "shopee",
    img: "../../../img/shopee.png",
  },

  {
    name: "jd",
    img: "../../../img/jd.png",
  },
];

function MilkCarton() {
  return (
    <>
      <section className=" bg-[#28130d] w-full ">
        <img
          src="../../../Bg/FM-BG-3.png"
          alt=""
          className="w-full  max-md:hidden"
        />

        {/* ---moblie--- */}
        <img src="../../../Bg/FM-LP-MB-1.png " alt="" className="md:hidden" />
        {/* ---moblie--- */}

        <div className="relative w-full h-fit">
          <div>
            <img
              src="../../../Bg/FM-BG-BTN.png"
              alt=""
              className=" max-md:hidden "
            />
          </div>

          {/* ---moblie--- */}
          <img src="../../../Bg/FM-LP-MB-2.png" alt="" className="md:hidden" />
          {/* ---moblie--- */}

          <div className="pl-[30%] pr-[35%] py-[2%] absolute top-[0%] left-[4%] transform translate[-50%, -50%] flex flex-col max-md:hidden">
            <a href="#">
              <img
                src="../../../img/FM-LP-BTN1-PC.png"
                alt=""
                className="w-fit "
              />
            </a>
            <a href="#">
              <img
                src="../../../img/FM-LP-BTN2-PC.png"
                alt=""
                className="mt-[2.5%] w-fit"
              />
            </a>
            <a href="#">
              <img
                src="../../../img/FM-LP-BTN3-PC.png"
                alt=""
                className="mt-[2.5%] w-fit"
              />
            </a>
          </div>

          {/* ---moblie--- */}
          <div className="absolute top-[10%] left-[10%] flex flex-col md:hidden">
            <a href="#">
              <img
                src="../../../img/FM-LP-BTN1-MB.png"
                alt=""
                className="w-11/12"
              />
            </a>
            <a href="#">
              <img
                src="../../../img/FM-LP-BTN2-MB.png"
                alt=""
                className="mt-[2.5%] w-11/12"
              />
            </a>
            <a href="#">
              <img
                src="../../../img/FM-LP-BTN3-MB.png"
                alt=""
                className="mt-[2.5%] w-11/12"
              />
            </a>
          </div>
          {/* ---moblie--- */}
        </div>

        <div>
          <img
            src="../../../Bg/FM-BG-4.png"
            alt=""
            className="w-full max-md:hidden"
          />

          {/* ---moblie--- */}
          <img src="../../../Bg/FM-LP-MB-3.png" alt="" className="md:hidden" />
          {/* ---moblie--- */}
        </div>
      </section>
      <section className="bg-[#00a6eb] flex flex-col items-center">
        <div className=" md:w-2/3 md:h-2/3 max-lg:w-full max-lg:h-full ">
          <iframe
            width="1236"
            height="695"
            src="https://www.youtube.com/embed/fXUQ9xT9_g4"
            title="ใหม่! โฟร์โมสต์ คอฟฟี่ ลาเต้ l เติมความสดชื่นเพื่อออกไปทำสิ่งดีดี"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className=" aspect-video -translate-y-[25%] shadow-[0_40px_40px_rgba(0,0,0,0.25)] shadow-[#0084df] w-full h-full max-md:-translate-y-[0%]"
          ></iframe>
        </div>

        <div className="grid grid-cols-2 gap-10 -translate-y-[20%] font-light text-2xl max-sm:text-base max-xl:grid-cols-1 max-xl:-translate-y-[0%] max-xl:mb-24 max-md:mt-14">
          <div className="flex bg-white rounded-full shadow-lg shadow-[#0084df] mx-3">
            {/* <div className="m-1"> */}
            <img
              src="../../../img/FM-Img1.png"
              alt=""
              className="max-xl:w-1/3  m-1"
            />
            {/* </div> */}
            <div className="flex flex-col justify-center pl-2 ">
              <p className="text-[#12a0d6] mb-2">ขยับร่างกายระหว่างวัน</p>
              <p className="text-[#002575]">
                ลุกหรือเดินทุก 2 ชม. <br />
                เพื่อให้ระบบไหลเวียนเลือด <br />
                ทำงานได้ดี
              </p>
            </div>
          </div>

          <div className="flex bg-white  rounded-full shadow-lg shadow-[#0084df] mx-3">
            {/* <div className="m-1"> */}
            <img
              src="../../../img/FM-Img2.png"
              alt=""
              className="max-xl:w-1/3  m-1"
            />
            {/* </div> */}

            <div className="flex flex-col justify-center pl-2  ">
              <p className="text-[#12a0d6] mb-2">พังเพลงสบายๆ</p>
              <p className="text-[#002575]">
                หันมาฟังเพลงคลาสสิค <br />
                หรือเสียงธรรมชาติ <br />
                ช่วยให้ผ่อนคลายมากขึ้น
              </p>
            </div>
          </div>

          <div className="flex bg-white  rounded-full shadow-lg shadow-[#0084df] mx-3">
            {/* <div className="m-1"> */}
            <img
              src="../../../img/FM-Img3.png"
              alt=""
              className="max-xl:w-1/3 m-1"
            />
            {/* </div> */}
            <div className="flex flex-col justify-center pl-2  ">
              <p className="text-[#12a0d6] mb-2">พักสายตาเป็นระยะ</p>
              <p className="text-[#002575]">
                เลี่ยงจากหน้าจอคอมฯ <br />
                หยุดพักสายตาครั้งละ 15 นาที <br />
                ทุก 2 ชม.
              </p>
            </div>
          </div>

          <div className="flex bg-white  rounded-full shadow-lg shadow-[#0084df] mx-3">
            {/* <div className="m-1"> */}
            <img
              src="../../../img/FM-Img4.png"
              alt=""
              className="max-xl:w-1/3  m-1"
            />
            {/* </div> */}
            <div className="flex flex-col justify-center pl-2 pr-10">
              <p className="text-[#12a0d6] mb-1">
                เติมพลงัความสดชื่น <br />
                ด้วยความหอมของกาแฟ
              </p>
              <p className="text-[#002575]">
                ดื่มด่ำความหอมและรสชาติกาแฟ
                <br className="max-md:hidden" />
                พร้อมประโยชน์ของนม ให้ความ
                <br className="max-md:hidden" />
                สดชื่นและได้ประโยชน์ทั้งวัน
              </p>
            </div>
          </div>
        </div>

        <div className=" md:w-2/3 md:h-2/3 max-lg:w-full max-lg:h-full max-xl:px-5">
          <iframe
            width="1236"
            height="695"
            src="https://www.youtube.com/embed/DKZvfQnnytk"
            title="ใหม่! โฟร์โมสต์ คอฟฟี่ ลาเต้ l ง่วงเพลียบ่ายๆจัดเลย"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="aspect-video shadow-[0_40px_40px_rgba(0,0,0,0.25)] shadow-[#0084df] w-full h-full"
          ></iframe>
        </div>
      </section>
      <section className="bg-[#00a6eb] flex flex-col justify-center ">
        <div className="max-md:translate-y-[20%]">
          <div className="mt-24 mb-10 mx-auto max-md:mt-0 max-md:mb-10">
            <img
              src="../../../img/Buy-Product.png"
              alt=""
              className="mx-auto max-md:hidden"
            />
            <a href="#" className="w-fit h-fit">
              <img
                src="../../../img/BTN.png"
                alt=""
                className=" mt-20 mx-auto w-fit h-fit max-md:hidden"
              />
            </a>

            {/* ---moblie--- */}
            <img
              src="../../../img/FM-Buy-MB.png"
              alt=""
              className="md:hidden w-5/6 mx-auto"
            />
            <a href="#" className="w-fit h-fit">
              <img
                src="../../../img/BTN-MB.png"
                alt=""
                className="md:hidden mx-auto mt-6 w-2/5"
              />
            </a>
            {/* ---moblie--- */}
          </div>

          <div className="translate-y-[11%] max-md:translate-y-[0%] flex flex-wrap max-4xl:flex-wrap-reverse justify-center mx-auto max-md:gap-y-5">
            {shopIcon.map((item, index) => {
              return (
                <div key={index} className="max-sm:w-[40%] mx-auto">
                  <a href="#" className="">
                    <img
                      src={item.img}
                      alt=""
                      className=" mx-20 max-2xl:mx-10 max-md:mx-5 max-sm:mx-0"
                    />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <img
            src="../../../Bg/FM-Coffee_Latte.png"
            alt=""
            className="max-md:hidden max-lg:h-[400px] max-lg:object-cover"
          />

          {/* ---moblie--- */}
          <img
            src="../../../Bg/FM-Footer-MB.png"
            alt=""
            className="md:hidden"
          />
          {/* ---moblie--- */}
        </div>
      </section>
    </>
  );
}

export default MilkCarton;
