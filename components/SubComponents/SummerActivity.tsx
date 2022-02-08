import React from 'react';
import { summerActivity } from "../../data/settings";

export default function SummerActivity() {
    const SummerActivityLink = () => {
        return summerActivity.link ? (
            <div className="text-md font-semibold mt-4">
                <a
                    href={summerActivity.link.url}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                >
                    {summerActivity.link.title}
                </a>
            </div>
        ) : (
            <></>
        );
    };

    return summerActivity.description !== "" ? (
        <>
            <div className="text-2xl font-bold">{summerActivity.title}</div>
            <div className="text-md font-semibold mt-4">
                {summerActivity.description}
            </div>
            <div className="flex justify-center">
                {summerActivity.image !== "" ? (
                    <img src="/img/summer_activity.jpg" alt="summer_activity" />
                ) : (
                    <></>
                )}
            </div>
            <SummerActivityLink />
        </>
    ) : (
        <></>
    );
}