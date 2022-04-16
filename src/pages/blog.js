import * as React from "react";
import { useEffect, useState } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { graphql, Link } from "gatsby";
import Tag from "../components/tag";

const Blog = ({ data, location }) => {
  const allGridElements = data.allMicrocmsBlog.edges;
  const [list, setList] = useState([...allGridElements.slice(0, 4)]);
  const [loadMore, setLoadMore] = useState(false);
  const [hasMore, setHasMore] = useState(allGridElements.length > 6);
  const handleLoadMore = () => {
    setLoadMore(true);
  };
  useEffect(() => {
    if (loadMore && hasMore) {
      const currentLength = list.length;
      const isMore = currentLength < allGridElements.length;
      const nextResults = isMore
        ? allGridElements.slice(currentLength, currentLength + 4)
        : [];
      setList([...list, ...nextResults]);
      setLoadMore(false);
    }
  }, [loadMore, hasMore]);
  useEffect(() => {
    const isMore = list.length < allGridElements.length;
    setHasMore(isMore);
  }, [list]);
  return (
    <Layout>
      <SEO
        pagetitle="ブログ"
        pagedesc="KUROBOのブログ一覧"
        pagepath={location.pathname}
      />
      <main className="main postList">
        <div className="container">
          <div className="titleBody">
            <h1 className="mainTitle">note library</h1>
            <Tag />
            <p className="filters subTitle">
              Showing all projects. Use the filter to list them by skill or
              technology.
            </p>
          </div>
          <div className="list blog">
            <ul>
              {list.map(({ node }) => (
                <li>
                  <article className="post" key={node.id}>
                    <Link to={`/blog/post/${node.slug}/`} className="screen">
                      <figure className="eyecatch">
                        
                      </figure>
                      <h2 className="listTitle">{node.title}</h2>
                    </Link>
                  </article>
                </li>
              ))}
            </ul>
            {hasMore ? (
              <button className="moreButton" onClick={handleLoadMore}>
                <span>Show more</span>
                <span className="material-icons"> expand_more </span>
              </button>
            ) : (
              <p>No more results</p>
            )}
          </div>
        </div>
      </main>
    </Layout>
  );
};
export default Blog;

export const query = graphql`
  query MyQuery {
    allMicrocmsBlog(sort: { fields: publishDate, order: DESC }) {
      edges {
        node {
          id
          title
          slug
          eyecatch {
            url
            height
            width
          }
        }
      }
    }
  }
`;
