import Header from "./Desktop-components/Header"
import ViewNoticias from "./Desktop-components/Noticias"
import { useEffect, useState } from "react";
import {supabase} from "../../src/lib/supabase"

export default function NoticiasDesktop() {
    const [data, setData] = useState([])

    useEffect(() => {
        async function teste() {
            const {data: data2, error} = await supabase
            .from("noticia")
            .select("*");
        if (error) {
            console.log(error);
        }
        else {
            setData(data2);
        }}

        teste()
    }, []);

    useEffect(() => {
        console.log(data);
    },[data]);

    return(
        <div id="all-noticias">
            <Header />
            <ViewNoticias data={data} />
        </div>
    )
}