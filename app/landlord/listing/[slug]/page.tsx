import DetailsImageGallery from "@/components/property-details/DetailsImageGallery";
import DetailsLandlordCard from "@/components/property-details/DetailsLandlordCard";
import LandlordDetails from "@/components/property-details/landlord-tab/LandlordDetailsTabs";
import SaveButtonModal from "@/components/property-details/landlord-tab/SaveButtonModal";
import ShareButtonWithModal from "@/components/property-details/ShareButtonWithModal";
import { ibadanRooms, lagosRooms } from "@/lib/helper";
import { MapPin } from "lucide-react";
import React from "react";

interface PageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}
const ListingDetailsPage = async ({ params }: PageProps) => {
  const { slug } = await params;
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
        <div className="text flex gap-2 items-center">
          <ShareButtonWithModal />
          <SaveButtonModal/>
        </div>
      </div>

      <DetailsImageGallery
        mainImg={foundItem?.imageUrl?.src ?? ""}
        imgs={foundItem?.otherImgs ?? []}
      />

      <div className="gap-6 mt-6">
        <div className=" space-y-6">
          {/* <DetailsLandlordCard /> */}
          <LandlordDetails />
        </div>
      </div>
    </main>
  );
};

export default ListingDetailsPage;
