import { useState, useEffect, useContext } from "react";
import { isProd, apiUrlProd, apiUrlLocal } from "env";
import BlogItem from "@components/BlogItem";
import { BlogPost } from "@src/data/models/BlogPost";
import LocaleContext from "@context/languageContext";
import { LocaleContextType } from "@schema/LocaleContextType";
import styles from "@styles/BlogList.module.css";

const blogPostsPath = "/blog-posts?populate=*";

const fetchBlogPosts = async (currentLocale: string) => {
  var requestOptions: RequestInit = {
    method: "GET",
    redirect: "follow",
  };

  var tempBaseUrl = "";
  if (isProd) {
    tempBaseUrl = apiUrlProd;
  } else {
    tempBaseUrl = apiUrlLocal;
  }

  tempBaseUrl += blogPostsPath;
  tempBaseUrl += `&locale=${currentLocale}`;

  const res = await fetch(tempBaseUrl, requestOptions);
  const data = await res.json();
  return data.data;
};

const BlogList = () => {
  const [blogPosts, setBlogPosts] = useState<[BlogPost]>();

  const { currentLocale } = useContext(LocaleContext) as LocaleContextType;

  useEffect(() => {
    const getBlogPosts = async () => {
      const blogPostsList = await fetchBlogPosts(currentLocale);
      setBlogPosts(blogPostsList);
    };

    getBlogPosts();
  }, [currentLocale]);

  const blogPostItems = blogPosts?.map((blogPostItem: BlogPost) => (
    <BlogItem blogPost={blogPostItem} />
  ));

  return (
    <section className={styles.container.concat(" ").concat(styles.blog_posts)}>
      <ul className={styles.blog_item_list}>{blogPostItems}</ul>
    </section>
  );
};

export default BlogList;
