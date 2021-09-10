import React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import IconsTable from "../components/SubComponents/IconsTable";
import { minecraft as info } from "../data/class_info";

export default function Animation() {
    return (
        <Layout title="Robot Set Go">
            <Hero
                title="Animation"
                subtitle="Ένα βιωματικό μάθημα για σύνθεση εικόνων"
                bgImage={require("../assets/img/animation.jpg")}
                minHeight="60vh"
            />
            <section className="pb-10 bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap items-center mt-32">
                        <div className="w-full md:w-10/12 px-4 mr-auto ml-auto">
                            <div className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                                <div className="pb-4">
                                    Το συγκεκριμένο λογισμικό επιλέχθηκε επειδή οι δυνατότητές του και το αποτέλεσμα που μπορεί να παραχθεί είναι ελκυστικά και συναρπαστικά στις ηλικίες που αποτελούν τον κοινό στόχο του βίντεο: τα παιδιά και τους εφήβους. Ως γνωστόν, τα παιδιά και οι έφηβοι εντυπωσιάζονται ιδιαίτερα από τις νέες τεχνολογίες και δίνουν περισσότερη προσοχή σε βίντεο από ότι σε μια απλή ομιλία.
                                </div>

                                <div className="pb-4">
                                    Το μεγαλύτερο μέρος της μάθησης επιτυγχάνεται όταν κανείς ακούει και βλέπει παρά όταν απλά ακούει ή διαβάζει. Συμπερασματικά, η σειρά  μαθημάτων  παρουσιάζει βήμα-βήμα την παραγωγή εκπαιδευτικού  βίντεο, αναλύοντας και εξηγώντας τη χρήση του muvizu σε όλα τα στάδια, καθώς και τα προβλήματα και τους τρόπους που αντιμετωπίστηκαν, ώστε μέσα από τη δημιουργία ενός εκπαιδευτικού βίντεο να παρουσιαστούν όσες περισσότερες δυνατότητες του προγράμματος γίνεται.
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