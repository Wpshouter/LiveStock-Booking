'use client'
import LoadingPage from '@/app/loading';
import { AnimalCard } from '@/component/shared/AnimalCard';
import { getAnimalsData } from '@/lib/data';
import React, { useEffect, useState } from 'react';

const page = () => {
 
    //const Animals = await getAnimalsData();
    const [sortEd, setSortEd] = useState([]);
      const [loading, setLoading] = useState(true); // track loading state
    const do_sorting_func = (e) => {
     
        const sortedAnimals = [...sortEd].sort((a, b) => {
               console.log(e.target.value);
    if (e.target.value == "Lowest to Highest") {
      return a.price - b.price; // lowest → highest
    }
    if (e.target.value == "Highest to Lowest") {
      return b.price - a.price; // highest → lowest
    }
    
    //return 0; // no sorting
  });
 console.log(sortedAnimals); 

    setSortEd(sortedAnimals);
    }
    useEffect(() => {
    async function loadAnimals() {
      try {
        setLoading(true); // start loading
        const res = await fetch("/animals.json");
        const data = await res.json();
        setSortEd(data);
      } catch (err) {
        console.error("Failed to fetch animals:", err);
      } finally {
        setLoading(false); // stop loading
      }
    }
    loadAnimals();
  }, []);
  if (loading) {
    return (
      <LoadingPage/>
    );
  }
    return (
        <div className='bg-[#FDF6E3]'>
            <div className='container mx-auto'>
                <div className='flex justify-between items-center'>
                     <h3 className='text-3xl font-bold mb-15 pt-15  text-[#8B5E3C]'>All Animals</h3>
                     <div>
                        <select onChange={(e) => do_sorting_func(e)} defaultValue="" className="select select-neutral">
                            <option selected="selected">Sort by price</option>
                            <option>Lowest to Highest</option>
                            <option>Highest to Lowest</option>
                        </select>
                     </div>
                </div>
               
                <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-25">
                        {sortEd.map((animal) => (
                        <AnimalCard key={animal.id} animal={animal} />
                        ))}
                </div>
            </div>
           
        </div>
    );
};

export default page;