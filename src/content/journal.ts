import type { JournalEntry, JournalIndexContent } from '@/types/content';

export const journalEntries: JournalEntry[] = [
  {
    slug: 'the-quiet-pantry',
    title: 'The Quiet Pantry',
    category: 'RITUAL',
    date: 'April 18, 2026',
    readTime: '6 min read',
    excerpt:
      'A meditation on what to keep, what to remove, and the architectural restraint that makes nourishment effortless.',
    image:
      'https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=1400&h=900&fit=crop&q=80',
    body: [
      'A well-stocked pantry is rarely a full one. The shelves I most admire — in farmhouse kitchens in Provence, in apartments along the Rue Jacob — share a quality of editorial restraint. Few jars. Each one chosen.',
      'There is a tendency, when one decides to eat well, to acquire. New oils. Specialty flours. Adaptogens in tinted glass. Within a season, the pantry becomes a museum of intention rather than a tool for living.',
      'The essentialist pantry is the opposite. It is provisioned with the assumption that you will, in fact, cook from it — daily, simply, and with affection. Olive oil that you will finish before it oxidizes. A single salt, used everywhere. Two grains, perhaps three. A small alphabet of dried legumes.',
      'Empty space is the most luxurious ingredient.',
    ],
  },
  {
    slug: 'on-seasonality',
    title: 'On Seasonality, Quietly',
    category: 'PROVENANCE',
    date: 'April 4, 2026',
    readTime: '8 min read',
    excerpt:
      'Why eating with the seasons is not a moral position, but a metabolic one — and how to begin the practice without performance.',
    image:
      'https://images.unsplash.com/photo-1542838132-92c53300491e?w=1400&h=900&fit=crop&q=80',
    body: [
      'Seasonal eating has been over-photographed. The market basket. The crate of heirloom tomatoes. The performance of provenance has become its own genre.',
      'But beneath the aesthetic is a quiet metabolic truth: foods grown for the climate of the moment are nutrient-dense in a way that out-of-season counterparts cannot replicate. A March tomato — flown three thousand miles — is, biochemically, a different food than a July one.',
      'My recommendation to clients is rarely to "eat seasonally." It is to begin with one or two anchors. A weekly walk to a single market. A standing order with one farmer or fishmonger. Let the practice be small and unphotogenic. Let it last.',
    ],
  },
  {
    slug: 'the-plate-as-architecture',
    title: 'The Plate as Architecture',
    category: 'METHOD',
    date: 'March 21, 2026',
    readTime: '5 min read',
    excerpt:
      'A simple structural framework for composing meals that nourish without negotiation, drawn from clinical practice.',
    image:
      'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1400&h=900&fit=crop&q=80',
    body: [
      'When clients come to the Meal Architecture engagement, they arrive with what I call decision fatigue around food. The question of what to eat, three or four times a day, has become a daily negotiation.',
      'The work is to remove the negotiation. We replace it with structure: a small set of architectural rules that, once internalized, allow each meal to compose itself.',
      'Protein anchors the plate. Vegetables — preferably two — surround it. A measured starch sits to one side. A fat is added with intention. Acid finishes. The composition repeats with seasonal variation, but the architecture holds.',
      'Discipline, in this domain, is freedom.',
    ],
  },
  {
    slug: 'biomarkers-and-modesty',
    title: 'Biomarkers and Modesty',
    category: 'CLINICAL',
    date: 'March 7, 2026',
    readTime: '7 min read',
    excerpt:
      'On the responsible use of advanced testing — and the cultural temptation to treat data as identity.',
    image:
      'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1400&h=900&fit=crop&q=80',
    body: [
      'Continuous glucose monitors. Comprehensive metabolic panels. Genetic risk scoring. We live in an extraordinary moment for personalized clinical insight.',
      'But the same instruments that can illuminate a path can also become the path itself. I have seen clients arrive overwhelmed by their own data — twelve apps, thousands of numbers, no narrative.',
      'My counsel is modest: data is a question, not an answer. We use it to ask better questions about your physiology, then we set the device down and live the months that follow with attention rather than measurement.',
    ],
  },
  {
    slug: 'fasting-without-doctrine',
    title: 'Fasting Without Doctrine',
    category: 'PRACTICE',
    date: 'February 21, 2026',
    readTime: '6 min read',
    excerpt:
      'A clinician\'s perspective on intermittent practice — useful for many, prescribed for few, and never as identity.',
    image:
      'https://images.unsplash.com/photo-1547592180-85f173990554?w=1400&h=900&fit=crop&q=80',
    body: [
      'Fasting has been the subject of more theological enthusiasm in nutrition than perhaps any topic in the last decade. I find this unhelpful — both for the practice and for the people considering it.',
      'In clinical work, time-restricted eating is a tool. Useful for some metabolic profiles. Counter-indicated for others — particularly women in certain hormonal phases, performance athletes, and anyone with a history of disordered eating.',
      'When I introduce a fasting protocol, it is conservative, time-limited, and accompanied by data. We watch what the practice does to your sleep, your work, your energy. If it is serving you, we keep it. If not, we put it down without ceremony.',
    ],
  },
  {
    slug: 'the-morning-bowl',
    title: 'The Morning Bowl',
    category: 'RITUAL',
    date: 'February 8, 2026',
    readTime: '4 min read',
    excerpt:
      'A short essay on the first meal — and why the most important question is not what is in it, but how it is eaten.',
    image:
      'https://images.unsplash.com/photo-1517673400267-0251440c45dc?w=1400&h=900&fit=crop&q=80',
    body: [
      'I am asked, often, what I eat for breakfast. The answer is unremarkable: most days, a slow-cooked grain with seasonal fruit, seeds, and a measured fat. Black tea. Sometimes a soft-boiled egg if the morning has weight ahead.',
      'But the more useful answer is how. Sitting. Without screens. Twenty minutes, even when twenty minutes feels impossible. The first meal of the day sets the autonomic tone for everything that follows.',
      'You can engineer the contents of the bowl with great care, and still, the engineering will not matter if the bowl is eaten standing, scrolling, hurried. Begin with the rhythm. The contents will follow.',
    ],
  },
];

export const journalContent: JournalIndexContent = {
  eyebrow: 'THE JOURNAL',
  headline: 'Quiet Rituals.',
  headlineItalic: 'Raw Ingredients.',
  subheadline:
    'Weekly insights from clinical practice and the essentialist kitchen — focused on seasonality, provenance, and the ritual of preparation.',
  entries: journalEntries,
};
