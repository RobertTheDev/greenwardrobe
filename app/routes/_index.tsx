import { MetaFunction } from '@remix-run/react';
import HomeAboutSection from '~/components/HomeAboutSection';
import HomeBlogSection from '~/components/HomeBlogSection';
import HomeCollectionsSection from '~/components/HomeCollectionsSection';
import HomeFeaturedSection from '~/components/HomeFeaturedSection';
import HomeFeaturesSection from '~/components/HomeFeaturesSection';
import HomeHeroSection from '~/components/HomeHeroSection';
import {
  generateMetaDescription,
  generateMetaTitle,
} from '~/utils/generateMetaHandlers';

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
    <main className="flex w-full flex-1 flex-col">
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
