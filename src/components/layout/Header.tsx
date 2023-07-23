import {Bars3Icon} from "@heroicons/react/24/outline";
import {MagnifyingGlassIcon} from "@heroicons/react/20/solid";
import {Menu, Transition} from "@headlessui/react";
import Image from "next/image";
import {Dispatch, Fragment, SetStateAction} from "react";
import Link from "next/link";
import {classNames} from "@/lib/utils";
import {usePathname} from "next/navigation";
import Searchbar from "@/components/layout/SearchBar";
import { profileNavigation } from "@/lib/routes";

export default function Header({setSidebarOpen}: {setSidebarOpen: Dispatch<SetStateAction<boolean>>}) {
  const pathname = usePathname();

  return (
  <div className="lg:pl-72">
    <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-400 px-4 shadow-sm sm:gap-x-6 sm:mx-6 lg:mx-8">
      <button type="button" className="-m-2.5 p-2.5 text-gray-300 lg:hidden" onClick={() => setSidebarOpen(true)}>
        <span className="sr-only">Open sidebar</span>
        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
      </button>

      {/* Separator */}
      <div className="h-6 w-px bg-gray-900/10 lg:hidden" aria-hidden="true" />

      <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
        <Searchbar />
        <div className="flex items-center gap-x-4 lg:gap-x-6">

          {/* Separator */}
          <div className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10" aria-hidden="true" />

          {/* Profile dropdown */}
          <Menu as="div" className="relative ml-4 flex-shrink-0">
            <div>
              <Menu.Button className="flex rounded-full bg-gray-800 text-sm text-white focus:outline-none focus:ring-2 focus:ring-cyan-700 focus:ring-offset-2 focus:ring-offset-gray-800">
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
              <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-slate-900 py-1 shadow-lg ring-1 ring-cyan-900 ring-opacity-10 focus:outline-none">
                {profileNavigation.map(item => {
                  const isActive = pathname === item.href;

                  return (
                    <Menu.Item key={item.name}>
                      {({ active }) => (
                        <Link
                          href={item.href}
                          className={classNames(
                            active ? 'bg-cyan-900' : '',
                            'block px-4 py-2 text-sm text-gray-200'
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
                        active ? 'bg-cyan-900' : '',
                        'block px-4 py-2 text-sm text-gray-200'
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
)
}