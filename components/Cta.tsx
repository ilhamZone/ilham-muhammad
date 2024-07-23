import Link from "next/link";
import { Button } from "./ui/button";

const Cta = () => {
  return (
    <section className="mt-28 py-24 bg-[#fef9f5] dark:bg-secondary/40">
      <div className="container">
        <div className="flex flex-col items-center">
          <h2 className="h2 max-w-xl text-center mb-8">
            Prepared to turn your ideas into reality? I'm here to help.
          </h2>
          <Link href="contact">
            <Button>Contact me</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Cta;
