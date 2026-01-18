import { useState } from 'react';
import { ClinentApi } from '../../apis/clients/client.api';
import type { ClientResponse } from '../../models/client-model.req';

export const IndexClient = () => {

    const [reponse, setResponse] = useState<ClientResponse | null>(null);
    
    const onclick = () => {
        ClinentApi.get().then(response => setResponse(response));
    }

    return (
        <div>
            <h1>IndexClient</h1>
            <p>{JSON.stringify(reponse)}</p>
            <input type="button" value="Get" onClick={onclick} />
        </div>
    )
}