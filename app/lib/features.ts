export type Feature = {
    title: string;
    description: string;
    link: `/features/${string}` | "";
};

/**
 * NOTE: The link property is used to link to the feature page.
 *
 */
export const features: Feature[] = [
    {
        title: "Specialized IT solutions",
        description:
            "Abdellatif Dev will empower and guide you to realize your full potential.",
        link: "",
    },
    {
        title: "High quality solution",
        description: "We Provide High Quality Solutions for Your Business",
        link: "",
    },
    {
        title: "UX / UI",
        description: "We creating visually appealing and user-friendly UI",
        link: "",
    },
];
