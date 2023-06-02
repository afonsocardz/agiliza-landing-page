import Tip from "@/components/Tip";
import styles from "../app/page.module.css"

const data: ITip[] = [
    {
        id: 1,
        title: "Por que estagiários?",
        tips: [
            { id: 1, text: "Reduza os custos e o turnover da sua empresa com a contratação de estagiários." }
        ]
    },
    {
        id: 2,
        title: "Dicas",
        tips: [
            {
                id: 1,
                text: "Como identificar as qualidades",
                subTitle: "Artigo",
                image: "/imgs/tip01.png",
            },
            {
                id: 2,
                text: "Todos os passos para contratar um estagiário",
                subTitle: "Artigo",
                image: "/imgs/estagiario.jpg"
            },
            {
                id: 3,
                text: "Onde as empresas mais erram ao contratar estagiários?",
                subTitle: "Artigo",
                image: "/imgs/erros.webp",
            }
        ]
    },

]

export interface ITip {
    id: number;
    title: string;
    tips: TipInfo[];
}

export interface TipInfo {
    id: number;
    text: string;
    subTitle?: string;
    image?: string;
}

export default function AsideColumn() {
    return (
        <div className={styles["aside-column"]}>
            {data.map(tip => <Tip key={tip.id} tip={tip} />)}
        </div>
    )
}