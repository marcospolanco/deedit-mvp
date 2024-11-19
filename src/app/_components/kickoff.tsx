"use client";
export const KickItOff = () => {
  return (
    <div className="flex pt-8 justify-center text-gray-600">
      <button 
        onClick={() => initiateCall("+17875295892")}
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
      >
        Kick it off with Dee
      </button>
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
    message: string;
    // Add other relevant fields
  }
  
  export async function initiateCall(phoneNumber: string): Promise<VapiResponse> {  
    const vapiRequestBody = {
      phoneNumberId: NEXT_PUBLIC_VAPI_PHONE_NUMBER_ID,
      customer: {
        number: `${phoneNumber}`,
        name: "Eden",
        extension: "",
      },
      assistantId: NEXT_PUBLIC_VAPI_ASSISTANT_ID,
    };
  
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
    return {}
    }
  
    const data = await response.json();
    console.log('Call initiated:', data);
      
    return data;
   }