import { Link } from "react-router-dom";
import Logo from '../assets/logo.svg';
export const Footer = () => {
  return (
    <footer>

<footer className="p-2 lg:p-8 bg-white shadow xlg:px-3 lg:px-10 md:px-4 md:py-8 sm:px-7 dark:bg-gray-900">
    <div className="sm:flex sm:items-center sm:justify-between">
        <Link to="/" className="flex items-center mb-4 sm:mb-0">
            <img src={Logo} className="h-8 mr-3" alt="Cinematic Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Cinematic</span>
        </Link>
        <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
                <a href="https://necm.netlify.app" target="_blank" rel="noreferrer" className="mr-4 hover:underline md:mr-6 hover:underline-offset-8">About</a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/noraelisacamacho/" className="mr-4 hover:underline hover:underline-offset-8 md:mr-6" target="_blank" rel="noreferrer" >Linkedin</a>
            </li>
            <li>
                <a href="https://github.com/noracamacho" className="mr-4 hover:underline hover:underline-offset-8 md:mr-6" target="_blank" rel="noreferrer" >GitHub</a>
            </li>
            {/* <li>
                <button onClick={() => window.location = 'mailto:yourmail@domain.com'} className="hover:underline hover:underline-offset-8 hover:cursor-pointer">Contact Me</button>
            </li> */}
        </ul>
    </div>
    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400 over:underline hover:underline-offset-8 hover:cursor-pointer">Built by <Link to="https://linkedin.com/in/noraelisacamacho" target="_blank" rel="noreferrer" className="hover:underline">Nora Camacho</Link> Copyright&copy; {new Date().getFullYear()}. All Rights Reserved.</span>
</footer>

    </footer>
  )
}
