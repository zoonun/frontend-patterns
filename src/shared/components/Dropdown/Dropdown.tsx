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

interface Props {
  trigger: string;
  label: string;
  items: string[];
}

const Dropdown = (props: Props) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"outline"}>Open</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="h-56 overflow-y-scroll">
        <DropdownMenuLabel>{props.label}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {props.items.map((item, index) => (
          <DropdownMenuItem key={index}>{item}</DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Dropdown;
