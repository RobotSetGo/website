import React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import ImageCard from "../components/ImageCard";

const images = [
  {
    path: require("../assets/img/party/2.jpg"),
    description: "Παιδικό πάρτυ στην σχολή μας!",
  },
  {
    path: require("../assets/img/party/1.jpg"),
    description: "Παιδικό πάρτυ στην σχολή μας!",
  },
];

export default function Events() {
  return (
    <Layout title="Εκδηλώσεις">
      <Hero
        title="Εκδηλώσεις"
        subtitle="Ένα πάρτυ γενεθλίων που θα σας μείνει αξέχαστο!"
        bgImage={require("../assets/img/party.jpg")}
        minHeight="60vh"
      />
      <section className="pb-2 bg-white">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center mt-12">
            <div className="w-full md:w-10/12 px-6 mr-auto ml-auto">
              <div className="text-lg font-light leading-relaxed mt-4 text-gray-700">
                <h1 className="font-bold text-2xl text-center pb-4">
                  Παιδικά Πάρτυ - Διαδραστικό Παιχνίδι
                </h1>
                <div className="pb-4">
                  Θέλετε κάτι πρωτοπόρο για τα παιδιά σας; Γενέθλια που
                  συνδυάζουν τη διασκέδαση με τη μάθηση! To κάθε παιδί θα ζήσει
                  ένα 2ωρο ταξίδι στο χρόνο, μαθαίνοντας πως με τα τουβλάκια, με
                  τα οποία έχουν μάθει έως τώρα να παίζουν, μπορούν με τη δική
                  μας καθοδήγηση, όχι απλά να δουν αλλά να κατασκευάσουν τα ίδια
                  ρομποτάκια και να τους δώσουν ζωή
                  <span className="block font-semibold">
                    Ένα βιωματικό διαδραστικό παιχνίδι, εισαγωγή στη Ρομποτική.
                  </span>
                </div>
                <div className="pb-4">
                  Τα events μπορούν να διοργανωθούν είτε στον χώρο μας στη σχολή
                  Εκπαιδευτικής Ρομποτικής ROBOT SET GO, είτε στον χώρο της
                  επιλογής σας με πολύ κέφι και διάθεση για ένα αξέχαστο πάρτυ!
                </div>
              </div>
              <div className="flex flex-col md:flex-row flex-wrap">
                {images.map((image, key) => (
                  <ImageCard
                    key={key}
                    image={image.path}
                    customCss="m-6 "
                    description={image.description}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container mx-auto flex p-10"></div>
    </Layout>
  );
}
