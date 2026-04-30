'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import path from 'node:path';
import React from 'react';

const NavLink = ({href, children, className}) => {
    const pathName = usePathname();
    console.log(pathName, "pathname");
    const isActive = href === pathName;
    return (
        <Link className={`${isActive ? "bg-red-500" : ''} ${className} ` } href={href}>
            {children}
        </Link>
    );
};

export default NavLink;