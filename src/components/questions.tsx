import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "./ui/button";
import { getDictionary } from "@/constants/dicionario";
import Reveal from "./reveal";
import Link from "next/link";

export default function Questions() {
  const {
    inicio: { questões },
  } = getDictionary();
  return (
    <div className="container" id="perguntas">
      <Reveal width="100%">
        <div className="w-full">
          <h4 className="font-semibold text-lg text-accent uppercase mb-2">
            Perguntas frequentes
          </h4>
          <Accordion type="single" collapsible className="w-full">
            {questões.map((question, index) => {
              return (
                <AccordionItem
                  value={`item-${index}`}
                  key={`question-${index}`}
                >
                  <AccordionTrigger className="text-gray-500">
                    {question.questão}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-500 ">
                    {question.resposta}
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
          <div className="flex items-center justify-center mt-6">
            <Link href="http://wa.me/message/TP4C4WTKDUQAB1" target="_blank">
              <Button variant="contact">
                Ainda com dúvidas? Entre em contato
              </Button>
            </Link>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
