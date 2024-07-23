"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import { RiArrowDownSLine } from "react-icons/ri";

import Badge from "./Badge";
import DevImg from "./DevImg";
import Socials from "./Socials";

const Hero = () => {
  const fetchFileContent = async () => {
    fetch("/api/file").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);

        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "CV_Ilham_Muhammad.pdf";
        alink.click();
      });
    });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <section className="py-12 lg:py-24 h-[68vh] lg:h-[84vh] lg:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
      <div className="container">
        <div className="flex justify-between gap-x-8">
          <div className="flex flex-col max-w[600px] justify-center mx-auto lg:mx-0 text-center lg:text-left">
            <p className="text-2xl sm:4xl lg:text-5xl font-semibold mb-3">
              Hi! I'm Ilham Muhammad
            </p>
            <h1 className="h1 text-primary">
              <TypeAnimation
                sequence={[
                  "Frontend Engineer",
                  3000,
                  "Web Developer",
                  2000,
                  "Mobile Developer",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h1>
            <p className="text-2xl sm:4xl lg:text-5xl font-semibold mt-1 text-muted-foreground">
              with a 4+ years of experience
            </p>
            <div className="flex flex-col gap-y-3 lg:flex-row gap-x-3 mx-auto lg:mx-0 mb-12 mt-8">
              <Link href="/contact">
                <Button className="gap-x-2">
                  Contact Me <Send size={18} />
                </Button>
              </Link>
              <Button
                className="gap-x-2"
                variant="secondary"
                onClick={fetchFileContent}
              >
                Download CV <Download size={18} />
              </Button>
            </div>
            <Socials
              className="flex gap-x-6 mx-auto lg:mx-0"
              iconClassName="text-foreground text-[22px] hover:text-primary transition-all"
            />
          </div>
          <div className="hidden lg:flex relative">
            <DevImg
              imgSrc="/hero/profile-pic.png"
              className="w-[480px] h-[480px]"
            />
          </div>
        </div>
        <div className="hidden md:flex absolute left-2/4 bottom-44 lg:bottom-12 animate-bounce">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
