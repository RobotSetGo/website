import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChalkboardTeacher,
  faUserFriends,
  faLaptop,
  faList,
} from "@fortawesome/free-solid-svg-icons";
import { mainSettings, mainVideo } from "../data/settings";
import HorizontalLine from "./SubComponents/HorizontalLine";
import VideoPlayer from "./SubComponents/VideoPlayer";
import SeasonalSection from "./SubComponents/SeasonalSection";
import SpecialSection from "./SpecialSection";

export default function Services({ services }) {
  return (
    <section id="services" className="pb-20 bg-gray-300 -mt-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
              <div className="px-4 py-5 flex-auto">
                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                  <FontAwesomeIcon icon={faLaptop} style={{ width: "40px" }} />
                </div>
                <a href="/distance" className="block text-xl font-semibold">
                  {services.small.left.title}
                </a>
                <p className="mt-2 mb-4 text-gray-600">
                  {services.small.left.body}
                </p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-4/12 px-4 text-center">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
              <div className="px-4 py-5 flex-auto">
                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                  <FontAwesomeIcon
                    icon={faChalkboardTeacher}
                    style={{ width: "40px" }}
                  />
                </div>
                <a href="#classes" className="block text-xl font-semibold">
                  {services.small.middle.title}
                </a>
                <p className="mt-2 mb-4 text-gray-600">
                  {services.small.middle.body}
                </p>
              </div>
            </div>
          </div>

          <div className="pt-6 w-full md:w-4/12 px-4 text-center">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
              <div className="px-4 py-5 flex-auto">
                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
                  <FontAwesomeIcon icon={faList} style={{ width: "40px" }} />
                </div>
                <a
                  href="https://calendly.com/robotsetgo/30min"
                  className="block text-xl font-semibold"
                  target="_blank"
                >
                  {services.small.right.title}
                </a>
                <p className="mt-2 mb-4 text-gray-600">
                  {services.small.right.body}
                </p>
              </div>
            </div>
          </div>
        </div>
        {mainSettings.hasSpecialSection && <SpecialSection />}
        <div className="flex flex-wrap items-center mt-32 text-center">
          {mainSettings.showHours ? (
            <div className="w-full">
              <div className="text-2xl font-bold">Ωράριο Λειτουργίας</div>
              <div className="text-md font-semibold">
                Καθημερινές 9:00 – 13:00 και 17:00 – 20:00 και Σάββατο 9:00 –
                13:00
              </div>
              <HorizontalLine />
            </div>
          ) : (
            <></>
          )}
          {mainSettings.showVideo ? (
            <div className="w-full flex flex-col flex-wrap content-center justify-center">
              <VideoPlayer link={mainVideo.link} />
              <HorizontalLine />
            </div>
          ) : (
            <></>
          )}

          <div className="w-full">
            <SeasonalSection season="calendar" />
          </div>
        </div>

        <div className="flex flex-wrap items-center mt-32">
          <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
            <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
              <FontAwesomeIcon icon={faUserFriends} style={{ width: "40px" }} />
            </div>
            <h3 className="text-3xl mb-2 font-semibold leading-normal">
              {services.large.first.title}
            </h3>
            <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
              {services.large.first.body}
            </p>
            <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
              {services.large.first.description}
            </p>
            <a href="/robotics" className="font-bold text-gray-800 mt-8">
              Περισσότερα
            </a>
          </div>

          <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
            <div className="relative flex flex-col min-w-0 break-words  w-full mb-6 shadow-lg rounded-lg bg-blue-600">
              <img
                alt="..."
                src="/img/robotics_ev3.jpg"
                className="w-full align-middle rounded-t-lg"
              />
              <blockquote className="relative p-8 mb-4">
                <svg
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 583 95"
                  className="absolute left-0 w-full block"
                  style={{
                    height: "95px",
                    top: "-94px",
                  }}
                >
                  <polygon
                    points="-30,95 583,95 583,65"
                    className="text-blue-600 fill-current"
                  ></polygon>
                </svg>
                {/* <h4 className="text-xl font-bold text-white">
                  Top Notch Services
                </h4> */}
                <p className="text-md font-light mt-2 text-white">
                  {services.large.first.image_text}
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
