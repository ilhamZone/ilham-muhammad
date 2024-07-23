type SectionTitleProps = {
  text: string;
  className?: string;
};
const SectionTitle = ({ text, className }: SectionTitleProps) => {
  return (
    <div
      className={`text-5xl font-bold relative w-full text-center ${className}`}
    >
      {text}
    </div>
  );
};
export default SectionTitle;
