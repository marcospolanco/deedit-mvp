import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { SimpleUploadButton } from "./simple-upload-button";

export function TopNav() {
  return (
    <nav className="flex w-full items-center justify-between p-4 text-xl font-semibold">
        <SignedIn>
        <div>
        <img 
          src="https://utfs.io/f/WJjSPLaJDmw9CGPIFIuOHq2ldW1GRYgtVSwMLT3XzP4FDcQE" 
          alt="Deedit Logo"
          className="h-12 w-auto"
        />
      </div>

      <div className="flex flex-row items-center gap-4">
          <UserButton />
      </div>
      </SignedIn>
      </nav>
  );
}
