import React from "react";
import SubClass from "./SubComponents/SubClass";

export default function Classes({ settings, title, description, classes }) {
  return (
    <section id="classes" className={`relative block bg-${settings.bg_color}`}>
      <div
        className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
        style={{ height: "80px", transform: "translateZ(0)" }}
      ></div>

      <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
        <div className="flex flex-wrap text-center justify-center">
          <div className="w-full lg:w-6/12 px-4">
            <h2
              className={`text-${settings.title_size} font-semibold text-${settings.title_color}`}
            >
              {title}
            </h2>
            <p
              className={`text-${settings.description_text_size} leading-relaxed mt-4 mb-4 text-${settings.description_text_color}`}
            >
              {description}
            </p>
          </div>
        </div>
        <div className="flex flex-wrap mt-12 justify-center">
          {classes.map((subClass) => {
            return (
              <SubClass
                key={subClass.title}
                settings={settings}
                title={subClass.title}
                description={subClass.description}
                icon={subClass.icon}
                link={subClass.link}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
