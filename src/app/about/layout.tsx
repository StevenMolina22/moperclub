import Navbar from '@/components/layout/Navbar'
import React from 'react'

function layout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  )
}

export default layout