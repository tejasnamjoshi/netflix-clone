import { signIn, signOut, useSession } from "next-auth/client";
import React, { useEffect } from "react";
import { useRouter } from "next/router";

const Layout = (props) => {
  const [session] = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) router.push("/welcome");
  }, [session]);

  const handleLoginClick = () => {
    if (session) signOut();
    else signIn("google");
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen px-6"
      style={{
        background:
          "linear-gradient(rgb(0 0 0 / 50%), rgb(49 45 45 / 50%)), url('/bg.jpg')",
      }}
    >
      <header className="flex justify-between items-center absolute top-0 py-4 w-full md:px-0 px-6">
        <img className="w-40 h-16" src="/logo.svg" />
        <button
          className="flex items-center px-6 py-2 bg-netflix-red text-white rounded text-xl"
          onClick={handleLoginClick}
        >
          {`${session ? "Sign out" : "Sign in"} `}
        </button>
      </header>

      <main className="flex flex-col justify-items-center items-center text-center">
        {props.children}
      </main>
    </div>
  );
};

export default Layout;
