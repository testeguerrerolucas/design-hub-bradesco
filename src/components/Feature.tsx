
import { motion } from "framer-motion";

interface FeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}

const Feature = ({ title, description, icon, delay = 0 }: FeatureProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      className="flex flex-col md:flex-row gap-6 p-6 rounded-xl hover:bg-gray-50 transition-colors duration-200"
    >
      <div className="bg-white shadow-subtle rounded-xl p-3 border border-gray-100 flex items-center justify-center h-12 w-12 flex-shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
};

export default Feature;
