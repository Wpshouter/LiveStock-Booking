import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const page = async() => {
      const session = await auth.api.getSession ({
            headers: await headers()
        })
        if(session) {
               return (
          <div className='bg-[#FDF6E3] px-5 md:px-0'>
            <div className='container mx-auto'>
              <h3 className='text-3xl font-bold mb-15 pt-15  text-[#8B5E3C]'>My Profile</h3>
            <div className='bg-white rounded-xl max-w-2xl mx-auto p-5 text-center shadow-md mb-20'>
        
                <p className='text-center'><Image className='rounded-full border-gray-800  border 1 mx-auto' width={100} height={100} alt="user image" src={session?.user.image} /></p>
                        <h2 className='text-2xl font-bold text-slate-900 mt-4 mb-1'>Name: {session.user.name}</h2>
                           <p className='text-sm font-semibold text-gray-900 mb-10'>Email: {session.user.email}</p>
                           <Link href="/update-user"><button className='btn btn-primary bg-[#FDAB03] border-[#FDAB03] text-black hover:bg-orange-500'>Update</button></Link>
            </div>
        </div>
          </div>
    );
    
        }
   
};

export default page;