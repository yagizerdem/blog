import '../styles/BlogLayout.css'
import SD from '../SD'
import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from 'react';
import Card from '../components/Card';

export default function BlogLayout(){
    const [data, setData] = useState();
    const [isLoading, setisLoading] = useState(true);
    const [error, setError] = useState(true);
    const posts = useLoaderData();


    useEffect(() => {
        if (posts == null || posts == undefined) return;
        setData(posts.data);
        setisLoading(false);
        if (posts.success == false) {
          setError(posts.message);
        }
      }, [posts]);

    console.log(data)
    return(
       <div className="blog-layout">
        {data != undefined && data.map((item,i) =>{
            return(
                <Card key={i}data={item}></Card>
            )
        })}
       </div>
    )
}

export async function loader() {
    var result = await fetch(SD.getAllBlogs);
  
    return result;
  }