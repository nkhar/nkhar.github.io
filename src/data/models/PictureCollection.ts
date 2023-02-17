export type PictureCollection = {
  id: string;
  attributes: {
    sliderImages: {
      data: [
        {
          id: string;
          attributes: PictureAttrs;
        }
      ];
    };
  };
};

export type PictureAttrs = {
  name: string;
  url: string;
};
