"use client";

import { useUser, UserButton, SignInButton, SignUpButton } from "@clerk/nextjs";
import { Button } from "./ui/button";
import NavTabs from "@/components/tabs";
import NavSheet from "./sheet";

const Navbar = () => {
  const { isSignedIn } = useUser();

  return (
    <>
      <div className="flex items-center justify-between space-y-2">
        <div>
          <picture>
            <source srcSet="/logoatenea.png" type="image/png" />
            <img src="/logoatenea.svg" alt="Logo" className="hidden sm:block" />
          </picture>
          <div className="sm:hidden">
            <NavSheet />
          </div>
        </div>
        <div>
          {isSignedIn ? (
            <UserButton afterSignOutUrl="/" />
          ) : (
            <div className="space-x-2">
              <SignInButton mode="modal">
                <Button variant="ghost">Iniciar sesión</Button>
              </SignInButton>
              <SignUpButton mode="modal">
                <Button>Regístrarse</Button>
              </SignUpButton>
            </div>
          )}
        </div>
      </div>
      <NavTabs />
    </>
  );
};

export default Navbar;
