import React, { useState } from "react";
import CoinItems from "./CoinItems";
import SkeletonLoader from "./TableSkeletonLoader";
import { motion } from "framer-motion";


const CoinSearch = ({ coins, isLoading, searchText }) => {

 

  return (
    <div className="my-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mb-8"
      >
        <h2 className="text-2xl font-semibold mb-4">Top Cryptocurrencies</h2>
        <table className="w-full border-collapse text-center">
          <thead>
            <tr className="border-b">
              <th></th>
              <th className="px-4">#</th>
              <th className="text-left">Coin</th>
              <th></th>
              <th>Price</th>
              <th className="hidden md:table-cell">24h</th>
              <th className="hidden md:table-cell">24h Volume</th>
              <th className="hidden sm:table-cell">Mkt</th>
              <th className="hidden md:table-cell" >Last 7 Days</th>
            </tr>
          </thead>
          <tbody>
            {isLoading && (
              <SkeletonLoader />
            )}
            {coins && coins.length > 0 && coins.filter((value) => {
              if (searchText === '') {
                return value
              } else if (value.name.toLowerCase().includes(searchText.toLowerCase())) {
                return value
              }
            })
              .map((coin) => (
                <CoinItems key={coin.id} coin={coin} />
              ))}
          </tbody>
        </table>
      </motion.div>

    </div>
  );
};

export default CoinSearch;
