'use client'

import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from "next/link";
import Searchbar from "@/components/layout/SearchBar";
import Image from "next/image";
import {usePathname} from "next/navigation";

const navigation: { name:string, href:string }[] = [
  { name: 'Home', href: '/'},
  { name: 'Games', href: '/games'},
  { name: 'Favorites', href: '/games/favorites'}
];

const profileNavigation: { name:string, href:string }[] = [
  { name: 'Profile', href: '/profile'},
  { name: 'Settings', href: '/settings'},
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const pathname = usePathname();

  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto px-2 sm:px-4 lg:pr-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex items-center px-2 lg:px-0">
                <Link className="flex-shrink-0 text-lg flex flex-row" href="/">
                  <Image
                    src="/assets/gameboy.svg"
                    width={32}
                    height={32}
                    alt="Avatar"
                  />
                  <h2 className="hidden lg:block font-mono text-xl font-semibold pt-0.5 pl-2 text-gray-50">Everyone Games</h2>
                </Link>
                {/* Desktop Navbar */}
                <div className="hidden lg:ml-6 lg:block">
                  <div className="flex space-x-4">
                    {navigation.map(item => {
                      const isActive = pathname === item.href;

                      return (
                        <Link
                          key={item.name}
                          href={item.href}
                          className={
                            "rounded-md px-3 py-2 text-sm font-medium " +
                            (isActive ? "bg-gray-800 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white")
                          }
                        >
                          {item.name}
                        </Link>
                      )}
                    )}
                  </div>
                </div>
              </div>
              <div className="flex flex-1 justify-center px-2 lg:ml-6 lg:justify-end">
                <Searchbar />
              </div>

              <div className="flex lg:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="hidden lg:ml-4 lg:block">
                <div className="flex items-center">
                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-4 flex-shrink-0">
                    <div>
                      <Menu.Button className="flex rounded-full bg-gray-800 text-sm text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="sr-only">Open user menu</span>
                        <Image
                          src="/assets/darth-maul-avatar.svg"
                          width={32}
                          height={32}
                          alt="Avatar"
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        {profileNavigation.map(item => {
                          return (
                            <Menu.Item key={item.name}>
                              {({ active }) => (
                                <Link
                                  href={item.href}
                                  className={classNames(
                                    active ? 'bg-gray-100' : '',
                                    'block px-4 py-2 text-sm text-gray-700'
                                  )}
                                >
                                  {item.name}
                                </Link>
                              )}
                            </Menu.Item>
                          )}
                        )}
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm text-gray-700'
                              )}
                            >
                              Sign out
                            </a>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile panel */}
          <Disclosure.Panel className="lg:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map(item => {
                const isActive = pathname === item.href;

                return (
                  <Disclosure.Button
                    as={Link}
                    key={item.name}
                    href={item.href}
                    className={
                      "block rounded-md px-3 py-2 text-base font-medium " +
                      (isActive ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white")
                    }
                  >
                    {item.name}
                  </Disclosure.Button>
                )}
              )}
            </div>
            <div className="border-t border-gray-700 pb-3 pt-4">
              <div className="flex items-center px-5">
                <div className="flex-shrink-0">
                  <Image
                    src="/assets/darth-maul-avatar.svg"
                    width={44}
                    height={44}
                    alt="Avatar"
                  />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-white">User</div>
                  <div className="text-sm font-medium text-gray-400">user@everyonegames.com</div>
                </div>
                <button
                  type="button"
                  className="ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                </button>
              </div>
              <div className="mt-3 space-y-1 px-2">
                {profileNavigation.map(item => {
                  const isActive = pathname === item.href;

                  return (
                    <Disclosure.Button
                      as={Link}
                      key={item.name}
                      href={item.href}
                      className={
                        "block rounded-md px-3 py-2 text-base font-medium " +
                        (isActive ? "bg-gray-900 text-white" : "text-gray-400 hover:bg-gray-700 hover:text-white")
                      }
                    >
                      {item.name}
                    </Disclosure.Button>
                  )}
                )}
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                >
                  Sign out
                </Disclosure.Button>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}