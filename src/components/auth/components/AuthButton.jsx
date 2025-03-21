import { LogIn } from "lucide-react";
import Button from "@/components/buttons/Button";

export default function LoginButton({ onClick }) {
  return (
    <Button
      type="button"
      className="ml-2 gap-2"
      icon={<LogIn className="h-4 w-4" />}
      label="Login"
      onClick={onClick}
    />
  );
}
