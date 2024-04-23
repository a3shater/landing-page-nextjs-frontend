import { NAV_LINKS } from "@/constants"
import Link from "next/link"

const NavItems = ({ variant }: { variant: string }) => {
    return (
        <div className={variant}>
            {
                NAV_LINKS.map((link) => (
                    <Link href={link.href} key={link.key}
                        className="regular-16 text-gray-50  cursor-pointer pb-1.5 transition-all hover:font-bold">{link.label}
                    </Link>
                ))
            }
        </div>
    )
}
export default NavItems