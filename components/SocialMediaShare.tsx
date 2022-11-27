import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faPinterest,
  faReddit,
} from "@fortawesome/free-brands-svg-icons";

import styles from "../styles/SocialMediaShare.module.css";

const SocialMediaShare = () => {
  const [state, setState] = useState({
    fbHref: "",
    twitterHref: "",
    linkedinHref: "",
    pinterestHref: "",
    redditHref: "",
  });

  useEffect(() => {
    const link = encodeURI(window.location.href);
    const msg = encodeURIComponent("Hey, Check your health");
    const unencodedTitle = document.title;
    const title: string = encodeURIComponent(unencodedTitle);

    const fb = `https://www.facebook.com/share.php?u=${link}`;
    const twitter = `https://twitter.com/share?url=${link}&text=${msg}`;
    const linkedIn = `https://www.linkedin.com/shareArticle?url=${link}&title=${title}`;
    const pinterest = `https://pinterest.com/pin/create/bookmarklet/?url=${link}&description=${title}`;
    const reddit = `http://www.reddit.com/submit?url=${link}&title=${title}`;
    setState({
      fbHref: fb,
      twitterHref: twitter,
      linkedinHref: linkedIn,
      pinterestHref: pinterest,
      redditHref: reddit,
    });
  }, []);

  return (
    <div className={styles.social_media_share}>
      <a className={styles.facebook} href={state.fbHref} target="blank">
        {/* <i className={styles.fab.concat(" ").concat(styles.fa_facebook)}></i> */}
        {/* <FontAwesomeIcon icon={["fab", "facebook"]} /> */}
        <FontAwesomeIcon icon={faFacebook} />
      </a>

      <a className={styles.twitter} href={state.twitterHref} target="blank">
        {/* <i className={styles.fab.concat(" ").concat(styles.fa_twitter)}></i> */}
        <FontAwesomeIcon icon={faTwitter} />
      </a>

      <a className={styles.linkedin} href={state.linkedinHref} target="blank">
        {/* <i className={styles.fab.concat(" ").concat(styles.fa_linkedin)}></i> */}
        <FontAwesomeIcon icon={faLinkedin} />
      </a>

      <a className={styles.pinterest} href={state.pinterestHref} target="blank">
        {/* <i className={styles.fab.concat(" ").concat(styles.fa_pinterest)}></i> */}
        <FontAwesomeIcon icon={faPinterest} />
      </a>

      <a className={styles.reddit} href={state.redditHref} target="blank">
        {/* <i className={styles.fab.concat(" ").concat(styles.fa_reddit)}></i> */}
        <FontAwesomeIcon icon={faReddit} />
      </a>
    </div>
  );
};

export default SocialMediaShare;

/* Social media share urls

Whastapp
https://api.whatsapp.com/send?text=[post-title] [post-url]

Facebook
https://www.facebook.com/sharer.php?u=[post-url]

Twitter
https://twitter.com/share?url=[post-url]&text=[post-title]&via=[via]&hashtags=[hashtags]

Pinterest
https://pinterest.com/pin/create/bookmarklet/?media=[post-img]&url=[post-url]&is_video=[is_video]&description=[post-title]

LinkedIn
https://www.linkedin.com/shareArticle?url=[post-url]&title=[post-title]

Reddit
https://reddit.com/submit?url=[post-url]&title=[post-title]


*/
/*
const link = encodeURI(window.location.href);
const msg = encodeURIComponent("Hey, Check your health");
const title = encodeURIComponent(document.querySelector("title").textContent);

const fb = document.querySelector(".facebook");
fb.href = `https://www.facebook.com/share.php?u=${link}`;

const twitter = document.querySelector(".twitter");
twitter.href = `https://twitter.com/share?url=${link}&text=${msg}`;

const linkedIn = document.querySelector(".linkedin");
linkedIn.href = `https://www.linkedin.com/shareArticle?url=${link}&title=${title}`;

const pinterest = document.querySelector(".pinterest");
pinterest.href = `https://pinterest.com/pin/create/bookmarklet/?url=${link}&description=${title}`;

const reddit = document.querySelector(".reddit");
reddit.href = `http://www.reddit.com/submit?url=${link}&title=${title}`;
*/
