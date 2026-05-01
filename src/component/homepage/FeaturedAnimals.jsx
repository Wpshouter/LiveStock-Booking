import React from 'react';
import { AnimalCard } from '../shared/AnimalCard';

const FeaturedAnimals = ({Animals}) => {
 

    return (
        <div className='bg-[#FDF6E3]'>
            <div className='container mx-auto'>
                <h3 className='text-3xl font-bold text-center mb-10 pt-15  text-[#8B5E3C]  max-w-74 mx-auto'>Featured Animals</h3>
        <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-25">
            {Animals.map((animal) => (
            <AnimalCard key={animal.id} animal={animal} />
            ))}
        </div>
        </div>
    </div>
    );
};

export default FeaturedAnimals;