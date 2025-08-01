import React from 'react';
import Link from 'next/link';

type FeatureCardProps = {
  icon: React.ElementType | string;
  title: string;
  description: string;
  href?: string; // <--- Changed from `href: string;` to `href?: string;`
};

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description, href }) => {
  const cardContent = (
    <div className="flex flex-col items-center p-6 text-center transition bg-white rounded-lg shadow-2xl hover:shadow-md gap-y-5 h-full min-h-[320px]">
      <div>
        {typeof Icon === 'string' ? (
          <img src={Icon} alt={title} className="w-16 h-16 mx-auto" />
        ) : (
          <Icon className="w-16 h-16 text-[#03577A] mx-auto group-hover:text-[#00b956] transition-colors duration-300" />
        )}
      </div>
      <h3 className="text-lg font-bold text-gray-900">{title}</h3>
      <p className="text-sm leading-relaxed text-gray-600">{description}</p>
    </div>
  );

  // Conditionally render Link or just the div based on href existence
  return href ? (
    <Link href={href} className="no-underline group">
      {cardContent}
    </Link>
  ) : (
    // If no href, render the content directly without a Link wrapper
    <div className="no-underline group"> {/* Keep consistent styling for non-linked cards if desired */}
      {cardContent}
    </div>
  );
};

export default FeatureCard;