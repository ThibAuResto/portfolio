import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export function Socials({ containerStyles, iconStyles }) {
  const socials = [
    { icon: <FaGithub />, link: "https://github.com/ThibAuResto" },
    {
      icon: <FaLinkedinIn />,
      link: "https://www.linkedin.com/in/thibault-capt/",
    },
  ];

  return (
    <div className={containerStyles}>
      {socials.map((social, index) => (
        <Link
          key={index}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          className={iconStyles}
        >
          {social.icon}
        </Link>
      ))}
    </div>
  );
}
