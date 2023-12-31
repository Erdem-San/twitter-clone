// Layout.jsx

import Feed from './components/Feed';
import Sidebar from './components/Sidebar';
import Widget from './components/Widget';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default async function RootLayout({children}) {
  //Bu problemi ilerde çöz çünkü normalde sirversideprops ile olmalıydı
  const newsResults = await fetch("https://saurav.tech/NewsAPI/top-headlines/category/general/us.json").then((res) => res.json());
  const randomUserResults = await fetch("https://randomuser.me/api/?results=30&inc=name,login,picture").then((res) => res.json());
  

  return (
    <html className="max-w-7xl mx-auto justify-center" lang="en">
      <body className={`${inter.className} min-h-screen flex xl:grid xl:grid-flow-row-dense xl:grid-cols-4 bg-white dark:bg-black`}>
        {/* Sidebar */}
        <Sidebar />
        {/* Feed */}
        <Feed />
        {/* Widget */}
        <Widget newsResults={newsResults?.articles} randomUserResults={randomUserResults?.results} />
      </body>
    </html>
  );
}


