export type SiteConfig = typeof siteConfig;

export const siteConfig = {
    name: "Next.js + NextUI",
    description: "Make beautiful websites regardless of your design experience.",
    navItems: [
        {
            label: "Line Up",
            href: "/",
        },
        {
            label: "About Us",
            href: "/blog",
        },
        {
            label: "Gallery",
            href: "/about",
        },
    ],
    navMenuItems: [
        {
            label: "Line Up",
            href: "/",
        },
        {
            label: "About Us",
            href: "/",
        },
        {
            label: "Gallery",
            href: "/",
        },
    ],
    links: {
        github: "https://github.com/nextui-org/nextui",
        twitter: "https://twitter.com/getnextui",
        docs: "https://nextui.org",
        discord: "https://discord.gg/9b6yyZKmH4",
        sponsor: "https://patreon.com/jrgarciadev",
        instagram: "https://www.instagram.com/super.sabado/",
    },
};

