import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { SimpleUploadButton } from "./simple-upload-button";

export function TopNav() {
  return (
    <nav className="flex w-full items-center justify-between p-4 text-xl font-semibold">
        <SignedIn>
        <div>
        <img 
          src="images/Deedit_logo_purple_transp_wname_256.png"
          alt="Deedit Logo"
          className="h-auto w-[20vw] max-w-[70px]"
        />
      </div>

      <div className="flex flex-row items-center gap-4">
          <UserButton appearance={{ elements: { avatarBox: "w-[10vw] h-[10vw] max-w-[40px] max-h-[40px]" } }} />
      </div>
      </SignedIn>
      </nav>
  );
}
