"use client";
import { usePathname } from "next/navigation";
import { Link } from "react-scroll";

export const LINKS = [
  {
    name: "Início",
    path: "topo",
    offset: 0
  },
  {
    name: "Áreas de atuação",
    path: "atuação",
    offset: -100
  },
  {
    name: "Sobre mim",
    path: "sobre",
    offset: -100
  },
  {
    name: "Perguntas Frequentes",
    path: "perguntas",
    offset: -100
  },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-8">
      {LINKS.map((link, index) => {
        return (
          <Link
            key={`nav-${index}`}
            to={link.path}
            spy={true}
            smooth={true}
            offset={link.offset}
            duration={500}
            className="hover:text-accent text-gray-500 font-medium transition-all cursor-pointer"
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}
