import { openingHours } from "@/data/site";

/** Renders the supplied opening hours exactly as provided. */
export function WorkingHours({
  className = "",
  dayClassName = "",
  hoursClassName = "",
}: {
  className?: string;
  dayClassName?: string;
  hoursClassName?: string;
}) {
  return (
    <dl className={className}>
      {openingHours.map((row) => (
        <div key={row.days}>
          <dt className={dayClassName}>{row.days}:</dt>
          <dd className={hoursClassName}>{row.hours}</dd>
        </div>
      ))}
    </dl>
  );
}
