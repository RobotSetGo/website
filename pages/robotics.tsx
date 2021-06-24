import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import IconsTable from "../components/SubComponents/IconsTable";
import { robotics as info } from "../data/class_info";

export default function Robotics() {
  const [tab, setTab] = useState("beebot");
  const [data, setData] = useState({
    title: "Beebot",
    subtitle:
      "Μια ειδική κατηγορία εκπαιδευτικής ρομποτικής συνιστούν τα προγραμματιζόμενα παιχνίδια τύπου Logo τα οποία βρίσκουν ιδιαίτερη εφαρμογή στην προσχολική και στην πρώτη σχολική ηλικία.",
    image: require("../assets/img/beebot.jpg"),
    body: <RoboticsBody type="beebot" />,
  });

  useEffect(() => {
    if (tab === "beebot") {
      setData({
        title: "Beebot",
        subtitle:
          "Μια ειδική κατηγορία εκπαιδευτικής ρομποτικής συνιστούν τα προγραμματιζόμενα παιχνίδια τύπου Logo τα οποία βρίσκουν ιδιαίτερη εφαρμογή στην προσχολική και στην πρώτη σχολική ηλικία.",
        image: require("../assets/img/beebot.jpg"),
        body: <RoboticsBody type="beebot" />,
      });
    }

    if (tab === "wedo") {
      setData({
        title: "WeDo",
        subtitle:
          "Το πρόγραμμα εκπαιδευτικής ρομποτικής LEGO WeDo2 αφορά παιδιά ηλικίας από πρώτη δημοτικού μέχρι και τρίτη δημοτικού και ήρθε να αναβαθμίσει τον τρόπο που διδάσκονταν η ρομποτική στα παιδιά.",
        image: require("../assets/img/wedo.jpg"),
        body: <RoboticsBody type="wedo" />,
      });
    }

    if (tab === "ev3") {
      setData({
        title: "EV3",
        subtitle:
          "Το πρόγραμμα εκπαιδευτικής ρομποτικής LEGO Mindstorms EV3 αφορά παιδιά ηλικίας από τετάρτη δημοτικού μέχρι ενήλικες και αποτελεί μια ολοκληρωμένη λύση εκπαίδευσης STEM βασισμένη στην τεχνολογία της ρομποτικής.",
        image: require("../assets/img/ev3.jpg"),
        body: <RoboticsBody type="ev3" />,
      });
    }

    if (tab === "spike") {
      setData({
        title: "Spike",
        subtitle:
          "Το εκπαιδευτικό πακέτο LEGO® Education SPIKE ™ είναι το εργαλείο εκμάθησης STEAM για μαθητές ηλικίας 8 έως 11.",
        image: require("../assets/img/spike.jpg"),
        body: <RoboticsBody type="spike" />,
      });
    }
  }, [tab]);

  function activeTab(current) {
    if (tab === current) {
      return "";
    }
    return "border-transparent";
  }

  return (
    <Layout title="Robot Set Go">
      <Hero
        title={data.title}
        subtitle={data.subtitle}
        bgImage={data.image}
        minHeight="60vh"
      />
      <section className="pb-32 bg-white">
        <div className="container mx-auto px-4">
          <nav className="bg-white px-8 pt-2 shadow-md">
            <div className="-mb-px flex justify-center">
              <button
                className={`no-underline text-teal-dark border-b-2 focus:outline-none ${activeTab(
                  "beebot"
                )} uppercase tracking-wide font-bold text-xs py-3 mr-8`}
                onClick={() => setTab("beebot")}
              >
                Προσχολικης
              </button>
              <button
                className={`no-underline text-grey-dark focus:outline-none border-b-2 ${activeTab(
                  "wedo"
                )} uppercase tracking-wide font-bold text-xs py-3 mr-8`}
                onClick={() => setTab("wedo")}
              >
                WeDo
              </button>
              <button
                className={`no-underline text-grey-dark focus:outline-none border-b-2 ${activeTab(
                  "ev3"
                )} uppercase tracking-wide font-bold text-xs py-3 mr-8`}
                onClick={() => setTab("ev3")}
              >
                EV3
              </button>
              <button
                className={`no-underline text-grey-dark focus:outline-none border-b-2 ${activeTab(
                  "spike"
                )} uppercase tracking-wide font-bold text-xs py-3`}
                onClick={() => setTab("spike")}
              >
                Spike
              </button>
            </div>
          </nav>
          <div className="pt-12">{data.body}</div>
        </div>
      </section>
    </Layout>
  );
}

