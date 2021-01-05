import React from "react";
import DimotikoParts from "./VisitParts/DimotikoParts";
import NipiaParts from "./VisitParts/NipiaParts";
import GymnasioParts from "./VisitParts/GymnasioParts";
import LyceioParts from "./VisitParts/LyceioParts";

interface VisitBodyProps {
  level: string;
}

export default function VisitBody({ level }: VisitBodyProps) {
  switch (level) {
    case "nip":
      return <NipiaParts />;
    case "dim":
      return <DimotikoParts />;
    case "gym":
      return <GymnasioParts />;
    case "lyc":
      return <LyceioParts />;

    default:
      return null;
  }
}
