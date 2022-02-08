import React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import IconsTable from "../components/SubComponents/IconsTable";
import { infoDistance as info } from "../data/class_info";

export default function Distance() {
  return (
    <Layout title="Εξ' αποστάσεως - Robotsetgo">
      <Hero
        title="Εξ' αποστάσεως"
        subtitle="«Μένουμε ασφαλείς»"
        bgImage="/img/distance.jpg"
        minHeight="60vh"
      />
      <section className="pb-10 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-center mt-16">
            <div className="w-full md:w-10/12 px-6 mr-auto ml-auto">
              <div className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                <div className="pb-4">
                  Πρόκειται για μια τόσο απλή ,όμως με μεγάλο νόημα φράση .Οι
                  εποχές εξελίσσονται, αλλάζουν και όλοι μας πρέπει να
                  προσαρμοζόμαστε στις νέες συνθήκες. Με εξίσου γρήγορους
                  ρυθμούς εξελίσσεται και η τεχνολογία , όπου με την βοήθεια της
                  έχουμε έρθει τα τελευταία χρόνια σε επαφή με αυτό που
                  ονομάζουμε εξ’ αποστάσεως εκπαίδευση. Έτσι λοιπόν, και η Robot
                  set go με την σειρά της, με μοναδικό γνώμονα την ασφάλεια των
                  παιδιών, και κατ’ επέκταση των ενηλίκων,προχωράει στην
                  δημιουργία ενός νέου εγχειρήματος που θα αφορά τόσο τα
                  σύγχρονα όσο και τα ασύγχρονα διαδικτυακά μαθήματα .Η
                  εκπαίδευση προχωράει ένα βήμα μπροστά, έτσι ώστε να συναντήσει
                  τον ψηφιακό κόσμο. Σε αυτή τη νέα πρόκληση απαντάει η Robot
                  set go συνδιάζοντας την καινοτόμο τεχνολογία , την οποία
                  γνωρίζει καλά, με την εκπαιδευτική ρομποτική ,έτσι ώστε το
                  μάθημα να γίνεται εξ αποστάσεως και χωρίς κανένας μας να
                  κινδυνεύσει πόσο μάλλον τα παιδιά μας.
                </div>

                <div className="pb-4">
                  Βασικός στόχος ενός ολοκληρωμένου περιβάλλοντος μάθησης στο
                  Διαδίκτυο είναι η δημιουργία εκείνων των προυποθέσεων
                  παιδαγωγικών, διοικητικών, οργανωτικών τεχνολογικών , οι
                  οποίες θα κάνουν πράξη το όραμα της εξ αποστάσεως εκπαίδευσης
                  .Ένα άρτιο περιβάλλον μάθησης στο διαδίκτυο αποτελείται, εκτός
                  από τα συστατικά του στοιχεία τα οποία είναι οι ανθρώπινοι,οι
                  μαθησιακοί και οι τεχνολογικοί πόροι ,και από τρία βασικά
                  υποσυστήματα:
                </div>

                <div className="pb-2">
                  <strong>Α.</strong> το Υποσύστημα Παιδαγωγικής Οργάνωσης της
                  Μάθησης, το οποίο αντιμετωπίζει τους ανθρώπινους πόρους του ως
                  μέλη μιας συνεργατικής κοινότητας μάθησης.
                </div>
                <div className="pb-2">
                  <strong>Β.</strong> Το Υποσύστημα Τεχνολογικής Οργάνωσης,
                  δηλαδή τα εργαλεία, τα πρότυπα και τις μεθόδους σχεδίασης και
                  υλοποίησης του μαθησιακού περιβάλλοντος, με βάση τις ανάγκες
                  της κοινότητας μάθησης.
                </div>

                <div className="pb-2">
                  <strong>Γ.</strong> Το Υποσύστημα Κοινωνικής Οργάνωσης, το
                  οποίο αναδεικνύει την κουλτούρα της συνεργατικής μάθησης στα
                  πλαίσια μιας μαθητοκεντρικής διδακτικής προσέγγισης.
                </div>

                <h3 className="pb-2 font-semibold">
                  Η Robot set go απαντάει στα νέα δεδομένα με μια μοναδική
                  προσφορά, μαθημάτων και εξοπλισμό ρομποτικής στους μαθητές της
                  .
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <IconsTable info={info} />
    </Layout>
  );
}
