import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { AwesomeButtonSocial } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import "emoji-mart/css/emoji-mart.css";
import { Emoji } from "emoji-mart";

const Share = (props) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          siteUrl
        }
      }
    }
  `);
  const montserrat = "'Montserrat',sans-serif";
  const url = props.shareUrl
    ? `${data.site.siteMetadata.siteUrl}${props.shareUrl}`
    : data.site.siteMetadata.siteUrl;
  const message = props.shareMessage;
  const image = props.shardImage;
  return (
    <div className="share" style={{ fontFamily: montserrat }}>
      <p
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: ".5em",
        }}
      >
        Have you enjoyed the read? Please show your support by sharing it with
        the world
        <Emoji emoji=":relaxed:" size={16} />
      </p>
      <ul className="shareButton">
        <li>
          <AwesomeButtonSocial
            type="twitter"
            size={true}
            url={url}
            message={message}
            image={image}
            target="_blank"
          >
            Twitter
          </AwesomeButtonSocial>
        </li>
        <li>
          <AwesomeButtonSocial
            type="facebook"
            size={true}
            url={url}
            message={message}
            image={image}
            target="_blank"
          >
            Facebook
          </AwesomeButtonSocial>
        </li>
      </ul>
    </div>
  );
};
export default Share;
