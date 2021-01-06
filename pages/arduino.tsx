import React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import IconsTable from "../components/SubComponents/IconsTable";
import { info3D as info } from "../data/class_info";

export default function Arduino() {
  return (
    <Layout title="Robot Set Go">
      <Hero
        title="Αυτοματισμοί"
        subtitle="Γενική φιλοσοφία των μαθημάτων είναι η πρακτική εξάσκηση (Hands on Training). Κάθε αντικείμενο διδάσκεται μέσω ασκήσεων και παραδειγμάτων χρήσιμων για την κατανόηση και σωστή χρήση του Αrduino &  του Raspberry Pi."
        bgImage={require("../assets/img/arduino.jpg")}
        minHeight="60vh"
      />
      <section className="pb-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center mt-32">
            <div className="w-full md:w-10/12 px-4 mr-auto ml-auto">
              <div className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                <div className="pb-4">
                  Μέσω της πλατφόρμας του Arduino αλλά και άλλων
                  μικρο-επεξεργαστών, ο χομπίστας έρχεται σε επαφή με
                  προγραμματισμό υλικού χαμηλότερου επιπέδου (όπως μοτέρ
                  ακριβείας ή αισθητήρες τρισδιάστατης κίνησης και επιτάχυνσης),
                  ο οποίος τους δίνει τη δυνατότητα υλοποίησης πρωτότυπων
                  κατασκευών που ξεφεύγουν από την τυποποιημένη ρομποτική. Το
                  εύρος των κατασκευών αυτών περιορίζεται μόνο από τη φαντασία
                  του δημιουργού τους. Για παράδειγμα, μπορούν να υλοποιηθούν
                  ιδέες όπως το άνοιγμα μιας πόρτας αυτόματα με συνθηματικό
                  χτύπημα ή ο χειρισμός οικιακών συσκευών μέσω του κινητού
                  τηλεφώνου. Τα σεμιναρικά μαθήματα είναι χωρισμένα σε τρείς
                  κύκλους.
                </div>
                <div className="pb-4">
                  Ο Α κύκλοςέχει σκοπό την εκμάθηση της πλατφόρμας Arduino και
                  άλλων αισθητήρων, προκειμένου να μπορούμε να φτιάχουμε απλές
                  κατασκευές και αυτοματισμούς.
                </div>
                <div className="pb-4">
                  Ο Β κύκλος έχει σκοπό να εισάγει τον ενδιαφερόμενο σε
                  προχωρημένες λειτουργίες του arduino και του προγραμματισμού
                  του, καθώς και σε γενικά πράγματα που αφορούν την επικοινωνία
                  του arduino με άλλα chips και αλληλεπίδρασης του με το φυσικό
                  κόσμομε κάθε δυνατό τρόπο. Απευθύνεται επίσης σε αρχάριους,
                  μιας και οι βασικές γνώσεις έχουν πλέον αποκτηθεί κατά την
                  παρακολούθηση του Α” κύκλου.
                </div>
                <div className="pb-4">
                  Τέλος ο Γ” κύκλος συνδιάζει και άλλες γνώσεις προγραμματισμού
                  για πιο ολοκληρωμένες κατασκευές, σύνδεση στο internet,
                  Ρrocessing, κατασκευή mobile εφαρμογών κ.α. Για την
                  παρακολούθηση του Γ κύκλου είναι απαραίτητη η παρακολούθηση
                  του Α και Β.
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
