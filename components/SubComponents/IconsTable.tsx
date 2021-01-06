import React from "react";

export default function IconsTable({ info }) {
  return (
    <section className="relative pb-40">
      <div className="container mx-auto px-6">
        <div className="items-center flex flex-wrap">
          <div className="w-full md:w-5/12 ml-auto mr-auto px-6">
            <div className="md:pr-12">
              <ul className="list-none mt-6">
                {info.map((row) => (
                  <InfoRow key={row.title} title={row.title} icon={row.icon} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoRow({ title, icon }) {
  return (
    <li className="py-2">
      <div className="flex items-center">
        <div className="mr-8">
          <span className="text-xl font-semibold inline-block py-2 px-6 uppercase rounded-full text-black bg-red-200 mr-3">
            <i className={`fa fa-${icon}`}></i>
          </span>
        </div>
        <div>
          <h4 className="text-black font-bold">{title}</h4>
        </div>
      </div>
    </li>
  );
}
