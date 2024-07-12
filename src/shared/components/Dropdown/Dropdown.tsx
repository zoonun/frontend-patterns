"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/shared/components/ui/dropdown-menu";
import { Button } from "@/shared/components/ui/button";
import { useThemeStore } from "@/entities/ui/store/theme";

interface Props {
  trigger: string;
  label: string;
  items: string[];
}

const Dropdown = (props: Props) => {
  const themeState = useThemeStore((state) => state.theme);
  const setThemeState = useThemeStore((state) => state.setTheme);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"outline"}>
          {themeState.codeStyle ? themeState.codeStyle : "Open"}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="h-56 overflow-y-scroll">
        <DropdownMenuLabel>{props.label}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {props.items.map((item, index) => (
          <DropdownMenuItem
            key={index}
            onSelect={() => setThemeState({ codeStyle: item })}
          >
            {item}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Dropdown;
