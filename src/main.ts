import { Actress, isActress } from "./type";


async function getActress(id: number): Promise<Actress | null> {
    try {
        const res = await fetch(`http://localhost:5000/actresses/${id}`)
        const dati: unknown = await res.json()
        if(!isActress(dati)){
            throw new Error(`Formato dati sbagliato`)
        }
        return dati
    } catch (err) {
        if (err instanceof Error) {
            console.error(`errore con il recupero dell'attore con id ${id}`, err)
        } else {
            console.error(`errore sconosciuto`, err)
        }
        return null
    }
}