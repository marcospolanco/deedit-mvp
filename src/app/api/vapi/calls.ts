'use client';

export interface VapiResponse {
  // Define the expected structure of the response here
  // For example:
  success: boolean;
  message: string;
  // Add other relevant fields
}

export async function initiateCall(phoneNumber: string): Promise<VapiResponse> {  
  const vapiRequestBody = {
    phoneNumberId: process.env.NEXT_PUBLIC_VAPI_PHONE_NUMBER_ID,
    customer: {
      number: `${phoneNumber}`,
      name: "Eden",
      extension: "",
    },
    assistantId: process.env.NEXT_PUBLIC_VAPI_ASSISTANT_ID,
  };

  const headers = {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${process.env.NEXT_PUBLIC_VAPI_AUTH_TOKEN}`,
    "User-Agent": "Deedit/1.0",
    "Accept": "application/json",
  };

  const response = await fetch('https://api.vapi.ai/call/phone', {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(vapiRequestBody)
  });

  console.log(`process.env.NEXT_PUBLIC_VAPI_PHONE_NUMBER_ID: ${process.env.NEXT_PUBLIC_VAPI_PHONE_NUMBER_ID}`);

  if (!response.ok) {
    throw new Error(`VAPI call failed: ${response.statusText}`);
  }

  const data = await response.json();
  console.log('Call initiated:', data);
    
  return data;
}