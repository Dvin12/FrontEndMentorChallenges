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
    <div className="py-6 overflow-hidden bg-white rounded-md whitespace-nowrap ">
      <p className="block max-w-[500px] px-6 overflow-hidden whitespace-nowrap text-overflow-ellipsis truncate">
        {original}
      </p>
      <div className="w-full h-[1px] my-2 bg-Gray"></div>
      <a href={converted} className="px-6 text-Cyan">
        {converted}
      </a>
      <div className="px-6 mt-3">
        <CopyToClipboard text={converted} onCopy={() => setCopied(true)}>
          <button
            className={`w-full py-2  duration-200 transition-all  ${
              copied ? " bg-dViolet" : "bg-Gray"
            }  rounded-md text-white font-bold`}
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </CopyToClipboard>
      </div>
    </div>
  );
}
