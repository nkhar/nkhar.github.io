import { useContext } from "react";
import { useRouter } from "next/router";
import { isProd, photoUrlProd, photoUrlLocal } from "env";
import LocaleContext from "@context/languageContext";
import { LocaleContextType } from "@schema/LocaleContextType";
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
  const { currentLocale } = useContext(LocaleContext) as LocaleContextType;
  const router = useRouter();

  const handleClick = () => {
    let name;
    let id;
    if (currentLocale == "en") {
      name = blogPost.attributes.blogPostTitle;
      id = blogPost.id;
    } else {
      const localeArray = blogPost?.attributes.localizations.data;
      const englishLocale = localeArray?.find(
        (locale) => locale.attributes.locale == "en"
      );
      id = englishLocale?.id;
      name = englishLocale?.attributes.blogPostTitle;
    }
    const href = `/blog/${name}?blogPostId=${id}`;
    router.push(href);
  };

  return (
    <li
      className={styles.blog_item}
      key={blogPost.id}
      onClick={() => handleClick()}
    >
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

      <p className={styles.blog_item_read_more}>Read More</p>
    </li>
  );
};

export default BlogItem;
