import { useQuery } from 'react-query'
export function Lista() {

    const {data, isloading, isError} = useQuery(["query1"], () => {
        return [1, 2, 3, 4, 5, 6]
    })

    return <p>{JSON.stringify(data)}</p>

}