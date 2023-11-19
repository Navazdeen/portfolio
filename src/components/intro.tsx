import Link from 'next/link';
import * as React from 'react';

interface IIntroProps {
}

const Intro: React.FunctionComponent<IIntroProps> = (props) => {
    return (
        <div className='flex place-content-center place-items-center mt-4 h-[480px] border-0 border-b-2'>
            <div className="flex flex-col w-5/6 space-y-2">
                <h1 className='text-4xl font-bold'>PERSONAL DETAILS</h1>
                <p className='leading-6 text-muted-foreground px-8 border-0 border-l-2 border-blue-400 py-8'>A few interesting things about me. I love to read science fiction (my favorite is Frank Herbert's Dune). I am also an avid gamer. I love to play competitive strategy games and first-person shooters. Lastly, I love learning. Every day I push myself to learn something new, whether that be about machine learning, software engineering, or miscellaneous facts about the universe.
                <br />
                <br />
                Passionate about leveraging cutting-edge technologies, I am a Dynamic Senior Data Analyst with a strong foundation in retail analytics, specializing in pricing recommendation and budget estimation. Recently delving into the realm of Generative AI, I bring a forward-thinking approach to drive innovation and glean deeper insights. With a proven track record at Tiger Analytics and prior experience as a Software Engineer at TCS, my journey spans 3 years, reflecting a commitment to staying at the forefront of evolving data science landscapes.
                <br />
                <br />
                Outside the world of data analytics, I am an avid enthusiast of microcontrollers. During my free time, I thoroughly enjoy experimenting with diverse platforms such as ESP32, Raspberry Pi Pico, and Arduino (ATmega328P, ATtiny85).
                </p>
                <Link href={'/about'} className='bg-blue-400/60 w-fit px-6 py-2 text-lg font-medium text-white hover:bg-blue-400 cursor-pointer'>About Me</Link>
            </div>
        </div>
    );
};

export default Intro;
