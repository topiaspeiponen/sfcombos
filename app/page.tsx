import { PageLayout } from '../app/layouts/PageLayout'
import { Metadata } from 'next';
import Card from './components/Card';

export const metadata : Metadata = {
  title: 'Home',
}

const dummyCardData = [
  {
    slug: 'hadouken',
    title: 'Ryu',
    thumbnail: '/images/placeholder_image_4to3AR.png',
    streetFighterCharacter: {
      id: 1,
      name: 'Ryu',
      image: '/images/placeholder_image_4to3AR.png',
    },
    comments: 5,
    likes: 2,
  },
  {
    slug: 'shoryuken',
    title: 'Ken',
    thumbnail: '/images/placeholder_image_4to3AR.png',
    streetFighterCharacter: {
      id: 2,
      name: 'Ken',
      image: '/images/placeholder_image_4to3AR.png',
    },
    comments: 4,
    likes: 3,
  },
  {
    slug: 'tatsumaki-senpukyaku',
    title: 'Ken',
    thumbnail: '/images/placeholder_image_4to3AR.png',
    streetFighterCharacter: {
      id: 3,
      name: 'Ken',
      image: '/images/placeholder_image_4to3AR.png',
    },
    comments: 0,
    likes: 1111,
  }
];

export default function Page() {
  return (
    <PageLayout>
      <div>This is an empty frontpage using the PageLayout layout. Testing!</div>
      <div className='grid gap-4 grid-cols-3 grid-rows-1'>
        {dummyCardData.map((cardData) => {
          return (
            <Card
              key={`card-${cardData.slug}`}
              slug={cardData.slug}
              title={cardData.title}
              thumbnail={cardData.thumbnail}
              streetFighterCharacter={cardData.streetFighterCharacter}
              comments={cardData.comments}
              likes={cardData.likes}/>
          )
        })}
      </div>
    </PageLayout>
  )
}
