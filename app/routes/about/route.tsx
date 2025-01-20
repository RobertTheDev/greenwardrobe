import { MetaFunction } from '@remix-run/react';
import {
  generateMetaDescription,
  generateMetaTitle,
} from '~/utils/generateMetaHandlers';
import GrowthResultsSection from './GrowthResultsSection';
import HeaderSection from './HeaderSection';
import MainContentSection from './MainContentSection';
import TeamSection from './TeamSection';
import TestimonialSection from './TestimonialsSection';

export const meta: MetaFunction = () => {
  return [
    { title: generateMetaTitle('About') },
    {
      name: 'description',
      content: generateMetaDescription(),
    },
  ];
};

export default function AboutPage() {
  return (
    <main>
      <HeaderSection />
      <MainContentSection />
      <GrowthResultsSection />
      <TestimonialSection />
      <TeamSection />
    </main>
  );
}