function RoboticsBody({ type }) {
  switch (type) {
    case "spike":
      return (
        <>
          <div>
            Το εκπαιδευτικό πακέτο <strong>LEGO® Education SPIKE ™</strong>{" "}
            είναι το εργαλείο εκμάθησης STEAM για μαθητές ηλικίας 8 έως 11.
            Συνδυάζοντας τα πολύχρωμα τουβλάκια της LEGO και περιέχοντας
            εύχρηστο υλικό και μια γλώσσα κωδικοποίησης βασισμένη στο Scratch,
            το SPIKE συνεχώς ενθαρρύνει τους μαθητές μέσω παιχνιδιάρικων
            μαθησιακών δραστηριοτήτων να σκέφτονται κριτικά και να επιλύουν
            σύνθετα προβλήματα, ανεξάρτητα από το επίπεδο μάθησης. Από τις πιο
            απλές κατασκευές έως τις απεριόριστες δυνατότητες δημιουργικού
            σχεδιασμού, το SPIKE βοηθά τους μαθητές να μάθουν τις βασικές
            δεξιότητες STEAM και 21ου αιώνα που απαιτούνται για να γίνουν τα
            πρωτοποριακά μυαλά του αύριο … ενώ ταυτόχρονα διασκεδάζουν!
          </div>
          <IconsTable info={info} />
        </>
      );
    case "ev3":
      return (
        <>
          <div>
            Τα παιδιά παίζοντας, μαθαίνουν να κατασκευάζουν απλές μηχανές,
            κατανοώντας έτσι βασικές αρχές λειτουργίας τους. Οι μαθητές κατ’
            αυτόν τον τρόπο έρχονται σε πρώτη επαφή με τους νόμους της φυσικής.
            Ο στόχος του εκπαιδευτικού προγράμματος είναι, μέσω της μεταξύ τους
            συνεργασίας , συναρμολογώντας τροχαλίες, γρανάζια, άξονες κ.τ.λ. ,
            να δώσουν λύση σε ένα πρόβλημα. Οι δραστηριότητες συνοδεύονται από
            ειδικά διαμορφωμένα φύλλα εργασίας που επιτρέπουν στο παιδί με απλό
            τρόπο να επαληθεύει αυτά που έμαθε.
          </div>

          <div className="pt-4">
            Ο πυρήνας της εκπαιδευτικής ρομποτικής είναι η κατασκευαστική
            εκμάθηση. Η κατασκευή αφορά τόσο την συναρμολόγηση του μηχανικού
            ρομπότ όσο και στον προγραμματισμό της συμπεριφοράς του. Το ρομπότ
            στην προκειμένη περίπτωση είναι το όχημα μέσα από το οποίο
            συντελείται η μάθηση. Η ιδέα Μαθαίνω κατασκευάζοντας είναι στην
            καρδιά της φιλοσοφίας του κατασκευαστικού εποικοδομησμού που
            ενέπνευσε αρχικά την επινόηση των εργαλείων εκπαιδευτικής
            ρομποτικής. Μέσα σε αυτό το πλαίσιο , η μάθηση είναι μια διαδικασία
            που κάνει το μαθητή να συμμετέχει ενεργά σε μια δημιουργική
            αλληλεπίδραση με το περιβάλλον. Το περιβάλλον και οι αντίστοιχες
            κατασκευές είναι διαμορφωμένα με τέτοιο τρόπο ώστε να θέτουν
            ουσιαστικά ζητήματα προς αναζήτηση και διερεύνηση. Οι εμπειρίες , οι
            γνώσεις και οι ανάγκες του μαθητή εκφράζονται μέσα από την κατασκευή
            .Οι ανάγκες του έργου είναι η αφορμή για τον έλεγχο ιδεών και την
            ανάδειξη νέων ενώ η υλοποίηση της κατασκευής αποτελεί το πεδίο στο
            οποίο αξιοποιούνται αυτές οι ιδέες αποκτούν περιεχόμενο και σύνδεση
            με τον υπόλοιπο φυσικό κόσμο.
          </div>

          <div className="pt-4">
            Το πρόγραμμα εκπαιδευτικής ρομποτικής{" "}
            <strong>LEGO Mindstorms EV3</strong> αφορά παιδιά ηλικίας από
            τετάρτη δημοτικού μέχρι ενήλικες και αποτελεί μια ολοκληρωμένη λύση
            εκπαίδευσης STEM βασισμένη στην τεχνολογία της ρομποτικής. Η
            εκπαιδευτική ρομποτική συνδυάζει τη μάθηση με το παιχνίδι και έτσι
            μετατρέπει την εκπαίδευση σε μία διασκεδαστική δραστηριότητα .Η
            μάθηση επιτυγχάνεται καλύτερα και ταχύτερα όταν συνδυάζεται με το
            παιχνίδι και οι μαθητές μαθαίνουν να εργάζονται ομαδικά, να επιλύουν
            προβλήματα και να υλοποιούν θεματικές προκλήσεις .
          </div>
          <IconsTable info={info} />
        </>
      );
    case "wedo":
      return (
        <>
          <div>
            Τα παιδιά παίζοντας, μαθαίνουν να κατασκευάζουν απλές μηχανές,
            κατανοώντας έτσι βασικές αρχές λειτουργίας τους. Οι μαθητές κατ’
            αυτόν τον τρόπο έρχονται σε πρώτη επαφή με τους νόμους της φυσικής.
            Ο στόχος του εκπαιδευτικού προγράμματος είναι, μέσω της μεταξύ τους
            συνεργασίας , συναρμολογώντας τροχαλίες, γρανάζια, άξονες κ.τ.λ. ,
            να δώσουν λύση σε ένα πρόβλημα. Οι δραστηριότητες συνοδεύονται από
            ειδικά διαμορφωμένα φύλλα εργασίας που επιτρέπουν στο παιδί με απλό
            τρόπο να επαληθεύει αυτά που έμαθε.
          </div>
          <div className="pt-4">
            Το πρόγραμμα εκπαιδευτικής ρομποτικής <strong>LEGO WeDo2</strong>
            &nbsp; αφορά παιδιά ηλικίας από πρώτη δημοτικού μέχρι και τρίτη
            δημοτικού και ήρθε να αναβαθμίσει τον τρόπο που διδάσκονταν η
            ρομποτική στα παιδιά. Προσφέροντας ολοκαίνουργιο εκπαιδευτικό υλικό
            και νέες δραστηριότητες, δίνει ερεθίσματα στα παιδιά να ανακαλύψουν
            τους νόμους της μηχανικής, εξερευνώντας και παρατηρώντας τους
            μηχανισμούς που κατασκευάζουν οι ίδιοι βήμα-βήμα. ‘Έτσι
            επιτυγχάνεται η εισαγωγή των μαθητών του δημοτικού σχολείου στην
            εκπαιδευτική ρομποτική. Το βασικό πακέτο με το λογισμικό και η
            Εισαγωγική Δραστηριότητα είναι σχεδιασμένο για τις τάξεις του
            Δημοτικού, παρέχοντας μια εκπαιδευτική λύση που θα εξάψει την
            περιέργεια των μαθητών, ενώ παράλληλα θα βελτιώσει τις ικανότητες
            τους στα πεδία των φυσικών επιστημών, της μηχανικής, της τεχνολογίας
            και του προγραμματισμού. Τα παιδιά του Δημοτικού κατασκευάζουν με
            δομικά στοιχεία (τουβλάκια) μηχανικές κατασκευές που μπορούν να
            αποτελέσουν τους ήρωες της δικής τους φανταστικής περιπέτειας και να
            συνδυάσουν προβλήματα από το φυσικό κόσμο που τα περιβάλλει. Η
            σύνδεση με τον υπολογιστή ή το tablet είναι πλέον ασύρματη, γεγονός
            που δίνει απεριόριστες δυνατότητες στην κίνηση και τη δομή της
            κατασκευής και απελευθερώνει τη φαντασία και τη δημιουργικότητα των
            παιδιών.
          </div>
          <IconsTable info={info} />
        </>
      );
    case "beebot":
      return (
        <>
          <div>
            Ο όρος <strong>"εκπαιδευτική ρομποτική"</strong> αναφέρεται στη
            διδακτική πρακτική κατά την οποία ο εκπαιδευτικός χρησιμοποιώντας τα
            ρομπότ προσεγγίζει τη γνώση άλλοτε μέσα από τα ρομπότ και άλλοτε για
            τα ίδια τα ρομπότ. Μια ειδική κατηγορία εκπαιδευτικής ρομποτικής
            συνιστούν τα προγραμματιζόμενα παιχνίδια τύπου Logo τα οποία
            βρίσκουν ιδιαίτερη εφαρμογή στην προσχολική και στην πρώτη σχολική
            ηλικία .Τα παιδιά σχεδιάζουν και καθορίζουν το σύνολο των εντολών
            που εισάγονται στα ρομπότ κατά περίσταση , ακολουθώντας τις αρχές
            της γλώσσας προγραμματισμού Logo που ευνοεί την ανάπτυξη
            μεταγνωστικής ικανότητας , και την οποία τα παιδιά αναστοχάζονται
            σχετικά με τις διαδικασίες σκέψης που έχουν ακολουθήσει , βελτιώνει
            την ικανότητα χωρικού προσανατολισμού . Ένα από τα πιο διαδεδομένα
            προγραμματιζόμενα παιχνίδια είναι το Bee-Boot, το οποίο ενσαρκώνει
            τη μέλισσα Logo και βασίζεται σε αρχές προγραμματισμού της γλώσσας
            αυτής για τον έλεγχο του ρομπότ δαπέδου .Τα παιδιά μπορούν έτσι να
            προγραμματίσουν μια διαδρομή πάνω σε ένα δάπεδο .Το ρομπότ έχει το
            σχήμα και τα χρώματα της μέλισσας .Ο προγραμματισμός των κινήσεων
            βρίσκεται στο πάνω μέλος του ρομπότ και στηρίζεται σε ένα σύνολο
            χρωματικών πλήκτρων. Τέσσερα πορτοκαλί πλήκτρα εξυπηρετούν την
            εμπρόσθια και οπίσθια κίνηση και την περιστροφή αριστερά/δεξιά. Το
            κεντρικό πλήκτρο (GO) χρησιμοποιείται για την εκτέλεση των εντολών
            του παιχνιδιού .Τα δύο μπλε πλήκτρα εξυπηρετούν διαφορετικές
            λειτουργίες .Το ένα ( CLEAR ) χρησιμεύει για την διαγραφή των
            εντολών από τη μνήμη .Το δεύτερο ( PAUSE ) παρέχει τη δυνατότητα στο
            χρήστη να διακόπτει στιγμιαία την εκτέλεση των εντολών.
          </div>
          <IconsTable info={info} />
        </>
      );

    default:
      return null;
  }
}
