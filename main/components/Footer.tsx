import Image from "next/image"
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"
import { FaX } from "react-icons/fa6"

export default function Footer() {

    return (
        <footer className="text-gray-300    px-4 py-5 max-w-screen-xl mx-auto md:px-8">
            <div className="max-w-lg sm:mx-auto sm:text-center">
                <Image height={100} width={100} src="/Logo-White.svg" alt="Logo" className="w-32 sm:mx-auto" />
                <p className="leading-relaxed mt-2 text-[15px]">
                    If you find any bugs or have any suggestions, feel free to reach out to me on any of the platforms below.
                </p>
            </div>

            <div className="mt-8 items-center justify-between sm:flex">
                <div className="mt-4 sm:mt-0">
                    &copy; 2024 Dinesh Sutihar All rights reserved.
                </div>
                <div className="mt-6 sm:mt-0">
                    <ul className="flex items-center space-x-4">
                        <li className="w-10 h-10 cursor-pointer hover:bg-white-100 border rounded-full flex items-center justify-center">
                            <a href="https://github.com/dineshsutihar">
                                <FaGithub className="text-blue-500" />
                            </a>
                        </li>

                        <li className="w-10 h-10 cursor-pointer hover:bg-white-100 border rounded-full flex items-center justify-center">
                            <a href="https://x.com/dineshsutihar/">
                                <FaX className="text-blue-500" />
                            </a>
                        </li>

                        <li className="w-10 h-10 cursor-pointer hover:bg-white-100 border rounded-full flex items-center justify-center">
                            <a href="https://www.linkedin.com/in/dineshsutihar/">
                                <FaLinkedin className="text-blue-500" />
                            </a>
                        </li>

                        <li className="w-10 h-10 cursor-pointer hover:bg-white-100 border rounded-full flex items-center justify-center">
                            <a href="https://instagram.com/dineshsutihar/">
                                <FaInstagram className="text-blue-500" />
                            </a>
                        </li>
                        <li className="w-10 h-10 cursor-pointer hover:bg-white-100 border rounded-full flex items-center justify-center">
                            <a href="https://facebook.com/sutihar.dinesh/">
                                <FaFacebookF className="text-blue-500" />
                            </a>
                        </li>


                    </ul>
                </div>
            </div>

        </footer>
    )
}
