import './globals.css';

export const metadata = {
  title: 'Cercas e Alambrados',
  description: 'Especialistas em cercas e alambrados em Serra Negra - SP.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}