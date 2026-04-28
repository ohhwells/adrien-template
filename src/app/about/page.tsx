import { aboutContent } from '@/content/about';
import { AboutHero } from '@/components/sections/AboutHero';
import { AboutStory } from '@/components/sections/AboutStory';
import { Credentials } from '@/components/sections/Credentials';
import { ValuesGrid } from '@/components/sections/ValuesGrid';
import { CallToAction } from '@/components/sections/CallToAction';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'About Adrien',
  description:
    'Adrien Beaumont — clinical nutritionist, working a small private practice in Paris and Geneva. Trained in functional medicine and the unhurried kitchen.',
  path: '/about',
});

export default function AboutPage() {
  return (
    <>
      <AboutHero {...aboutContent.hero} />
      <AboutStory
        image={aboutContent.story.image}
        headline={aboutContent.story.headline}
        body={aboutContent.story.body}
      />
      <Credentials {...aboutContent.credentials} />
      <ValuesGrid {...aboutContent.values} />
      <CallToAction {...aboutContent.cta} />
    </>
  );
}
