"use client";

import styles from "../styles/navbar.module.css"
import {CgCloseR, CgMenu} from "react-icons/cg";
import Link from "next/link";
import {useState} from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const Nav = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const { status, data: session } = useSession(); 
    const router = useRouter();
    // console.log("value " + openMenu)
    const setsignin = () => {
        router.push('/signin');
        console.log(status);
        setOpenMenu(false);
        signOut();
        
    }
    return (
        <>
            <nav className={styles.navbar}>
                <div className={openMenu ? `${styles.active}` : "" }>
                    <ul className={styles.navbarList}>
                        <li className={styles.navbarItem}>
                            <Link className={styles.navbarLink} href="/"
                                  onClick={() => setOpenMenu(false)}
                            >Home</Link>
                        </li>
                        {status === 'authenticated'?
                        (<li className={styles.navbarItem}>
                            <Link className={styles.navbarLink} href="/signin"
                                  onClick={() => setsignin()}
                            >SignOut</Link>
                        </li>):
                        (<li className={styles.navbarItem}>
                            <Link className={styles.navbarLink} href="/signin"
                                  onClick={() => setOpenMenu(false)}
                            >SignIn</Link>
                        </li>)
                        }
                    </ul>

                    {/* //nav icon */}
                    <div className={styles['mobile-navbar-btn']}>
                        <CgMenu
                            name="menu-outline"
                            className={styles['mobile-nav-icon']}
                            onClick={() => setOpenMenu(true)}
                        />
                        <CgCloseR
                            name="close-outline"
                            className={`${styles['mobile-nav-icon']} ${styles['close-outline']}`}
                            onClick={() => setOpenMenu(false)}
                        />
                    </div>
                </div>
            </nav>

        </>

    );
};

export default Nav;