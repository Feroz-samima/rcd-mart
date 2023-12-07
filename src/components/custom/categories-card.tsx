import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function CategoriesCard() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="default" className=" w-56">
          <div className=" flex justify-between w-56">
            <div>ALL CATEGORIES </div>
            <div>
              <Menu />
            </div>
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel></DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <span>Lighting</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Headphones</DropdownMenuItem>
                <DropdownMenuItem>Headsets</DropdownMenuItem>
                <DropdownMenuItem>Home Audio</DropdownMenuItem>
                <DropdownMenuItem>Health & Beauty</DropdownMenuItem>
                <DropdownMenuItem>Outers</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Oil Fluids</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <span>Smart Device</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Headphones</DropdownMenuItem>
                <DropdownMenuItem>Headsets</DropdownMenuItem>
                <DropdownMenuItem>Home Audio</DropdownMenuItem>
                <DropdownMenuItem>Health & Beauty</DropdownMenuItem>
                <DropdownMenuItem>Outers</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuSeparator />
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <span>Paintwork</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Headphones</DropdownMenuItem>
                <DropdownMenuItem>Headsets</DropdownMenuItem>
                <DropdownMenuItem>Home Audio</DropdownMenuItem>
                <DropdownMenuItem>Health & Beauty</DropdownMenuItem>
                <DropdownMenuItem>Outers</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <span>Replacement parts</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Headphones</DropdownMenuItem>
                <DropdownMenuItem>Headsets</DropdownMenuItem>
                <DropdownMenuItem>Home Audio</DropdownMenuItem>
                <DropdownMenuItem>Health & Beauty</DropdownMenuItem>
                <DropdownMenuItem>Outers</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>

          <DropdownMenuItem>Tool & Equipments</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Wheels & Tires</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Car Parts</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Gaming Toy</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Baby Car Set</DropdownMenuItem>
        <DropdownMenuItem>Motobike Care</DropdownMenuItem>
        <DropdownMenuItem disabled></DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem></DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
