
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface HeroProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  align?: "left" | "center";
}

const Hero = ({
  title,
  subtitle,
  backgroundImage,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  align = "center",
}: HeroProps) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div
      className={`relative min-h-[90vh] flex items-center justify-center px-6 py-16 overflow-hidden ${
        backgroundImage ? "bg-cover bg-center" : "bg-gray-50"
      }`}
      style={
        backgroundImage
          ? { backgroundImage: `url(${backgroundImage})` }
          : undefined
      }
    >
      {backgroundImage && (
        <div className="absolute inset-0 bg-bradesco-black/30 backdrop-blur-sm" />
      )}

      <div
        className={`glass-effect rounded-2xl max-w-4xl w-full mx-auto p-12 z-10 ${
          align === "center" ? "text-center" : "text-left"
        }`}
      >
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-6"
        >
          <motion.div variants={item}>
            <h1
              className={`text-gradient leading-tight mb-4 ${
                align === "center" ? "mx-auto" : ""
              }`}
            >
              {title}
            </h1>
          </motion.div>

          <motion.div variants={item}>
            <p
              className={`text-gray-600 text-lg sm:text-xl mb-8 max-w-3xl ${
                align === "center" ? "mx-auto" : ""
              }`}
            >
              {subtitle}
            </p>
          </motion.div>

          {(primaryButtonText || secondaryButtonText) && (
            <motion.div
              variants={item}
              className={`flex ${
                align === "center"
                  ? "justify-center flex-col sm:flex-row"
                  : "flex-col sm:flex-row"
              } gap-4`}
            >
              {primaryButtonText && primaryButtonLink && (
                <Link
                  to={primaryButtonLink}
                  className="bg-gradient-bradesco text-white py-3 px-6 rounded-lg font-medium flex items-center justify-center group hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200"
                >
                  {primaryButtonText}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              )}

              {secondaryButtonText && secondaryButtonLink && (
                <Link
                  to={secondaryButtonLink}
                  className="bg-white text-gray-800 py-3 px-6 rounded-lg font-medium border border-gray-200 hover:border-gray-300 hover:bg-gray-50 flex items-center justify-center"
                >
                  {secondaryButtonText}
                </Link>
              )}
            </motion.div>
          )}
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </div>
  );
};

export default Hero;
