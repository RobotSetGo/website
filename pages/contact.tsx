import React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";

export default function Contact() {
  return (
    <Layout title="Επικοινωνία - Robot Set Go">
      <Hero
        title="Επικοινωνία"
        subtitle=""
        bgImage="/img/company/1.jpg"
        minHeight="40vh"
      />
      <section className="pb-40 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center mt-12">
            <div className="w-full md:w-10/12 px-4 mr-auto ml-auto">
              <h3 className="text-center font-semibold text-lg mb-6">
                Στοιχεία Επικοινωνίας
              </h3>
              <div className="flex flex-wrap">
                <div className="w-full md:w-1/2 mt-6">
                  <ul>
                    <li className="mb-4">
                      <i className="flex fa fa-map-marker-alt text-2xl"></i>
                      <a
                        href="https://www.google.com/maps/place/Robot+Set+Go/@40.4670326,22.9672916,17z/data=!4m13!1m7!3m6!1s0x14a814e5bbec1cf3:0xe978d2ac24d7a4d1!2zzpzOtc6zLiDOkc67zrXOvs6xzr3OtM-Bzr_PhSA2OCwgzqTPgc6vzrvOv8-Gzr_PgiA1NzUgMDA!3b1!8m2!3d40.4670326!4d22.9694803!3m4!1s0x14a814e5bbec1c5f:0xa65bafef38df2ae4!8m2!3d40.4670246!4d22.9694804"
                        target="_blank"
                        className="ml-4"
                      >
                        Μ.Αλεξάνδρου 68, Τρίλοφος Θεσσαλονίκης
                      </a>
                    </li>
                    <li className="mb-4">
                      <i className="flex fa fa-mobile-alt text-2xl"></i>
                      <a
                        href="tel:+306944140426"
                        className="ml-4"
                        target="_blank"
                      >
                        +306944140426
                      </a>
                    </li>
                    <li className="mb-4">
                      <i className="flex fa fa-phone text-xl"></i>
                      <a
                        href="tel:+302392400370"
                        className="ml-4"
                        target="_blank"
                      >
                        2392400370
                      </a>
                    </li>

                    <li className="mb-4">
                      <i className="flex fa fa-envelope text-xl"></i>
                      <a
                        href="mailto:info@robotsetgo.gr"
                        className="ml-4"
                        target="_blank"
                      >
                        robotsetgo@gmail.com
                      </a>
                    </li>

                    <li className="mb-2">
                      <i className="flex fa fa-globe text-xl"></i>
                      <a
                        href="https://robotsetgo.gr"
                        className="ml-4"
                        target="_blank"
                      >
                        https://robotsetgo.gr
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-full md:w-1/2 mt-6">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3035.3720891410985!2d22.967291615852215!3d40.46703257935921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a814e5bbec1c5f%3A0xa65bafef38df2ae4!2sRobot%20Set%20Go!5e0!3m2!1sel!2sgr!4v1609942430508!5m2!1sel!2sgr"
                    width="100%"
                    height="300"
                    frameBorder="0"
                    aria-hidden="false"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
