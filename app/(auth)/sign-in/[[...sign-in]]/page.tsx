// Original path: /app/(auth)/sign-in/[[...sign-in]]
import { SignIn } from "@clerk/nextjs"


export default function PageSignIn() {
  return (
    <section className="w-full h-screnn flex items-center justify-center">
      <SignIn path="/sign-in" routing="path" />
    </section>
  )
}
