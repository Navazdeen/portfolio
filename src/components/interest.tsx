import { CloudCog, MessageCircle, GraduationCap, Layers3, Boxes, KanbanSquare } from 'lucide-react';
import * as React from 'react';


interface IAreaInterestProps {
}

const interests =
    [
        {
            icon: CloudCog,
            title: "Cloud Compute",
            description: "I harness the power of AWS to seamlessly develop and deploy machine learning systems, leveraging the scalability and flexibility of cloud compute for efficient and dynamic productionization."
        },
        {
            icon: MessageCircle,
            title: "NLP",
            description: "I employ Natural Language Processing (NLP) techniques to unlock insights from textual data, transforming language into actionable intelligence for diverse applications."
        },
        {
            icon: GraduationCap,
            title: "Machine Learning",
            description: "I navigate the realm of Machine Learning, crafting intelligent systems that learn from data, adapt to challenges, and drive innovation across various domains."
        },
        {
            icon: Layers3,
            title: "Parallel Compute",
            description: "I optimize performance through parallel compute, harnessing the parallel processing capabilities to enhance speed and efficiency in complex computations and data-intensive tasks."
        },
        {
            icon: Boxes,
            title: "Collaboration",
            description: "I foster collaboration by seamlessly integrating people, tools, and ideas, creating a synergistic environment that drives innovation and achieves collective goals."
        },
        {
            icon: KanbanSquare,
            title: "Data Analytics",
            description: "I leverage data analytics to unveil meaningful patterns, extract actionable insights, and empower informed decision-making for impactful business strategies."
        },
    ]


const AreaInterest: React.FunctionComponent<IAreaInterestProps> = (props) => {
    return (
        <div className='flex place-content-center place-items-center h-[580px] border-0 border-b-2'>
            <div className="flex flex-col w-5/6 space-y-2">
                <h1 className='text-4xl font-bold text-center'>Area of Interest</h1>
                <p className='text-muted-foreground text-center'>Take a look at some of the things I love working on.</p>
                <div className="grid grid-cols-3 w-full py-8 gap-y-8">
                    {
                        interests.map(interest => (
                            <div className='flex flex-col h-40 text-center space-y-4 group hover:shadow-md' key={interest.title}>
                                <interest.icon className='self-center group-hover:stroke-blue-400' />
                                <h4 className='font-medium text-lg group-hover:text-blue-500'>{interest.title}</h4>
                                <p className='text-muted-foreground text-base'>{interest.description}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default AreaInterest;
