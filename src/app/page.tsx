import Firecrawl from "@/components/firecrawl";
import { AuroraText } from "@/components/magicui/aurora-text";
import ResendEmailForm from "@/components/resend/form";
import Tambo from "@/components/tambo";
import BetterAuth from "@/components/better-auth";
import Autumn from "@/components/autumn";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";

export default async function Home() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const userEmail = session?.user?.email;

  return (
    <>
      <h1 className="text-4xl font-bold text-center">
        Welcome to{" "}
        <AuroraText colors={["#6600ff", "#69e300", "#80ffce"]}>
          CustomHack train
        </AuroraText>
      </h1>
      <BetterAuth userEmail={userEmail} />
      <Autumn />
      <Tambo />
      <ResendEmailForm />
      <Firecrawl />
    </>
  );
}
