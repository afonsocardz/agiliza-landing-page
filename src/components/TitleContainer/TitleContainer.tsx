import { useContext } from "react"
import styles from "../../app/page.module.css"
import Image from "next/image"
import { HomeContext } from "@/app/page"

export default function TitleContainer() {
    const { setHasBlur } = useContext(HomeContext);
    return (
        <div className={styles["title-container"]}>
            <div className={styles["title-image"]}>
                <Image height={100} width={100} onClick={() => setHasBlur(true)} src="/imgs/hero-image-top.jpg" alt="" />
            </div>
            <h1>
                <span>Saiba como encontrar e contratar</span>
                <span style={{ lineHeight: "42px" }}>os melhores estagiários para a </span>
                <span>sua empresa.</span>
            </h1>
        </div>)
}