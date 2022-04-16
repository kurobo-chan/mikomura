import * as React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import StaticPagination from "../components/staticPagination";

const Portfolio = ({ data, location }) => {
  return (
    <Layout>
      <SEO
        pagetitle="ポートフォリオ"
        pagedesc="mikomuraのポートフォリオ一覧"
        pagepath={location.pathname}
      />
      <StaticPagination
        pageNextLink={`/blog/`}
        pageNextTitle="blog"
        pagePrevLink={`/`}
        pagePrevTitle="home"
      />
      <main className="main portfolio">
        <div className="container">
          <div className="titleBody">
            <h1 className="mainTitle">portfolio</h1>
          </div>
          <div className="list">
            <ul>
              <li>
                <a href="blogPost.html" className="screen">
                  <figure className="eyecatch">
                    <img src="/images/result.png" alt="" />
                  </figure>
                  <h2 className="listTitle">
                    JavaScriptを使わずにアコーディオンメニューを作れるとこに気づいた
                  </h2>
                </a>
              </li>
              <li>
                <a href="blogPost.html" className="screen">
                  <figure className="eyecatch">
                    <img src="/images/result.png" alt="" />
                  </figure>
                  <h2 className="listTitle">
                    JavaScriptを使わずにアコーディオンメニューを作れるとこに気づいた
                  </h2>
                </a>
              </li>
              <li>
                <a href="blogPost.html" className="screen">
                  <figure className="eyecatch">
                    <img src="/images/result.png" alt="" />
                  </figure>
                  <h2 className="listTitle">
                    JavaScriptを使わずにアコーディオンメニューを作れるとこに気づいた
                  </h2>
                </a>
              </li>
              <li>
                <a href="blogPost.html" className="screen">
                  <figure className="eyecatch">
                    <img src="/images/result.png" alt="" />
                  </figure>
                  <h2 className="listTitle">
                    JavaScriptを使わずにアコーディオンメニューを作れるとこに気づいた
                  </h2>
                </a>
              </li>
            </ul>
            <button className="moreButton">
              <span>Show more</span>
              <span className="material-icons"> expand_more </span>
            </button>
          </div>
        </div>
      </main>
    </Layout>
  );
};
export default Portfolio;
