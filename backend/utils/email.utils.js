export const formatDate = () => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };
  return new Date().toLocaleDateString("en-US", options);
};

export const getInterestSpecificContent = (interest) => {
  const brandPurple = "#6B46C1";

  const interestMap = {
    "Website Development": {
      color: brandPurple,
      emoji: "💻",
      followupText:
        "Our web development team will analyze your requirements and get back to you with a tailored solution.",
    },
    Branding: {
      color: brandPurple,
      emoji: "🔮",
      followupText:
        "Our branding experts will review your needs and help establish your unique brand identity.",
    },
    SEO: {
      color: brandPurple,
      emoji: "🚀",
      followupText:
        "Our SEO team will analyze your current online presence and suggest strategies to improve your visibility.",
    },
    Design: {
      color: brandPurple,
      emoji: "✏️",
      followupText:
        "Our design team is excited to help bring your vision to life with creative solutions.",
    },
    default: {
      color: brandPurple,
      emoji: "✨",
      followupText:
        "Our team will review your inquiry and get back to you promptly.",
    },
  };

  return interestMap[interest] || interestMap.default;
};

export const getMessagePreview = (message, length = 60) => {
  if (message.length <= length) return message;
  return message.substring(0, length) + "...";
};
