import * as React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import StaticPagination from "../components/staticPagination";

// markup
const IndexPage = () => {
  return (
    <Layout>
      <SEO />
      <StaticPagination
        pageNextLink={`/portfolio/`}
        pageNextTitle="portfolio"
        pageNoPrev="hidden"
      />
      <main className="main about">
        <div className="container">
          <div className="block01">
            <h1>hello,my name is mikomura</h1>
            <p>
              自動車整備士と自動車検査員として10年ほど働き、超アナログ人間から独学でWebサイト制作のスキルを取得中。技術/スキルで楽しみながら役立ちたいと考え、ここで自分が学習したことをブログにしたり作品を置いたりしています。
            </p>
          </div>
          <a
            href="#"
            className="more"
            onclick="document.querySelector('.about').classList.toggle('more-open')"
          >
            More <span className="material-icons"> expand_more </span>
          </a>
          <div className="moreContents">
            <div className="block02">
              <h2>Award-Winning</h2>
              <ul>
                <li>
                  2021/07 大阪府共同募金記念バッチ図案コンテスト 希望くん受賞
                </li>
              </ul>
            </div>
            <div className="block03">
              <h2>My Skills</h2>
              <ul>
                <li>HTML5 ★★★★★</li>
                <li>CSS3 ★★★★★</li>
                <li>JavaScript ★★★★★</li>
                <li>Gatsby ★★★★★</li>
                <li>AdobeXD ★★★★★</li>
                <li>React ★★★★★</li>
                <li>WordPress ★★★☆☆</li>
                <li>Illustrator ★★★☆☆</li>
                <li>Photoshop ★★★☆☆</li>
                <li>Sass ★★★☆☆</li>
                <li>jQuery ★★★☆☆</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};
export default IndexPage;
