// app/dashboard/layout.tsx
import { ReactNode } from 'react';
import { redirect } from 'next/navigation';
import { getUser } from '@/utlis/supabase/server';

export const metadata = {
  title: 'Dashboard - Solid Templates',
  description: 'Generated by Next.js',
};

export default async function RootLayout({ children }: { children: ReactNode }) {
  const user = await getUser();

  if (!user) {
    if (typeof window !== 'undefined') {
      window.location.href = '/auth/signin?message=' + encodeURIComponent('Please log in your credentials.');
    } else {
      return redirect('/auth/signin?message=' + encodeURIComponent('Please log in your credentials.') + '&type=error');
    }
  }

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
