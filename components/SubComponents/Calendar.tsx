import { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

type DrawerInfo = { title: string; description: string; open: boolean };

function changeInfoAndReturn(
  info: DrawerInfo[],
  element: DrawerInfo
): DrawerInfo[] {
  const found = info.findIndex((el) => el === element);
  if (found) info[found].open = !info[found].open;
  console.log(info);
  return info;
}

export default function Calendar() {
  const drawerInfo: DrawerInfo[] = [
  
      title: "ΣΧΟΛΙΚΗ ΜΕΛΕΤΗ & ΑΠΑΣΧΟΛΗΣΗ ΠΑΙΔΙΩΝ ΔΗΜΟΤΙΚΟΥ",
      description: "",
      open: true,
    },
    {
      title: "ΕΚΠΑΙΔΕΥΤΙΚΗ ΡΟΜΠΟΤΙΚΗ ΓΙΑ ΠΑΙΔΙΑ 5-8 ΕΤΩΝ",
      description: "",
      open: false,
    },
  ];

  const [open, setOpen] = useState(1);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <>
      <h1 className="text-2xl">
        Ημερολογιακό Πρόγραμμα σχολής για τη χρονιά 2022-2023
      </h1>
      <div>
        <Accordion open={open === 1}>
          <AccordionHeader onClick={() => handleOpen(1)}>
            ΣΧΟΛΙΚΗ ΜΕΛΕΤΗ & ΑΠΑΣΧΟΛΗΣΗ ΠΑΙΔΙΩΝ ΔΗΜΟΤΙΚΟΥ
          </AccordionHeader>
          <AccordionBody>Καθημερινά 17:00 - 20:00</AccordionBody>
        </Accordion>
        <Accordion open={open === 2}>
          <AccordionHeader onClick={() => handleOpen(2)}>
            ΕΚΠΑΙΔΕΥΤΙΚΗ ΡΟΜΠΟΤΙΚΗ ΓΙΑ ΠΑΙΔΙΑ 5-8 ΕΤΩΝ
          </AccordionHeader>
          <AccordionBody>
            Τετάρτη - Παρασκευή 17:15 - 18:45 και 19:00 - 20:30. <br />
            Σαββάτο 10:00 - 11:30
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 3}>
          <AccordionHeader onClick={() => handleOpen(3)}>
            ΕΚΠΑΙΔΕΥΤΙΚΗ ΡΟΜΠΟΤΙΚΗ ΓΙΑ ΠΑΙΔΙΑ 9+
          </AccordionHeader>
          <AccordionBody>
            Τετάρτη 17:15 - 18:45 και 19:00 - 20:30.
            <br /> Παρασκευή 17:15 - 18:45.
            <br /> Σαββάτο 10:00 - 11:30
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 4}>
          <AccordionHeader onClick={() => handleOpen(4)}>
            ΠΡΟΓΡΑΜΜΑΤΙΣΜΟΣ ΓΙΑ ΠΑΙΔΙΑ 12+
          </AccordionHeader>
          <AccordionBody>
            Παρασκευή 19:00 - 20:30.
            <br /> Σαββάτο 12:00 - 13:30
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 5}>
          <AccordionHeader onClick={() => handleOpen(5)}>
            ΣΧΕΔΙΑΣΗ 2D & MINECRAFT ΓΙΑ ΠΑΙΔΙΑ 12+
          </AccordionHeader>
          <AccordionBody>
            Πέμπτη 17:15 - 18:45 και 19:00 - 20:30.
            <br /> Σαββάτο 10:00 - 11:30
          </AccordionBody>
        </Accordion>
      </div>
    </>
  );
}
