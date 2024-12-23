import { motion } from 'framer-motion';
export const Loader = () => (
    <motion.div
        className="flex justify-center items-center h-48"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
    >
        <motion.div
            className="h-12 w-12 border-4 border-t-primary border-gray-200 rounded-full"
        />
    </motion.div>
);