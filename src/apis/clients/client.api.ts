import type { ClientResponse } from "../../models/client-model.req";
import { Api } from "../base.api";

export class ClinentApi extends Api {
    
    static get(): Promise<ClientResponse> {
        return fetch("https://viacep.com.br/ws/60872140/json/")
            .then<ClientResponse>(response => response.json());
    }
}