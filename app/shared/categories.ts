import {
  photosBabySofia,
  photosBabyEzra,
  photosRyan,
  photosLisaForGlamour,
  photosNYFashionWeek,
  photosBodaElSalvador,
  photosBodaAnayLucas,
  photosJaycito,
  photosAtlantaAutos,
  photosCorporateHeadshots
} from "./constants";
import {
  allGraziaPhotos,
  allNFWPhotos,
  allAnnyTenorioPhotos,
  allMissUniverse,
  allStephenHarveyPhotos,
  allRiahPhotos,
  allOmegaPhotos,
  allMezclalUnionPhotos
} from "./editorial-constants";

export const photographyCategories = [
  {
    id: "maternity",
    title: "Maternity",
    desc: "Graceful, high-end maternity sessions capturing the beauty and elegance of your journey.",
    items: [...photosBabySofia, ...photosBabyEzra]
  },
  {
    id: "editorial",
    title: "Editorial",
    desc: "Magazine covers, advertising campaigns, concept development, styling, and full art direction.",
    items: [...photosRyan, ...photosLisaForGlamour]
  },
  {
    id: "wedding",
    title: "Wedding",
    desc: "Iconic, cinematically captured moments that turn your wedding day into a timeless narrative.",
    items: [...photosBodaElSalvador, ...photosBodaAnayLucas]
  },
  {
    id: "events",
    title: "Events",
    desc: "Elite coverage for luxury parties, private events, and high-profile gatherings.",
    items: photosNYFashionWeek
  },
  {
    id: "personal-branding",
    title: "Personal Branding",
    desc: "Premium personal branding for attorneys, realtors, entrepreneurs, and luxury businesses.",
    items: photosJaycito
  },
  {
    id: "commercial",
    title: "Commercial",
    desc: "High-end product and commercial photography designed for luxury brand campaigns.",
    items: photosAtlantaAutos
  },
  {
    id: "corporate-headshots",
    title: "Corporate Headshots",
    desc: "Modern headshots, team portraits, and strategic visual content for social and web presence.",
    items: photosCorporateHeadshots
  }
];

export const editorialCategories = [
  {
    id: "grazia-digital",
    title: "Grazia Digital Magazine",
    category: "Fashion Editorial",
    cover: allGraziaPhotos[0],
    desc: "Avant-garde fashion editorial that challenges convention and embraces raw, cinematic aesthetics.",
    items: allGraziaPhotos
  },
  {
    id: "new-york-fashion-week",
    title: "NY Fashion Week",
    category: "Runway & Backstage",
    cover: allNFWPhotos[0],
    desc: "Extensive backstage and runway coverage from New York Fashion Week.",
    items: allNFWPhotos
  },
  {
    id: "anny-tenorio",
    title: "Anny Tenorio",
    category: "Editorial Portraiture",
    cover: allAnnyTenorioPhotos[0],
    desc: "Intimate and meticulously lit studio sessions focusing on raw emotion and character.",
    items: allAnnyTenorioPhotos
  },
  {
    id: "miss-universe",
    title: "Miss Universe",
    category: "High Fashion",
    cover: allMissUniverse[0],
    desc: "World-class editorial captures highlighting the reigning beauty queens.",
    items: allMissUniverse
  },
  {
    id: "stephen-harvey",
    title: "Stephen Harvey",
    category: "Corporate & Lifestyle",
    cover: allStephenHarveyPhotos[0],
    desc: "Sleek, high-contrast imagery designed for the modern executive and thought leader.",
    items: allStephenHarveyPhotos
  },
  {
    id: "riah",
    title: "Riah",
    category: "Brand Story",
    cover: allRiahPhotos[0],
    desc: "Narrative-driven visual campaigns that treat brands like unfolding films.",
    items: allRiahPhotos
  },
  {
    id: "omega",
    title: "Omega",
    category: "Luxury Campaign",
    cover: allOmegaPhotos[0],
    desc: "Showcasing timeless luxury through high-end commercial focus and impeccable details.",
    items: allOmegaPhotos
  },
  {
    id: "mezcal-union",
    title: "Mezcal Union",
    category: "Commercial Lifestyle",
    cover: allMezclalUnionPhotos[0],
    desc: "Elevated lifestyle and product photography bringing authentic brand visions to life.",
    items: allMezclalUnionPhotos
  }
];
