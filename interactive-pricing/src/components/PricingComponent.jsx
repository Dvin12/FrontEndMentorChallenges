import { useEffect, useState } from "react";
import ButtonToggle from "./ButtonToggle";
import Slider from "./Slider";

export default function PricingComponent() {
  const [slider, setSlider] = useState(3);
  const [billing, setBilling] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const breakpoint = 767;

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isMobile = windowWidth <= breakpoint;

  function handleBilling() {
    setBilling((bill) => (bill !== true ? true : false));
  }

  return (
    <section className="flex items-center justify-center  ">
      <div className="bg-white md:w-[660px] md:h-[440px] drop-shadow-xl z-20 md:p-12 mx-8 h-[560px] p-8 rounded-xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="uppercase tracking-widest font-bold text-[hsl(225,20%,60%)] ">
            {slider === 1 && "10K pageviews"}
            {slider === 2 && "50K pageviews"}
            {slider === 3 && "100K pageviews"}
            {slider === 4 && "500K pageviews"}
            {slider === 5 && "1M pageviews"}
          </p>
          {isMobile === true ? (
            <div className="flex flex-col gap-8 w-full">
              <Slider slider={slider} setSlider={setSlider} />
              <p className="flex justify-center items-center gap-1 text-[hsl(225,20%,60%)]">
                <span className="text-4xl font-bold text-[hsl(227,35%,25%)]">
                  {slider === 1 && `${billing === true ? "$6.00" : "$8.00"}`}
                  {slider === 2 && `${billing === true ? "$9.00" : "$12.00"}`}
                  {slider === 3 && `${billing === true ? "$12.00" : "$16.00"}`}
                  {slider === 4 && `${billing === true ? "$18.00" : "$24.00"}`}
                  {slider === 5 && `${billing === true ? "$27.00" : "$36.00"}`}
                </span>
                / month
              </p>
            </div>
          ) : (
            <>
              <p className="flex justify-center items-center gap-1 text-[hsl(225,20%,60%)]">
                <span className="text-5xl font-bold text-[hsl(227,35%,25%)]">
                  {slider === 1 && `${billing === true ? "$6.00" : "$8.00"}`}
                  {slider === 2 && `${billing === true ? "$9.00" : "$12.00"}`}
                  {slider === 3 && `${billing === true ? "$12.00" : "$16.00"}`}
                  {slider === 4 && `${billing === true ? "$18.00" : "$24.00"}`}
                  {slider === 5 && `${billing === true ? "$27.00" : "$36.00"}`}
                </span>
                / month
              </p>
            </>
          )}
        </div>
        {isMobile === true ? (
          ""
        ) : (
          <>
            <Slider slider={slider} setSlider={setSlider} />
          </>
        )}

        <div className="flex md:ml-28 justify-center items-center gap-4 md:my-12 my-10 text-[hsl(225,20%,60%)]">
          <p>Monthly Billing</p>
          <ButtonToggle handleBilling={handleBilling} />
          <p>Yearly Billing</p>
          <span className="bg-[hsl(14,92%,95%)] text-[hsl(15,100%,70%)] text-xs px-2 py-1 rounded-xl font-bold">
            {isMobile === true ? "-25%" : "25% discount"}
          </span>
        </div>
        <div className="w-full border-[1px] absolute left-0"></div>
        <div className=" w-full flex flex-col md:flex-row md:justify-between items-center justify-center gap-8 md:gap-0 py-6 text-[hsl(225,20%,60%)]">
          <ul>
            <li className="flex items-center justify-center md:justify-start gap-3 mb-2 text-sm">
              <img src="./assets/images/icon-check.svg" alt="" />
              Unlimited websites
            </li>
            <li className="flex items-center justify-center md:justify-start gap-3 mb-2 text-sm">
              <img src="./assets/images/icon-check.svg" alt="" />
              100% data ownership
            </li>
            <li className="flex items-center justify-center md:justify-start gap-3 text-sm">
              <img src="./assets/images/icon-check.svg" alt="" />
              Email reports
            </li>
          </ul>
          <div className="flex justify-center items-center">
            <button className="bg-[hsl(227,35%,25%)]  px-14 py-3 rounded-3xl text-[hsl(226,100%,87%)] hover:text-white duration-300 ">
              Start my trial
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
