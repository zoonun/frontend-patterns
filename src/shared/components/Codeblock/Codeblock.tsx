"use client";

import SyntaxHighlighter from "react-syntax-highlighter";
import * as hljsStyles from "react-syntax-highlighter/dist/esm/styles/hljs";
import Dropdown from "../Dropdown/Dropdown";
import { useThemeStore } from "@/entities/ui/store/theme";

interface Props {
  code: string;
}

function CustomCodeBlock({ code }: Props) {
  const themeState = useThemeStore((state) => state.theme);
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
        style={hljsStyles[themeState.codeStyle as keyof typeof hljsStyles]}
      >
        {code}
      </SyntaxHighlighter>
    </>
  );
}

export default CustomCodeBlock;
