import Link from "next/link";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { FaExternalLinkAlt } from "react-icons/fa";

type Props = {
  title: string;
  description: string;
  tools: string[];
  platform: string;
  link: string;
  className?: string;
};

const CardProject = ({
  description,
  tools,
  platform,
  title,
  link,
  className,
}: Props) => {
  return (
    <Card className={`p-4 relative flex flex-col ${className}`}>
      {link && (
        <Link href={link} target="_blank" className="absolute top-4 right-4">
          <FaExternalLinkAlt className="w-5 h-5 text-primary" />
        </Link>
      )}
      <p className="text-primary text-sm">{platform}</p>
      <h4 className="capitalize text-xl font-semibold w-9/12">{title}</h4>
      <p className="text-muted-foreground mt-2 mb-8">{description}</p>
      <div className="mt-auto flex gap-x-2">
        {tools?.map((tool: string, index: number) => (
          <Badge key={index}>{tool}</Badge>
        ))}
      </div>
    </Card>
  );
};
export default CardProject;
