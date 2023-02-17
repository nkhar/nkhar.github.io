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

const fetchBlogPost = async (id: string) => {
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

const origin =
  typeof window !== "undefined" && window.location.origin
    ? window.location.origin
    : "";

type BlogPostLocaleType = {
  seoKeyWords: string;
  blogPostTitle: string;
  blogPostBody: string;
};

const getSelectedLocale = (currentLocale: string, blogPost: BlogPost) => {
  const localeArray = blogPost?.attributes.localizations.data;
  const selectedLocale = localeArray?.find(
    (locale) => locale.attributes.locale == currentLocale
  );
  return selectedLocale;
};

const parseWindow = () => {
  // setTimeout(() => {
  if (window.FB) {
    window.FB.XFBML.parse();
  }
  // }, 5);
};

const BlogPostPage = () => {
  const [blogPost, setBlogPost] = useState<BlogPost>();
  const [blogPostLocale, setBlogPostLocale] = useState<BlogPostLocaleType>();

  const router = useRouter();
  // const { name, doctorId } = router.query;

  const { currentLocale } = useContext(LocaleContext) as LocaleContextType;

  // useEffect(() => {
  //   parseWindow();
  // }, []);

  useEffect(() => {
    if (router.isReady) {
      const getBlogPost = async () => {
        const { blogPostTitle, blogPostId } = router.query;
        if (!blogPostId) return null;
        const blogPost = await fetchBlogPost(blogPostId as string);
        setBlogPost(blogPost);

        const tempLocale = getSelectedLocale(currentLocale, blogPost);
        if (tempLocale != null) {
          setSelectedLocale(
            tempLocale.attributes.seoKeyWords,
            tempLocale.attributes.blogPostTitle,
            tempLocale.attributes.blogPostBody
          );
        } else if (currentLocale == "en") {
          setSelectedLocale(
            blogPost.attributes.seoKeyWords,
            blogPost.attributes.blogPostTitle,
            blogPost.attributes.blogPostBody
          );
        }

        parseWindow();
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

  useEffect(() => {
    const selectedLocale = getSelectedLocale(currentLocale, blogPost!!);
    if (selectedLocale != null) {
      console.log("locale has changed");
      setSelectedLocale(
        selectedLocale.attributes.seoKeyWords,
        selectedLocale.attributes.blogPostTitle,
        selectedLocale.attributes.blogPostBody
      );
    } else if (currentLocale == "en") {
      if (blogPost != null) {
        setSelectedLocale(
          blogPost.attributes.seoKeyWords,
          blogPost.attributes.blogPostTitle,
          blogPost.attributes.blogPostBody
        );
      }
    }
  }, [currentLocale]);

  const setSelectedLocale = (
    seoKeyWords: string,
    blogPostTitle: string,
    blogPostBody: string
  ) => {
    const tempLocaleBlogPost = {
      seoKeyWords,
      blogPostTitle,
      blogPostBody,
    } as BlogPostLocaleType;
    setBlogPostLocale(tempLocaleBlogPost);
  };

  return (
    <>
      <Head>
        <title>{blogPostLocale?.blogPostTitle}</title>
        <meta name="description" content={blogPostLocale?.seoKeyWords} />
        <link rel="icon" href="/gfai_logo.ico" />
      </Head>
      <Nav isBlackBackground={true} />

      <main>
        <div className={styles.main_container}>
          <SocialMediaShare />
          <div className={styles.blogpost_title}>
            <h1>{blogPostLocale?.blogPostTitle}</h1>
            <img
              src={
                tempPhotoUrl +
                blogPost?.attributes.blogPostIcon.data.attributes.url
              }
            />
          </div>
          <div className={styles.blogpost_body}>
            <p
              dangerouslySetInnerHTML={{
                __html: blogPostLocale ? blogPostLocale.blogPostBody : "",
              }}
            ></p>
          </div>
          <WhiteSpace80 />

          {blogPost && (
            <div
              className="fb-comments"
              // data-href={origin + "/blog/" + blogPost?.attributes.facebookSdkId}
              // data-href={windowHref}
              data-href={
                "https://georgianfoot.com" +
                "/blog/" +
                blogPost?.attributes.facebookSdkId
              }
              data-width=""
              data-numposts="10"
            ></div>
          )}
        </div>
      </main>
      <FooterGeneric />
    </>
  );
};

export default BlogPostPage;
