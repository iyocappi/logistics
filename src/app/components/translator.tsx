"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    gtranslateSettings: {
      default_language: string;
      wrapper_selector: string;
      alt_flags: Record<string, string>;
    };
  }
}
// This component integrates the GTranslate widget for language translation

const GTranslateWidget = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Set global config
      window.gtranslateSettings = {
        default_language: "en",
        wrapper_selector: ".gtranslate_wrapper",
        alt_flags: {
          en: "usa",
        },
      };

      // Inject script
      const script = document.createElement("script");
      script.src = "https://cdn.gtranslate.net/widgets/latest/float.js";
      script.defer = true;
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, []);

  return <div className="gtranslate_wrapper"></div>;
};

export default GTranslateWidget;
