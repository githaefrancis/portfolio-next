export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <section>Header</section>
      <section>{children}</section>
    </>
  );
}
