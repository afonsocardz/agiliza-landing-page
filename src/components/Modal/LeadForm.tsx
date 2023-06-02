import { Dispatch, FormEvent, SetStateAction, useRef } from "react";

interface LeadFormProps {
    setHasBlur: Dispatch<SetStateAction<boolean>>;
}

function notNullInput(input: HTMLInputElement | null) {
    if (input === null) {
        throw new Error("null");
    }
    return input.value;
}

export default function LeadForm({ setHasBlur }: LeadFormProps) {
    const emailRef = useRef<HTMLInputElement>(null);
    const phoneRef = useRef<HTMLInputElement>(null);
    const nameRef = useRef<HTMLInputElement>(null);

    async function submitHandler(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const email = notNullInput(emailRef.current);
        const phone = notNullInput(phoneRef.current);
        const name = notNullInput(nameRef.current);
        
        await fakeLeadRequest({
            email,
            phone,
            name
        })
        setHasBlur(false);
    }
    return (
        <form onSubmit={e => submitHandler(e)}>
            <input name="EMAIL" type="email" placeholder="Digite seu e-mail" required ref={emailRef} />
            <div className="row-form">
                <input name="PHONE" type="tel" placeholder="DDD + Número" required ref={phoneRef} />
                <input name="FNAME" type="text" placeholder="Nome da empresa" required ref={nameRef} />
            </div>
            <div className="custom-checkbox">
                <input className="custom-control-input" type="checkbox" name="consent" id="consent-checkbox" required />
                <label className="custom-control-label" htmlFor="consent-checkbox">
                    Concordo com os Termos e Condições
                </label>
            </div>
            <button type="submit" className="continue">Continuar</button>
        </form>
    )
}

interface LeadData {
    email: string,
    phone: string,
    name: string,
}
async function fakeLeadRequest(leadData: LeadData) {
    return {
        status: 200,
        data: leadData
    }
}