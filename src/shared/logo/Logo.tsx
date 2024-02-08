"use client";

import styles from './logo.module.scss';
import { useRouter } from 'next/navigation';

export default function AppLogo() {
    const router = useRouter();
  return (
    <h2 className={styles.logo} onClick={() => router.push('/')}>Evento</h2>
  )
}
