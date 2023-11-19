import * as React from 'react';

interface INavbarProps {

}

const Navbar: React.FunctionComponent<INavbarProps> = (props) => {
    return (
        <div className="flex w-full gap-4 pr-10 justify-end items-center h-14 shadow-md fixed top-0 bg-white">
            <div className="ml-12 w-full hover:cursor-pointer text-xl font-bold">Navazdeen</div>
            <div className="hover:text-blue-400 hover:cursor-pointer">Home</div>
            <div className="hover:text-blue-400 hover:cursor-pointer">About</div>
            <div className="hover:text-blue-400 hover:cursor-pointer">Projects</div>
            <div className="border border-1 border-blue-400 px-2 rounded-full hover:bg-blue-300 hover:text-white hover:cursor-pointer">Resume</div>
        </div>
    );
};

export default Navbar;
