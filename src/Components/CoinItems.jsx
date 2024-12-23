import React, { useState } from "react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Sparklines, SparklinesLine } from "react-sparklines";
import { motion } from "framer-motion";

import { UserAuth } from "../context/AuthContext";
import { db } from "../Firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const CoinItems = ({ coin }) => {
  const navigate = useNavigate();
  const [SavedCoin, setSavedCoin] = useState(false)
  const { user } = UserAuth();

  const coinPath = doc(db, "users", `${user?.email}`)

  const handleRowClick = (coinId) => {
    navigate(`/coin/${coinId}`)
  }

  const saveCoin = async () => {
    if (user?.email) {
      setSavedCoin(true)
      await updateDoc(coinPath, {
        watchList: arrayUnion({
          id: coin.id,
          name: coin.name,
          image: coin.image,
          rank: coin.market_cap_rank,
          symbol: coin.symbol
        })
      })
    } else {
      alert("Please Sign In To Save Your Coin To Your WatchList")
    }
  }
  return (
    <motion.tr
      key={coin.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: coin.id * 0.05 }}
      onClick={() => handleRowClick(coin.id)}
      className="cursor-pointer hover:bg-muted border-b h-[80px] overflow-hidden"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <td className="md:sticky md:left-0 md:z-20 md:bg-background" onClick={saveCoin}>
        {SavedCoin ? <AiFillStar /> : <AiOutlineStar />}
      </td>
      <td className="md:sticky md:left-0 md:z-20 md:bg-background">{coin.market_cap_rank}</td>
      <td className="md:sticky md:left-0 md:z-20 md:bg-background">
        <Link to={`/coin/${coin.id}`}>
          <div className="flex items-center">
            <img
              className="w-6 mr-2 rounded-full"
              src={coin.image}
              alt={coin.id}
              srcset=""
            />
            <p className="hidden sm:table-cell">{coin.name}</p>
          </div>
        </Link>
      </td>
      <td>{coin.symbol.toUpperCase()}</td>
      <td>${coin.current_price.toLocaleString()}</td>
      <td className="w-[180px] hidden sm:table-cell">
        {coin.price_change_percentage_24h < 0 ? (
          <p className="text-red-600">
            {coin.price_change_percentage_24h.toFixed(2)}%
          </p>
        ) : (
          <p className="text-green-600">
            {coin.price_change_percentage_24h.toFixed(2)}%
          </p>
        )}
      </td>
      <td className="w-[180px] hidden md:table-cell">
        {coin.total_volume.toLocaleString()}
      </td>
      <td className="w-[180px] hidden md:table-cell">
        {coin.market_cap.toLocaleString()}
      </td>
      <td className="hidden sm:table-cell">
        <Sparklines data={coin.sparkline_in_7d.price}>
          <SparklinesLine
            color={coin.price_change_percentage_24h > 0 ? "#329b09" : "red"}
          />
        </Sparklines>
      </td>
    </motion.tr >
  );
};

export default CoinItems;
