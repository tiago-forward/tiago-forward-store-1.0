interface SectionTitleProps {
  title: string
}

export default function SectionTitleProduct({ title }: SectionTitleProps) {
  return (
      <h1 className="text-3xl font-bold flex justify-center">{title}</h1>
  );
}
