import Features from "./Features";
import Company from "./Company";
import DesktopNav from "./DesktopNav";
import Hamburger from "./Hamburger";

export default function Navigation({
  handleIsOpen,
  isMobile,
  handleFeatures,
  handleCompany,
  features,
  company,
}) {
  return (
    <nav className="flex items-center gap-16 relative">
      <img src="./assets/images/logo.svg" alt="snap logo" />

      {isMobile ? (
        <Hamburger handleIsOpen={handleIsOpen} />
      ) : (
        <>
          <DesktopNav
            handleCompany={handleCompany}
            handleFeatures={handleFeatures}
            isMobile={isMobile}
          />
          {features === true ? <Features /> : ""}
          {company === true ? <Company /> : ""}
        </>
      )}
    </nav>
  );
}
