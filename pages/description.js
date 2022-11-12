import Headbar from "../src/components/Headbar";
import useSWR from 'swr';

export default function Description() {
    const fetcher = (url) => fetch(url).then((res) => res.json())
    const { data, error } = useSWR('/api/data', fetcher)
    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>
    console.log(data);
    return (
        <div className="flex items-center justify-center h-screen w-full ">
        <div className="flex flex-col items-center justify-center w-full">
            <h1 className="text-4xl font-bold text-center">Description</h1>
            <p className="text-xl text-center">This is the description page.</p>
            <br /><br />
            <p>{Object.values(data[0])}</p>
        </div>
        </div>
    )
}