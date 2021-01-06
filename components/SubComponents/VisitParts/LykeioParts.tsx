import React from "react";
import ImageCard from "../../ImageCard";

export default function LykeioParts() {
  return (
    <>
      <h1 className="block pb-2 text-xl font-bold text-center">
        Δημιουργία κινούμενων θεατρικών παραστάσεων
      </h1>

      <div className="pt-2">
        <span className="font-bold">Γενικά στοιχεία: </span>Η συνεδρία μας είναι
        χωρισμένη σε δύο ενότητες. Η πρώτη ενότητα έχει ως στόχο να γνωρίσουν τα
        παιδιά τι είναι το animation και τα προετοιμάζει σε θεωρητικό επίπεδο
        για τη δραστηριότητες που θα ακολουθήσει. Η δεύτερη ενότητα είναι και η
        πιο σημαντική. Τα παιδιά θα δημιουργήσουν κινούμενες θεατρικές
        αναπαραστάσεις.
        <div className="p-8 flex items-center justify-center">
          <ImageCard
            image={require("../../../assets/img/theatriki.jpg")}
            description="Κινούμενες θεατρικές παραστάσεις"
          />
        </div>
      </div>

      <div className="pt-2">
        <span className="block font-bold text-blue-700">1η Ενότητα: </span>
        Κατά την προέλευση τους τα παιδιά συγκεντρώνονται στην αμφιθεατρική
        αίθουσα. Η αίθουσα είναι χωρητικότητας 60 ατόμων. Διαθέτει video
        projector και ηλεκτρονικό υπολογιστή. Στόχοι της πρώτης αυτής ενότητας
        είναι να μάθουν τα παιδιά βασικά πράγματα για το animation μέσα από τη
        σχετική παρουσίαση που θα ακολουθήσει. Υπάρχουν έννοιες που τις ακούμε
        και χρησιμοποιούμε καθημερινά, αλλά όχι πάντα με τον σωστό τρόπο.
        <br />Η πρώτη ενότητα τελειώνει και τα παιδιά κάνουν διάλειμμα .Μετά από
        το διάλειμμα οδηγούνται στις αίθουσες για να κατασκευάσουν τις δικές
        τους κινούμενες θεατρικές αναπαραστάσεις.
      </div>

      <div className="pt-2">
        <span className="block font-bold text-blue-700">2η Ενότητα: </span>
        <div>
          Τα παιδιά χωρίζονται σε ομάδες των 2-3 ατόμων. Σκοπός είναι τα παιδιά
          να αντιληφθούν τις βασικές έννοιες του animation και να ξετυλίξουν την
          φαντασία τους και ταυτόχρονα να διασκεδάσουν. Κάθε ομάδα παρακολουθεί
          το βίντεο με τις οδηγίες που υπάρχει σε κάθε υπολογιστή βοηθώντας τα
          να φτιάξουν τη δική τους κινούμενη θεατρική αναπαράσταση.
        </div>
        <div>
          Τα παιδιά που έχουν παραμείνει στο αμφιθέατρο παρακολουθούν βίντεο,
          μέχρι να έρθει η σειρά τους να περάσουν στις αίθουσες.
        </div>
      </div>
    </>
  );
}