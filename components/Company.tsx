import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faRobot,
  faCode,
  faCube,
} from "@fortawesome/free-solid-svg-icons";

export default function Featured() {
  return (
    <section id="company" className="relative py-20">
      <div
        className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
        style={{ height: "80px", transform: "translateZ(0)" }}
      ></div>

      <div className="container mx-auto px-4">
        <div className="items-center flex flex-wrap">
          <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
            <img
              alt="..."
              className="max-w-full rounded-lg shadow-lg"
              src={require("../assets/img/out.jpeg")}
            />
          </div>
          <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
            <div className="md:pr-12">
              <div className="text-black p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-blue-300">
                <FontAwesomeIcon icon={faBuilding} style={{ width: "25px" }} />
              </div>
              <h3 className="text-3xl font-semibold">Σχετικά με την εταιρία</h3>
              <p className="mt-4 text-lg leading-relaxed text-gray-600">
                Η Robot set go είναι μια αναπτυσσόμενη αστική μη κερδοσκοπική
                εταιρία που ιδρύθηκε το 2016 και στοχεύει στην εκμάθηση υψηλής
                τεχνολογίας σε όλες τις ηλικιακές ομάδες. Σε αυτήν την
                προσπάθεια υπάρχουν συνεργασίες με τα Πανεπιστημιακά Ιδρύματα
                καθώς επίσης με ιδιωτικά ιδρύματα & άλλες αστικές μη
                κερδοσκοπικές εταιρίες . Οι κλάδοι τις υψηλής τεχνολογίας με
                τους οποίους ασχολείται είναι :
              </p>
              <ul className="list-none mt-6">
                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-black bg-blue-200 mr-3">
                        <FontAwesomeIcon
                          icon={faRobot}
                          style={{ width: "20px" }}
                        />
                      </span>
                    </div>
                    <div>
                      <h4 className="text-gray-600">Ρομποτική</h4>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-black bg-blue-200 mr-3">
                        <FontAwesomeIcon
                          icon={faCode}
                          style={{ width: "20px" }}
                        />
                      </span>
                    </div>
                    <div>
                      <h4 className="text-gray-600">
                        Προγραμματισμός και Αυτοματισμοί
                      </h4>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-black bg-blue-200 mr-3">
                        <FontAwesomeIcon
                          icon={faCube}
                          style={{ width: "20px" }}
                        />
                      </span>
                    </div>
                    <div>
                      <h4 className="text-gray-600">Σχεδίαση 3D</h4>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="py-6">
              <a href="/company" className="font-bold text-gray-800 mt-8">
                Περισσότερα για την εταιρία
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
