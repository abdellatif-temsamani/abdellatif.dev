import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: ["/", "/about", "/contact", "/app/delete"],
        },
        sitemap: "https://abdellatif.dev/sitemap.xml",
    };
}
