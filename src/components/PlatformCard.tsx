
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface PlatformCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  to: string;
  color?: string;
}

const PlatformCard = ({
  title,
  description,
  icon,
  to,
  color = "bradesco-red",
}: PlatformCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="group relative rounded-2xl overflow-hidden bg-white border border-gray-100 hover:border-gray-200 shadow-subtle hover:shadow-elevated transition-all duration-300 h-full"
    >
      <div className="p-8">
        <div
          className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-${color}/10 text-${color} group-hover:scale-110 transition-transform duration-300`}
        >
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        <Link
          to={to}
          className="flex items-center text-bradesco-red font-medium group-hover:underline"
        >
          Saiba mais
          <ArrowRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-200" />
        </Link>
      </div>
      <div
        className={`absolute inset-x-0 bottom-0 h-1 bg-${color} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}
      />
    </motion.div>
  );
};

export default PlatformCard;
