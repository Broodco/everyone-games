'use client'

import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import {
  Cog6ToothIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import Image from "next/image";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {classNames} from "@/lib/utils";
import Header from "@/components/layout/Header";
import {Comfortaa} from "next/font/google";

const navigation: { name:string, href:string }[] = [
  { name: 'Home', href: '/'},
  { name: 'New and trending', href: '/new'}
];

const comfortaa = Comfortaa({subsets: ['latin']})

export default function SideBarWithHeader() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const pathname = usePathname();

  return (
    <>
      <div>
        {/* Dynamic mobile sidebar */}
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog as="div" className="relative z-50 lg:hidden" onClose={setSidebarOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-900/80" />
            </Transition.Child>

            <div className="fixed inset-0 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                      <button type="button" className="-m-2.5 p-2.5" onClick={() => setSidebarOpen(false)}>
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  {/* Sidebar component, swap this element with another sidebar if you like */}
                  <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-5 pb-4 ring-1 ring-white/10">
                    <div className="flex h-16 shrink-0 items-center">
                      <Link className="flex-shrink-0 text-lg flex flex-row" href="/">
                        <Image
                          src="/assets/gameboy.svg"
                          width={32}
                          height={32}
                          alt="Avatar"
                        />
                        <h2 className={`font-mono text-2xl font-semibold pt-0.5 pl-4 text-gray-50 ${comfortaa.className}`}>Everyone Games</h2>
                      </Link>
                    </div>
                    <nav className="flex flex-1 flex-col">
                      <ul role="list" className="flex flex-1 flex-col gap-y-7">
                        <li>
                          <ul role="list" className="-mx-2 space-y-1">
                            {navigation.map((item) => {
                              const isActive = pathname === item.href;

                              return (
                                <li key={item.name}>
                                  <a
                                    href={item.href}
                                    className={classNames(
                                      isActive
                                        ? 'bg-cyan-900 text-white'
                                        : 'text-gray-400 hover:text-white hover:bg-cyan-950',
                                      'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                    )}
                                  >
                                    {item.name}
                                  </a>
                                </li>
                              )
                            })}
                          </ul>
                        </li>
                        <li className="mt-auto">
                          <a
                            href="#"
                            className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white"
                          >
                            <Cog6ToothIcon className="h-6 w-6 shrink-0" aria-hidden="true" />
                            Settings
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 p-4">
            <Link className="flex-shrink-0 text-lg flex flex-row" href="/">
              <Image
                src="/assets/gameboy.svg"
                width={36}
                height={36}
                alt="Avatar"
              />
              <h2 className={`hidden lg:block text-2xl font-semibold pt-0.5 pl-2 text-gray-50 ${comfortaa.className}`}>Everyone Games</h2>
            </Link>
            <nav className="flex flex-1 flex-col">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul role="list" className="-mx-2 space-y-1">
                    {navigation.map((item) => {
                      const isActive = pathname === item.href;

                      return (
                        <li key={item.name}>
                          <a
                            href={item.href}
                            className={classNames(
                              isActive
                                ? 'bg-cyan-900 text-white'
                                : 'text-gray-400 hover:text-white hover:bg-cyan-950',
                              'group flex gap-x-3 rounded-md p-2 pl-4 text-md leading-6 font-semibold'
                            )}
                          >
                            {item.name}
                          </a>
                        </li>
                      )
                    })}
                  </ul>
                </li>
                <li className="mt-auto">
                  <a
                    href="#"
                    className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white"
                  >
                    <Cog6ToothIcon className="h-6 w-6 shrink-0" aria-hidden="true" />
                    Settings
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Header with search bar */}
        <Header setSidebarOpen={setSidebarOpen}/>
      </div>
    </>
  )
}
