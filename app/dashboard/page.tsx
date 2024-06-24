import { redirect } from "next/navigation"
import { auth, currentUser } from "@clerk/nextjs/server"
import Link from "next/link";


export default async function PageDashboard() {

  const { userId } = auth();

  if (!userId) {
    redirect("/");
  }

  console.log(userId);

  const user = await currentUser(); 

  console.log(user);

  return (
    <section className="w-full h-screen flex items-center justify-center flex-col">
      <h1>Bienvenu {user?.firstName} {user?.lastName}</h1> 
      <p>Email: {user?.emailAddresses[0].emailAddress}</p>
      

      <Link href="/dasboard/dashuser">
      <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-md p-2 my-2">useUser</button>
      </Link>
      <Link href="/dasboard/dashauth">
      <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-md p-2 my-2">useAuth</button>
      </Link>
    </section>
  )
}
