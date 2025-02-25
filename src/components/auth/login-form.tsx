import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Lock, Mail } from "lucide-react";

export function LoginForm() {
  return (
    <form className="space-y-4 mt-4">
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <div className="relative flex items-center">
          <Mail className="absolute left-3 h-5 w-5 text-gray-500" />
          <Input
            id="email"
            placeholder="Enter your email"
            className="pl-10 bg-gray-800 border-gray-700 focus:border-blue-500 focus:ring-blue-500 h-10 flex items-center"
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <div className="relative flex items-center">
          <Lock className="absolute left-3 h-5 w-5 text-gray-500" />
          <Input
            id="password"
            type="password"
            placeholder="Enter your password"
            className="pl-10 bg-gray-800 border-gray-700 focus:border-blue-500 focus:ring-blue-500 h-10 flex items-center"
          />
        </div>
      </div>
      <Button className="w-full bg-blue-600 hover:bg-blue-700 transition-colors duration-300">
        Login
      </Button>
    </form>
  );
}
