import Header from "../../compoments/Header";
import { getPosts } from "../../services";

export default function Home({ posts }) {

  return (
    <>
      <Header />
      <p className="mb-8">
        this is main section all content will be written here...
      </p>
      {
        console.log(posts)
      }
    </>
  );
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts }, // will be passed to the page component as props
  };
}

