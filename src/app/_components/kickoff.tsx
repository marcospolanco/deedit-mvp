"use client";
import { useState } from "react";
import { useUser } from "@clerk/nextjs";
import { User } from "@clerk/nextjs/server";
import { UserResource } from "@clerk/types";
export const KickItOff = () => {
    const [isLoading, setIsLoading] = useState(false);

    const { user } = useUser();

    const phoneNumber = user?.primaryPhoneNumber?.phoneNumber;

    return (
    <div className="flex pt-8 justify-center text-gray-600">
  
      <button 
        onClick={() => {
          setIsLoading(true);
            void initiateCall(user?.firstName ?? "", user?.unsafeMetadata?.timezone as string ?? "", phoneNumber ?? "");
          setTimeout(() => setIsLoading(false), 3000);
        }}
        className="bg-[#2F2541] text-white font-bold py-2 px-4 rounded hover:bg-[#624e88] transition duration-300"
      >
        <span className="font-inter text-2xl font-semibold leading-[48px]">
          {isLoading ? "Calling..." : "Set your daily call  🕓"}
        </span>

      </button>
      <p />

    </div>
  );
}

const NEXT_PUBLIC_VAPI_PHONE_NUMBER_ID='67112191-c37b-4fae-be67-bfabc46bb0f5';
const NEXT_PUBLIC_VAPI_AUTH_TOKEN='2d9af98a-642d-49c5-8364-f5d3102718ef';
const NEXT_PUBLIC_VAPI_ASSISTANT_ID='b6955607-fdcc-499b-967a-d5b868ae60a9';

export interface VapiResponse {
    // Define the expected structure of the response here
    // For example:
    success: boolean;
    // message: string;
    // Add other relevant fields
  }
  
  export async function initiateCall(firstName: string, timezone:string, phoneNumber: string): Promise<VapiResponse> {  

    /* eslint-disable */
    const vapiRequestBody = {
      phoneNumberId: NEXT_PUBLIC_VAPI_PHONE_NUMBER_ID,
      customer: {
        number: phoneNumber,
        name: firstName,
        extension: "",
      }, assistantOverrides: {
        variableValues: {
          "caller": firstName,
          "timezone": timezone
        }
      }, assistantId: NEXT_PUBLIC_VAPI_ASSISTANT_ID,
    };
      /* eslint-enable */

    const headers = {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${NEXT_PUBLIC_VAPI_AUTH_TOKEN}`,
      "User-Agent": "Deedit/1.0",
      "Accept": "application/json",
    };
  
    const response = await fetch('https://api.vapi.ai/call/phone', {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(vapiRequestBody)
    });
  
    if (!response.ok) {
        console.log(process.env);
    //   throw new Error(`VAPI call failed: ${response.statusText}`);
    return {success:false};
    }
  
    const data: unknown = await response.json();
    // console.log('Call initiated:', data);
      
    return {success: true};
   }