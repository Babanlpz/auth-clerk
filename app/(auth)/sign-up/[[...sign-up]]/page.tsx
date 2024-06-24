// Original path: /app/(auth)/sign-in/[[...sign-in]]
import { SignUp } from "@clerk/nextjs";

export default function PageSignUp() {
  return (
    <section className="w-full h-screnn flex items-center justify-center">
      <SignUp path="/sign-in" routing="path" />
    </section>
  );
}
