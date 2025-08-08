// app/listings/[slug]/page.tsx

import DetailsTabs from "@/components/property-details/DetailsTabs";
import DetailsLandlordCard from "@/components/property-details/DetailsLandlordCard";
import DetailsPriceCard from "@/components/property-details/DetailsPriceCard";
import DetailsImageGallery from "@/components/property-details/DetailsImageGallery";
import CalendarSection from "@/components/property-details/CalendarSection";
import { Metadata } from "next";
import { ibadanRooms, lagosRooms } from "@/lib/helper";
import { MapPin } from "lucide-react";
import ShareButtonWithModal from "@/components/property-details/ShareButtonWithModal";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const title = await params?.slug;
  return {
    title: `Listing - ${title}`,
  };
}
export default function RenterDetailsPage({ params }: Props) {
  const { slug } = params;
  const formatedSlug = decodeURIComponent(slug);
  const foundItem = [...ibadanRooms, ...lagosRooms]?.find(
    (value) => value.title === formatedSlug
  );

  return (
    <main className="">
      <div className="text-sm text-muted-foreground mb-2"></div>
      <div className="text flex justify-between items-center mb-7">
        <div className="text">
          <h1 className="text-2xl font-semibold">{foundItem?.title}</h1>
          <p className="text-xl font-bold text-green-700 my-2">
            {foundItem?.price}
            <span className="text-sm font-normal text-muted-foreground">
              /room
            </span>
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-2">
            <MapPin size={16} /> {foundItem?.location} • ⭐{foundItem?.rating}
          </p>
        </div>
        <div className="text">
          <ShareButtonWithModal />
        </div>
      </div>

      <DetailsImageGallery
        mainImg={foundItem?.imageUrl?.src ?? ""}
        imgs={foundItem?.otherImgs ?? []}
      />

      <div className="grid md:grid-cols-3 gap-6 mt-6">
        <div className="md:col-span-2 space-y-6">
          <DetailsLandlordCard />
          <DetailsTabs />
          {/* <CalendarSection /> */}
        </div>

        <DetailsPriceCard />
      </div>
    </main>
  );
}
