import Link from "next/link";
import { isProd, photoUrlProd, photoUrlLocal } from "env";
import { BlogPost } from "@src/data/models/BlogPost";
import styles from "@styles/BlogItem.module.css";

const BlogItem = (props: any) => {
  const blogPost: BlogPost = props.blogPost;
  var tempPhotoUrl = "";
  if (isProd) {
    tempPhotoUrl = photoUrlProd;
  } else {
    tempPhotoUrl = photoUrlLocal;
  }
  return (
    <li className={styles.blog_item} key={blogPost.id}>
      <div className={styles.blog_item_info}>
        <img
          src={
            tempPhotoUrl + blogPost.attributes.blogPostIcon.data.attributes.url
          }
        />

        <div className={styles.blog_item_texts}>
          <h3 className={styles.blog_item_title}>
            {blogPost.attributes.blogPostTitle}
          </h3>
          <h4
            dangerouslySetInnerHTML={{
              __html: blogPost?.attributes.blogPostShortSummary,
            }}
          ></h4>
        </div>
      </div>

      <Link
        href={`/blog/${blogPost.attributes.blogPostTitle}?blogPostId=${blogPost.id}`}
      >
        <p className={styles.blog_item_read_more}>Read More</p>
      </Link>
    </li>
  );
};

export default BlogItem;
