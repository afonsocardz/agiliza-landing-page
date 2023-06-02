import Image from "next/image";
import styles from "../app/page.module.css"
import { useContext } from "react";
import { HomeContext } from "@/app/page";

export default function Header() {
    const { setHasBlur } = useContext(HomeContext);
    return (
        <header>
            <Image height={100} width={100} onClick={() => setHasBlur(true)} src="/imgs/logo.png"
                alt="Logo Agiliza Estágio" />
            <div className={styles["contact-container"]}>
                <a href="tel:15981542029">(15) 98154-2029</a>
            </div>
        </header>
    )
}