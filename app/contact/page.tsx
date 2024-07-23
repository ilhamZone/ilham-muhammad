import FormContact from "@/components/FormContact";
import SectionTitle from "@/components/SectionTitle";
import { MailIcon, PhoneCall, MapPinIcon } from "lucide-react";

const page = () => {
  return (
    <section>
      <div className="container py-12">
        <SectionTitle text="Get in touch" />
        <div className="mt-16 flex flex-col lg:flex-row gap-y-14">
          <div className="flex-1">
            <h2 className="h2 text-primary mb-6">Let's talk</h2>
            <p className="w-full lg:w-3/4">
              I'm currently available to take a new project, so feel free to
              send me a message about anything that you want me to work on.
            </p>
            <div className="mt-5 flex flex-col gap-y-5">
              <div className="flex">
                <MailIcon className="text-2xl mr-3" />
                <p>iam.mhd07@gmail.com</p>
              </div>
              <div className="flex">
                <PhoneCall className="text-2xl mr-3" />
                <p>+62 878 1102 1150</p>
              </div>
              <div className="flex">
                <MapPinIcon className="text-2xl mr-3" />
                <p>Cilandak, Jakarta Selatan</p>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <FormContact />
          </div>
        </div>
      </div>
    </section>
  );
};
export default page;
