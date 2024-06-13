import '../index.css';
import project1 from '../assets/Projects/project-1.jpg';
import project2 from '../assets/Projects/project-2.jpg';
import project3 from '../assets/Projects/project-3.jpg';
import project4 from '../assets/Projects/project-4.jpg';

const Projects = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <h1 className='my-20 text-center text-4xl'>Projects</h1>
        <div>
            <div className="mb-8 flex flex-wrap lg:justify-center">
                <div className="w-full lg:w-1/2 mb-6 flex lg:items-start">
                    <img src={project1} width={150} height={150} className="rounded" alt="Project 1" />
                    <div className="ml-4">
                        <h6 className="mb-2 font-semibold">E-Commerce Website</h6>
                        <p className="mb-8 text-neutral-400">A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.</p>
                        <p className="mr-40 rounded bg-neutral-900 px-2 py-1 text-sm text-center font-medium text-purple-900">HTML, CSS, React, Node.js, MongoDB</p>
                    </div>
                </div>

                <div className="w-full lg:w-1/2 mb-6 flex lg:items-start">
                    <img src={project2} width={150} height={150} className="rounded" alt="Project 2" />
                    <div className="ml-4">
                    <h6 className="mb-2 font-semibold">Task Management App</h6>
                    <p className="mb-8 text-neutral-400">An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.</p>
                    <p className="mr-40 rounded bg-neutral-900 px-2 py-1 text-sm text-center font-medium text-purple-900">HTML, CSS, React, Node.js, MongoDB</p>                    </div>
                </div>

                <div className="w-full lg:w-1/2 mb-6 flex lg:items-start">
                    <img src={project3} width={150} height={150} className="rounded" alt="Project 3" />
                    <div className="ml-4">
                    <h6 className="mb-2 font-semibold">Portfolio Website</h6>
                    <p className="mb-8 text-neutral-400">A personal portfolio website showcasing projects, skills, and contact information.</p>
                    <p className="mr-40 rounded bg-neutral-900 px-2 py-1 text-sm text-center font-medium text-purple-900">HTML, CSS, React, Node.js, MongoDB</p>                    </div>
                </div>

                <div className="w-full lg:w-1/2 mb-6 flex lg:items-start">
                    <img src={project4} width={150} height={150} className="rounded" alt="Project 4" />
                    <div className="ml-4">
                    <h6 className="mb-2 font-semibold">Blogging Platform</h6>
                    <p className="mb-8 text-neutral-400">A platform to create, edit, and publish blogs with user authentication and comment features.</p>
                    <p className="mr-40 rounded bg-neutral-900 px-2 py-1 text-sm text-center font-medium text-purple-900">HTML, CSS, React, Node.js, MongoDB</p>                    </div>
                </div>
            </div>
    </div>
    </div>
  )
}
 
export default Projects;