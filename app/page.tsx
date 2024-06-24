import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function Home() {
  const { userId } = auth();

  if (userId) {
    redirect("/dashboard");
  }

  return (
    <section className="w-full h-screen flex items-center justify-center flex-col">
      <h1 className="text-8xl uppercase font-black">Hello guys</h1>
      <Link href="/sign-in">
        <button className="bg-blue-500 hover:bg-blue-600 rounded-md text-white my-2 p-2">
          SignIn
        </button>
      </Link>
      <Link href="/sign-up">
        <button className="bg-blue-500 hover:bg-blue-600 rounded-md text-white my-2 p-2">
          SignUp
        </button>
      </Link>
    </section>
  );
}
