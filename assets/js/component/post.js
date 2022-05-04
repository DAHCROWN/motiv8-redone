function DateTime(props) {
  return (
    <div style={{paddingLeft:80,paddingRight:80, paddingTop:20}} className="blog__date__time">
      <i className="fa fa-history"> </i>
      <small>{date(props.date)}</small>
    </div>
  );
}

function date(date) {
  return new Date(date).toLocaleDateString();
}
function useFetchPost() {
  const [post, setPost] = React.useState({});
  var query = window.location.search.substring(1);
  var id = query.split("=")[1];

  const onFetchBlog = async () => {
    await fetch(
      `http://localhost:8000/blog/${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((res) => setPost(res))
      .catch((e) => console.log(e));
  };
  React.useEffect(() => {
    onFetchBlog();
  }, []);
  return [post];
}

function Post() {
  const [post] = useFetchPost();
  console.log(post)
  return (
    <div>
      <h1>{post.title}</h1>
      <img src={post.image} width='100%'/>
      <DateTime  date={post.date} />
      <div style={{paddingLeft:80,paddingRight:80}} dangerouslySetInnerHTML={{__html: post.body}} />
    </div>
  );
}

ReactDOM.render(<Post />, document.getElementById("post-wrap"));
