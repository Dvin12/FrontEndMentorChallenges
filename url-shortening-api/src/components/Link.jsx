import CopyToClipboard from "react-copy-to-clipboard";

import { useEffect, useState } from "react";

export default function Link({ link }) {
  const { original, converted } = link;
  const [copied, setCopied] = useState(false);

  useEffect(
    function () {
      const timer = setTimeout(() => setCopied(false), 1000);
      return () => clearTimeout(timer);
    },
    [copied]
  );

  return (
    <div className="py-6 overflow-hidden bg-white rounded-md shadow-md whitespace-nowrap xl:flex xl:items-center xl:mx-36">
      <p className="block max-w-[500px] px-6 overflow-hidden whitespace-nowrap text-overflow-ellipsis truncate xl:w-full">
        {original}
      </p>
      <div className="w-full h-[1px] my-2 bg-Gray xl:hidden block"></div>
      <div className="w-full xl:flex xl:items-center xl:justify-end">
        <a
          href={converted}
          className="px-6 xl:px-0 text-Cyan"
          target="_blank"
          rel="noopener noreferrer"
        >
          {converted}
        </a>
        <div className="px-6 mt-3 xl:mt-0 ">
          <CopyToClipboard text={converted} onCopy={() => setCopied(true)}>
            <button
              className={`w-full py-2 xl:px-6 hover:bg-opacity-60  duration-200 transition-all  ${
                copied ? " bg-dViolet" : "bg-Gray"
              }  rounded-md text-white font-bold`}
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </CopyToClipboard>
        </div>
      </div>
    </div>
  );
}
