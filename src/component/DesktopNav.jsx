import Button from "./Button";

export default function DesktopNav({
  handleCompany,
  handleFeatures,
  features,
  company,
}) {
  return (
    <>
      {" "}
      <ul className="flex items-center justify-center gap-10 tracking-tight text-[hsl(0,0%,41%)]">
        <li
          className="flex items-center gap-2 cursor-pointer hover:text-[hsl(0,0%,8%)] duration-300 "
          onClick={handleFeatures}
        >
          Features
          <span>
            {features === true ? (
              <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg">
                <path
                  stroke="#686868"
                  strokeWidth="1.5"
                  fill="none"
                  d="m1 5 4-4 4 4"
                />
              </svg>
            ) : (
              <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg">
                <path
                  stroke="#686868"
                  strokeWidth="1.5"
                  fill="none"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            )}
          </span>
        </li>
        <li
          className="flex items-center gap-2 cursor-pointer hover:text-[hsl(0,0%,8%)] duration-300 "
          onClick={handleCompany}
        >
          Company
          <span>
            {company === true ? (
              <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg">
                <path
                  stroke="#686868"
                  strokeWidth="1.5"
                  fill="none"
                  d="m1 5 4-4 4 4"
                />
              </svg>
            ) : (
              <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg">
                <path
                  stroke="#686868"
                  strokeWidth="1.5"
                  fill="none"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            )}
          </span>
        </li>
        <li className="cursor-pointer hover:text-[hsl(0,0%,8%)] duration-300 ">
          Careers
        </li>
        <li className="cursor-pointer hover:text-[hsl(0,0%,8%)] duration-300 ">
          About
        </li>
      </ul>
      <div className="ml-auto">
        <div className="flex gap-8">
          <button className="text-[hsl(0,0%,41%)] hover:text-[hsl(0,0%,8%)] duration-300 ">
            Login
          </button>
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
      </div>
    </>
  );
}
