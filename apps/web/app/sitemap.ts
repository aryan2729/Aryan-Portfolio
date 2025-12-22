import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://aryancode27.vercel.app",
      lastModified: new Date(),
    },
  ];
}
