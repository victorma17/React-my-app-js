import { useMutation } from 'react-query'
export function Tx() {
    const mutation = useMutation(() => {
        console.log("he ejecutado la funcionnn")
    })
        return <div>
            <button onClick={() => mutation.mutate()}>
                LLamar
            </button>
        </div>
    }