import { MetaFunction } from '@remix-run/react';
import {
  generateMetaDescription,
  generateMetaTitle,
} from '~/utils/generateMetaHandlers';
import HomeAboutSection from './HomeAboutSection';
import HomeBlogSection from './HomeBlogSection';
import HomeCollectionsSection from './HomeCollectionsSection';
import HomeFeaturedSection from './HomeFeaturedSection';
import HomeFeaturesSection from './HomeFeaturesSection';
import HomeHeroSection from './HomeHeroSection';

export const meta: MetaFunction = () => {
  return [
    { title: generateMetaTitle() },
    {
      name: 'description',
      content: generateMetaDescription(),
    },
  ];
};

export default function Home() {
  return (
    <main className="flex w-full flex-1 flex-col pb-12">
      <HomeHeroSection />
      <HomeFeaturesSection />
      <HomeCollectionsSection />
      <HomeFeaturedSection collectionSlug="men" />
      <HomeFeaturedSection collectionSlug="women" />
      <HomeAboutSection />
      <HomeFeaturedSection collectionSlug="kids" />
      <HomeFeaturedSection collectionSlug="toddler" />
      <HomeBlogSection />
    </main>
  );
}
