import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "./ui/textarea";

type Props = {
  type: "text" | "email" | "password" | "textarea";
  name: string;
  placeholder: string;
  label?: string;
  required?: boolean;
};

export function InputWithLabel({
  name,
  label,
  type,
  required,
  placeholder,
}: Props) {
  return (
    <div className="grid w-full items-center gap-1.5 gap-y-[14px]">
      <Label htmlFor={name}>{label || name}</Label>
      {type === "textarea" ? (
        <Textarea
          id={name}
          name={name}
          required={required}
          className="text-lg rounded-sm"
          placeholder={placeholder}
          rows={7}
        />
      ) : (
        <Input
          type={type}
          id={name}
          name={name}
          required={required}
          className="text-lg rounded-sm py-6"
          placeholder={placeholder}
        />
      )}
    </div>
  );
}
