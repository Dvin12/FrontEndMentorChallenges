import Company from "./Company";
import Features from "./Features";
import Button from "./Button";

export default function NavigationMobile({
  handleIsOpen,
  handleFeatures,
  handleCompany,
  features,
  company,
}) {
  return (
    <nav className="flex flex-col  mx-6 my-7 ">
      <button
        className="ml-auto flex items-center justify-center"
        onClick={handleIsOpen}
      >
        <svg width="26" height="26" xmlns="http://www.w3.org/2000/svg">
          <g fill="#151515" fillRule="evenodd">
            <path d="m2.393.98 22.628 22.628-1.414 1.414L.979 2.395z" />
            <path d="M.98 23.607 23.609.979l1.414 1.414L2.395 25.021z" />
          </g>
        </svg>
      </button>
      <ul className="my-10 flex flex-col gap-4">
        <ul>
          <li
            className="flex items-center gap-4 cursor-pointer"
            onClick={handleFeatures}
          >
            <span>Features</span>
            <span>
              <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg">
                <path
                  stroke="#686868"
                  strokeWidth="1.5"
                  fill="none"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </span>
          </li>
          <li>{features && <Features />}</li>
        </ul>
        <ul>
          <li
            className="flex items-center gap-4 cursor-pointer"
            onClick={handleCompany}
          >
            <span>Company</span>
            <span>
              <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg">
                <path
                  stroke="#686868"
                  strokeWidth="1.5"
                  fill="none"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </span>
          </li>
          <li>{company && <Company />}</li>
        </ul>
        <li>Careers</li>
        <li>About</li>
      </ul>
      <div className="flex flex-col gap-4 w-full">
        <button>Login</button>
        <Button
          px="6"
          py="2"
          border="border-[2px] border-[hsl(0,0%,41%)]"
          text="text-[hsl(0,0%,41%)]"
          hover="hover:border-[hsl(0,0%,8%)] hover:text-[hsl(0,0%,8%)]"
        >
          Register
        </Button>
      </div>
    </nav>
  );
}
