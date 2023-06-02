import { HomeContext } from "@/app/page"
import { useContext } from "react"
import styles from "../app/page.module.css"
import { ITip, TipInfo } from "@/layouts/AsideColumn";
import Image from "next/image";

interface TipProps {
    tip: ITip;
}
export default function Tip({ tip }: TipProps) {
    const { setHasBlur } = useContext(HomeContext);
    return (
        <div className={styles["tips"]}>
            <span onClick={() => setHasBlur(true)} className={`${styles["tips-title"]} ${styles["link"]}`}>{tip.title}</span>
            {tip.tips.map(tip => <TipInfo key={tip.id} info={tip} />)}
        </div>
    )
}

interface TipInfoProps {
    info: TipInfo;
}
function TipInfo({ info }: TipInfoProps) {
    const { setHasBlur } = useContext(HomeContext);
    return (
        <div className={styles["tip"]}>
            {info.subTitle !== undefined && <span className={styles["sub-title"]}>{info.subTitle}</span>}
            <span onClick={() => setHasBlur(true)} className={`${styles["tip-title"]} ${styles["link"]}`}>{info.text}</span>
            <div className={styles["tip-image"]}>
                {info.image !== undefined && <Image height={100} width={100} onClick={() => setHasBlur(true)} src={info.image} alt="" />}
            </div>
        </div>
    )
}