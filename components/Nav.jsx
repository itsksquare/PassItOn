"use client";

import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { sitelogo } from "@public/images";
import Image from "next/image";

const Nav = () => {
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();

      setProviders(response);
    };

    setUpProviders();
  }, []);

  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <a href="/" className="flex items-center">
            <Image
              src={sitelogo}
              height={32}
              className="h-8 mr-3 rounded-full"
              alt="PassItOn Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              PassItOn
            </span>
          </a>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Search icon</span>
            </div>
            <input
              type="text"
              id="search-navbar"
              className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search..."
            />
          </div>
          <div className="sm:flex hidden">
            {session?.user ? (
              <button type="button" onClick={signOut} className="white_btn">
                Sign Out
              </button>
            ) : (
              <>
                {providers &&
                  Object.values(providers).map((provider) => (
                    <button
                      type="button"
                      key={provider.name}
                      onClick={() => signIn(provider.id)}
                      className="black_btn"
                    >
                      Sign In
                    </button>
                  ))}
              </>
            )}
          </div>
        </div>
      </nav>
      <nav className="bg-gray-50 dark:bg-gray-700 flex flex-row justify-between items-center">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
              <li>
                <a
                  href="/donate"
                  className="text-gray-900 dark:text-white hover:underline"
                  aria-current="page"
                >
                  Donate Items
                </a>
              </li>
              <li>
                <a
                  href="/takein"
                  className="text-gray-900 dark:text-white hover:underline"
                  aria-current="page"
                >
                  TakeIn Items
                </a>
              </li>
              <li>
                <a
                  href="/ngo"
                  className="text-gray-900 dark:text-white hover:underline"
                  aria-current="page"
                >
                  NGOs
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-gray-900 dark:txext-white hover:underline"
                  aria-current="page"
                >
                  FAQs
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
