'use client';
/**
 * @typedef {import("@prismicio/client").Content.PortfolioIndexSlice} PortfolioIndexSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<PortfolioIndexSlice>} PortfolioIndexProps
 * @param {PortfolioIndexProps}
 *
 *
 */

import React, { useState, useEffect } from 'react';
import { PrismicRichText } from '@prismicio/react';
import { PrismicNextImage } from '@prismicio/next';

const PortfolioIndex = ({ slice }) => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [filteredItems, setFilteredItems] = useState(
    slice.primary.image_gallery
  );

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  useEffect(() => {
    if (activeCategory) {
      setFilteredItems(
        slice.primary.image_gallery.filter(
          (item) => item.category_name === activeCategory
        )
      );
    } else {
      setFilteredItems(slice.primary.image_gallery);
    }
  }, [activeCategory, slice.primary.image_gallery]);

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {/* Filter Bar */}
      <div className="container mx-auto py-4 border-b border-gray-300">
        <div className="flex justify-center space-x-4">
          {slice.primary.categories.map((categoryItem, index) => (
            <button
              key={index}
              onClick={() =>
                handleCategoryClick(
                  categoryItem.category_name === 'All'
                    ? null
                    : categoryItem.category_name
                )
              }
              className={`px-4 py-2 border border-gray-400 rounded ${
                activeCategory === categoryItem.category_name ||
                (activeCategory === null &&
                  categoryItem.category_name === 'All')
                  ? 'bg-gray-200'
                  : ''
              }`}
            >
              {categoryItem.category_name}
            </button>
          ))}
        </div>
      </div>

      {/* Image Grid */}
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 grid-rows-4 gap-4">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className={`relative overflow-hidden border border-black bg-white ${
                index === 0
                  ? 'col-span-1 row-span-1'
                  : index === 1
                    ? 'col-span-2 row-span-2'
                    : index === 2
                      ? 'col-span-3 row-span-1'
                      : index === 3
                        ? 'col-span-1 row-span-2'
                        : 'col-span-2 row-span-1'
              }`}
            >
              {item.images && item.images.url ? (
                <img
                  src={item.images.url}
                  alt={item.images.alt || ''}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <span>No image available</span>
                </div>
              )}
              {item.caption && (
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2">
                  <PrismicRichText field={item.caption} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioIndex;
