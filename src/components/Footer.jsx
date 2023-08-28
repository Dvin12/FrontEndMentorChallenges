export default function Footer() {
  return (
    <footer className="w-full h-full bg-blueFooterBg items-center justify-center flex py-16 rounded-tr-[6rem] flex-col xl:flex-row xl:justify-start xl:items-start gap-20 text-lg xl:gap-[20%] xl:px-40 ">
      <img src="./assets/images/logo.svg" alt="logo" />
      <section className="flex flex-col items-center justify-center gap-2 text-blueFooterTxt xl:items-start">
        <h6 className="text-xl text-white ">Product</h6>
        <a href="#" className="xl:pt-4">
          Overview
        </a>
        <a href="#">Pricing</a>
        <a href="#">Marketplace</a>
        <a href="#">Features</a>
        <a href="#">Integrations</a>
      </section>

      <section className="flex flex-col items-center justify-center gap-2 text-blueFooterTxt xl:items-start">
        <h6 className="text-xl text-white ">Company</h6>
        <a href="#" className="xl:pt-4">
          About
        </a>
        <a href="#">Team</a>
        <a href="#">Blog</a>
        <a href="#">Careers</a>
      </section>

      <section className="flex flex-col items-center justify-center gap-2 text-blueFooterTxt xl:items-start ">
        <h6 className="text-xl text-white ">Connect</h6>
        <a href="#" className="xl:pt-4">
          Contact
        </a>
        <a href="#">Newsletter</a>
        <a href="#">LinkedIn</a>
      </section>
    </footer>
  );
}
