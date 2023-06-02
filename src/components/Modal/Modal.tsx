import { Dispatch, SetStateAction, useState } from "react";
import styles from "./modal.module.css";
import AnswerButton from "./AnswerButton";
import LeadForm from "./LeadForm";

enum ActionElement {
    answerButton = "answerButton",
    leadForm = "leadForm",
}

interface ModalData {
    index: number;
    title: string;
    text: string;
    actionElement: ActionElement;

}

const modalData: ModalData[] = [
    {
        index: 0,
        title: "Procurando por",
        text: "Estagiário",
        actionElement: ActionElement.answerButton,
    },
    {
        index: 1,
        title: "Informe seu contato",
        text: "para continuar",
        actionElement: ActionElement.leadForm,
    }
]

interface ModalProps {
    setHasBlur: Dispatch<SetStateAction<boolean>>;
    hasBlur: boolean;
}

export default function Modal({ setHasBlur, hasBlur }: ModalProps) {
    const [currentModal, setCurrentModal] = useState(modalData[0]);

    function getElementAction(action: ActionElement) {
        const nextStep = () => setCurrentModal({ ...modalData[currentModal.index + 1] });
        if (ActionElement.answerButton === action) {
            return <AnswerButton yesAction={nextStep} noAction={nextStep} />
        }
        if (ActionElement.leadForm === action) {
            return <LeadForm setHasBlur={setHasBlur} />
        }
        return <></>
    }

    return (
        hasBlur ?
            <div className={styles["modal-container"]}>
                <ModalBox {...currentModal} actionElement={getElementAction(currentModal.actionElement)} />
            </div> :
            <></>
    )
}

interface ModalBoxProps {
    title: string;
    text: string;
    actionElement: React.ReactNode;
}
function ModalBox({ title, text, actionElement }: ModalBoxProps): JSX.Element {
    return (
        <div className={styles["modal-box"]}>
            <span className={styles["modal-title"]}>{title}</span>
            <span className={styles["modal-search-text"]}>{text}</span>
            {actionElement}
        </div>
    )
}


