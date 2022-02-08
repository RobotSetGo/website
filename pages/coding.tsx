import React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import IconsTable from "../components/SubComponents/IconsTable";
import { info3D as info } from "../data/class_info";

export default function Coding() {
  return (
    <Layout title="Robot Set Go">
      <Hero
        title="Υπολογιστές και Προγραμματισμός"
        subtitle="Η σειρά μαθημάτων απευθύνεται από πολύ αρχάριους (που δεν γνωρίζουν τίποτα από υπολογιστές) μέχρι και πολύ προχωρημένους και σε όλες τις ηλικιακές ομάδες. Στόχος των μαθημάτων είναι ο σωστός χειρισμός των ηλεκτρονικών υπολογιστών καθώς και η εισαγωγή στον κόσμο του προγραμματισμού"
        bgImage="/img/coding.jpg"
        minHeight="60vh"
      />
      <section className="pb-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center mt-32">
            <div className="w-full md:w-10/12 px-4 mr-auto ml-auto">
              <div className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                <div className="pb-6 text-xl">
                  Η διαβάθμιση των μαθημάτων έχει ως εξής:
                </div>
                <li className="font-bold">
                  Εισαγωγή στον χειρισμό των Ηλεκτρονικών Υπολογιστών (για
                  αρχάριους):
                </li>
                <div className="pb-2">
                  Οι ενδιαφερόμενοι θα μάθουν τον απλό χειρισμό του υπολογιστή,
                  εγκατάσταση – απεγκατάσταση προγραμμάτων, πως να χρησιμοποιούν
                  το internet και επίσης εκμάθηση απλών εργαλείων Microsoft
                  Office (Word, Excel, PowerPoint).
                </div>
                <li className="font-bold">
                  Εισαγωγή στον σχεδιασμό και προγραμματισμό ιστοσελίδων (για
                  αρχάριους έως και προχωρημένους)
                </li>
                <div className="pb-2">
                  Οι ενδιαφερόμενοι θα εκπαιδευτούν πάνω τις βασικές αρχές
                  σχεδίασης προγραμματισμού και υλοποίησης ιστοσελίδων και web
                  προγραμμάτων. Σε αρχικό στάδιο θα ασχοληθούν με τον σχεδιασμό
                  απλών στατικών ιστοσελίδων με γλώσσα HTML και CSS και σε
                  επόμενο στάδιο θα προχωρήσουν στις γλώσσες προγραμματισμού
                  Javascript και PHP για την υλοποίηση δυναμικών ιστοσελίδων.
                  Για πιο προχωρημένους υπάρχουν και τμήματα για frameworks όπως
                  Laravel, Vue, React, Flask κ.α
                </div>
                <li className="font-bold">
                  Εισαγωγή στον Προγραμματισμό (για αρχάριους έως και
                  προχωρημένους)
                </li>
                <div className="pb-2">
                  Οι ενδιαφερόμενοι θα μάθουν τις βασικές αρχές του
                  προγραμματισμού καθώς και τον τρόπο δημιουργίας και εκτέλεσης
                  προγραμμάτων. Η εκπαίδευση θα γίνεται σε διάφορες γλώσσες
                  προγραμματισμού όπως Java, C++, Python, Go, Rust κ.α
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <IconsTable info={info} />
    </Layout>
  );
}
