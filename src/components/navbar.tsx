"use client";

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';


interface INavbarProps {

}

const navdata = [
    { text: "Home", pathname: '/' },
    { text: "About", pathname: '/about' },
    { text: "Projects", pathname: '/projects' },
]

const Navbar: React.FunctionComponent<INavbarProps> = (props) => {
    const pathname = usePathname()
    return (
        <div className="flex w-full gap-4 pr-10 justify-end items-center h-14 shadow-md fixed top-0 bg-white">
            <Link href={'/'} className="ml-12 w-full hover:cursor-pointer text-xl font-bold">Navazdeen</Link>
            {
                navdata.map(nav => (
                    <Link href={nav.pathname} key={nav.text} className={cn(" hover:cursor-pointer", pathname === nav.pathname ? 'text-blue-400' : 'hover:text-blue-400')}>{nav.text}</Link>
                ))
            }
            <Link href={'Resume.pdf'} className="border border-1 border-blue-400 px-2 rounded-full hover:bg-blue-300 hover:text-white hover:cursor-pointer">Resume</Link>
        </div>
    );
};

export default Navbar;
