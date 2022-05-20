import React from 'react'
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const footer = () => {
  return (
    <>
    <footer class="p-4 bg-white sm:p-6 dark:bg-gray-800">
        <div class="flex w-100 items-center justify-around">
            <div class="flex sm:mb-0">
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Get In Touch</span>
            </div>
            <div class="flex space-x-6 items-center sm:justify-center sm:mt-0">
                <a href="https://github.com/ktrudickm" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                    <FaGithub class="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/in/kendall-trudick-21598a106/" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                    <FaLinkedin class="w-5 h-5"/>
                </a>
                <a href="mailto:ktrudickm@gmail.com" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                    <FaEnvelope class="w-5 h-5"/>
                </a>
            </div>
        </div>
    </footer>
    </>
  )
}

export default footer