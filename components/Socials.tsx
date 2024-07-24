import Link from "next/link";
import {
  RiGithubFill,
  RiLinkedinFill,
  RiFacebookBoxFill,
  RiInstagramFill,
} from "react-icons/ri";

type SocialsProps = {
  className?: string;
  iconClassName?: string;
};

const icons = [
  { path: "https://github.com/ilhamZone", icon: <RiGithubFill /> },
  {
    path: "https://www.linkedin.com/in/ilham-muhammad007",
    icon: <RiLinkedinFill />,
  },
  {
    path: "https://www.facebook.com/ilham.muhammad.186",
    icon: <RiFacebookBoxFill />,
  },
  { path: "https://www.instagram.com/ilhamaik", icon: <RiInstagramFill /> },
];

const Socials = ({ className, iconClassName }: SocialsProps) => {
  return (
    <div className={className}>
      {icons.map((icon, index) => (
        <Link href={icon.path} key={index} target="_blank">
          <span className={iconClassName}>{icon.icon}</span>
        </Link>
      ))}
    </div>
  );
};
export default Socials;
