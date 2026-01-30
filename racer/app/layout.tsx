export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <head>
        <title>Base Racer</title>
        <meta name="base:app_id" content="697b0923748a9bde7c61ab56" />
      </head>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
