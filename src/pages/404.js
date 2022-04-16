import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import "emoji-mart/css/emoji-mart.css";
import { Emoji } from "emoji-mart";
import SEO from "../components/seo";

// markup
const NotFoundPage = () => {
  return (
    <Layout>
      <SEO
        pagetitle="ページが見つかりません Page not found"
        pagedesc="お探しのものは見つかりませんでした。"
      />
      <main className="main">
        <div className="container">
          <title>Not found</title>
          <div className="titleBody">
            <h1 className="mainTitle">
              <Emoji emoji={"sleepy"} size={36} set={"google"} />
              Page not found
            </h1>
          </div>
          <p>
            お探しのものは見つかりませんでした。
            <Link to="/">Go home</Link>.
          </p>
        </div>
      </main>
    </Layout>
  );
};

export default NotFoundPage;
