"use client";
import Image from "next/image";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

import WhatsappIcon from "@/assets/whatsapp.svg";
import HeroPhoto from "./hero-photo";
import Link from "next/link";
import { getDictionary } from "@/constants/dicionario";

export default function Hero() {
  const { inicio: { hero: { texto, titulo } } } = getDictionary()
  return (
    <div className="w-full bg-secondary min-h-40">
      <div className="container mx-auto flex flex-col xl:flex-row items-center justify-between ">
        <div className="xl:w-[450px] pt-8 pb-24 order-2 xl:order-none">
          <div className="flex flex-col space-y-4 ">
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="flex flex-col space-y-4 "
            >
              <h1 className="text-[46px] leading-[50px] font-extrabold text-accent">
                {titulo}
              </h1>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="flex flex-col space-y-4 text-gray-500 "
            >
              {texto}
            </motion.p>

            <Link href="https://wa.me/5515997999842?text=Olá,gostaria%20de%20agendar%20um%20atendimento!" target="_blank">
              <Button
                variant="contact"
                className="uppercase hover:scale-105 transition-all w-full"
              >
                <Image
                  src={WhatsappIcon}
                  height={18}
                  width={18}
                  className="invert mr-2"
                  alt=""
                />
                <span> Quero entrar em contato!</span>
              </Button>
            </Link>
          </div>
        </div>
        <div className="order-1 xl:order-none pt-8 xl:pt-2">
          <HeroPhoto />
        </div>
      </div>
    </div>
  );
}
