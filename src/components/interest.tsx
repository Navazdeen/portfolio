import { CloudCog, MessageCircle, GraduationCap, Layers3, Boxes, KanbanSquare } from 'lucide-react';
import * as React from 'react';


interface IAreaInterestProps {
}

const AreaInterest: React.FunctionComponent<IAreaInterestProps> = (props) => {
    return (
        <div className='flex place-content-center place-items-center h-[580px] border-0 border-b-2'>
            <div className="flex flex-col w-5/6 space-y-2">
                <h1 className='text-4xl font-bold text-center'>Area of Interest</h1>
                <p className='text-muted-foreground text-center'>Take a look at some of the things I love working on.</p>
                <div className="grid grid-cols-3 w-full py-8 gap-y-8">
                    <div className='flex flex-col h-40 text-center space-y-4 group hover:shadow-md'>
                        <CloudCog className='self-center group-hover:stroke-blue-400' />
                        <h4 className='font-medium text-lg group-hover:text-blue-500'>Cloud Compute</h4>
                        <p className='text-muted-foreground text-base'>I utilize AWS to develop and productionize machine learning systems.</p>
                    </div>
                    <div className='flex flex-col h-40 text-center space-y-4 group hover:shadow-md'>
                        <MessageCircle className='self-center group-hover:stroke-blue-400' />
                        <h4 className='font-medium text-lg group-hover:text-blue-500'>NLP</h4>
                        <p className='text-muted-foreground text-base'>I utilize AWS to develop and productionize machine learning systems.</p>
                    </div>
                    <div className='flex flex-col h-40 text-center space-y-4 group hover:shadow-md'>
                        <GraduationCap className='self-center group-hover:stroke-blue-400' />
                        <h4 className='font-medium text-lg group-hover:text-blue-500'>Machine Learning</h4>
                        <p className='text-muted-foreground text-base'>I utilize AWS to develop and productionize machine learning systems.</p>
                    </div>
                    <div className='flex flex-col h-40 text-center space-y-4 group hover:shadow-md'>
                        <Layers3 className='self-center group-hover:stroke-blue-400' />
                        <h4 className='font-medium text-lg group-hover:text-blue-500'>Parallel Compute</h4>
                        <p className='text-muted-foreground text-base'>I utilize AWS to develop and productionize machine learning systems.</p>
                    </div>
                    <div className='flex flex-col h-40 text-center space-y-4 group hover:shadow-md'>
                        <Boxes className='self-center group-hover:stroke-blue-400' />
                        <h4 className='font-medium text-lg group-hover:text-blue-500'>Collabration</h4>
                        <p className='text-muted-foreground text-base'>I utilize AWS to develop and productionize machine learning systems.</p>
                    </div>
                    <div className='flex flex-col h-40 text-center space-y-4 group hover:shadow-md'>
                        <KanbanSquare className='self-center group-hover:stroke-blue-400' />
                        <h4 className='font-medium text-lg group-hover:text-blue-500'>Data Analytics</h4>
                        <p className='text-muted-foreground text-base'>I utilize AWS to develop and productionize machine learning systems.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AreaInterest;
