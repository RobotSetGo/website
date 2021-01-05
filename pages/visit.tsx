import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import ClassesTable from "../components/SubComponents/ClassesTable";
import { visit_dim, visit_gym, visit_nip, visit_lyc } from "../data/visit_info";
import VisitBody from "../components/SubComponents/VisitBody";

export default function Visit() {
  const [tab, setTab] = useState("nip");
  const [data, setData] = useState({
    title: "Νηπιαγωγείο",
    subtitle:
      "Μια ειδική κατηγορία εκπαιδευτικής ρομποτικής συνιστούν τα προγραμματιζόμενα παιχνίδια τύπου Logo τα οποία βρίσκουν ιδιαίτερη εφαρμογή στην προσχολική και στην πρώτη σχολική ηλικία.",
    image: require("../assets/img/beebot.jpg"),
    body: <VisitBody level="nip" />,
    info: <ClassesTable info={visit_nip} />,
  });
  useEffect(() => {
    if (tab === "nip") {
      setData({
        title: "Νηπιαγωγείο",
        subtitle:
          "Μια ειδική κατηγορία εκπαιδευτικής ρομποτικής συνιστούν τα προγραμματιζόμενα παιχνίδια τύπου Logo τα οποία βρίσκουν ιδιαίτερη εφαρμογή στην προσχολική και στην πρώτη σχολική ηλικία.",
        image: require("../assets/img/beebot.jpg"),
        body: <VisitBody level="nip" />,
        info: <ClassesTable info={visit_nip} />,
      });
    }

    if (tab === "dim") {
      setData({
        title: "Δημοτικό",
        subtitle:
          "Το πρόγραμμα εκπαιδευτικής ρομποτικής LEGO WeDo2 αφορά παιδιά ηλικίας από πρώτη δημοτικού μέχρι και τρίτη δημοτικού και ήρθε να αναβαθμίσει τον τρόπο που διδάσκονταν η ρομποτική στα παιδιά.",
        image: require("../assets/img/wedo.jpg"),
        body: <VisitBody level="dim" />,
        info: <ClassesTable info={visit_dim} />,
      });
    }

    if (tab === "gym") {
      setData({
        title: "Γυμνάσιο",
        subtitle:
          "Το πρόγραμμα εκπαιδευτικής ρομποτικής LEGO Mindstorms EV3 αφορά παιδιά ηλικίας από τετάρτη δημοτικού μέχρι ενήλικες και αποτελεί μια ολοκληρωμένη λύση εκπαίδευσης STEM βασισμένη στην τεχνολογία της ρομποτικής.",
        image: require("../assets/img/ev3.jpg"),
        body: <VisitBody level="gym" />,
        info: <ClassesTable info={visit_gym} />,
      });
    }

    if (tab === "lyc") {
      setData({
        title: "Λύκειο",
        subtitle:
          "Το εκπαιδευτικό πακέτο LEGO® Education SPIKE ™ είναι το εργαλείο εκμάθησης STEAM για μαθητές ηλικίας 8 έως 11.",
        image: require("../assets/img/spike.jpg"),
        body: <VisitBody level="lyc" />,
        info: <ClassesTable info={visit_lyc} />,
      });
    }
  }, [tab]);

  function activeTab(current) {
    if (tab === current) {
      return "border-blue-400";
    }
    return "border-transparent";
  }
  return (
    <Layout title="Robot Set Go">
      <Hero title={data.title} subtitle={data.subtitle} bgImage={data.image} />
      <section className="pb-32 bg-white">
        <div className="container mx-auto px-4">
          <nav className="bg-white px-8 pt-2 shadow-md">
            <div className="-mb-px flex justify-center">
              <button
                className={`no-underline text-teal-dark border-b-2 focus:outline-none ${activeTab(
                  "nip"
                )} uppercase tracking-wide font-bold text-xs py-3 mr-8`}
                onClick={() => setTab("nip")}
              >
                ΝΗΠΙΑΓΩΓΕΙΟ
              </button>
              <button
                className={`no-underline text-grey-dark focus:outline-none border-b-2 ${activeTab(
                  "dim"
                )} uppercase tracking-wide font-bold text-xs py-3 mr-8`}
                onClick={() => setTab("dim")}
              >
                ΔΗΜΟΤΙΚΟ
              </button>
              <button
                className={`no-underline text-grey-dark focus:outline-none border-b-2 ${activeTab(
                  "gym"
                )} uppercase tracking-wide font-bold text-xs py-3 mr-8`}
                onClick={() => setTab("gym")}
              >
                ΓΥΜΝΑΣΙΟ
              </button>
              <button
                className={`no-underline text-grey-dark focus:outline-none border-b-2 ${activeTab(
                  "lyc"
                )} uppercase tracking-wide font-bold text-xs py-3`}
                onClick={() => setTab("lyc")}
              >
                ΛΥΚΕΙΟ
              </button>
            </div>
          </nav>
          <div className="pt-12">{data.body}</div>
        </div>
      </section>
      {data.info}
    </Layout>
  );
}
