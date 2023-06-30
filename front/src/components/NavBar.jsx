import { Disclosure, Menu } from "@headlessui/react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"
import Text from "./Text"
import Link from "next/link"
import { useEffect, useState } from "react"
import Image from "next/image"

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
            <div className="relative flex h-20 items-center justify-between">
              <div>
                <Image src="/logo-titre.png" alt="me" width="160" height="64" />
              </div>
              <div>
                {" "}
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center  rounded-md p-2 text-maxAirain hover:bg-maxAirain hover:text-white focus:outline-none ">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
              <div className="flex flex-items-center justify-center sm:items-stretch sm:justify-end">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4  px-10 py-2 rounded-xl">
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
                    ) : null}
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
                          className="h-16 w-16 rounded-full"
                          src={pictureFace}
                          alt="Your Company"
                        />
                      </div>
                    )}
                    <button
                      type="button"
                      onClick={logout}
                      className="rounded font-roboto px-2 text-md bg-red-500 hover:scale-105"
                    >
                      LOGOUT
                    </button>
                  </div>
                ) : (
                  <div>
                    <Text variant="card_title" size="lg"></Text>
                  </div>
                )}
              </Menu>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3 rounded-b-lg">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  className="text-neutral-800 font-montserrat hover:bg-maxAirain block rounded-md px-3 py-2 font-bold"
                >
                  <Link href={item.href}>{item.name}</Link>
                </Disclosure.Button>
              ))}
              {role === "admin" ? (
                <a
                  href="/createUser"
                  className="text-neutral-800 font-montserrat hover:bg-maxAirain block rounded-md px-3 py-2 font-bold"
                >
                  CREATE USER
                </a>
              ) : null}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default NavBar
