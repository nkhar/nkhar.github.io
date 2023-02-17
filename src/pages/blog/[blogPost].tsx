import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useEffect, useContext } from "react";
import {
  isProd,
  apiUrlProd,
  apiUrlLocal,
  photoUrlProd,
  photoUrlLocal,
} from "env";
import LocaleContext from "@context/languageContext";
import { LocaleContextType } from "@schema/LocaleContextType";
import Nav from "@src/components/Nav";
import FooterGeneric from "@components/FooterGeneric";
import SocialMediaShare from "@components/SocialMediaShare";
import WhiteSpace80 from "@src/components/WhiteSpace80";
import { BlogPost } from "@src/data/models/BlogPost";
import styles from "@styles/BlogPostPage.module.css";

const fetchBlogPost = async (id: string, currentLocale: string) => {
  var requestOptions: RequestInit = {
    method: "GET",
    redirect: "follow",
  };

  var tempBaseUrl = "";
  if (isProd) {
    tempBaseUrl = `${apiUrlProd}/blog-posts/${id}?populate=*`;
  } else {
    tempBaseUrl = `${apiUrlLocal}/blog-posts/${id}?populate=*`;
  }

  const res = await fetch(tempBaseUrl, requestOptions);
  const data = await res.json();
  return data.data;
};

const BlogPostPage = () => {
  const [blogPost, setBlogPost] = useState<BlogPost>();
  const router = useRouter();
  // const { name, doctorId } = router.query;

  const { currentLocale } = useContext(LocaleContext) as LocaleContextType;

  useEffect(() => {
    if (window.FB) {
      window.FB.XFBML.parse();
    }
  }, []);

  useEffect(() => {
    if (router.isReady) {
      const getBlogPost = async () => {
        const { blogPostTitle, blogPostId } = router.query;
        if (!blogPostId) return null;
        const blogPost = await fetchBlogPost(
          blogPostId as string,
          currentLocale
        );
        setBlogPost(blogPost);
      };

      getBlogPost();
    }
  }, [router.isReady]);

  var tempPhotoUrl = "";
  if (isProd) {
    tempPhotoUrl = photoUrlProd;
  } else {
    tempPhotoUrl = photoUrlLocal;
  }

  let blogPostTitle = blogPost?.attributes.blogPostTitle;
  let blogPostIconUrl =
    tempPhotoUrl + blogPost?.attributes.blogPostIcon.data.attributes.url;
  let blogPostBody = blogPost?.attributes.blogPostBody;
  let facebookSdkId = blogPost?.attributes.facebookSdkId;

  useEffect(() => {}, [currentLocale]);

  return (
    <>
      <Head>
        <title>{blogPostTitle}</title>
        <meta name="description" content={blogPost?.attributes.seoKeyWords} />
        <link rel="icon" href="/gfai_logo.ico" />
      </Head>
      <Nav isBlackBackground={true} />

      <main>
        <div className={styles.main_container}>
          <SocialMediaShare />

          <div className={styles.blogpost_title}>
            <h1>{blogPostTitle}</h1>
            <img src={blogPostIconUrl} />
          </div>

          <div className={styles.blogpost_body}>
            <p
              dangerouslySetInnerHTML={{
                __html: blogPostBody,
              }}
            ></p>
          </div>
          <div
            className="fb-comments"
            data-href="https://developers.facebook.com/docs/plugins/comments#configurator"
            data-width=""
            data-numposts="10"
          ></div>
        </div>
      </main>
      <WhiteSpace80 />
      <FooterGeneric />
    </>
  );
};

export default BlogPostPage;
