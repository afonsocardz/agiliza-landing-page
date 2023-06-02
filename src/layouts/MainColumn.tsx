import { useContext } from "react"
import styles from "../app/page.module.css"
import { HomeContext } from "@/app/page"
import LeadForm from "@/components/Modal/LeadForm";
import Image from "next/image";
import FeaturedTip from "@/components/FeaturedTip";

export interface IFeaturedTip {
    id: number;
    title: string;
    text: string;
    image: string;
}

const data = [
    {
        id: 1,
        title: "MEI pode contratar?",
        text: "O mais importante que todo MEI deve saber, é que antes de tomar essa decisão, você precisa seguir uma...",
        image: "/imgs/mei.jpg",
    },
    {
        id: 2,
        title: "MEI pode contratar?",
        text: "O mais importante que todo MEI deve saber, é que antes de tomar essa decisão, você precisa seguir uma...",
        image: "/imgs/mei.jpg",
    }
]

export default function MainColumn() {
    const { setHasBlur } = useContext(HomeContext);
    return (
        <div className={styles["main-column"]}>
            <LeadForm setHasBlur={setHasBlur} />
            <div className={styles["featured-container"]}>
                {data.map(featuredTip => <FeaturedTip key={featuredTip.id} featuredTip={featuredTip} />)}
            </div>
        </div>
    )
}