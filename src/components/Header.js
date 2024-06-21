'use client';

import * as prismic from '@prismicio/client';
import { PrismicImage, PrismicText } from '@prismicio/react';
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next';
import React, { useState } from 'react';
import { closeIcon } from '../app/x-icon.png';

import { Bounded } from './Bounded';

const localeLabels = {
  'en-us': 'EN',
  'fr-fr': 'FR',
};

export function Header({ locales = [], navigation, settings }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <Bounded as="header" yPadding="sm">
      <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 leading-none">
        <PrismicNextLink href="/">
          <h2 className="font-body text-5xl font-semibold  tracking-wide">
            Laïla Breger
          </h2>
        </PrismicNextLink>
        <div className="flex justify-between items-center p-4 text-white">
          <div
            className="flex flex-col justify-around h-6 cursor-pointer"
            onClick={toggleMenu}
          >
            <div className="w-7 h-0.5 bg-black"></div>
            <div className="w-7 h-0.5 bg-black"></div>
            <div className="w-7 h-0.5 bg-black"></div>
          </div>
          <div
            className={`fixed top-0 left-0 w-1/3 h-full bg-gray-700 flex flex-col items-start p-8 z-50 transform transition-transform duration-500 ${
              menuOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
          >
            <div className="flex justify-end items-center w-full gap-4">
              <button
                className="self-end text-2xl bg-none border-none text-white cursor-pointer pt-8 pb-4 hover:text-gray-400 transition-colors duration-300"
                onClick={closeMenu}
              >
                <p className="text-lg font-light font-poppins">CLOSE</p>
              </button>
            </div>
            <div className="flex flex-col items-start w-full">
              <a
                href="/about"
                className="text-white text-5xl my-4 text-left font-body no-underline transition-colors duration-300 hover:text-gray-400"
              >
                ABOUT
              </a>
              <div className="w-full border-t border-white my-4"></div>
              <a
                href="/portfolio"
                className="text-white text-5xl my-4 text-left font-body no-underline transition-colors duration-300 hover:text-gray-400"
              >
                PORTFOLIO
              </a>
              <div className="w-full border-t border-white my-4"></div>
              <a
                href="/contact"
                className="text-white text-5xl my-4 text-left font-body no-underline transition-colors duration-300 hover:text-gray-400"
              >
                CONTACT
              </a>
              <div className="w-full border-t border-white my-4"></div>
              <a
                href="/cv"
                className="text-white text-5xl my-4 text-left font-body no-underline transition-colors duration-300 hover:text-gray-400"
              >
                CV
              </a>
              <div className="w-full border-t border-white my-4"></div>
              <ul className="flex flex-row gap-4 mt-4">
                {locales.map((locale) => (
                  <li key={locale.lang} className="list-none">
                    <PrismicNextLink
                      href={locale.url}
                      locale={locale.lang}
                      aria-label={`Change language to ${locale.lang_name}`}
                      className="text-white no-underline hover:text-gray-400"
                    >
                      {localeLabels[locale.lang] || locale.lang}
                    </PrismicNextLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Bounded>
  );
}
