import Link from 'next/link';
import Image from 'next/image'; // 1. Import the Next.js Image component
import React from 'react';
import { RxEyeOpen } from 'react-icons/rx';

const Banner = () => {
  return (
    <div className='-mt-40'>
   
      <div className="hero min-h-[80vh] relative overflow-hidden bg-bottom">
        

        <Image
          src="/bann3.png"
          alt="Livestock banner background"
          fill 
          priority 
          sizes="100vw"
          style={{
            objectFit: 'cover', 
            objectPosition: 'bottom',
            zIndex: 0, 
          }}
        />


        <div className="bg-black/40 absolute inset-0 z-10"></div> {/* Optional overlay adjust if needed */}
        
        <div className="hero-content text-neutral-content text-center relative z-20">
          <div className="max-w-[60vw]">
            <h1 className="mb-1 text-3xl text-white font-semibold text-shadow-2xs uppercase">
              QurbaniHat- Book LiveStock at Ease
            </h1>
            <p className="mb-1">
              Fresh Animals. Affordable Price
            </p>
            <div className="divider mt-0"></div>
            <Link href="/Animals">
              <button className="btn btn-primary bg-[#FDAB03] border-0   hover:bg-orange-500 text-slate-900 hover:text-white font-bold  text-sm transition-colors duration-200 uppercase tracking-wider rounded-md">
                <RxEyeOpen className='text-xl'/> Browse Animals
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;