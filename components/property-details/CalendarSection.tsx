"use client";

import DetailsCalendar from "./DetailsCalendar";

export default function CalendarSection() {
  return (
    <section>
      <h2 className="text-lg font-medium mb-1">A month in Ikeja</h2>
      <p className="text-sm text-muted-foreground mb-4">
        Jul 22, 2025 - Aug 22, 2025
      </p>
      <DetailsCalendar />
    </section>
  );
}
