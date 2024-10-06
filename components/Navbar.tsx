import Link from "next/link";
import { Input } from "./ui/input";
import { Megaphone, MessageCircle, Search } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const Navbar = () => {
  return (
    <nav className="flex justify-end sm:justify-between items-center">
      <SearchInput />
      <div className="text-gray-400 flex gap-7">
        <Notifications />
        <UserAvatar />
      </div>
    </nav>
  );
};

const SearchInput = () => {
  return (
    <div className="w-80 hidden sm:block relative">
      <Search
        size={14}
        strokeWidth={1.5}
        className="absolute left-3 top-[8px]"
      />
      <Input
        type="text"
        placeholder="Search"
        className="pl-9 pr-3 py-1 h-fit focus-visible:ring-0 focus-visible:ring-offset-0"
      />
    </div>
  );
};

const Notifications = () => {
  return (
    <div className="flex gap-3">
      <Link href="#" className="flex items-center">
        <MessageCircle size={20} strokeWidth={1.5} />
      </Link>
      <Link href="#" className="flex items-center relative">
        <Megaphone size={20} strokeWidth={1.5} />
        <div className="bg-primary text-primary-foreground text-[8px] px-1 rounded-full absolute top-1 -right-2">
          13
        </div>
      </Link>
    </div>
  );
};

const UserAvatar = () => {
  return (
    <div className="flex gap-3">
      <div className="flex flex-col text-xs font-light items-end">
        <span className="text-black font-semibold">John Doe</span>
        <span>Admin</span>
      </div>
      <Avatar className="w-8 h-8">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  );
};

export default Navbar;
