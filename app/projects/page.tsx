import CardProject from "@/components/CardProject";
import SectionTitle from "@/components/SectionTitle";
import { projectData } from "@/utils/data";

const page = () => {
  return (
    <section className="container my-8">
      <SectionTitle text="My Projects" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8 mt-8">
        {projectData.map((project, index) => (
          <CardProject key={index} {...project} />
        ))}
      </div>
    </section>
  );
};
export default page;
