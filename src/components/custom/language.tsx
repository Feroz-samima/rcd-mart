import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { US, BD } from "country-flag-icons/react/3x2";
export default function Language() {
  return (
    <Select>
      <SelectTrigger className="w-[150px] bg-slate-500 text-white border-none mx-2">
        <SelectValue placeholder="Select Currency" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Language</SelectLabel>
          <SelectItem value="English">
            <div className="flex items-center">
              <US title="United States" className=" w-5 h-5" />
              <h4 className=" px-2">English </h4>
            </div>
          </SelectItem>
          <SelectItem value="Bangla">
            <div className="flex items-center">
              <BD title="Bangladesh" className=" w-5 h-5" />
              <h4 className=" px-2">Bangla </h4>
            </div>
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
