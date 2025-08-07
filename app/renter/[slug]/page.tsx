// app/listings/[slug]/page.tsx

import DetailsTabs from "@/components/property-details/DetailsTabs";
import DetailsLandlordCard from "@/components/property-details/DetailsLandlordCard";
import DetailsPriceCard from "@/components/property-details/DetailsPriceCard";
import DetailsImageGallery from "@/components/property-details/DetailsImageGallery";
import CalendarSection from "@/components/property-details/CalendarSection";
import { Metadata } from "next";
import { ibadanRooms, lagosRooms } from "@/lib/helper";

type Props = {
    params: {
        slug: string;
    }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const title = await params?.slug;
  return {
    title: `Listing - ${title}`,
  };
}
export default function RenterDetailsPage({params}: Props) {
    const {slug} = params;
    const formatedSlug = decodeURIComponent(slug);
    console.log(slug);
    console.log(formatedSlug);
    const foundItem = [...ibadanRooms, ...lagosRooms]?.find((value) => value.title === formatedSlug);
    console.log(foundItem);

  return (
    <main className="max-w-8xl mx-auto px-10 py-6 space-y-6">
      <div className="text-sm text-muted-foreground mb-2">
        <a href="#" className="hover:underline">
          Back
        </a>{" "}
        / Listings / Tropic flat villa
      </div>

      <h1 className="text-2xl font-semibold">{foundItem?.title}</h1>
      <p className="text-xl font-bold text-green-700">
        {foundItem?.price}
        <span className="text-sm font-normal text-muted-foreground">/room</span>
      </p>
      <p className="text-sm text-muted-foreground">
        📍 12, softun rd, lekki lagos • ⭐ 4.9
      </p>

      <DetailsImageGallery />

      <div className="grid md:grid-cols-3 gap-6 mt-6">
        <div className="md:col-span-2 space-y-6">
          <DetailsLandlordCard />
          <DetailsTabs />
          <CalendarSection />
        </div>

        <DetailsPriceCard />
      </div>
    </main>
  );
}
