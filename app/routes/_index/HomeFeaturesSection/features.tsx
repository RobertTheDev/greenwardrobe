import { LuFactory, LuShapes, LuTag, LuTrees } from 'react-icons/lu';

const features = [
  {
    id: '1',
    title: "'Streamlined, Quality Range ",
    description:
      'We focus on high quality, long- lasting wardrobe essentials. Our styles are simple but with many colour variations.',
    icon: <LuShapes size={32} />,
  },
  {
    id: '2',
    title: 'Eco-friendly Materials',
    description:
      'Made from materials such as certified Organic Cotton, Bamboo and Regenerated Cotton.',
    icon: <LuTrees size={32} />,
  },
  {
    id: '3',
    title: 'Responsible Production',
    description:
      'Production facilities participate in ethical manufacture programs such as Fair Wear and AMFORI.',
    icon: <LuFactory size={32} />,
  },
  {
    id: '4',
    title: 'Affordable For Everyone',
    description:
      'Priced at a level everyone can afford to maximise impact and take advantage of economies of scale.',
    icon: <LuTag size={32} />,
  },
];

export default features;
