import React from "react";

export default function SubClass({ settings, title, icon, description, link }) {
  return (
    <div className={`w-full lg:w-${settings.items_in_row}/12 px-4 text-center`}>
      <div
        className={`text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-${settings.icon_color} inline-flex items-center justify-center`}
      >
        <i className={`text-${settings.icon_size} ${icon}`}></i>
      </div>
      <a
        href={link}
        className={`block text-xl mt-5 px-2 font-semibold text-${settings.title_color}`}
      >
        {title}
      </a>
      <p className={`mt-2 mb-4 text-${settings.description_text_color}`}>
        {description.map((item) => (
          <span key={item} className="block text-sm">
            {item}
          </span>
        ))}
      </p>
    </div>
  );
}
