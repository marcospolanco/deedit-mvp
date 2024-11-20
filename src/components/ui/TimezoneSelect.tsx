"use client";

import { SignedIn } from '@clerk/nextjs';
import React,{useState, useEffect} from 'react';
import { useUser } from "@clerk/nextjs";

// interface TimezoneSelectProps {
//   value: string;
//   onChange: (timezone: string) => void;
// }

export const TimezoneSelect = () => {

    const timezones = Intl.supportedValuesOf('timeZone');
    const [timezone, setTimezone] = useState(Intl.DateTimeFormat().resolvedOptions().timeZone);
    const { user } = useUser();

    useEffect(() => {
        const emailAddress = user?.primaryEmailAddress?.emailAddress;
        const updateTimezone = async () => {
            try {

                if (user?.unsafeMetadata?.timezone !== timezone) {
                    await user?.update({
                        unsafeMetadata: {
                            timezone: timezone
                        }
                    });
                }
                // await fetch('http://localhost:10000/api/user_timezone', {
                await fetch('https://flowent-srv.onrender.com/api/user_timezone', {
                        method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ timezone, email: emailAddress}),
                });
            } catch (error) {
                console.error('Error updating timezone:', error);
            }
        };

        void updateTimezone();
    }, [timezone, user]);

    
    return (
        // <div className="flex items-center gap-2 w-full sm:w-auto">
        <div className="flex justify-center items-center pt-8">
            <SignedIn>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <div className="mb-2 text-center">What&apos;s your timezone?</div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <select
                                    value={timezone}
                                    id="timezone-select"
                                    className="block w-full min-w-[300px] rounded-md border-gray-300 shadow-sm 
                                            bg-white py-2 pl-3 pr-10 text-sm text-gray-800 focus:border-blue-500 
                                            focus:outline-none focus:ring-1 focus:ring-blue-500"
                                    onChange={(e) => setTimezone(e.target.value)}
                                >
                                    {timezones.map((tz) => (
                                        <option key={tz} value={tz}>
                                            {tz.replace(/_/g, ' ')}
                                        </option>
                                    ))}
                                </select>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </SignedIn>        
        </div>
    );
};