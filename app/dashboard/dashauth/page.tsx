"use client";
import { useAuth } from "@clerk/nextjs";

export default function page() {
  const { isLoaded, userId, sessionId } = useAuth();

  if (!isLoaded || !userId) {
    return null;
  }

  return (
    <section className="w-full h-screen flex items-center justify-center flex-col">
      <ul>
        <li>id: ************</li>
        <li>Session ID: ***********</li>
      </ul>
    </section>
  );
}
