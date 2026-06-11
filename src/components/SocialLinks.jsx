import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const SocialLinks = () => {
  const socials = [
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/umang-jain-1647a6335/", color: "hover:text-blue-600" },
    { icon: FaGithub, href: "https://github.com/umangjain2805", color: "hover:text-black" },
    { icon: FaEnvelope, href: "mailto:umangjain2805@gmail.com", color: "hover:text-red-500" },
  ];

  return (
    <div className="flex items-center gap-6">
      {socials.map((social, index) => (
        <motion.a
          key={index}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -3, scale: 1.1 }}
          className={`text-2xl text-secondary transition-colors ${social.color}`}
        >
          <social.icon />
        </motion.a>
      ))}
    </div>
  );
};

export default SocialLinks;
