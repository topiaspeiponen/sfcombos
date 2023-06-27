import { StreetFighterCharacter } from '@/utils/types';
import Image from 'next/image';
import React from 'react';

type CardProps = {
  slug: string,
  title: string,
  thumbnail: string,
  streetFighterCharacter: StreetFighterCharacter,
  comments: number,
  likes: number,
}

export default function Card(props: CardProps) {
  const { slug, title, thumbnail, streetFighterCharacter, comments, likes } = props;

  return (
    <div className=''>
      <Image
        src={thumbnail}
        alt={title}
        width={300}
        height={225}
      />
    </div>
  )
}