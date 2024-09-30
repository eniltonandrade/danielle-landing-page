import { IdCard } from "lucide-react";
import Image from "next/image";

import { Button } from "./ui/button";
import WhatsappIcon from "@/assets/whatsapp.svg";
import Reveal from "./reveal";
import Link from "next/link";
import { getDictionary } from "@/constants/dicionario";

export default function About() {
  const { inicio: { sobre: { texto} } } = getDictionary()
  return (
    <section className="container">
      <Reveal>
        <div
          className="flex flex-col xl:flex-row items-center xl:items-start xl:space-x-20"
          id="sobre"
        >
          <Image
            src="/profile.jpg"
            alt="Danielle Barbosa"
            width={350}
            height={600}
            className="rounded-md"
          />
          <div className="xl:mr-4">
            <h3 className="text-accent/40 font-normal text-2xl mt-8 mb-2">
              Sobre mim
            </h3>
            <h2 className="text-accent font-bold text-4xl mb-6">
              Danielle Barbosa Negrão
            </h2>
            <p className="text-gray-500 text-justify text-md leading-relaxed xl:mr-8 mr-4">
              {texto}
            </p>
            <div className="flex items-center space-x-2 mt-2">
              <IdCard className="size-6 text-gray-500" />
              <span className="text-gray-500 text-sm font-bold">
                OAB/SP 434.652
              </span>
            </div>
            <div className="flex items-center justify-center space-x-6 py-6">
            <Link href="https://wa.me/5515997999842?text=Olá,gostaria%20de%20agendar%20um%20atendimento!">
              <Button
                variant="contact"
                className="uppercase hover:scale-105 transition-all"
              >
                <Image
                  src={WhatsappIcon}
                  height={18}
                  width={18}
                  className="invert mr-2"
                  alt=""
                />
                <span>Entrar em contato agora!</span>
              </Button>
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
