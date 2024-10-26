interface SectionTitleProps {
  title: string
}

export default function SectionTitle({ title }: SectionTitleProps) {
  return (
      <h2 className="text-2xl text-center font-bold uppercase py-4">{title}</h2>
  );
}
