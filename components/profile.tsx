"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Brush, Laptop, Laptop2, Mail, Megaphone } from "lucide-react";

export default function ProfileIcon() {
  return (
    <Link href="/">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar>
            <AvatarImage src="https://github.com/aincubed.png" />
            <AvatarFallback />
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="max-w-[30vw]">
          <DropdownMenuLabel>Notifications</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <div>
              <div className="gap-x-1 flex items-start">
                <Laptop2 />
                <h2 className="font-bold">New preview deployed</h2>
                <div className="bg-[#E70019] h-2 w-2 rounded-full ml-1"></div>
              </div>
              <p className="pl-[30px]">
                Check out the latest version of the website here. Explore the
                changes and provide your feedback!
              </p>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <div>
              <div className="gap-x-1 flex items-start">
                <Brush />
                <h2 className="font-bold">Changes made</h2>
                <div className="bg-[#E70019] h-2 w-2 rounded-full ml-1"></div>
              </div>
              <p className="pl-[30px]">
                The button component&apos;s border radius has been updated to
                4px for a more rounded appearance.
              </p>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <div>
              <div className="gap-x-1 flex items-start">
                <Megaphone />
                <h2 className="font-bold">Brian mentioned you</h2>
              </div>
              <p className="pl-[30px]">
                Hey there! We wanted to let you know that you&apos;ve been
                mentioned in a chat. Your input is needed on the topic being
                discussed.
              </p>
            </div>
          </DropdownMenuItem>

          <DropdownMenuSeparator />
          {/* onSelect for Signout */}
          <DropdownMenuItem>Sign Out</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </Link>
  );
}
