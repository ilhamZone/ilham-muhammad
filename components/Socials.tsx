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
  { path: "/", icon: <RiGithubFill /> },
  { path: "/", icon: <RiLinkedinFill /> },
  { path: "/", icon: <RiFacebookBoxFill /> },
  { path: "/", icon: <RiInstagramFill /> },
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
