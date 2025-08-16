import TopNav from '@/components/layout/TopNav'
import React from 'react'

const SettingsLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <main>
        <div className="text">
            <TopNav/>
            {children}
        </div>
    </main>
  )
}

export default SettingsLayout