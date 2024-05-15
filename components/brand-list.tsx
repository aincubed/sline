import Link from "next/link";

export const brands = [
  { name: "Brumate", href: "Brumate", logo: "/" },
  { name: "Miele", href: "/Miele", logo: "/" },
  { name: "SieMatic", href: "/Siematic", logo: "/" },
];

export default function BrandsList() {
  return (
    <>
      {brands.map((item) => {
        return (
          <Link key={item.name} href={item.href} className="">
            <p className="">{item.name}</p>
          </Link>
        );
      })}
    </>
  );
}
