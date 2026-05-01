import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const AnimalCard = ({ animal }) => {
    console.log(animal);
  const { id, name, type, breed, price, weight, age, location, category, image } = animal;

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden flex flex-col h-full hover:shadow-md transition-shadow duration-300">
      <div className="relative w-full h-56 bg-slate-100">
        <Image 
          src={image} 
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-top"
        />
        <span className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-medium px-3 py-1 rounded-full uppercase tracking-wider">
          {type}
        </span>

        <span className={`absolute top-4 right-4 text-xs font-semibold px-3 py-1 rounded-full ${
          category === "Large Animal" 
            ? "bg-emerald-100 text-emerald-800" 
            : "bg-blue-100 text-blue-800"
        }`}>
          {category}
        </span>
      </div>


      <div className="p-5 flex flex-col flex-grow">
        
        
        <div className="mb-2">
          <h3 className="text-xl font-bold text-slate-800 tracking-tight leading-tight">{name}</h3>
          <p className="text-sm text-slate-500 font-medium mt-0.5">{breed}</p>
        </div>

       
        <div className="mb-4">
          <span className="text-2xl font-black text-[#FDAB03]">
            ৳ {price.toLocaleString('en-IN')}
          </span>
          <span className="text-xs text-slate-400 ml-1">BDT</span>
        </div>


        <div className="grid grid-cols-3 gap-2 py-3 border-t border-b border-slate-100 text-center mb-5">
          <div>
            <span className="block text-[10px] text-slate-400 uppercase font-bold tracking-wider">Weight</span>
            <span className="text-sm font-bold text-slate-700">{weight} kg</span>
          </div>
          <div>
            <span className="block text-[10px] text-slate-400 uppercase font-bold tracking-wider">Age</span>
            <span className="text-sm font-bold text-slate-700">{age} yrs</span>
          </div>
          <div>
            <span className="block text-[10px] text-slate-400 uppercase font-bold tracking-wider">Location</span>
            <span className="text-sm font-bold text-slate-700 truncate block px-1" title={location}>
              {location}
            </span>
          </div>
        </div>


        <div className="mt-auto">
          <Link href={`/Animal/${id}`} className="w-full block">
            <button className="w-full py-3 bg-[#FDAB03]  hover:bg-orange-500 text-slate-900 hover:text-white font-bold rounded-md text-sm transition-colors duration-200 uppercase tracking-wider">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
