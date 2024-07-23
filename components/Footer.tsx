import Socials from "./Socials";

const Footer = () => {
  return (
    <footer className="bg-secondary py-12 lg:py-16">
      <div className="container">
        <div className="flex flex-col items-center justify-between">
          <Socials
            className="flex gap-x-6 mx-auto lg:mx-0 mb-4"
            iconClassName="text-primary dark:text-white/70 text-[22px] lg:text-2xl hover:text-white dark:hover:text-primary transition-all"
          />
          <div className="text-white/70 text-lg lg:text-xl flex flex-col sm:flex-row">
            &copy; Copyright {new Date().getFullYear()} Ilham Muhammad.&nbsp;
            <p>All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
