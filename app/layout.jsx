import Feed from './components/Feed'
import Sidebar from './components/Sidebar'
import Widget from './components/Widget'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html className='max-w-7xl mx-auto justify-center' lang="en">
      <body className={`${inter.className} min-h-screen grid grid-flow-row-dense grid-cols-4 bg-white dark:bg-black`}>

        {/* Sidebar */} 
          <Sidebar/>
        {/* Feed */}
          <Feed/>
        {/* Widget */}
          <Widget/>
      </body>
    </html>
  )
}
