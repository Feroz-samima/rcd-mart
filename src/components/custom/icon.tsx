import { Badge } from "@/components/ui/badge";
import { Heart, ShoppingBasket } from "lucide-react";

const Icon = () => {
  return (
    <div className=" flex ">
      <Heart className="border m-2 rounded-sm p-1" fill="" size={40} />
      <div className="relative m-2">
        <Badge
          variant={"destructive"}
          className=" absolute right-[-8px] top-[-15px]"
        >
          2
        </Badge>
        <ShoppingBasket className="border  rounded-sm p-1" size={40} />
      </div>
    </div>
  );
};

export default Icon;
