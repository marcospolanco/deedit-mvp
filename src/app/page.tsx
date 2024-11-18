import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { getMyImages } from "~/server/queries";
import {TimePicker} from "antd";

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

//choose a particular book randomly on load
const book = books[Math.floor(Math.random() * books.length)];


async function Images() {
  const images = await getMyImages();

  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {images.map((image) => (
        <div key={image.id} className="flex h-48 w-48 flex-col">
          <Link href={`/img/${image.id}`}>
            <Image
              src={image.url}
              style={{ objectFit: "contain" }}
              width={192}
              height={192}
              alt={image.name}
            />
          </Link>
          <div>{image.name}</div>
        </div>
      ))}
    </div>
  );
}

export default async function HomePage() {
  return (
    <main className="">
      <SignedOut>
        <div className="h-full w-full text-center text-2xl">
          Please sign in above
        </div>
      </SignedOut>
      <SignedIn>
        <div className="bg-white shadow-md rounded-lg p-2 max-w-xs mx-auto">
            <img src={book.cover} alt={book.title} className="rounded-t-lg" />
            <div className="p-4">
                <p className="text-gray-600 mt-2 italic">{`"${book.quote}"`}</p>
                <p className="text-gray-600 mt-2 font-semibold">{book.author}</p>
            </div>
        </div>
      </SignedIn>
    </main>
  );
}
