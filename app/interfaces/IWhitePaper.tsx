// IBlogMedia.ts
interface IWhitePaper {
  id: number;
  title: string;
  date: string;
  maxReadTime: string;
  description1: string;
  slug: string;
  bannerImage: {
    name: string;
    url: string | undefined;
  };
  author: {
    name: string;
    avatar: string;
  };
}

export default IWhitePaper;
