import type { Cep } from "../models/cep.request";
import type { ErrorApi } from "../models/error-api.response";

export class NotredameApi {

    private static readonly baseUrl = 'https://notredame-api.onrender.com';

    /**
     * Fetches the CEP data from the Notredame API.
     * @param cep The CEP to fetch data for.
     * @returns A promise that resolves to the fetched CEP data or rejects with an ErrorApi.
     * @throws {ErrorApi}
     */
    public static getCep(cep: string): Promise<Cep> {
        const uri = `/api/v1/ceps/${cep}`;
        return fetch(`${this.baseUrl}${uri}`)
            .then(async response => {
                if (!response.ok) {
                    throw await response.json(); 
                }
                return await response.json();
            })
            .then((data: Cep) => {
                return data;
            })
            .catch((error: ErrorApi) => {
                throw error;
            });
    }
}