import Navbar from "@/shared/navbar/Navbar"
import { Inter } from 'next/font/google'
import './global.scss';
import { Toaster } from "react-hot-toast";
import SessionProvider from "./providers/SessionProvider";
import { getServerSession } from "next-auth/next";
import { options } from "./api/auth/[...nextauth]/options";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'Evento',
  description: 'An Event Management App',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(options);
  return (
    <html lang="en" className={inter.className}>
      <body>
        <header>
          <Navbar/>
        </header>
        <SessionProvider session={session}>
        <main 
        style={{
          marginTop: 60,
        }}
        >
        <Toaster position="bottom-center" />
        
        {children}
        </main>
        </SessionProvider>
        
        </body>
    </html>
  )
}
