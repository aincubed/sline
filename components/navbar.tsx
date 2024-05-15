import { Fullscreen, PanelRightOpen } from "lucide-react";
import Link from "next/link";
import ProfileIcon from "./profile";

const links = [
  { name: "", href: "/", icon: PanelRightOpen },
  { name: "", href: "/", icon: Fullscreen },
];

export default function NavigationBar() {
  return (
    <div className="flex sticky top-0 w-full">
      <NavigationLinks />
    </div>
  );
}

function NavigationLinks() {
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className="text-neutral-500 p-2 rounded-md hover:bg-neutral-100"
          >
            <LinkIcon className="" />
          </Link>
        );
      })}
      <div className="ml-auto">
        <ProfileIcon />
      </div>
    </>
  );
}
