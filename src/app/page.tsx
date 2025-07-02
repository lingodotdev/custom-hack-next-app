import Firecrawl from "@/components/firecrawl";
import { AuroraText } from "@/components/magicui/aurora-text";
import ResendEmailForm from "@/components/resend/form";
import Tambo from "@/components/tambo";

export default function Home() {
  return (
    <div className="flex flex-col gap-8 items-center min-h-screen py-8 px-4 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-center">
        Welcome to{" "}
        <AuroraText colors={["#6600ff", "#69e300", "#80ffce"]}>
          CustomHack
        </AuroraText>
        !
      </h1>
      <ResendEmailForm />
      <Firecrawl />
      <Tambo />
    </div>
  );
}
