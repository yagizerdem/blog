import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../styles/BlogDetail.css'
import SD from "../SD";
export default function BlogDetailsLayout() {
  const { id } = useParams();
  const [loading, setLoading] = useState();
  const [error, setError] = useState();
  const [data, setData] = useState();

  useEffect(() => {
    async function loader() {
      setLoading(true);
      try {
        var result = await fetch(SD.getAllBlogs + ("" + id));
        var data = await result.json();
        setData(data.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    loader();
  }, [id]);

  console.log(data)

  if (loading) {
    return (
      <div className="spinner">
        <span className="loader"></span>
      </div>
    );
  }
  else{
    return (
        data != null ?  (
            <div className="blogdetail-container">
            <img src={data.imagePath}></img>
            <h2>{data.title}</h2>
            <hr></hr>
            <p>
                {data.description}
            </p>
        </div>
        ):<></>
      )
  }

}
