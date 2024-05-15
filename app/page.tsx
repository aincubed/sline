"use client";

import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { useState } from "react";
import BrandsList from "@/components/brand-list";
import { brands } from "@/components/brand-list";
import Link from "next/link";

export default function Home() {
  const [isSearchOpen, setSearchOpen] = useState(false);

  return (
    <main className="h-[90vh] flex items-center justify-center align-center">
      <div>
        <h2 className="text-xl font-semibold">
          Which brand are you working on?
        </h2>
        <Command>
          <CommandInput placeholder="Type a brand name" />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              {brands.map((item) => {
                return (
                  <CommandItem key={item.name}>
                    <Link href={item.href}>{item.name}</Link>
                  </CommandItem>
                );
              })}
            </CommandGroup>
          </CommandList>
        </Command>
      </div>
    </main>
  );
}
