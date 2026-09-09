import { Instagram, Facebook } from "lucide-react";

const SocialFloatingButtons = () => {
  return (
    <div className="fixed bottom-6 left-6 z-40 flex flex-col gap-3">
      <a
        href="https://www.instagram.com/zealaesthetics_institute"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 rounded-full shadow-lg transition-all duration-300 hover:scale-110 text-white"
        style={{
          background: "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
        }}
        aria-label="Follow on Instagram"
      >
        <Instagram size={22} />
      </a>
      <a
        href="https://www.facebook.com/ZealAesthetics"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 bg-[#1877F2] text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:bg-[#166FE5]"
        aria-label="Follow on Facebook"
      >
        <Facebook size={22} />
      </a>
    </div>
  );
};

export default SocialFloatingButtons;
