import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { Loader } from './Loader';

const Trending = ({ searchText }) => {
    const [trending, setTrending] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const url = "https://api.coingecko.com/api/v3/search/trending"

    useEffect(() => {
        axios.get(url).then((response) => {
            setTrending(response.data.coins);
            setIsLoading(false);
            console.log(response.data.coins)
        }).catch(() => setIsLoading(false))
    }, [])


    return (
        <div className='container rounded my-12 text-primary' >
            <h1 className='text-2xl font-bold py-4'>Trending Coins</h1>

            {isLoading ? (<Loader />) : (
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8' >
                    {
                        trending && trending.map((coin, id) => {
                            const change = coin.item.data?.price_change_percentage_24h?.usd || 0;

                            return (
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 17 }}

                                    key={id} className='rounded-div flex justify-between p-4 rounded-lg overflow-hidden'>
                                    <div className='flex w-full items-center justify-between'>
                                        <div className='flex'>
                                            <img className='mr-4 rounded-full' src={coin.item.small} alt="/" srcset="" />
                                            <div>
                                                <h3 className='tracking-tight font-semibold'>{coin.item.name}</h3>
                                                <h5>{coin.item.symbol}</h5>
                                            </div>
                                        </div>
                                        <div className='flex flex-col'>
                                            <div className='flex items-center'>
                                                {/* <img className='w-4 mr-2' src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1668148663" alt="" srcset="" /> */}
                                                <p className='font-semibold' >${coin.item.data?.price.toFixed(2)}</p>
                                            </div>
                                            <motion.p
                                                className={`text-xs md:text-sm mt-2 ${change >= 0 ? 'text-green-500 dark:text-green-400' : 'text-red-500 dark:text-red-400'}`}
                                                initial={{ opacity: 0, x: change >= 0 ? -20 : 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.5 }}
                                            >
                                                {change >= 0 ? '▲' : '▼'} {Math.abs(parseFloat(change).toFixed(1))}%
                                            </motion.p>
                                        </div>

                                    </div>
                                </motion.div>
                            )
                        })
                    }
                </div>
            )}

        </div>
    )
}

export default Trending