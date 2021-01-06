import React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import IconsTable from "components/SubComponents/IconsTable";

const info = [
  {
    title: "3 / άτομο",
    icon: "euro-sign",
  },
  {
    title: "2392400370 - 6944140426",
    icon: "phone",
  },
];

export default function Teachers_Message() {
  return (
    <Layout title="Προς Εκπαιδευτικούς">
      <Hero
        title="Προς Εκπαιδευτικούς"
        subtitle=""
        bgImage={require("../assets/img/teachers_message.jpg")}
        minHeight="60vh"
      />
      <section className="pb-10 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-center my-12">
            <div className="w-full md:w-10/12 px-6 mr-auto ml-auto">
              <div className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                <h1 className="text-center font-semibold text-xl">
                  Αγαπητοί Εκπαιδευτικοί
                </h1>
                <div className="mt-6">
                  <p className="mb-4">
                    Με χαρά σας ανακοινώνουμε ότι ο Αστικός Μη Κερδοσκοπικός
                    Οργανισμός Robotsetgo είναι έτοιμος να υποδεχθεί στον χώρο
                    του την εκπαιδευτική επίσκεψη των παιδιών από Νηπιαγωγείο
                    μέχρι και το Λύκειο στις εγκαταστάσεις που διαθέτει στον
                    Τρίλοφο του Δήμου Θέρμης.
                  </p>
                  <p className="mb-4">
                    Το πρόγραμμα μας έχει κοινοποιηθεί από την Περιφερειακή
                    Διεύθυνση Πρωτοβάθμιας και Δευτεροβάθμιας Εκπαίδευσης
                    Κεντρικής Μακεδονίας, καθώς επίσης βρίσκεται και στην
                    ιστοσελίδα μας www.robotsetgo.gr στην εκπαιδευτική επίσκεψη.
                  </p>
                  <p className="mb-4">
                    Πεποίθηση μας είναι πως το παιχνίδι είναι ένα μέσο το οποίο
                    επιδρά θετικά στην ολοκληρωμένη εξέλιξη των παιδιών. Είναι
                    γνωστό ότι μέσα από αυτό τα παιδιά αποκτούν κοινωνικές
                    δεξιότητες, όπως η επιτυχής επίλυση καθημερινών προβλημάτων,
                    δεξιότητες επικοινωνίας με συνομήλικους, ικανότητα
                    αυτορρύθμισης της συμπεριφοράς τους, καθώς και έλεγχο των
                    συναισθημάτων τους.
                  </p>
                  <p className="mb-4">
                    Ως γνωστόν, η Ρομποτική αποτελεί ένα πολύ σημαντικό κομμάτι
                    της Παγκόσμιας Εκπαιδευτικής δραστηριότητας. Τα παιδιά όταν
                    σχεδιάζουν, κατασκευάζουν και προγραμματίζουν ρομπότ έχουν
                    την ευκαιρία να μάθουν παίζοντας και να αναπτύξουν
                    δεξιότητες σε τομείς όπως τα μαθηματικά , η φυσική , η
                    τεχνολογία , η τέχνη, το περιβάλλον, η κοινωνία κ.ά.
                  </p>
                  <p className="mb-4">
                    Ακόμα, η Εκπαιδευτική Ρομποτική έχει θετικές επιπτώσεις,
                    εκτός από το γνωστικό τομέα , στο συναισθηματικό και στο
                    κοινωνικό.
                  </p>
                  <p className="mb-4">
                    Στον πολυχώρο της Robotsetgo , θα δείτε με λεπτομέρεια από
                    κοντά τα πακέτα εκπαιδευτικής ρομποτικής και τον τρόπο με
                    τον οποίο υλοποιείται ο στόχος μας .
                  </p>
                  <p className="mb-4 font-semibold">
                    Σας προσκαλούμε, να ορίσετε άμεσα μια εκπαιδευτική εκδρομή.
                  </p>
                  <div>
                    <IconsTable info={info} />
                  </div>

                  <div>
                    <span className="block">Με εκτίμηση,</span>
                    <span className="block font-semibold">
                      Σταμάτης Φιρινίδης
                    </span>
                    <span className="block">Υπεύθυνος τμημάτων ρομποτικής</span>
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
