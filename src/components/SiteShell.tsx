import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, Phone, MessageCircle, ArrowUpRight, Instagram } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { phoneDisplay, phoneHref, whatsappHref } from "@/lib/site";

const links = [
  ["Home", "/"], ["Stay", "/stay"], ["About", "/about"], ["Dining", "/dining"],
  ["Amenities", "/amenities"], ["Experiences", "/experiences"], ["Gallery", "/gallery"],
  ["Location", "/location"], ["Contact", "/contact"],
] as const;

export function SiteShell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    onScroll(); window.addEventListener("scroll", onScroll); return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => setOpen(false), [pathname]);
  const solid = scrolled || pathname !== "/" || open;
  return <>
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${solid ? "bg-cream/95 text-foreground shadow-sm backdrop-blur-xl" : "text-primary-foreground"}`}>
      <div className="mx-auto flex h-20 max-w-[1500px] items-center justify-between px-5 lg:px-10">
        <Link to="/" className="group leading-none" aria-label="Oaktree Homestay home">
          <span className="block font-display text-[1.6rem] font-semibold tracking-[0.08em]">OAKTREE</span>
          <span className={`mt-1 block text-[0.58rem] font-semibold tracking-[0.38em] ${solid ? "text-wood" : "text-primary-foreground/80"}`}>HOMESTAY · KUMARSAIN</span>
        </Link>
        <nav className="hidden items-center gap-5 xl:flex" aria-label="Main navigation">
          {links.map(([label, to]) => <Link key={to} to={to} activeOptions={{ exact: to === "/" }} className="border-b border-transparent py-2 text-[0.68rem] font-semibold uppercase tracking-[0.16em] transition-colors hover:border-gold" activeProps={{ className: "border-gold" }}>{label}</Link>)}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <a href={phoneHref} className="flex h-10 w-10 items-center justify-center border border-current/25" aria-label="Call Oaktree Homestay"><Phone size={16}/></a>
          <a href={whatsappHref} target="_blank" rel="noreferrer" className={`px-5 py-3 text-[0.68rem] font-bold uppercase tracking-[0.16em] transition-colors ${solid ? "bg-primary text-primary-foreground hover:bg-forest-soft" : "bg-cream text-forest hover:bg-secondary"}`}>Book your stay</a>
        </div>
        <button onClick={() => setOpen((value) => !value)} className="flex h-11 w-11 items-center justify-center xl:hidden" aria-label={open ? "Close menu" : "Open menu"}>{open ? <X/> : <Menu/>}</button>
      </div>
      {open && <div className="border-t border-border bg-cream px-6 pb-8 pt-5 text-foreground xl:hidden">
        <nav className="grid gap-1" aria-label="Mobile navigation">{links.map(([label,to]) => <Link key={to} to={to} className="border-b border-border/60 py-3 font-display text-2xl">{label}</Link>)}</nav>
        <a href={whatsappHref} target="_blank" rel="noreferrer" className="mt-6 flex items-center justify-between bg-primary px-5 py-4 text-sm font-semibold uppercase tracking-widest text-primary-foreground">Book your stay <ArrowUpRight size={18}/></a>
      </div>}
    </header>
    <main>{children}</main>
    <a href={whatsappHref} target="_blank" rel="noreferrer" aria-label="Book Oaktree Homestay on WhatsApp" className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-xl transition-transform hover:scale-105"><MessageCircle size={24}/></a>
    <footer className="bg-forest text-primary-foreground">
      <div className="mx-auto max-w-[1400px] px-6 py-16 lg:px-10 lg:py-24">
        <div className="grid gap-12 border-b border-primary-foreground/20 pb-14 lg:grid-cols-[1.2fr_.8fr_.8fr]">
          <div><p className="font-display text-4xl">OAKTREE HOMESTAY</p><p className="mt-5 max-w-md text-sm leading-7 text-primary-foreground/70">A peaceful Himalayan home among green hills and fruit orchards in Kumarsain.</p><p className="mt-5 text-sm leading-7">Nog Kenchi, Kirti Road<br/>Kumarsain, Himachal Pradesh 172031</p></div>
          <div><p className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-gold">Explore</p><div className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm">{links.filter(([,to]) => !["/amenities","/experiences"].includes(to)).map(([label,to]) => <Link key={to} to={to} className="text-primary-foreground/75 transition-colors hover:text-gold">{label}</Link>)}</div></div>
          <div><p className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-gold">Booking & enquiry</p><a href={phoneHref} className="font-display text-2xl">{phoneDisplay}</a><a href={whatsappHref} target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 border-b border-gold pb-2 text-xs font-bold uppercase tracking-[0.18em]">Book on WhatsApp <ArrowUpRight size={15}/></a></div>
        </div>
        <div className="flex flex-col gap-4 pt-7 text-xs text-primary-foreground/55 sm:flex-row sm:items-center sm:justify-between"><p>© 2026 Oaktree Homestay, Kumarsain</p><p className="font-display text-xl text-primary-foreground">Escape to the quiet side of Himachal.</p></div>
      </div>
    </footer>
  </>;
}

export function PageHero({ image, eyebrow, title, children, position = "center" }: { image: string; eyebrow: string; title: string; children?: ReactNode; position?: string }) {
  return <section className="relative flex min-h-[70vh] items-end overflow-hidden bg-forest text-primary-foreground">
    <img src={image} alt="" className={`absolute inset-0 h-full w-full object-cover ${position}`} />
    <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/35 to-forest/10"/>
    <div className="relative mx-auto w-full max-w-[1400px] px-6 pb-16 pt-36 lg:px-10 lg:pb-24"><p className="mb-5 text-xs font-bold uppercase tracking-[0.28em] text-gold">{eyebrow}</p><h1 className="max-w-4xl font-display text-5xl leading-[.95] text-balance sm:text-7xl lg:text-[6.5rem]">{title}</h1>{children && <div className="mt-6 max-w-2xl text-base leading-8 text-primary-foreground/80 lg:text-lg">{children}</div>}</div>
  </section>;
}

export function BookingBand() {
  return <section className="bg-gold px-6 py-12 text-forest lg:px-10"><div className="mx-auto flex max-w-[1400px] flex-col gap-7 lg:flex-row lg:items-center lg:justify-between"><div><p className="text-xs font-bold uppercase tracking-[0.24em]">Your mountain pause awaits</p><h2 className="mt-2 font-display text-4xl lg:text-5xl">Come home to the hills.</h2></div><div className="flex flex-wrap gap-3"><a href={phoneHref} className="border border-forest px-5 py-3 text-xs font-bold uppercase tracking-widest">Call now</a><a href={whatsappHref} target="_blank" rel="noreferrer" className="bg-forest px-5 py-3 text-xs font-bold uppercase tracking-widest text-primary-foreground">Book your stay</a></div></div></section>;
}