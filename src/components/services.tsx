"use client";
import { getDictionary } from "@/constants/dicionario";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "./ui/button";
import Reveal from "./reveal";

export default function Services() {
  const { inicio: { serviços: {descrição, items, titulo} } } = getDictionary();
  return (
    <section className="container" id="atuação">
      <Reveal width="100%">
      <div className="mb-16">
        <h3 className="text-accent font-bold text-2xl py-2 text-center">
          {titulo}
        </h3>
        <p className="text-gray-500 text-center">
          {descrição}
        </p>
      </div>
      <Carousel
        opts={{
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 4000,
            stopOnFocusIn: true,
          }),
        ]}
      >
        <CarouselContent>
          {items.map((service, index) => {
            return (
              <CarouselItem key={index} className="xl:basis-1/3 md:basis-1/2">
                <div className="bg-secondary p-6 rounded-md min-h-[280px] flex flex-col justify-between">
                  <div>
                    <h4 className="font-semibold text-lg text-accent uppercase mb-2">
                      {service.titulo}
                    </h4>
                    <p className="text-sm leading-relaxed text-gray-500 ">
                      {service.texto}
                    </p>
                  </div>
                  <div>
                  <Button className="mt-2">Saiba Mais</Button>
                  </div>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      </Reveal>
    </section>
  );
}
