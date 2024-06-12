import '../index.css';
import picture2 from '../assets/mypic2.jpg';

const About = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <h1 className='my-20 text-center text-4xl'>About Me</h1>
        <div className='flex flex-wrap'>
            <div className='w-full lg:w-1/2 lg:p-8'>
                <div className='flex items-center justify-center '>
                    <img className='about-image' src={picture2} alt="pic2" />
                </div>
            </div>
            <p className='my-2 max-w-xl py-6 font-light tracking-tighter'>
                        A highly ambitious and passionate individual who loves to discover the best
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
    
  )
}

export default About;