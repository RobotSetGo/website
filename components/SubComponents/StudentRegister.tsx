import React from 'react';
import { studentRegister } from "../../data/settings";

export default function StudentRegister() {
    return (
        <div className="flex flex-col items-center justify-contnet">
            <div className="text-3xl font-bold">{studentRegister.title}</div>
            <div className="font-bold text-red-700">{studentRegister.subtitle}</div>
            <div className="mt-4 md:w-2/4 text-blue-700">{studentRegister.description}</div>
            <div className="mt-4">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/AEuTHExrVtU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <div className="mt-8">
                <a href={studentRegister.link.url} target="_blank" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-full mr-4">Φόρμα για Διαδικτυακά</a>
                <a href="https://forms.gle/TQz1ufWseFVqLNbEA" target="_blank" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-full">Φόρμα για Δια ζώσης</a>
            </div>
        </div>
    );
}