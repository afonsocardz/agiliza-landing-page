'use client'
import Image from 'next/image'
import styles from './page.module.css'
import Modal from '@/components/Modal/Modal'
import { Dispatch, SetStateAction, useState, createContext } from 'react'
import styled from 'styled-components'
import Header from '@/layouts/Header'
import TitleContainer from '@/components/TitleContainer/TitleContainer'
import MainColumn from '@/layouts/MainColumn'
import AsideColumn from '@/layouts/AsideColumn'

interface MainStyle {
    hasBlur: boolean;
}

const Main = styled.div<MainStyle>`
  filter: ${({ hasBlur }) => hasBlur ? "blur(5px)" : "unset"};
`

interface HomeContextInitial {
    setHasBlur: Dispatch<SetStateAction<boolean>>
}
export const HomeContext = createContext({} as HomeContextInitial);

export default function Home() {
    const [hasBlur, setHasBlur] = useState(true);
    return (
        <HomeContext.Provider value={{ setHasBlur }}>
            <div className={styles.container}>
                <Modal setHasBlur={setHasBlur} hasBlur={hasBlur} />
                <div className={styles["hero-container"]}>
                    <Image height={100} width={100} src="/imgs/hero-image.jpg" alt="" />
                </div>
                <Main className={styles["main-container"]} hasBlur={hasBlur} >
                    <Header />
                    <div className={styles["content-container"]}>
                        <TitleContainer />
                        <div className={styles["row"]}>
                            <MainColumn />
                            <AsideColumn />
                        </div>
                        <div className={styles["show-more-container"]}>
                            <div className={styles["show-more"]}>
                                <span onClick={() => setHasBlur(true)}>Ver mais</span>
                            </div>
                        </div>
                    </div>
                    <footer>
                        <span>Todos os direitos reservados - Agiliza Estágio</span>
                    </footer>
                </Main >
            </div >
        </HomeContext.Provider>
    )
}
