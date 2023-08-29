export default function Footer() {
  return (
    <footer className="w-full h-full bg-blueFooterBg items-center justify-center flex py-16 rounded-tr-[6rem] flex-col xl:flex-row xl:justify-start xl:items-start gap-20 text-lg xl:gap-[20%] xl:px-40 ">
      <img src="./assets/images/logo.svg" alt="logo" />
      <section className="flex flex-col items-center justify-center gap-2 text-blueFooterTxt xl:items-start">
        <h6 className="text-xl text-white ">Product</h6>
        <a href="#" className="relative duration-200 xl:pt-4 group ">
          Overview
          <span className="block w-0 bg-white h-[2px] absolute bottom-1 group-hover:w-full transition-all duration-200"></span>
        </a>
        <a href="#" className="relative duration-200 group">
          Pricing
          <span className="block w-0 bg-white h-[2px] absolute bottom-1 group-hover:w-full transition-all duration-200"></span>
        </a>
        <a href="#" className="relative duration-200 group">
          Marketplace
          <span className="block w-0 bg-white h-[2px] absolute bottom-1 group-hover:w-full transition-all duration-200"></span>
        </a>
        <a href="#" className="relative duration-200 group">
          Features
          <span className="block w-0 bg-white h-[2px] absolute bottom-1 group-hover:w-full transition-all duration-200"></span>
        </a>
        <a href="#" className="relative duration-200 group">
          Integrations
          <span className="block w-0 bg-white h-[2px] absolute bottom-1 group-hover:w-full transition-all duration-200"></span>
        </a>
      </section>

      <section className="flex flex-col items-center justify-center gap-2 text-blueFooterTxt xl:items-start">
        <h6 className="text-xl text-white ">Company</h6>
        <a href="#" className="relative duration-200 xl:pt-4 group">
          About
          <span className="block w-0 bg-white h-[2px] absolute bottom-1 group-hover:w-full transition-all duration-200"></span>
        </a>
        <a href="#" className="relative duration-200 group">
          Team
          <span className="block w-0 bg-white h-[2px] absolute bottom-1 group-hover:w-full transition-all duration-200"></span>
        </a>
        <a href="#" className="relative duration-200 group">
          Blog
          <span className="block w-0 bg-white h-[2px] absolute bottom-1 group-hover:w-full transition-all duration-200"></span>
        </a>
        <a href="#" className="relative duration-200 group">
          Careers
          <span className="block w-0 bg-white h-[2px] absolute bottom-1 group-hover:w-full transition-all duration-200"></span>
        </a>
      </section>

      <section className="flex flex-col items-center justify-center gap-2 text-blueFooterTxt xl:items-start ">
        <h6 className="text-xl text-white ">Connect</h6>
        <a href="#" className="relative duration-200 xl:pt-4 group">
          Contact
          <span className="block w-0 bg-white h-[2px] absolute bottom-1 group-hover:w-full transition-all duration-200"></span>
        </a>
        <a href="#" className="relative duration-200 group">
          Newsletter
          <span className="block w-0 bg-white h-[2px] absolute bottom-1 group-hover:w-full transition-all duration-200"></span>
        </a>
        <a href="#" className="relative duration-200 group">
          LinkedIn
          <span className="block w-0 bg-white h-[2px] absolute bottom-1 group-hover:w-full transition-all duration-200"></span>
        </a>
      </section>
    </footer>
  );
}
