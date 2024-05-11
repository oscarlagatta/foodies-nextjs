import Link from "next/link";
import logoImg from '@/assets/logo.png';
import styles from './meain-header.module.css';
import Image from "next/image";
import MainHeaderBackground from "@/components/main-header/main-header-background";

export default function MainHeader() {
    return (<>
            <MainHeaderBackground/>
            <header className={styles.header}>
                <Link href='/public' className={styles.logo}>
                    <Image src={logoImg} alt="a plage with food on it" priority/>
                    Next Level Food
                </Link>

                <nav className={styles.nav}>
                    <ul>
                        <li>
                            <Link href='/meals'>Browse Meals</Link>
                        </li>
                        <li>
                            <Link href='/community'>Foodies Community</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}