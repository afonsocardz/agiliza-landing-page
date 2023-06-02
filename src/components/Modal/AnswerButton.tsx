import styles from "./modal.module.css";

interface AnswerButtonProps {
    yesAction: () => void;
    noAction: () => void;
}
export default function AnswerButton({ yesAction, noAction }: AnswerButtonProps) {
    return (
        <div className={styles["modal-row"]}>
            <button className={styles["no-button"]} onClick={e => noAction()}>Não</button>
            <button className={styles["yes-button"]} onClick={e => yesAction()}>Sim</button>
        </div>
    )
}