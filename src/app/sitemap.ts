import { MetadataRoute } from "next";

const URL = "https://abdellatif.dev";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: `${URL}/`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 1,
        },
        {
            url: `${URL}/contact`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${URL}/app/delete`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.8,
        },
    ];
}
