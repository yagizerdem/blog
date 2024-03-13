import Jumbutron from "../components/Jumbutron";
import { useLoaderData } from "react-router-dom";
import SD from "../SD";
import "../styles/HomeLayout.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function HomeLayout() {
  const [data, setData] = useState();
  const [isLoading, setisLoading] = useState(true);
  const [error, setError] = useState(true);
  const posts = useLoaderData();
  let navigate = useNavigate();
  useEffect(() => {
    if (posts == null || posts == undefined) return;
    setData(posts.data);
    setisLoading(false);
    if (posts.success == false) {
      setError(posts.message);
    }
  }, [posts]);

  function detailsHandler(id){
    navigate(`/Details/${id}`); 
  }

  return (
    <>
      <Jumbutron></Jumbutron>
      <div className="card-container">
        {data != undefined &&
          data.map((item) => {
            if (typeof item.description === "string") {
              console.log(item.description.substring(0, 10));
            } else {
              console.log("Description is not a string:", item.description);
            }

            return (
              <div className="center" key={item._id}>
                <h3 className="title">{item.title}</h3>
                <hr />
                <div className="center-inner">
                  <div className="left">
                    <img src={`${item.imagePath}`} onClick={()=>detailsHandler(item._id)}></img>
                    <p className="small-desc">{item.smallDescription}</p>
                  </div>
                  <div className="right">
                    <h2>
                      {item.description.substring(0, 600)} ...
                      <button className="continue-reading" onClick={()=>detailsHandler(item._id)}>
                        continue reading
                      </button>
                    </h2>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}

export async function loader() {
  var result = await fetch(SD.getAllDefaultBlogs);

  return result;
}
