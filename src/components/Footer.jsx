import Copyright from "./Copyright";
import FooterIcons from "./FooterIcons";
import FooterNav from "./FooterNav";
import FooterSubscribe from "./FooterSubscribe";

export default function Footer() {
  return (
    <footer className="relative flex flex-col items-center justify-center bg-veryDarkBlue xl:flex-row xl:w-full xl:py-12 xl:items-start">
      <FooterSubscribe />
      <FooterNav />
      <FooterIcons />
      <Copyright />
    </footer>
  );
}
