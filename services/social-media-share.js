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
