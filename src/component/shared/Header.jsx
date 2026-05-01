'use client'
import Image from 'next/image';
import React from 'react';
import NavLink from './NavLink';
import Link from 'next/link';
import { FiLogIn } from 'react-icons/fi';
import { SiGnuprivacyguard } from 'react-icons/si';
import { authClient } from '@/lib/auth-client';
import { SlLogout } from 'react-icons/sl';

const Header = () => {
    

const { data: session, isPending } =  authClient.useSession();
console.log(session, "session");
    const links = <>
            <li>
                <NavLink href="/" className="">Home</NavLink>  
            </li>
            <li>
                <NavLink href="/Animals" className="">All Animals</NavLink>
            </li>
            </>
          
 
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                    </div>
                    <Link href="/" className=""><Image alt="logo" loading='eager' className='max-w-[80%] w-auto h-auto' src='/logo.png' width={250} height={100} /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                      {links}
                    </ul>
                </div>
                <div className="navbar-end space-x-4">
                    { isPending ? <span className="loading loading-spinner text-success"></span> :
                        (session) ? 
                        <div className='flex gap-3 items-center'>   
                        <button onClick={async () => {  await authClient.signOut() }} className='btn btn-primary'>
                        <SlLogout className='text-[20px]'/>
                            Logout
                        </button>
                        <p><Image className='rounded-full border-gray-800  border 1' width={50} height={50} alt="user image" src={session?.user.image} /></p>
                    </div>
                    :
                    <>
                         <Link className='btn btn-primary' href="/Login">
                    <FiLogIn className='text-[20px]'/>
                        Login
                    </Link>

                    <Link className='btn btn-accent text-white' href="/Register">
                     <SiGnuprivacyguard className='text-[20px]' ></SiGnuprivacyguard>
                        Register
                    </Link>
                    </>
                    } 
                   
                     
                </div>
            </div>
        </div>
    );
};

export default Header;