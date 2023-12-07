import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Currency() {
  return (
    <Select>
      <SelectTrigger className="w-[150px] bg-slate-500 text-white border-none mx-2">
        <SelectValue placeholder="Select Currency" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Currency</SelectLabel>
          <SelectItem value="usdollar">$ US DOLLAR</SelectItem>
          <SelectItem value="bdt">BDT</SelectItem>
          <SelectItem value="rupy">RUPY</SelectItem>
          <SelectItem value="uro">URO</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
