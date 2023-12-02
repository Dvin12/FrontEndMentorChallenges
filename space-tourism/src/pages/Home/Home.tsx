import { motion } from "framer-motion";
import Explore from "./components/Explore";

export default function Home() {
  return (
    <header className="h-screen w-full bg-[url('../assets/images/home/background-home-mobile.jpg')] bg-cover text-white  md:bg-[url('../assets/images/home/background-home-tablet.jpg')]  xl:bg-[url('../assets/images/home/background-home-desktop.jpg')]   ">
      <motion.section
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.05 }}
        className="  flex h-full flex-col items-center justify-between gap-10  px-6 py-28 md:px-48 md:py-52 xl:flex-row xl:py-0 xl:pt-56 2xl:px-60    "
      >
        <div className=" flex flex-col items-center justify-center gap-4 md:gap-6 xl:w-[60%] xl:items-start 2xl:w-[40%]">
          <span className="font-barlowCondensed    tracking-[0.16em] text-skyBlue md:text-xl md:tracking-[0.38em] xl:text-2xl">
            SO, YOU WANT TO TRAVEL TO
          </span>

          <h1 className="font-bellefair text-7xl tracking-wider md:text-[150px]">
            SPACE
          </h1>

          <p className=" text-center font-barlow leading-loose tracking-wider text-skyBlue    xl:text-left xl:text-lg xl:leading-[32px]  ">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <Explore />
      </motion.section>
    </header>
  );
}
