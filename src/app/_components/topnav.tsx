import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { SimpleUploadButton } from "./simple-upload-button";

export function TopNav() {
  return (
    <nav className="flex w-full items-center justify-between border-b p-4 text-xl font-semibold">
      <div>
        <img 
          src="/images/deedit_logo_smaller.png" 
          alt="Deedit Logo"
          className="h-8 w-auto"
        />
      </div>

      <div className="flex flex-row items-center gap-4">
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}
