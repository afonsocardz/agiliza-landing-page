import { useContext } from "react";
import styles from "../app/page.module.css"
import { HomeContext } from "@/app/page";
import Image from "next/image";
import { IFeaturedTip } from "@/layouts/MainColumn";


interface FeatureTipProps {
    featuredTip: IFeaturedTip
}

export default function FeaturedTip({ featuredTip }: FeatureTipProps) {
    const { setHasBlur } = useContext(HomeContext)
    return (
        <div className={styles["feature"]}>
            <span onClick={() => setHasBlur(true)} className={`${styles["tips-title"]} ${styles["link"]}`}>{featuredTip.title}</span>
            <span onClick={() => setHasBlur(true)} className={`${styles["tip-title"]} ${styles["link"]}`}>{featuredTip.text}</span>
            <span onClick={() => setHasBlur(true)} className={styles["etc"]}>Leia mais</span>
            <div className={styles["feature-image"]}>
                <Image height={300} width={100} onClick={() => setHasBlur(true)} src={featuredTip.image} alt="" />
            </div>
        </div>
    );
}