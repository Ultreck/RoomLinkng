
import bed from "../../../assets/icons/bathroom-icon.svg";
import table from "../../../assets/icons/table-icon.svg";
import bathroom from "../../../assets/icons/bathroom-icon.svg";
import ac from "../../../assets/icons/ac-icon.svg";
import tv from "../../../assets/icons/tv-icon.svg";
import wifi from "../../../assets/icons/wifi-icon.svg";
import carpet from "../../../assets/icons/carpet-icon.svg";
import Image from "next/image";
const amenities = [
  { icon: bed, label: "Bed" },
  { icon: table, label: "Table" },
  { icon: bathroom, label: "Bathroom (private)" },
  { icon: ac, label: "AC/Fan" },
  { icon: tv, label: "TV" },
  { icon: carpet, label: "Carpet/Rug" },
  { icon: wifi, label: "WiFi" },
];
const OverviewAmenities = () => {
  return (
 <div className="mt-8">
      <h3 className="font-medium mb-3">Our Amenities</h3>
      <div className="flex flex-wrap gap-8">
        {amenities.map(({ icon, label }) => (
          <div key={label} className="flex items-center text-center gap-1">
            <div className="p-3 border rounded-full">
              <Image src={icon} alt={label} className="w-5 h-5" />
            </div>
            <span className="text-sm text-muted-foreground">{label}</span>
          </div>
        ))}
      </div>
    </div>
)
}

export default OverviewAmenities