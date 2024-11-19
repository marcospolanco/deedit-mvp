"use client";

import React,{useState} from 'react';

// interface TimezoneSelectProps {
//   value: string;
//   onChange: (timezone: string) => void;
// }

export const TimezoneSelect = () => {

    const timezones = Intl.supportedValuesOf('timeZone');
    const [timezone, setTimezone] = useState(Intl.DateTimeFormat().resolvedOptions().timeZone);

    return (
        // <div className="flex items-center gap-2 w-full sm:w-auto">
        <div className="w-4 h-4 text-gray-600 flex-shrink-0">
        {/* <select
                // name="timezone"
                value={timezone}
                className="block sm:w-[200px] rounded-md border-gray-300 shadow-sm 
                        bg-white py-2 pl-3 pr-10 text-sm focus:border-blue-500 
                        focus:outline-none focus:ring-1 focus:ring-blue-500"
                onChange = {setTimezone}
                {timezones.map((tz) => (
                <option key={tz} value={tz}>
                    {tz.replace(/_/g, ' ')}
                </option>
                ))}>
            </select> */}
        </div>
    );
};