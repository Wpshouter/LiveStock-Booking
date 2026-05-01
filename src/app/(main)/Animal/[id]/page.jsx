
import { AnimalCard } from '@/component/shared/AnimalCard';
import { getAnimalsData } from '@/lib/data';
import React from 'react';

const page = async ({params} ) => {
    //const params = useParams();
    const { id } = await params;
    console.log(id, "idsss");
    const Animals = await getAnimalsData();
    const Animal = Animals.find(a => a.id == id);
    console.log(Animal);
    return (
         <div className='bg-[#FDF6E3]'>
            <div className='container mx-auto'>
                   <h3 className='text-3xl font-bold mb-15 pt-15  text-[#8B5E3C]'>{Animal.name}</h3>
                    <AnimalCard animal={Animal} />
            </div>
         </div>
    );
};

export default page;