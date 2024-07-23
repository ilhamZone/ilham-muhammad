import DevImg from "./DevImg";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Briefcase, GraduationCap } from "lucide-react";
import { aboutData, qualificationData, skillData } from "@/utils/data";
import { Fragment } from "react";
import SectionTitle from "./SectionTitle";

const About = () => {
  const getData = (arr: any[], title: string) => {
    return arr.find((item: any) => item.title == title);
  };

  return (
    <section className="lg:h-[860px] pb-12 lg:py-24 mb-8 lg:mb-0">
      <div className="container">
        <SectionTitle text="About Me" />
        <div className="flex flex-col lg:flex-row mt-8 lg:mt-16">
          <div className="hidden lg:flex flex-1 relative">
            <DevImg
              imgSrc="/about/about.svg"
              className="w-[505px] h-[505px] relative dark:hidden"
            />
            <DevImg
              imgSrc="/about/about-dark.svg"
              className="w-[505px] h-[505px] hidden dark:flex relative"
            />
          </div>
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid lg:grid-cols-3 lg:max-w-[520px] lg:border dark:border-none">
                <TabsTrigger className="w-[162px] lg:w-auto" value="personal">
                  Personal Info
                </TabsTrigger>
                <TabsTrigger
                  className="w-[162px] lg:w-auto"
                  value="qualification"
                >
                  Qualification
                </TabsTrigger>
                <TabsTrigger className="w-[162px] lg:w-auto" value="skills">
                  Skills
                </TabsTrigger>
              </TabsList>
              <div className="text-lg mt-12 lg:mt-8">
                <TabsContent value="personal">
                  <div className="text-center lg:text-left">
                    <h3 className="h3 mb-4">My Personal Detail</h3>
                    <p className="subtitle max-w-xl mx-auto lg:mx-0 mb-8">
                      Front End Developer with over 4 years of experience
                      designing, building, and maintaining websites and mobile
                      apps. Create and maintain a better code base for reusable
                      with Next.js, React and React Native.
                    </p>
                    <div className="grid lg:grid-cols-2 gap-4 mb-12">
                      {aboutData.map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-x-4 mx-auto lg:mx-0"
                        >
                          <div className="text-primary">
                            <item.icon />
                          </div>
                          <p>{item.text}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="qualification">
                  <div>
                    <h3 className="h3 mb-4 text-center lg:text-left">
                      My Awesome Journey
                    </h3>
                    <div className="grid md:grid-cols-2 gap-y-8">
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <Briefcase />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "Experience")?.title}
                          </h4>
                        </div>
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "Experience")?.data.map(
                            (item: any, index: number) => (
                              <div className="flex gap-x-8 group" key={index}>
                                <div className="w-[1px] h-[84px] bg-border relative ml-2">
                                  <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[80px] transition-all duration-300"></div>
                                </div>
                                <div>
                                  <div className="font-semibold text-xl leading-none mb-2">
                                    {item.company}
                                  </div>
                                  <div className="font-semibold text-lg leading-none text-muted-foreground mb-4">
                                    {item.role}
                                  </div>
                                  <div className="font-medium text-base">
                                    {item.years}
                                  </div>
                                </div>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <GraduationCap size={28} />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "Education")?.title}
                          </h4>
                        </div>
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "Education")?.data.map(
                            (item: any, index: number) => (
                              <div className="flex gap-x-8 group" key={index}>
                                <div className="w-[1px] h-[84px] bg-border relative ml-2">
                                  <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[80px] transition-all duration-300"></div>
                                </div>
                                <div>
                                  <div className="font-semibold text-xl leading-none mb-2">
                                    {item.university}
                                  </div>
                                  <div className="font-semibold text-lg leading-none text-muted-foreground mb-4">
                                    {item.qualification}
                                  </div>
                                  <div className="font-medium text-base">
                                    {item.years}
                                  </div>
                                </div>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="skills">
                  <div className="text-center lg:text-left">
                    <h3 className="h3 mb-8">Tools I use Everyday</h3>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Skills</h4>
                      <div className="border-b border-border mb-4" />
                      <div className="gap-y-1 flex flex-col mb-12">
                        {getData(skillData, "skill")?.data.map(
                          (item: any, index: number) => (
                            <div
                              className="w-4/5 text-center lg:text-left mx-auto lg:mx-0"
                              key={index}
                            >
                              <div className="font-medium">{item.name}</div>
                            </div>
                          )
                        )}
                      </div>
                      <div className="text-center lg:text-left">
                        <h4 className="text-xl font-semibold mb-2">Tools</h4>
                        <div className="border-b border-border mb-4" />
                        <div className="flex gap-x-8 justify-center lg:justify-start">
                          {getData(skillData, "tools")?.data.map(
                            (item: any, index: number) => (
                              <div key={index}>
                                <Image
                                  src={item.imgPath}
                                  height={48}
                                  width={48}
                                  alt="tools"
                                />
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
