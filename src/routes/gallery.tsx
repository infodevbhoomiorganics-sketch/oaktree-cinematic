import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight, Expand } from "lucide-react";
import { PageHero } from "@/components/PageSections";
import { pageHead, photos } from "@/lib/site";

export const Route = createFileRoute("/gallery")({ head: () => pageHead("Gallery | Oaktree Homestay Kumarsain", "View rooms, mountain landscapes, orchard gatherings and home-cooked food at Oaktree Homestay in Kumarsain, Himachal Pradesh.", "/gallery"), component: GalleryPage });
const gallery = [
  [photos.greenValley,"Green Himalayan valley from Oaktree Homestay","lg:col-span-7 lg:row-span-2"],
  [photos.roomWarm,"Warm guest room at Oaktree Homestay","lg:col-span-5"],
  [photos.food,"Fresh home-cooked food at Oaktree Homestay","lg:col-span-5"],
  [photos.balconyReflection,"Long balcony reflecting the Himalayan landscape","lg:col-span-4 lg:row-span-2"],
  [photos.roomBright,"Bright Oaktree Homestay bedroom","lg:col-span-4"],
  [photos.orchardGathering,"Outdoor gathering beneath trees at Oaktree Homestay","lg:col-span-4"],
  [photos.roomHills,"Guest room with mountain windows","lg:col-span-7"],
  [photos.balconyView,"Balcony chairs facing the valley","lg:col-span-5"],
  [photos.corridor,"Interior corridor at Oaktree Homestay","lg:col-span-4"],
  [photos.roomView,"Guest bedroom with Himalayan outlook","lg:col-span-4"],
  [photos.greenValley,"Balcony table overlooking the green valley","lg:col-span-4"],
] as const;

function GalleryPage(){const [active,setActive]=useState<number|null>(null); useEffect(()=>{if(active===null)return; const key=(e:KeyboardEvent)=>{if(e.key==="Escape")setActive(null);if(e.key==="ArrowRight")setActive((active+1)%gallery.length);if(e.key==="ArrowLeft")setActive((active-1+gallery.length)%gallery.length)};document.addEventListener("keydown",key);document.body.style.overflow="hidden";return()=>{document.removeEventListener("keydown",key);document.body.style.overflow=""}},[active]); return <><PageHero image={photos.balconyView} eyebrow="A glimpse of Oaktree" title="The stillness, in frames."><p>Rooms warmed by wood, orchard shade and wide Himalayan views—seen as they truly are.</p></PageHero><section className="mx-auto max-w-[1500px] px-4 py-16 lg:px-8 lg:py-24"><div className="grid auto-rows-[280px] grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-12">{gallery.map(([src,alt,span],i)=><button key={`${alt}-${i}`} onClick={()=>setActive(i)} className={`image-zoom group relative h-full w-full overflow-hidden text-left ${span}`} aria-label={`Open image: ${alt}`}><img src={src} alt={alt} className="h-full w-full object-cover"/><span className="absolute inset-0 bg-forest/0 transition-colors group-hover:bg-forest/25"/><Expand className="absolute bottom-5 right-5 text-primary-foreground opacity-0 transition-opacity group-hover:opacity-100"/></button>)}</div></section>{active!==null&&<div className="fixed inset-0 z-[80] flex items-center justify-center bg-forest/98 p-4" role="dialog" aria-modal="true" aria-label="Photo viewer"><button onClick={()=>setActive(null)} className="absolute right-5 top-5 z-10 flex h-12 w-12 items-center justify-center text-primary-foreground" aria-label="Close gallery"><X/></button><button onClick={()=>setActive((active-1+gallery.length)%gallery.length)} className="absolute left-2 z-10 flex h-14 w-14 items-center justify-center text-primary-foreground sm:left-6" aria-label="Previous image"><ChevronLeft size={32}/></button><img src={gallery[active][0]} alt={gallery[active][1]} className="max-h-[85vh] max-w-[90vw] object-contain"/><button onClick={()=>setActive((active+1)%gallery.length)} className="absolute right-2 z-10 flex h-14 w-14 items-center justify-center text-primary-foreground sm:right-6" aria-label="Next image"><ChevronRight size={32}/></button><p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-xs uppercase tracking-widest text-primary-foreground/70">{active+1} / {gallery.length}</p></div>}</>}