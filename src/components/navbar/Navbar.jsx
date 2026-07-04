import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <nav className='bg-amber-500'>
        <ul className='flex justify-center items-center gap-6 p-4'>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/products">Products</Link></li>
            <li><Link href="/categories">Categories</Link></li>
            <li><Link href="/about">About</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar