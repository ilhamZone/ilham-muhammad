import Image from "next/image";

type DevImgProps = {
  imgSrc: string;
  className?: string;
};

const DevImg = ({ imgSrc, className }: DevImgProps) => {
  return (
    <div className={className}>
      <Image src={imgSrc} alt="dev image" priority fill />
    </div>
  );
};
export default DevImg;
