import '../index.css';

import {RiReactjsLine} from "react-icons/ri";
import { SiSpring } from "react-icons/si";
import { SiPhp } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";



const Technology = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <h1 className= 'my-20 text-center text-4xl'>Technologies And Languages </h1>
        <div className='technology-box'>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiReactjsLine  className="text-7xl text-cyan-400"/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiSpring  className="text-7xl text-cyan-400"/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiPhp  className="text-7xl text-cyan-400"/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiHtml5  className="text-7xl text-cyan-400"/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiCss3  className="text-7xl text-cyan-400"/>
            </div>
            
           
        </div>
    </div>
  )
}

export default Technology;
