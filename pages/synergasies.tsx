import React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import ImageCard from "components/ImageCard";

const images = [
  {
    path: require("../assets/img/company/robots/robotics.png"),
    description: "Επαιδευτικη Ρομποτική",
  },
  {
    path: require("../assets/img/company/robots/code.png"),
    description: "Μαθήματα Προγραμματισμού",
  },
  {
    path: require("../assets/img/company/robots/arduino.png"),
    description: "Ρομποτική και Αυτοματισμός",
  },
  {
    path: require("../assets/img/company/robots/3d.png"),
    description: "Τρισδιάστατη (3D) Σχεδίαση",
  },
];

export default function School_Stats() {
  return (
    <Layout title="Συνεργασίες">
      <Hero
        title="Συνεργασίες"
        subtitle=""
        bgImage={require("../assets/img/school_stats.jpg")}
        minHeight="60vh"
      />
      <section className="pb-10 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-center my-12">
            <div className="w-full md:w-10/12 px-6 mr-auto ml-auto">
              <div className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                <h1 className="font-semibold text-center text-xl mb-6">
                  Ο πολυχώρος - εργαστήρι ρομποτικής Robot Set Go σας προσκαλεί
                  να γνωριστούμε από κοντά
                </h1>
                <img
                  src={require("../assets/img/company/2.jpg")}
                  alt="school-2"
                />
                <a
                  className="block text-xl font-bold mt-8 py-2 border border-blue-300 text-center bg-blue-200"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfIQAgau-xLvzPsa3MrxNn4r-f91LXlaHu-VdBSscFFffYR8g/viewform"
                >
                  Δηλώστε Συμμετοχή
                </a>

                <div className="mt-6">
                  Η Robot set go είναι μια αναπτυσσόμενη αστική μη κερδοσκοπική
                  εταιρία που ιδρύθηκε το 2016 και στοχεύει στην εκμάθηση υψηλής
                  τεχνολογίας σε όλες τις ηλικιακές ομάδες. Σε αυτήν την
                  προσπάθεια υπάρχουν συνεργασίες με τα Πανεπιστημιακά Ιδρύματα
                  καθώς επίσης με ιδιωτικά ιδρύματα & άλλες αστικές μη
                  κερδοσκοπικές εταιρίες.
                </div>

                <div className="mt-6">
                  <h3 className="font-semibold text-center text-lg mb-6">
                    Οι κλάδοι τις υψηλής τεχνολογίας με τους οποίους ασχολείται
                    είναι:
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
