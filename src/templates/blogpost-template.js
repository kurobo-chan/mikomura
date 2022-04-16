import * as React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { graphql, Link } from "gatsby";
import { convert } from "html-to-text";
import { unified } from "unified";
import parse from "rehype-parse";
import rehypeReact from "rehype-react";
import Highlight from "react-highlight";
import "/node_modules/highlight.js/styles/github.css";
import styled from "styled-components";
import Share from "../components/share";

import { getGatsbyImageData } from "@imgix/gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

//Render htmlAST
const renderAst = new rehypeReact({
  createElement: React.createElement,
  Fragment: React.Fragment,
  components: {
    h2: (props) => {
      const primary = "#546e7a";
      const secondary = "#b0bec5";
      const Title = styled.h2({
        padding: ".5em",
        paddingInlineStart: "2.5em",
        position: "relative",
        marginBlockEnd: ".5em",
        " &:before": {
          content: "'◇'",
          color: secondary,
          fontSize: "1.9em",
          position: "absolute",
          left: "0",
          top: "-0.1em",
        },
        "&:after": {
          content: "'◇'",
          color: primary,
          fontSize: "1.3em",
          position: "absolute",
          left: ".4em",
          top: ".4em",
        },
      });
      return <Title>{props.children}</Title>;
    },
    img: (props) => {
      const ImgStyle = styled.figure({
        position: "relative",
        aspectRatio: "16/9",
      });
      return (
        <ImgStyle>
          <figcaption>{props.alt}</figcaption>
        </ImgStyle>
      );
    },
    pre: (props) => {
      const MyHighlight = styled(Highlight)({
        padding: "1.5em",
        lineHeight: "1.5",
        letterSpacing: ".075em",
        "& > code": {
          display: "contents",
          color: "inherit",
        },
      });
      return <MyHighlight>{props.children}</MyHighlight>;
    },
    code: (props) => {
      const accent = "#d81b60";
      const Code = styled.code({
        borderRadius: "4px",
        backgroundColor: "#f8f8f8",
        paddingBlock: ".2em",
        paddingInline: ".2em",
        wordBreak: "break-word",
        fontFamily:
          "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
        fontSize: ".75em",
        lineHeight: "1",
        color: accent,
      });
      return <Code>{props.children}</Code>;
    },
    ul: (props) => {
      const List = styled.ul({
        marginInlineStart: "1.5em",
        listStylePosition: "outside",
        listStyleImage: "none",
        "& > li": {
          marginBlockEnd: "calc(1.5em / 2)",
          listStyle: "square",
        },
      });
      return <List>{props.children}</List>;
    },
    a: (props) => {
      const linkColor = "#546e7a";
      const LinkStyle = styled.a({
        color: linkColor,
      });
      return <LinkStyle>{props.children}</LinkStyle>;
    },
  },
}).Compiler;

// markup
const BlogPost = ({ data, location, pageContext }) => {
  //Pars HTML to htmlAST
  const htmlAst = unified()
    .use(parse, { fragment: true })
    .parse(data.microcmsBlog.content);
  const PCnav = styled.nav({
    "@media(max-width:767px)": {
      display: "none",
    },
  });
  const SPnav = styled.nav({
    "@media(min-width:768px)": {
      display: "none",
    },
  });
  return (
    <Layout>
      <SEO
        pagetitle={data.microcmsBlog.title}
        pagedesc={`${convert(data.microcmsBlog.content, {
          selectors: [
            { selector: "a", options: { ignoreHref: true } },
            {
              selector: "img",
              format: "skip",
            },
          ],
        }).slice(0, 70)}…`}
        pagepath={location.pathname}
        blogimg={data.microcmsBlog.eyecatch.url}
        pageimgw={data.microcmsBlog.eyecatch.width}
        pageimgh={data.microcmsBlog.eyecatch.height}
      />
      <PCnav className="pageNav">
        {pageContext.next && (
          <Link
            to={`/blog/post/${pageContext.next.slug}/`}
            className="next"
            rel="prev"
          >
            <span className="controlName">{pageContext.next.title}</span>
            <div className="arrow">
              <div className="arrow-top" />
              <div className="arrow-bottom" />
            </div>
          </Link>
        )}
        {pageContext.previous && (
          <Link
            to={`/blog/post/${pageContext.previous.slug}/`}
            className="prev"
            rel="next"
          >
            <span className="controlName">{pageContext.previous.title}</span>
            <div className="arrow">
              <div className="arrow-top" />
              <div className="arrow-bottom" />
            </div>
          </Link>
        )}
      </PCnav>
      <main className="main post">
        <div className="container">
          <div className="titleBody">
            <h1>{data.microcmsBlog.title}</h1>
            <nav className="tag">
              <ul>
                {data.microcmsBlog.tag.map((tag) => (
                  <li className={tag.tagSlug} key={tag.id}>
                    <a href="#">{tag.tag}</a>
                  </li>
                ))}
              </ul>
            </nav>
            <p className="PublishDate">
              Published on
              <time dateTime={data.microcmsBlog.publishDate}>
                {data.microcmsBlog.publishDateJP}
              </time>
            </p>
            <figure className="eyecatch mediabox">
              <GatsbyImage
                image={getGatsbyImageData({
                  src: data.microcmsBlog.eyecatch.url,
                  imgixParams: { crop: "faces" },
                  layout: "constrained",
                  width: 768,
                  aspectRatio: 16 / 9,
                  sourceWidth: data.microcmsBlog.eyecatch.width,
                  sourceHeight: data.microcmsBlog.eyecatch.height,
                })}
              />
            </figure>
          </div>
          <div className="postBody">{renderAst(htmlAst)}</div>
          <Share
            shareUrl={location.pathname}
            shareMessage={data.microcmsBlog.title}
            shardImage={data.microcmsBlog.eyecatch.url}
          />
          <SPnav className="pagination">
            <ul>
              {pageContext.next && (
                <li className="prev">
                  <Link to={`/blog/post/${pageContext.next.slug}/`} rel="prev">
                    <span>{pageContext.next.title}</span>
                  </Link>
                </li>
              )}
              {pageContext.previous && (
                <li className="next">
                  <Link
                    to={`/blog/post/${pageContext.previous.slug}/`}
                    rel="next"
                  >
                    <span>{pageContext.previous.title}</span>
                  </Link>
                </li>
              )}
            </ul>
          </SPnav>
        </div>
      </main>
    </Layout>
  );
};
export default BlogPost;

export const query = graphql`
  query ($id: String!) {
    microcmsBlog(id: { eq: $id }) {
      title
      publishDateJP: publishDate(formatString: "YYYY-MM-DD")
      publishDate
      tag {
        id
        tag
        tagSlug
      }
      eyecatch {
        url
        height
        width
      }
      content
    }
  }
`;
