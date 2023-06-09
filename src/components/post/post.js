import "./post.css";
import { Link } from "react-router-dom";

export default function Post({ post }) {
  const PF = "https://blog-app-api1.onrender.com/images/";
  return (
    <div className="post">
      {post.photo && <img className="postImg" src={post.photo} alt="" />}
      <div className="postinfo">
        <div className="postCats">
          {post.categories.map((c) => (
            <span className="postcat">{c.name}</span>
          ))}
        </div>
        <Link to={`/post/${post._id}`} className="link">
          <span className="posttitle">{post.title}</span>
        </Link>
        <hr />
        <span className="postdate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="description">{post.desc}</p>
    </div>
  );
}
