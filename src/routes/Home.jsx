import React, { Suspense } from 'react'
import CoinSearch from '../Components/CoinSearch'
import Trending from '../Components/Trending'
import { Loader } from '../Components/Loader'

const Home = ({ coins }) => {
  return (
    <div className='container mx-auto px-4 py-8'>
      <Suspense fallback={Loader}>
        <Trending />
      </Suspense>
      <CoinSearch coins={coins} />
    </div>
  )
}

export default Home