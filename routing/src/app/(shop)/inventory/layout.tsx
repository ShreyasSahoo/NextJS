export default function inventoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <h1>inventory</h1>
      {children}
    </section>
  );
}
