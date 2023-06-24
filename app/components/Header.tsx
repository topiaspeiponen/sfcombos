import Link from 'next/link';
import React from 'react';

export default function Header() {
  return (
    <header className="h-auto p-4 bg-primary text-on-primary">
      <div className="lg:container m-auto pr-4 pl-4 flex">
        <h1 className="text-lg">
         SFCombos 
        </h1>
        <div className="flex gap-4 ml-auto">
          <Link href="/">Home</Link>
          <Link href="/">Combos by character</Link>
          <Link href="/">Login</Link>
        </div>
      </div>
    </header>
  )
}