import { useState } from "react";

/**
 * Froma de chamar o componente: <InputEmail />
 * @returns 
 */
export const InputEmail = ({ email=''  } : { email?: string}) => {                                  
    const [emailValue, setEmailValue] = useState<string>(email);

    const onChangeEmail = (newEmail: string) => {
        setEmailValue(newEmail);
        console.log('Email alterado para: ', newEmail);
    }

    return (                                                                                                                                
      // Area de JSX (HTML dentro do JS)
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
        <input type="submit" 
            value={emailValue} 
            className="form-control"
            onChange={(e) => setEmailValue(e.target.value)}
            onClick={(e) => alert(emailValue)}
            id="exampleFormControlInput1" />
      </div>
    )
}