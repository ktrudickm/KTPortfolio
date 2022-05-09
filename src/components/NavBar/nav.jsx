import React from 'react';
import { Fragment } from 'react'
import { HashLink } from 'react-router-hash-link'
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import { Popover, Transition } from '@headlessui/react'
import Resume from '../../images/TrudickKM_Resume.pdf'
import {
  CodeIcon,
  BookOpenIcon,
  ArrowCircleRightIcon,
  UserCircleIcon,
  MenuIcon,
  EyeIcon,
  XIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'


const resources = [
  {
    name: 'League Tracker',
    description: 'Full-Stack application for tracking league sports including team rankings, player stats, and team stats.',
    href: 'https://shielded-hollows-83621.herokuapp.com/',
    icon: ArrowCircleRightIcon,
  },
  {
    name: 'Weather Dashboard',
    description: 'Weather app utilizing OpenWeather API.',
    href: 'https://ktrudickm.github.io/Weather-Dashboard/',
    icon: ArrowCircleRightIcon,
  },
  {
    name: 'URL Shortener',
    description: 'URL Shortener to shorten long URLs for business purposes. Utilization of Shrtly API.',
    href: '#',
    icon: ArrowCircleRightIcon,
  }
]


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const nav = () => {
  return (
    <Popover className="relative bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
        <div className="flex justify-start lg:w-0 lg:flex-1">
          <a href="/">
            <span className="sr-only">Workflow</span>
            {/* <img
              className="h-8 w-auto sm:h-10"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt=""
            /> */}
            <a href="/" className="text-base tracking-tighter font-larger text-3xl text-gray-500 hover:text-gray-900">
            KMT
            </a>
          </a>
        </div>
        <div className="-mr-2 -my-2 md:hidden">
          <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
            <span className="sr-only">Open menu</span>
            <MenuIcon className="h-6 w-6" aria-hidden="true" />
          </Popover.Button>
        </div>
        <Popover.Group as="nav" className="hidden md:flex space-x-10">

          <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
            About Me
          </a>

          <Popover className="relative">
            {({ open }) => (
              <>
                <Popover.Button
                  className={classNames(
                    open ? 'text-gray-900' : 'text-gray-500',
                    'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                  )}
                >
                  <span>Projects</span>
                  <ChevronDownIcon
                    className={classNames(
                      open ? 'text-gray-600' : 'text-gray-400',
                      'ml-2 h-5 w-5 group-hover:text-gray-500'
                    )}
                    aria-hidden="true"
                  />
                </Popover.Button>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0">
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                      <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                        {resources.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                          >
                            <item.icon className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
                            <div className="ml-4">
                              <p className="text-base font-medium text-gray-900">{item.name}</p>
                              <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                            </div>
                          </a>
                        ))}
                      </div>
                      <div className="px-5 py-5 bg-gray-50 sm:px-8 sm:py-8">
                        <div className="mt-5 text-sm">
                          <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                            {' '}
                            View all projects <span aria-hidden="true">&rarr;</span>
                          </a>
                        </div>
                        <div className="mt-5 text-sm">
                          <a href="https://github.com/ktrudickm" className="font-medium text-indigo-600 hover:text-indigo-500">
                            {' '}
                            View github <span aria-hidden="true">&rarr;</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>

          <a href={ Resume } target="blank" className="text-base font-medium text-gray-500 hover:text-gray-900">
            Resume
          </a>

        </Popover.Group>
        <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
          <a
            href="#"
            className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Contact Me!
          </a>
        </div>
      </div>
    </div>

    <Transition
      as={Fragment}
      enter="duration-200 ease-out"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="duration-100 ease-in"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
    >
      <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
          <div className="pt-5 pb-6 px-5">
            <div className="flex items-center justify-between">
              <div>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                  alt="Workflow"
                />
              </div>
              <div className="-mr-2">
                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Close menu</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <div className="mt-6">
              <nav className="grid gap-y-8">
                    <a
                        key="About Me"
                        href='#'
                        className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    >
                        <UserCircleIcon className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
                        <span className="ml-3 text-base font-medium text-gray-900">About Me</span>
                    </a>
                    <a
                        key="Projects"
                        href='#'
                        className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    >
                        <CodeIcon className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
                        <span className="ml-3 text-base font-medium text-gray-900">Projects</span>
                    </a>
                    <a
                        key="Resume"
                        href={Resume}
                        className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    >
                        <BookOpenIcon className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
                        <span className="ml-3 text-base font-medium text-gray-900">Resume</span>
                    </a>
              </nav>
            </div>
          </div>
          <div className="py-6 px-5 space-y-6">
            <div>
              <a
                href="#"
                className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Contact Me!
              </a>
            </div>
          </div>
        </div>
      </Popover.Panel>
    </Transition>
  </Popover>
  )
}

export default nav