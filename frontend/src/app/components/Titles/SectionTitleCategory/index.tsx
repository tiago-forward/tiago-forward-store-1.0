interface SectionTitleProps {
  title: string
}

export default function SectionTitleCategory({ title }: SectionTitleProps) {
  return (
      <h1 className="text-2xl font-bold flex justify-center">{title}</h1>
  );
}
