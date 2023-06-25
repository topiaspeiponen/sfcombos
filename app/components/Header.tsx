import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Header() {
  return (
    <header className="h-auto p-4 bg-primary text-on-primary">
      <div className="lg:container m-auto pr-4 pl-4 flex">
        <h1 className="text-lg">
         SFCombos 
        </h1>
        <div className="flex gap-8 ml-auto items-center">
          <Link href="/">Home</Link>
          <Link href="/">Combos by character</Link>
          <div className="flex gap-2 items-center">
            <Image
              src="/icons/login_white_48x48.png"
              width={20}
              height={20}
              style={{objectFit: "contain"}}
              alt="Login" />
            <Link href="/">Login</Link>
          </div>
        </div>
      </div>
    </header>
  )
}