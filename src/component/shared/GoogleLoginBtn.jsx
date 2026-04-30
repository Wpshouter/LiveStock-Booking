'use client'
import { authClient } from '@/lib/auth-client';
import React from 'react';
import { FaGoogle } from 'react-icons/fa';

const GoogleLoginBtn = () => {
        const handle_google_login = async () => {
                      const data = await authClient.signIn.social({
                provider: "google",
              });
              console.log(data);
                }
    return (
        <button onClick={()=>handle_google_login()} className='btn bg-[#FA3702] border-0 my-4 w-xs  text-white p-4'><FaGoogle/> Google Login</button>
    );
};

export default GoogleLoginBtn;