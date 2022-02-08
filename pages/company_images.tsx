import React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import ImageCard from "components/ImageCard";

const images = [
  {
    path: "/img/company/1.jpg",
    description: "Εξωτερική όψη της σχολής μας",
  },
  {
    path: "/img/company/3.jpg",
    description: "Αίθουσα 1 (Γενική)",
  },
  {
    path: "/img/company/5.jpg",
    description: "Αίθουσα 1 (Σχέδιο)",
  },
  {
    path: "/img/company/7.jpg",
    description: "Αίθουσα 2 (Γενική)",
  },
  {
    path: "/img/company/6.jpg",
    description: "Αίθουσα 2 (Σχέδιο)",
  },
  {
    path: "/img/company/8.jpg",
    description: "Αίθουσα 3 - Αμφιθέατρο (Σχέδιο)",
  },
  {
    path: "/img/company/4.jpg",
    description: "Αίθουσα 3 - Αμφιθέατρο (Σχέδιο)",
  },
  {
    path: "/img/company/2.jpg",
    description: "Αίθουσα 3 - Αμφιθέατρο (Πίστα Αγώνων Ολυμπιάδος Ρομποτικής)",
  },
];

export default function School_Stats() {
  return (
    <Layout title="Φωτογραφίες Σχολής">
      <Hero
        title="Φωτογραφίες Σχολής"
        subtitle=""
        bgImage="/img/company/1.jpg"
        minHeight="60vh"
      />
      <section className="pb-10 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-center my-12">
            <div className="w-full md:w-10/12 px-6 mr-auto ml-auto">
              <div className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                <h1 className="font-bold text-center text-xl mb-6">
                  Robot Set Go
                </h1>

                <div className="my-6">
                  Ο χώρος του φροντιστηρίου μας είναι ιδιαίτερα προσεγμένος και
                  τροποποιημένος κατάλληλα για παιδιά και εφήβους. Οι αίθουσες
                  μας είναι εξοπλισμένες με άνετα έπιπλα κατάλληλα για
                  ρομποτική. Κάθε μαθητής έχει στη διάθεση του, στο θρανίο του
                  ηλεκτρονικό υπολογιστή αλλά και tablet το οποίο χρειάζεται σε
                  ορισμένες δραστηριότητες.
                </div>
                <img
                  src={"/img/company/base.jpg"}
                  alt="school-base"
                />

                <div className="mt-6">
                  <h3 className="font-semibold text-center text-lg mb-6">
                    Φωτογραφίες από τον χώρο μας
                  </h3>

                  <div className="flex flex-col md:flex-row flex-wrap">
                    {images.map((image, key) => (
                      <ImageCard
                        key={key}
                        image={image.path}
                        customCss="m-6"
                        description={image.description}
                        imageCss="h-auto w-24"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
