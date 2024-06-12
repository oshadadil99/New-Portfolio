import '../index.css';
import profilePic from '../assets/dude.jpg';

export const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                    <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 ig:tex8xl">
                        Oshada Dilshan
                    </h1>
                    <span className='title-styling'>
                        Software Engineering Undergraduate
                    </span>
                    <p className='my-2 max-w-xl py-6 font-light tracking-tighter'>A highly ambitious and passionate individual who loves to discover the best
                        paths to achieve goals.
                        I'm keen to study IT because I find it fascinating from an early age.
                        Programming and coding have been the passion of my life and also love
                        graphic designing. I am an honest, reliable, and presentable individual with an
                        outgoing personality and a comprehensive educational background. Apart
                        from these technical things I love to spend my spare time reading and
                        traveling. Being a student at the faculty of science ,university of kelaniya
                        directed me to enhance the strengths of my life while eliminating weaknesses.
                        I am eager to be challenged in order to grow my own skills by engaging in
                        extra-curricular activities as well as volunteering programs.
                    </p>
                </div>
            </div>
            <div className='w-full lg:w-1/2 lg:p-8'>
                <div className='flex justify-center'>
                    <img src={profilePic} alt="myDP" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero;


