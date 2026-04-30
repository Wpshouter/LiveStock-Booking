import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import React from 'react';

const Loading = () => {
    return (
        <div className='flex w-full justify-center items-center'>
            <DotLottieReact
                src="/loading.lottie"
                loop
                autoplay
                 style={{ width: "150px"}}
            />
        </div>
    );
};

export default Loading;