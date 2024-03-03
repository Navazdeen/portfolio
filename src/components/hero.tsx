import * as React from 'react';
import Image from 'next/image';


interface IHeroProps {
}

const Hero: React.FunctionComponent<IHeroProps> = (props) => {
    return (
        <div className='flex place-content-center mt-20 place-items-center bg-slate-200/20'>
            <div className='flex w-5/6 justify-between'>
                <div className='flex flex-col space-y-4 self-center'>
                    <p className='font-medium text-lg'>I am</p>
                    <h2 className='font-extrabold text-2xl'>Navazdeen</h2>
                    <p className='text-muted-foreground'>Contemplative coder and analyst. Inspired by tough problems</p>
                    <div className='text-lg text-white font-medium font-sans bg-gradient-to-r from-blue-800/60 to-cyan-400/80 w-fit px-8 py-2 cursor-pointer'>My Projects</div>
                </div>
                <div className='flex'>
                    <Image src="/profile_navaz.jpg" width={'320'} height={384} alt="" className='object-cover w-full max-w-fit h-96' />
                </div>
            </div>
        </div>
    );
};

export default Hero;
