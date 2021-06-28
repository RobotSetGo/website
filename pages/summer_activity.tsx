import React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import SummerActivityTable from "components/SubComponents/SummerActivityTable";

export default function SummerActivity() {
  return (
    <Layout title="Καλοκαιρινή Δραστηριότητα">
      <Hero
        title="Καλοκαιρινή Δραστηριότητα"
        subtitle="Ατελείωτο παιχνίδι με ρομποτική!"
        bgImage={require("../assets/img/summer-bg.jpg")}
        minHeight="60vh"
        customImage={require("../assets/img/summer_bg.jpg")}
      />
      <section className="pb-10 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-center my-12">
            <div className="w-full md:w-10/12 px-6 mr-auto ml-auto">
              <div className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                <div className="flex flex-col md:flex-row flex-wrap items-center justify-center">
                  <SummerActivityTable />
                </div>
                <div className="mt-4 flex flex-col flex-wrap items-center justify-center">
                  <div>
                    <span className="text-3xl font-bold mr-4">
                      4ωρη Απασχόληση:
                    </span>
                    <span className="text-3xl">5€</span>
                  </div>
                  <div>
                    <span className="text-3xl font-bold mr-4">
                      8ωρη Απασχόληση:
                    </span>
                    <span className="text-3xl">10€</span>
                  </div>
                </div>
                <div className="mt-4 flex flex-col md:flex-row flex-wrap items-center justify-center">
                  <p>
                    Ο ελεύθερος χρόνος που διαθέτουν τα παιδιά είναι άπλετος
                    οπότε η δημιουργική απασχόληση πάνω στην τεχνολογία, έστω
                    για κάποιες ώρες, κρίνεται σχεδόν επιβεβλημένη. Η{" "}
                    <strong>Robot Set Go</strong>
                    διοργανώνει το πρωτότυπο και ψυχαγωγικό διαδραστικό
                    βιωματικό ταξίδι παρέα με τη ρομποτική για παιδιά από 5 -15
                    ετών.
                  </p>
                  <p>
                    Μετά τα επιτυχημένα εκπαιδευτικά ρομποτικά σενάρια την
                    χειμερινή και εαρινή περίοδο καλεί για πρώτη φορά τους
                    μικρούς φίλους να περάσουν τέσσερις ώρες μέσα στις δροσερές
                    – σύγχρονες εγκαταστάσεις. Υπόσχεται ότι η εμπειρία θα τους
                    μείνει αξέχαστη.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
