import React from 'react';
import SummerActivity from './SummerActivity';
import StudentRegister from './StudentRegister';
import MidSeason from './MidSeason';

export default function SeasonalSection({ season = "main" }) {
    const Section = () => {
        if (season === 'summer') return <SummerActivity />
        else if (season === 'register') return <StudentRegister />
        else if (season === 'mid') return <MidSeason />

        return <div>MAIN</div>
    }

    return (
        <div>
            <Section />
        </div>
    );
}