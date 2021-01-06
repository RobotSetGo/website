import {
    faRobot,
    faMicrochip,
    faCube,
    faLaptop,
    faCode
} from "@fortawesome/free-solid-svg-icons";

export const title = "Τμήματα";
export const description = "Τα μαθήματα γίνονται από έμπειρο προσωπικό που είναι πιστοποιημένα από την Lego με τίτλους CERTIFICATION LEGO MINDSTORMS EDUCATION EV3 και CERTIFICATION LEGO WEDO 2.0. Επίσης όλο το προσωπικό είναι πτυχιούχοι πανεπιστημίων με μεταπτυχιακές σπουδές και εξειδίκευση στον τομέα διδασκαλίας τους.";
export const classes = [
    {
        icon: faRobot,
        title: "Εκπαιδετυτική Ρομποτική",
        link: "/robotics",
        description: [
            "Προσχολικής Ηλικίας (5-7) - BeeBot",
            "Αρχαρίων (7-10) - WeDo",
            "Μεσαίων (10-12) - Spike",
            "Προχωρημένων (12 και άνω) - EV3"
        ]
    },
    {
        icon: faCode,
        title: "Προγραμματισμός",
        link: "/coding",
        description: [
            "HTML, Css, Javascript",
            "Laravel, React, Vue, Databases",
            "Python + EV3 + NAO",
            "Mobile Development",

        ]
    },
    {
        icon: faMicrochip,
        title: "Αυτοματισμοί",
        link: "/arduino",
        description: [
            "Arduino",
            "Συστήματα για Προχωρημένους"
        ]
    },
    {
        icon: faCube,
        title: "3D Σχεδίαση",
        link: "/3d",
        description: ["Σχεδίαση και εκμάθηση 3D Printer"]
    },
    {
        icon: faLaptop,
        title: "Εξ' αποστάσεως",
        link: "/distance",
        description: [
            "Προγραμματισμός",
            "Αυτοματισμοί"
        ]
    },
]