interface ICaseStudy {
    id: number;
    titpe: string;
    date: string;
    maxReadTime: string;
    description1: string;
    description2: string | null;
    description3: string | null;
    slug: string;
    bannerImage: {
      data: {
        attributes: {
          name: string;
          url: string;
        };
      };
    };
    descriptionImage1: {
      data: {
        attributes: {
          name: string;
          url: string;
        };
      };
    };
    descriptionImage2: {
      data: {
        attributes: {
          name: string;
          url: string;
        };
      };
    };
    descriptionImage3: {
      data: {
        attributes: {
          name: string;
          url: string;
        };
      };
    };
    author: {
      data: {
        attributes: {
          name: string;
          profileSummary: string;
        };
      };
    };
  }
  export default ICaseStudy;
