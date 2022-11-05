const link = encodeURI(window.location.href);
const msg = encodeURIComponent("Hey, Check your health");
const title = encodeURIComponent(document.querySelector("title").textContent);

console.log([link, msg, title]);

const fb = document.querySelector(".facebook");
fb.href = `https://www.facebook.com/share.php?u=${link}`;

const twitter = document.querySelector(".twitter");
twitter.href = `http://twitter.com/share?&url=${link}&text=${msg}&hashtags=healthybones}`;

const linkedIn = document.querySelector(".linkedin");
linkedIn.href = `https://www.linkedin.com/sharing/share-offsite/?url=${link}`;

const reddit = document.querySelector(".reddit");
reddit.href = `http://www.reddit.com/submit?url=${link}&title=${title}`;
