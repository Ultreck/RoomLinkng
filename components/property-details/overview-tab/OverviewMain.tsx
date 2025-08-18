import React from "react";
import OverviewDescription from "./OverviewDescription";
import OverviewAmenities from "./OverviewAmenities";
import OverviewRules from "./OverviewRules";
import OverviewPower from "./OverviewPower";

const OverviewMain = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <OverviewDescription text="Is there another way i can pass to the house because i don't know again o. Is there another way i can pass to the house because i don't know again o. Is there another way i can pass to the house because i don't know again o. Is there another way i can pass to the house because i don't know again o." />
      <OverviewAmenities />
      <OverviewPower />
      <OverviewRules />
    </div>
  );
};

export default OverviewMain;
