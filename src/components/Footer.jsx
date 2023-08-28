export default function Footer() {
  return (
    <footer className="w-full h-full bg-blueFooterBg items-center justify-center flex py-16 rounded-tr-[6rem] flex-col gap-20 text-lg">
      <img src="./assets/images/logo.svg" alt="logo" />
      <section className="flex flex-col items-center justify-center gap-2   text-blueFooterTxt">
        <h6 className=" text-white text-xl">Product</h6>
        <a href="#">Overview</a>
        <a href="#">Pricing</a>
        <a href="#">Marketplace</a>
        <a href="#">Features</a>
        <a href="#">Integrations</a>
      </section>

      <section className="flex flex-col items-center justify-center gap-2   text-blueFooterTxt">
        <h6 className=" text-white text-xl">Company</h6>
        <a href="#">About</a>
        <a href="#">Team</a>
        <a href="#">Blog</a>
        <a href="#">Careers</a>
      </section>

      <section className="flex flex-col items-center justify-center gap-2   text-blueFooterTxt">
        <h6 className=" text-white text-xl">Connect</h6>
        <a href="#">Contact</a>
        <a href="#">Newsletter</a>
        <a href="#">LinkedIn</a>
      </section>
    </footer>
  );
}
