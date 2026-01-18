export interface IndexAddressProps {
    uf: string;
    cidade?: string;
}

export const IndexAddress = ({ uf }: IndexAddressProps) => {
    return (
        <div>
            <h1>IndexAddress {uf}</h1>
        </div>
    )
}