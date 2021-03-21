import { useRouter } from "next/router";
import { useSession } from "next-auth/client";
import React, { useEffect } from "react";
import Layout from "../components/Layout/layout";

const Welcome = () => {
  const [session, loading] = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session && !loading) router.push("/");
  }, [session, router, loading]);

  if (!session) return null;

  return (
    <Layout title="Welcome">
      <h1 className="text-5xl font-bold text-white max-w-xl tracking-wider">
        Welcome <br />
        {session.user.name}
      </h1>
    </Layout>
  );
};

export default Welcome;
