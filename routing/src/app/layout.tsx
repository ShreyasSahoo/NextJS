export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <h1>Header from RootLayout</h1>
        {children}
      </body>
    </html>
  );
}
