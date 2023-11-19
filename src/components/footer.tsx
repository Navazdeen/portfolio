import { Facebook, Linkedin, Github, Instagram} from 'lucide-react';
import Link from 'next/link';
import * as React from 'react';

interface IFooterProps {
}

const Footer: React.FunctionComponent<IFooterProps> = (props) => {
    return (
        <div className=''>
            <footer
                className="flex flex-col items-center bg-slate-900 text-center text-white space-y-8">
                <div className="flex flex-col pt-8 space-y-4">
                    <div className="text-start text-lg font-bold leading-3">Follow Me</div>
                    <p className='text-muted-foreground text-start'>Let's be social</p>
                    <div className="mb-9 flex justify-center">
                        <a href="#!" className="mr-9 hover:text-slate-400">
                            <Facebook/>
                        </a>
                        <a href="#!" className="mr-9 hover:text-slate-400">
                            <Linkedin></Linkedin>
                        </a>
                        <a href="#!" className="mr-9 hover:text-slate-400">
                            <Github></Github>
                        </a>
                        <a href="#!" className="mr-9 hover:text-slate-400">
                            <Instagram></Instagram>
                        </a>
                    </div>
                </div>
                <div
                    className="w-full bg-slate-800 p-4 text-center text-white">
                    © 2023 Copyright:
                    <a
                        className="text-white"
                        href="https://tailwind-elements.com/"
                    >All Rights Reserved</a>
                </div>
            </footer>
        </div>
    );
};

export default Footer;