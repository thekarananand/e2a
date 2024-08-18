import { GithubIcon, TwitterIcon, HexagonIcon } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { SheetLeftbar } from "./leftbar";
import { SheetClose } from "@/components/ui/sheet";

export const NAVLINKS = [
    {
        title: "About",
        href: `/#about`,
    },
    {
        title: "Program",
        href: "/program",
    },
    {
        title: "Announcements",
        href: "/announcements",
    },
    {
        title: "Committee",
        href: "/committee",
    },
    {
        title: "Contact",
        href: "/contact",
    },
];

export function Navbar() {
    return (
        <nav className="w-full border-b h-16 sticky top-0 z-50 lg:px-4 px-2 backdrop-filter backdrop-blur-xl bg-opacity-5">
            <div className="sm:p-3 p-2 max-w-[1530px] mx-auto h-full flex items-center justify-between gap-2">
                <div className="flex items-center gap-5">
                    <SheetLeftbar />
                    <div className="flex items-center gap-8">
                        <div className="flex">
                            <Logo />
                        </div>
                        <div className="lg:flex hidden items-center justify-between gap-5 text-sm font-medium text-muted-foreground">
                            <NavMenu />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export function Logo() {
    return (
        <Link href="/" className="flex items-center gap-2.5">
            <HexagonIcon className="w-7 h-7 text-muted-foreground fill-current" />
            <h2 className="text-md font-bold">E2A Conference</h2>
        </Link>
    );
}

export function NavMenu({ isSheet = false }) {
    return (
        <>
            {NAVLINKS.map((item) => {
                const Comp = (
                    <Link href={item.href}
                        className={buttonVariants(

                            isSheet ? (
                                {
                                    variant: "outline",
                                    size: "lg2",
                                    className: "py-3 px-6",
                                }
                            ) : (
                                {
                                    variant: "link",
                                    size: "sm",
                                    className: "px-0",
                                }
                            )
                        )}>
                        {item.title}
                    </Link>

                );
                return isSheet ? (
                    <SheetClose key={item.title + item.href} asChild>
                        {Comp}

                    </SheetClose>
                ) : (
                    Comp
                );
            })}

            <Link href={'/register'}
                className={buttonVariants(


                    isSheet ? (
                        {
                            variant: "d5",
                            size: "lg2",
                            className: "py-3 px-6",
                        }
                    ) : (
                        {
                            variant: "d5",
                            className: "px-6",
                        }
                    )
                )}>
                Register
            </Link>
        </>
    );
}
