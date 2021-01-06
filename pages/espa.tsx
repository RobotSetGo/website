import React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";

export default function Espa() {
  return (
    <Layout title="ΕΣΠΑ">
      <Hero
        title="ΕΣΠΑ"
        subtitle="Ερευνώ-Καινοτομώ-Δημιουργώ"
        bgImage={require("../assets/img/espa.jpg")}
        minHeight="60vh"
        customImage={require("../assets/img/espa/etak.jpg")}
      />
      <section className="pb-10 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-center my-12">
            <div className="w-full md:w-10/12 px-6 mr-auto ml-auto">
              <div className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                <div className="flex flex-col md:flex-row flex-wrap items-center justify-center">
                  <img
                    className="w-64 mr-12"
                    src={require("../assets/img/espa/1.jpeg")}
                    alt="espa1"
                  />
                  <img
                    className="w-64 mr-12"
                    src={require("../assets/img/espa/2.jpeg")}
                    alt="espa2"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
