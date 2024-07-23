import SectionTitle from "./SectionTitle";

const Services = () => {
  return (
    <section className="pb-12 flex flex-col">
      <div className="container">
        <SectionTitle text="My Services" />
        <div className="mt-12 w-full relative">
          <div className="w-full lg:w-[45%] text-center lg:text-left">
            <h3 className="h3 mb-4 text-primary">Web Development</h3>
            <p className="text-xl text-muted-foreground">
              In building web applications, I'm equipped with the right tools
              and can operate independently or as part of a team to deliver
              fast, resilient solutions optimized for scalability. Performance
              and scalability are top priorities for me.
            </p>
          </div>
          <div className="h-full w-[2px] bg-primary absolute left-1/2 top-1/2 hidden lg:flex" />
          <div className="w-full lg:w-[45%] text-center lg:text-right float-end mt-10 lg:mt-0">
            <h3 className="h3 mb-4 text-primary">App Development</h3>
            <p className="text-xl text-muted-foreground">
              When developing Mobile applications, I utilize the right tools and
              can work independently or as part of a team to create fast,
              reliable solutions that scale efficiently. Ensuring high
              performance and scalability is my main focus.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Services;
