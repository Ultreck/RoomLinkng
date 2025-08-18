import React from 'react'
import { MapPin } from "lucide-react";

const rules = [
  "No smoking",
  "No parties",
  "No overnight guests",
  "No littering around",
  "No loud music",
  "Gate closes by 10pm",
];
const RulesCard = () => {
  return (
    <div className=" border rounded-lg p-5">
      <h3 className="font-medium mb-3">Rules</h3>
      <div className="grid grid-cols-1 gap-y-2">
        {rules.map((rule) => (
          <div
            key={rule}
            className="flex items-center gap-2 text-sm text-muted-foreground"
          >
            <MapPin className="w-4 h-4 text-muted-foreground" />
            {rule}
          </div>
        ))}
      </div>
    </div>
  )
}

export default RulesCard