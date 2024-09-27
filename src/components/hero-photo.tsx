"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroPhoto() {
  return (
    <div className="w-full h-full relative">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: {
        duration: 0.4, ease: 'easeIn'
      }}}>
         <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: {
        delay: 0.6, duration: 0.4, ease: 'easeInOut'
      }}} className="w-[298px] h-[298px] xl:w-[498px]  xl:h-[498px] mix-blend-darken">
          <Image
            src="/danielle-negrao-topo-2.png"
            priority
            quality={100}
            fill
            alt=""
            className="object-contain"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
