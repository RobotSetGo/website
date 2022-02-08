import React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import IconsTable from "../components/SubComponents/IconsTable";
import { minecraft as info } from "../data/class_info";

export default function Minecraft() {
    return (
        <Layout title="Robot Set Go">
            <Hero
                title="Minecraft Education"
                subtitle="Μέσα από ένα περιβάλλον παιχνιδιού οι μαθητές μελετούν μαθήματα, όπως Μαθηματικά, Ιστορία, Φυσική, Προγραμματισμό, κ.α. Σε αυτό το οικείο περιβάλλον οι μαθητές μελετούν, μαθαίνουν και δημιουργούν κώδικα με ευχάριστο και δημιουργικό τρόπο."
                bgImage="/img/minecraft.jpg"
                minHeight="60vh"
            />
            <section className="pb-10 bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap items-center mt-32">
                        <div className="w-full md:w-10/12 px-4 mr-auto ml-auto">
                            <div className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                                <div className="pb-4">
                                    Το Minecraft: Education Edition είναι η εκπαιδευτική έκδοση του λογισμικού Minecraft: Education Edition, του δημοφιλούς παιχνιδιού σε όλο τον κόσμο.
                                </div>
                                <div className="pb-4">
                                    Με το Minecraft Education ανακαλύπτουμε έννοιες της μηχανικής και των κατασκευών και περιγράφουμε  με επιτυχία την επιστήμη των υπολογιστών και του προγραμματισμού, καθώς και τη σημασία της.
                                    Αλλάζουμε τον κόσμο στο Minecraft μέσα από τον προγραμματισμό. Μαθαίνουμε βασικές εντολές και έννοιες προγραμματισμού και προγραμματίζουμε μέσω block εντολών, Python ή Javascript.
                                    Αναπτύσσουμε τις δεξιότητες της δημιουργικότητας, της κριτικής σκέψης και της συνεργασίας. Εφαρμόζουμε την υπολογιστική σκέψη για την επίλυση προβλημάτων.
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