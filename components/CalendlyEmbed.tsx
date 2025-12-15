import React, { useEffect } from "react";

const CalendlyEmbed = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="calendly-inline-widget"
      data-url="https://calendly.com/aly-ottobooks/ottobooks-demo?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=212539"
      style={{ minWidth: "320px", height: "600px" }}
    />
  );
};

export default CalendlyEmbed;
