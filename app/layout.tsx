// app/layout.tsx
import './globals.css';
import Header from './components/Header';
import { ReactNode } from 'react';

export const metadata = {
  title: 'StoryBit',
  description: 'Streaming Dashboard Clone',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <Header />
        <main className="pt-24 max-w-6xl mx-auto px-4">{children}</main>
      </body>
    </html>
  );
}
