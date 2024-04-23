'use client'
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"
import { useState } from "react"
import NavItems from "./NavItems"

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <nav className=" relative flexBetween max-container padding-container relative z-30 py-5 flex-wrap">
            <Link href="/">
                <Image src={"/hilink-logo.svg"} alt="logo" width={74} height={29} />
            </Link>
            <NavItems variant="hidden h-full gap-12 lg:flex" />


            <div className="lg:flexCenter hidden">
                <Button type="button" icon="/user.svg" variant="btn_dark_green" title="Login" />
            </div>
            <div onClick={() => (setToggle(!toggle))} className="inline-block cursor-pointer lg:hidden">
                <Image src={"/menu.svg"} alt="menu" width={32} height={32} />
            </div>
            {toggle &&
                <div className={`w-full mt-5 lg:hidden absolute left-0 z-30 top-[50px]`}>
                    <NavItems variant="flex flex-col bg-gray-200 p-3 rounded" />
                </div>
            }

        </nav>
    )
}
export default Navbar