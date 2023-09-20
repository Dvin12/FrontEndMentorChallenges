import Copyright from "./Copyright";
import FooterIcons from "./FooterIcons";
import FooterNav from "./FooterNav";
import FooterSubscribe from "./FooterSubscribe";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center bg-veryDarkBlue">
      <FooterSubscribe />
      <FooterNav />
      <FooterIcons />
      <Copyright />
    </footer>
  );
}
