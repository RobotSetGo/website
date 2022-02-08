import React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import { visits_2017, visits_2018, visits_2019 } from "../data/school_visits";

export default function School_Stats() {
  return (
    <Layout title="Σχολεία που μας επισκέφτηκαν">
      <Hero
        title="Σχολεία που μας επισκέφτηκαν"
        subtitle=""
        bgImage="/img/school_stats.jpg"
        minHeight="60vh"
      />
      <section className="pb-10 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-center my-12">
            <div className="w-full md:w-10/12 px-6 mr-auto ml-auto">
              <div className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                <div className="pb-4">
                  <h1 className="font-bold text-center text-lg mb-6">
                    ΣΧΟΛΕΙΑ ΠΟΥ ΠΑΡΑΚΟΛΟΥΘΗΣΑΝ ΤΟ ΕΚΠΑΙΔΕΥΤΙΚΟ ΠΡΟΓΡΑΜΜΑ
                    2018-2019
                  </h1>
                  <ul className="list-decimal list-inside flex flex-col md:flex-row flex-wrap">
                    {visits_2019.map((visit) => (
                      <li key={visit} className="p-2">
                        {visit}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pb-4">
                  <h1 className="font-bold text-center text-lg mb-6">
                    ΣΧΟΛΕΙΑ ΠΟΥ ΠΑΡΑΚΟΛΟΥΘΗΣΑΝ ΤΟ ΕΚΠΑΙΔΕΥΤΙΚΟ ΠΡΟΓΡΑΜΜΑ
                    2017-2018
                  </h1>
                  <ul className="list-decimal list-inside flex flex-col md:flex-row flex-wrap">
                    {visits_2018.map((visit) => (
                      <li key={visit} className="p-2">
                        {visit}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pb-4">
                  <h1 className="font-bold text-center text-lg mb-6">
                    ΣΧΟΛΕΙΑ ΠΟΥ ΠΑΡΑΚΟΛΟΥΘΗΣΑΝ ΤΟ ΕΚΠΑΙΔΕΥΤΙΚΟ ΠΡΟΓΡΑΜΜΑ
                    2016-2017
                  </h1>
                  <ul className="list-decimal list-inside flex flex-col md:flex-row flex-wrap">
                    {visits_2017.map((visit) => (
                      <li key={visit} className="p-2">
                        {visit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
