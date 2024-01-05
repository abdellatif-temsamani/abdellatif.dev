/**
 * Feature data for the home page.
 * responsible for the data of the features section
 */
export type Feature = {
    title: string;
    description: string;
    link: `/features/${string}` | "";
};

/**
 * list of features
 */
export const features: Feature[] = [
    {
        title: "Specialized IT solutions",
        description:
            "Abdellatif Dev will empower and guide you to realize your full potential.",
        link: "/features/specialized-it-solutions",
    },
    {
        title: "High quality solution",
        description: "We Provide High Quality Solutions for Your Business",
        link: "/features/quality-assurance",
    },
    {
        title: "UX / UI",
        description: "We creating visually appealing and user-friendly UI",
        link: "/features/ux-ui",
    },
];
