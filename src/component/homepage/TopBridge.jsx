import React from 'react';

const TopBridge = ({animals}) => {
    return (
               <div className='bg-[#ffff] pb-25'>
            <div className='container mx-auto'>
                <h3 className='text-3xl md:text-4xl font-bold text-center mb-15 pt-15 text-[#8B5E3C]  p-2 max-w-74 mx-auto'>Top Breeds</h3>
                <div>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {animals.map((animal) => (
            <div
              key={animal.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={animal.image}
                alt={animal.name}
                className="w-full h-48 object-cover object-center-top"
              />
              <div className="p-5 text-left">
                <h3 className="text-xl font-semibold text-green-700 mb-2">
                  {animal.breed}
                </h3>
                <p className="text-gray-700 text-sm">{animal.description}</p>
              </div>
            </div>
          ))}
        </div>
                </div>
        </div>  </div>
    );
};

export default TopBridge;


