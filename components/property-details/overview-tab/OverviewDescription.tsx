import { useState } from "react";

const OverviewDescription = ({ text }: { text: string }) => {
    const [expanded, setExpanded] = useState(false);
  return (
     <div className="text-sm text-muted-foreground">
      {expanded ? text : text.slice(0, 180) + "..."}{" "}
      <button
        className="text-green-600 font-medium hover:underline"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Show less" : "Read more"}
      </button>
    </div>
  )
}

export default OverviewDescription