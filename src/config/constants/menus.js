import APP_ICONS from "./icons";

export const mainMenu = [
    {
        title: "Dashboard",
        icon: APP_ICONS.Dashboard,
        link: "/admin/dashboard",
    },
    {
        title: "Analytics",
        icon: APP_ICONS.Analytics,
        link: "/admin/analytics",
    },
    {
        title: "Candidates",
        icon: APP_ICONS.User,
        link: "/admin/candidates",
    },
    {
        title: "Videos",
        icon: APP_ICONS.Videos,
        link: "/admin/videos",
    },
    {
        title: "Chats",
        icon: APP_ICONS.Chat,
        link: "/admin/chats",
    },
    {
        title: "Emails",
        icon: APP_ICONS.Email,
        link: "/admin/emails",
    },
    {
        title: "Settings",
        icon: APP_ICONS.Settings,
        link: "/admin/settings",
    },
];


export const emailSubsider = [
    {
        icon: APP_ICONS.List,
        title: "Emails",
        link: "/admin/emails"
    },
    {
        icon: APP_ICONS.List,
        title: "Email Logs",
        link: "/admin/emails/logs"
    },
    {
        icon: APP_ICONS.List,
        title: "Templates",
        link: "/admin/emails/templates"
    },
]
