import { useSelector } from "react-redux";

function Count() {
  const count = useSelector((state) => state.count)
  const posts = useSelector((state) => state.posts)

  return (
    <>
      <div>Countコンポーネント:{count}</div>
      <ul>
        { posts.map((post) => (
          <li key={ post.id }>{ post.title }</li>
        )) }
      </ul>
    </>
  );
}

export default Count;