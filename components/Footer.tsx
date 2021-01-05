import React, { ReactElement } from "react";

function Footer(): ReactElement {
  return (
    <footer id="footer" className="relative bg-gray-300 pt-8 pb-6">
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
              <button
                className="bg-white text-blue-400 shadow-lg font-normal h-12 w-12 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                type="button"
              >
                <i className="flex fab fa-twitter"></i>
              </button>
              <button
                className="bg-white text-blue-600 shadow-lg font-normal h-12 w-12 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                type="button"
              >
                <i className="flex fab fa-facebook-square"></i>
              </button>
              <button
                className="bg-white text-pink-400 shadow-lg font-normal h-12 w-12 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                type="button"
              >
                <i className="flex fab fa-instagram"></i>
              </button>
              <button
                className="bg-white text-red-500 shadow-lg font-normal h-12 w-12 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                type="button"
              >
                <i className="flex fab fa-youtube"></i>
              </button>
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
                      href="https://blog.creative-tim.com"
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
                      href="https://github.com/creativetimofficial/argon-design-system/blob/master/LICENSE.md"
                    >
                      Εκπαιδευτική Επίσκεψη
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                      href="https://creative-tim.com/terms"
                    >
                      Εκδηλώσεις
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                      href="https://creative-tim.com/terms"
                    >
                      Σεμηνάρια
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                      href="https://creative-tim.com/privacy"
                    >
                      Η Εταιρία
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                      href="https://creative-tim.com/contact-us"
                    >
                      Επικοινωνία
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-400" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-gray-600 font-semibold py-1">
              Copyright © {new Date().getFullYear()} Robot Set Go.
              <span className="block py-2">
                Made with ❤️ by &nbsp;
                <a
                  href="https://golabacademy.gr"
                  className="text-green-600 hover:text-yellow-600"
                >
                  Go Lab Academy
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
