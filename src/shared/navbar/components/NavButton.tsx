"use client";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";



export default function NavButton({action}: {action: string}) {
    const router = useRouter();
    const handleClick = async () => {
      if(action === 'logout') {
        await signOut();
       router.refresh();
      } else {
        router.push('/'+action)
      }
       
    }
  return (
    <li
    onClick={handleClick}
    >{action}</li>
  )
}
