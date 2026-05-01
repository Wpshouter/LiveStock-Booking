'use client'
import Image from 'next/image';
import React from 'react';
import NavLink from './NavLink';
import Link from 'next/link';
import { FiLogIn } from 'react-icons/fi';
import { SiGnuprivacyguard } from 'react-icons/si';
import { authClient } from '@/lib/auth-client';
import { SlLogout } from 'react-icons/sl';
import { usePathname } from 'next/navigation';

const Header = () => {
    

const { data: session, isPending } =  authClient.useSession();
console.log(session, "session");
    const links = <>
            <li>
                <NavLink href="/" className="text-left p-1 pb-0">Home</NavLink>  
            </li>
            <li>
                <NavLink href="/Animals" className="p-1 pb-0">All Animals</NavLink>
            </li>
            </>
          
  const pathName = usePathname();
    return (
        <div className={ `${(pathName === '/') ? 'bg-transparent' : 'bg-base-100 shadow-sm '} relative z-20`}>
            <div className=" navbar border-0 container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow space-y-3">
                        {links}
                    </ul>
                    </div>
                       <ul className="hidden lg:flex menu menu-horizontal px-1 space-x-3">
                      {links}
                    </ul>

                
                </div>
                <div className="navbar-center hidden lg:flex">
                     <Link href="/" className=""><Image alt="logo" loading='eager' className={`${(pathName === '/') ? 'max-w-[85%]' : 'max-w-[65%]'} w-auto h-auto py-2`} src='/logo-r.png' width={250} height={100} /></Link>
                </div>
                <div className="navbar-end space-x-4">
                    { isPending ? <span className="loading loading-spinner text-success"></span> :
                        (session) ? 
                        <div className='flex gap-3 items-center'>   
                        <button onClick={async () => {  await authClient.signOut() }} className='btn btn-primary'>
                        <SlLogout className='text-[20px]'/>
                            Logout
                        </button>
                        <Link href="/my-profile"><p><Image className='rounded-full border-gray-800  border 1' width={50} height={50} alt="user image" src={session?.user.image} /></p></Link>
                    </div>
                    :
                    <>
                         <Link className='btn btn-primary bg-[#FDAB03] border-[#FDAB03] text-black hover:bg-orange-500' href="/Login">
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