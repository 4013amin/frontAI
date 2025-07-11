export type IThemes = "light" | "dark"

export type INavLink = {
    id: number
    name: string;
    href: string;
    icon: React.ReactNode;
}

export type IPhoneNumber = {
    phone: string
}

export type IOtpCode = {
    code: string
    phone: string
}
