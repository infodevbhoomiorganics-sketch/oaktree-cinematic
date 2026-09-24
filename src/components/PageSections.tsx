import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import { PageHero } from "@/components/SiteShell";
import { whatsappHref } from "@/lib/site";

export { PageHero };

export function EditorialRow({ image, alt, eyebrow, title, children, reverse = false }: { image: string; alt: string; eyebrow: string; title: string; children: ReactNode; reverse?: boolean }) {
  return <section className="mx-auto grid max-w-[1400px] gap-10 px-6 py-16 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-10 lg:py-28">
    <div className={`image-zoom min-h-[460px] ${reverse ? "lg:order-2" : ""}`}><img src={image} alt={alt} className="h-full min-h-[460px] w-full object-cover"/></div>
    <div className={reverse ? "lg:order-1" : ""}><p className="text-xs font-bold uppercase tracking-[0.25em] text-wood">{eyebrow}</p><h2 className="mt-5 font-display text-5xl leading-none lg:text-6xl">{title}</h2><div className="mt-7 space-y-5 leading-8 text-muted-foreground">{children}</div></div>
  </section>;
}

export function EnquiryLinks() {
  return <div className="mt-8 flex flex-wrap gap-3"><a href={whatsappHref} target="_blank" rel="noreferrer" className="bg-primary px-5 py-3 text-xs font-bold uppercase tracking-widest text-primary-foreground">Enquire now</a><a href={whatsappHref} target="_blank" rel="noreferrer" className="flex items-center gap-2 border border-foreground px-5 py-3 text-xs font-bold uppercase tracking-widest">Book your stay <ArrowUpRight size={15}/></a></div>;
}