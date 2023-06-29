import { Disclosure, Menu } from "@headlessui/react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"
import Text from "./Text"
import Link from "next/link"
import { useEffect, useState } from "react"

const navigation = [{ name: "Home", href: "/" }]

const NavBar = (props) => {
  const { jwt, logout, pseudo, pictureFace, role } = props
  const [isLoggedIn, setIsLoggedIn] = useState(jwt)
  useEffect(() => {
    setIsLoggedIn(jwt)
  }, [jwt])

  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-20 items-center justify-end">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-zinc-100 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-items-center justify-center sm:items-stretch sm:justify-end">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4 bg-zinc-100 px-10 py-2 rounded-xl">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="text-neutral-800 font-montserrat rounded-md px-3 py-2 text-lg font-bold hover:scale-110"
                      >
                        {item.name}
                      </a>
                    ))}
                    {role === "admin" ? (
                      <a
                        href="/createUser"
                        className="text-neutral-800 font-montserrat rounded-md px-3 py-2 text-lg font-bold hover:scale-110"
                      >
                        CREATE USER
                      </a>
                    ) : (
                      <h1></h1>
                    )}
                  </div>
                </div>
              </div>
              {/* Profile dropdown */}
              <Menu as="div" className="relative ml-5">
                {isLoggedIn ? (
                  <div className="grid grid-cols-3 item-center">
                    <Text variant="card_title" size="lg">
                      ({role})
                    </Text>
                    {pseudo && (
                      <div className="flex-shrink-0">
                        <img
                          className="h-16 w-16"
                          src={pictureFace}
                          alt="Your Company"
                        />
                      </div>
                    )}
                    <button
                      type="button"
                      onClick={logout}
                      className="rounded-full bg-gray-800 p-1 text-gray-400 text-xl"
                    >
                      ❌
                    </button>
                  </div>
                ) : (
                  <div>
                    <Text variant="card_title" size="lg">
                      Vous devez vous connecter
                    </Text>
                  </div>
                )}
              </Menu>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3 bg-yellow-400 rounded-b-lg">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  className="text-neutral-800 font-montserrat hover:bg-zinc-100 block rounded-md px-3 py-2 font-bold"
                >
                  <Link href={item.href}>{item.name}</Link>
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default NavBar
