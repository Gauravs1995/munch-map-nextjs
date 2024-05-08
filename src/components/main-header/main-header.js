import Link from 'next/link';
import Image from 'next/image';

import logoImage from '@/assets/logo.png';
import styles from './main-header.module.css';
import MainHeaderBackground from './main-header-background';
import NavLink from '../NavLink/nav-link';

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={styles.header}>
        <Link className={styles.logo} href='/'>
          <Image src={logoImage} alt='A plat with food on it' priority={true} />
          MunchMap
        </Link>
        <nav className={styles.nav}>
          <ul>
            <li>
              <NavLink href='/meals'>Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href='/community'>MunchMap Communities</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
