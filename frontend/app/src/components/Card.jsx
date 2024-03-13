import "../styles/BlogCard.css";
import { useNavigate } from "react-router-dom";
import SD from "../SD";
export default function Card({ data }) {
  let navigate = useNavigate();
  function clickHandler(id) {
    navigate(`/Details/${id}`);
  }
  function deleteBlog(id) {
    fetch(SD.getAllBlogs + ("" + id), {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          console.log("Blog post deleted successfully");
          // Optionally, do something upon successful deletion
          location.reload()
        } else {
          console.error("Failed to delete blog post");
        }
      })
      .catch((error) => {
        console.error("Error deleting blog post:", error);
      });
  }

  return (
    <div className="blog-card">
      <img src={data.imagePath}></img>
      <hr />
      <h2>{data.title}</h2>
      <p>{data.smallDescription}</p>
      <button onClick={() => clickHandler(data._id)}>read more</button>
      {data.isDefaultBlog != true && (
        <button onClick={() => deleteBlog(data._id)} className="deltebutton">
          <i class="fa-solid fa-trash"></i>
        </button>
      )}
    </div>
  );
}
