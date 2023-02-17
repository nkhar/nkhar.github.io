export type BlogPost = {
  id: string;
  attributes: BlogPageAttrs;
};

export type BlogPageAttrs = {
  blogPostTitle: string;
  blogPostShortSummary: string;
  blogPostBody: string;
  facebookSdkId: string;
  blogPostPublishTime: string;
  seoKeyWords: string;
  locale: string;
  blogPostIcon: ImageType;
  localizations: {
    data: [{ id: string; attributes: LocalizationAttrs }];
  };
};

export type ImageType = {
  data: {
    id: string;
    attributes: ImageTypeAttrs;
  };
};

export type ImageTypeAttrs = {
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
};

export type LocalizationAttrs = {
  blogPostTitle: string;
  blogPostShortSummary: string;
  blogPostBody: string;
  facebookSdkId: string;
  blogPostPublishTime: string;
  seoKeyWords: string;
  locale: string;
};
