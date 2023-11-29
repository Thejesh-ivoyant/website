// IBlogMedia.ts
interface IBlogMedia {
    id: number;
    title: string;
    date: string;
    maxReadTime: string;
    description1: string;
    description2: string | null;
    description3: string | null;
    slug: string;
    bannerImage: {
      name: string;
      url: string | undefined;
    };
    descriptionImage1: {
      name: string;
      url: string | undefined;
    };
    descriptionImage2: {
      name: string;
      url: string | undefined;
    };
    descriptionImage3: {
      name: string;
      url: string | undefined;
    };
    author: {
      name: string;
      profileSummary: string;
    };
  }
  
  export default IBlogMedia;
  