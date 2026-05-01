import React from 'react';

const QurbaniTips = () => {
    return (
          <div className='bg-[#FDF6E3]  pb-25'>
            <div className='container mx-auto'>
                <h3 className='text-3xl md:text-4xl font-bold text-center mb-0 pt-15 text-[#8B5E3C]  p-2 max-w-74 mx-auto'>Qurbani Tips</h3>
                 <section className="">
      <div className=" text-center">
        <p className="text-lg mb-10 text-slate-900">
          Essential guidance to ensure your Qurbani is performed correctly and meaningfully.
        </p>

        <div className="grid md:grid-cols-2 gap-8 text-left">
          {/* Tip 1 */}
          <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-3">Choose Healthy Animals</h3>
            <p>
              Ensure the cow or goat is free from defects, healthy, and meets the age requirements
              prescribed in Islamic rules.
            </p>
          </div>

          {/* Tip 2 */}
          <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-3">Correct Intention (Niyyah)</h3>
            <p>
              Make the intention sincerely for Allah before performing Qurbani. This is the foundation
              of the sacrifice.
            </p>
          </div>

          {/* Tip 3 */}
          <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-3">Timing Matters</h3>
            <p>
              Perform Qurbani after Eid prayer, within the days of Eid‑ul‑Adha (10th to 12th Dhul Hijjah).
            </p>
          </div>

          {/* Tip 4 */}
          <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-3">Distribution of Meat</h3>
            <p>
              Divide the meat into three parts: one for family, one for relatives/friends, and one for
              the poor and needy.
            </p>
          </div>
        </div>
      </div>
    </section>
        </div>
          </div>
    );
};

export default QurbaniTips;