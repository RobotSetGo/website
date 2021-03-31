import React, { ReactElement } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faTwitter,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {
  faMapMarker,
  faPhone,
  faBuilding,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

function Footer(): ReactElement {
  return (
    <footer id="footer" className="relative bg-gray-300 pt-16 pb-6">
      <div
        className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
        style={{ height: "80px", transform: "translateZ(0)" }}
      ></div>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl font-semibold">
              <img
                src={require("../assets/img/logo1.png")}
                style={{ height: "200px" }}
              />
            </h4>
            <h5 className="text-lg mt-0 mb-2 text-gray-700 max-w-xs">
              Εκπαιδευτική ρομποτική για μαθητές Δημοτικού, Γυμνασίου και
              Λυκείου
            </h5>
            <div className="mt-6">
              <a
                href="https://www.facebook.com/robotsetgo/?fref=ts"
                className="text-blue-600 text-center mr-2 p-3"
                type="button"
              >
                <FontAwesomeIcon
                  icon={faFacebookSquare}
                  style={{ width: "20px" }}
                />
              </a>
              <a
                href="https://www.instagram.com/robot_set_go/"
                className="text-pink-400 text-center mr-2 p-3"
                type="button"
              >
                <FontAwesomeIcon icon={faInstagram} style={{ width: "20px" }} />
              </a>
              <a
                href="https://twitter.com/Rodot_Set_go"
                className="text-blue-400 text-center mr-2 p-3"
                type="button"
              >
                <FontAwesomeIcon icon={faTwitter} style={{ width: "20px" }} />
              </a>
              <a
                href="https://www.youtube.com/channel/UCxSRrd4JBJCL7hzwWcaPpAQ"
                className="text-red-500 text-center mr-2 p-3"
                type="button"
              >
                <FontAwesomeIcon icon={faYoutube} style={{ width: "24px" }} />
              </a>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-gray-600 text-sm font-semibold mb-2">
                  ΤΜΗΜΑΤΑ
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                      href="/robotics"
                    >
                      Ρομποτική
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                      href="/coding"
                    >
                      Προγραμματισμός
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                      href="/arduino"
                    >
                      Αυτοματισμοί
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                      href="/3d"
                    >
                      3D Σχεδίαση
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                      href="/distance"
                    >
                      Εξ΄Αποστάσεως
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <span className="block uppercase text-gray-600 text-sm font-semibold mb-2">
                  ΣΥΝΔΕΣΜΟΙ
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                      href="/visit"
                    >
                      Εκπαιδευτική Επίσκεψη
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                      href="/events"
                    >
                      Εκδηλώσεις
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                      href="/seminars"
                    >
                      Επιμόρφωση
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                      href="/company"
                    >
                      Η Εταιρία
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                      href="/teachers_message"
                    >
                      Προς Καθηγητές
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                      href="/visit_stats"
                    >
                      Επισκέψεις Σχολείων
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                      href="/synergasies"
                    >
                      Συνεργασίες
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                      href="/synergasies"
                    >
                      Φωτογραφίες Σχολής
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                      href="/espa"
                    >
                      ΕΣΠΑ
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                      href="/contact"
                    >
                      Επικοινωνία
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-4 text-sm w-full lg:w-6/12 px-4">
            <ul>
              <li className="mb-2">
                <a
                  href="https://www.google.com/maps/place/Robot+Set+Go/@40.4670326,22.9672916,17z/data=!4m13!1m7!3m6!1s0x14a814e5bbec1cf3:0xe978d2ac24d7a4d1!2zzpzOtc6zLiDOkc67zrXOvs6xzr3OtM-Bzr_PhSA2OCwgzqTPgc6vzrvOv8-Gzr_PgiA1NzUgMDA!3b1!8m2!3d40.4670326!4d22.9694803!3m4!1s0x14a814e5bbec1c5f:0xa65bafef38df2ae4!8m2!3d40.4670246!4d22.9694804"
                  target="_blank"
                  className="flex"
                >
                  <FontAwesomeIcon
                    icon={faMapMarker}
                    style={{ width: "15px", marginRight: "10px" }}
                  />
                  Μ.Αλεξάνδρου 68, Τρίλοφος Θεσσαλονίκης
                </a>
              </li>
              <li className="mb-2">
                <a href="tel:+306944140426" className="flex" target="_blank">
                  <FontAwesomeIcon
                    icon={faPhone}
                    style={{ width: "15px", marginRight: "10px" }}
                  />
                  +306944140426
                </a>
              </li>
              <li className="mb-2">
                <a href="tel:+302392400370" className="flex" target="_blank">
                  <FontAwesomeIcon
                    icon={faBuilding}
                    style={{ width: "15px", marginRight: "10px" }}
                  />
                  2392400370
                </a>
              </li>
              <li className="mb-2">
                <a href="mailto:robotsetgo@gmail.com" className="flex">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    style={{ width: "15px", marginRight: "10px" }}
                  />
                  robotsetgo@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="my-12 border-gray-400" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-gray-600 font-semibold py-1">
              Copyright © {new Date().getFullYear()} Robot Set Go.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
