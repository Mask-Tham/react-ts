
import React, { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";

type Props = { code: string; language?: string };

const Code = ({ code='', language='markup' }: Props) => {
  console.log(language);
  
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <div className="Code" >
      <pre>
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
};



export default Code;
