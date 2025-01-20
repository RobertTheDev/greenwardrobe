export interface IBlogPost {
  id: string;
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  image: {
    src: string;
    alt: string;
  };
}
