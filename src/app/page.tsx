import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { getMyImages } from "~/server/queries";
import { TimePicker } from "antd";
import { TimezoneSelect } from "~/components/ui/TimezoneSelect";
import { KickItOff } from "./_components/kickoff";

export const dynamic = "force-dynamic";

const books = [
  {
    "title": "The One Thing",
    "author": "Gary Keller and Jay Papasan",
    "cover": "https://m.media-amazon.com/images/I/61aPPAPRiwL._AC_UF1000,1000_QL80_.jpg",
    "quote": "Extraordinary results are directly determined by how narrow you can make your focus. You need to be doing fewer things for more effect instead of doing more things with side effects."
  },
  {
    "title": "Deep Work",
    "author": "Cal Newport",
    "cover": "https://m.media-amazon.com/images/I/91nujEwIpYL._AC_UF1000,1000_QL80_.jpg",
    "quote": "Clarity about what matters provides clarity about what does not."
  },
  {
    "title": "Atomic Habits",
    "author": "James Clear",
    "cover": "https://m.media-amazon.com/images/I/81ANaVZk5LL._AC_UF1000,1000_QL80_.jpg",
    "quote": "You do not rise to the level of your goals. You fall to the level of your systems."
  },
  {
    "title": "Essentialism",
    "author": "Greg McKeown",
    "cover": "https://m.media-amazon.com/images/I/61QfKSGnwEL.jpg",
    "quote": "Remember that if you don’t prioritize your life, someone else will."
  },
  {
    "title": "Hyperfocus",
    "author": "Chris Bailey",
    "cover": "https://m.media-amazon.com/images/I/71T62JOlQ9L._AC_UF1000,1000_QL80_.jpg",
    "quote": "The state of focus is the gateway to achieving anything worthwhile. Devote yourself to what is in front of you, and you’ll unlock your potential."
  }
];


// Move the random book selection inside the component to ensure it's executed at render time
const getRandomBook = () => books[Math.floor(Math.random() * books.length)];

const BeautifulSignInButton = () => {
  "use client";
  
  return (
    <div className="flex justify-center items-center">
      <SignInButton mode="modal">
        <button
          className="bg-blue-400 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md shadow-md transition-all duration-300 flex items-center gap-2"
        >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
          Sign in with Google
        </button>
      </SignInButton>
    </div>
  );
};

export default function HomePage() {
  const book = getRandomBook();
  
  return (
    <main className="">
      <SignedOut>
        <div className="h-full w-full text-center text-2xl">
          <div className="flex flex-col items-center pt-8 gap-6">
            <img 
              src="https://utfs.io/f/WJjSPLaJDmw9pCpGpgxRckA98MzQb53CuBftjgvNmYloeW1n" 
              alt="Please sign in above" 
              className="rounded-lg mb-4" 
              style={{ width: '200px', height: 'auto' }} 
            />
            <p>Let&apos;s make it great day. - Dee</p>
            <BeautifulSignInButton />
          </div>
        </div>
      </SignedOut>
      <SignedIn>
        <div className="justify-center pt-8">
          <div className="bg-white shadow-md rounded-lg p-2 max-w-xs mx-auto flex">
            <img src={book?.cover} alt={book?.title} className="rounded-t-lg w-1/3 object-contain" />
            <div className="p-4">
              <p className="text-gray-600 mt-2 italic">{`"${book?.quote}"`}</p>
              <p className="text-gray-600 mt-2 font-semibold">{book?.author}</p>
            </div>
          </div>
        </div>
        <KickItOff />
        </SignedIn>
    </main>
  );
}
