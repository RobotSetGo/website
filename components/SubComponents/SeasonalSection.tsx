import React from "react";
import SummerActivity from "./SummerActivity";
import StudentRegister from "./StudentRegister";
import MidSeason from "./MidSeason";
import Calendar from "./Calendar";

export default function SeasonalSection({ season = "main" }) {
  const Section = () => {
    if (season === "summer") return <SummerActivity />;
    else if (season === "register") return <StudentRegister />;
    else if (season === "mid") return <MidSeason />;
    else if (season === "calendar") return <Calendar />;

    return <div>MAIN</div>;
  };

  return (
    <div>
      <Section />
    </div>
  );
}
