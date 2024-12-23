import React, { Suspense, useState } from 'react'
import CoinSearch from '../Components/CoinSearch'
import Trending from '../Components/Trending'
import { Loader } from '../Components/Loader'
import SkeletonLoader from '../Components/TableSkeletonLoader'


const Home = ({ coins, }) => {
  const [searchText, setSearchText] = useState("");
  const handleSearchChange = (e) => setSearchText(e.target.value);

  return (
    <div className='container mx-auto px-4 py-8'>
      <div className="flex flex-col md:flex-row justify-between items-center pt-4 pb-6 text-center md:text-right">
        <h1 className="text-2xl font-bold my-2">Search Crypto</h1>
        <form className="w-full md:w-[32rem]">
          <input className="w-full bg-primary border border-input px-4 py-2 rounded-xl shadow-xl" type="text" value={searchText} placeholder="search a coin" onChange={handleSearchChange} />
        </form>
      </div>
      <Suspense fallback={Loader}>
        <Trending  searchText={searchText}/>
      </Suspense>
      <Suspense fallback={SkeletonLoader}>
        <CoinSearch coins={coins} isLoading={!coins.length} searchText={searchText} />
      </Suspense>
    </div>
  )
}

export default Home