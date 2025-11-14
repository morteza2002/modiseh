import React from "react";
import { Link } from "react-router-dom";

interface MagazineItem {
  id: number;
  image: string;
}

const magazineItems: MagazineItem[] = [
  { id: 1, image: "/blog-img/Blog_01.webp" },
  { id: 2, image: "/blog-img/Blog_02.webp" },
  { id: 3, image: "/blog-img/Blog_03.webp" },
  { id: 4, image: "/blog-img/Blog_04.webp" },
];

export default function MagazineSection() {
  return (
    <section className="max-w-6xl mx-auto px-4 my-16">
      <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-10">
        مجله مدیسه
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        {magazineItems.map((item) => (
          <Link
            to={`/magazine/${item.id}`}
            key={item.id}
            className="relative block overflow-hidden rounded-2xl group"
          >
            <img
              src={item.image}
              alt={`magazine-${item.id}`}
              className="w-full h-60 sm:h-80 object-cover "
              loading="lazy"
            />

          </Link>
        ))}
      </div>
    </section>
  );
}
