import styles from "../styles/navbar.module.css"
import Image from "next/image";
import Link from "next/link";
import Nav from "./Nav";

const Header = () => {
    return (
        <>
            <header className={styles.main_header}>
            <div className={styles.navbar_brand}>
                <Link href="/">
                    <Image src="/hbtu_logo.png" alt="my logo image" width={70} height={80}/>
                </Link>
            </div>
            <Nav />
            </header>
        </>
    );
}

export default Header;