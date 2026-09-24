import roomWarm from "@/assets/oaktree-room-warm.png";
import roomBright from "@/assets/oaktree-room-bright.png";
import food from "@/assets/oaktree-food.png";
import roomHills from "@/assets/oaktree-room-hills.png";
import balconyReflection from "@/assets/oaktree-balcony-reflection.png";
import roomView from "@/assets/oaktree-room-view.png";
import balconyView from "@/assets/oaktree-balcony-view.png";
import corridor from "@/assets/oaktree-corridor.png";
import orchardGathering from "@/assets/oaktree-orchard-gathering.png";
import greenValley from "@/assets/oaktree-green-valley.png";

export const photos = { roomWarm, roomBright, food, roomHills, balconyReflection, roomView, balconyView, corridor, orchardGathering, greenValley };
export const phoneDisplay = "+91 98171 39139";
export const phoneHref = "tel:+919817139139";
export const whatsappHref = "https://wa.me/919817139139?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20staying%20at%20Oaktree%20Homestay%2C%20Kumarsain.";
export const directionsHref = "https://www.google.com/maps/search/?api=1&query=Oaktree+Homestay+Nog+Kenchi+Kirti+Road+Kumarsain+Himachal+Pradesh+172031";

export const hotelJsonLd = {
  "@context": "https://schema.org",
  "@type": ["Hotel", "LocalBusiness"],
  name: "Oaktree Homestay",
  telephone: "+91 98171 39139",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Nog Kenchi, Kirti Road",
    addressLocality: "Kumarsain",
    addressRegion: "Himachal Pradesh",
    postalCode: "172031",
    addressCountry: "IN",
  },
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Free Wi-Fi", value: true },
    { "@type": "LocationFeatureSpecification", name: "Complimentary Parking", value: true },
    { "@type": "LocationFeatureSpecification", name: "Pet-Friendly", value: true },
    { "@type": "LocationFeatureSpecification", name: "Wheelchair Accessible", value: true },
  ],
};

export function pageHead(title: string, description: string, path: string) {
  return {
    meta: [
      { title }, { name: "description", content: description },
      { property: "og:title", content: title }, { property: "og:description", content: description },
      { property: "og:type", content: "website" }, { property: "og:url", content: path },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: path }],
  };
}