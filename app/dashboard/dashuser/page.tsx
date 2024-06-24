"use client";

import { useUser } from "@clerk/nextjs";

export default function page() {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  return (
    <section className="w-full h-screen flex items-center justify-center flex-col">
      <div>
        Bienvenue, {user.firstName} {user.lastName}
      </div>
      <div>Email: {user.emailAddresses[0].emailAddress}</div>
    </section>
  );
}
