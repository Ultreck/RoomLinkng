import React from 'react'

const powerArrangements = ["Grid+Inverter", "7hrs Backup"];

const OverviewPower = () => {
  return (
     <div className="mt-8">
      <h3 className="font-medium mb-3">Our Power Arrangement</h3>
      <div className="flex gap-2 flex-wrap">
        {powerArrangements.map((p) => (
          <span
            key={p}
            className="bg-muted px-4 py-1.5 rounded-full text-sm text-muted-foreground"
          >
            {p}
          </span>
        ))}
      </div>
    </div>
  )
}

export default OverviewPower