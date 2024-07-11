"use client";

import SyntaxHighlighter from "react-syntax-highlighter";
import { useState } from "react";
import * as hljsStyles from "react-syntax-highlighter/dist/esm/styles/hljs";
import Dropdown from "../Dropdown/Dropdown";

interface Props {
  code: string;
}

function CustomCodeBlock({ code }: Props) {
  const [selectedStyle, setSelectedStyle] = useState("");
  const availableStyles = Object.keys(hljsStyles);

  return (
    <>
      <Dropdown
        trigger="Code"
        label="Available styles"
        items={availableStyles}
      />
      <SyntaxHighlighter
        language="typescript"
        style={hljsStyles[selectedStyle as keyof typeof hljsStyles]}
      >
        {code}
      </SyntaxHighlighter>
    </>
  );
}

export default CustomCodeBlock;
