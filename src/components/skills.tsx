import * as React from 'react';
import { Progress } from '@/components/ui/progress';

interface ISkillsProps {

}

interface Skills {
    skill: string,
    value: number
}

interface Dictionary {
    [key: string]: Skills[]
}

const data: Dictionary = {
    Devops: [{
        skill: 'Servers(Linux/Bash)',
        value: 4
    },
    {
        skill: 'Database(SQL)',
        value: 4
    },
    {
        skill: 'Big Data(Spark)',
        value: 2.3
    }],
    "Machine Learning": [{
        skill: 'Python',
        value: 5
    },
    {
        skill: 'NLP',
        value: 3.8
    },
    {
        skill: 'Computer Vision',
        value: 2.8
    }],
    "Data Analytics": [{
        skill: 'Statistical Methods',
        value: 4.5
    },
    {
        skill: 'Visualization',
        value: 4.2
    },
    {
        skill: 'Excel',
        value: 3.8
    }],
}

const Skills: React.FunctionComponent<ISkillsProps> = (props) => {
    return (
        <div className='flex place-content-center place-items-center min-h-[480px] max-h-[580px] border-0 border-b-2'>
            <div className="flex flex-col w-5/6 space-y-2">
                <h1 className='text-4xl font-bold text-center'>Skills Expertise</h1>
                <p className='text-muted-foreground text-center pb-8 whitespace-pre leading-6'>1 - Basic  2 - Novice  3 - Intermediate <br></br> 4 - Advanced 5 - Expert</p>
                <div className="grid grid-cols-3 w-full py-8 gap-2">
                    {Object.keys(data).map((domain) => (
                        <div key={domain} className='flex flex-col h-40 text-center space-y-4 justify-center items-center gap-2 space-x-4'>
                            <h2 className='text-lg font-bold capitalize'>{domain}</h2>
                            {data[domain].map((skill: any) => (
                                <div key={skill} className='flex flex-col self-stretch space-y-2'>
                                    <p className='self-end text-muted-foreground text-base'>
                                        {skill.skill} - {skill.value}
                                    </p>
                                    <Progress value={skill.value * 20} ></Progress>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
