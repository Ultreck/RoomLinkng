import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import img from "../../assets/images/pic-one.png"
export default function BookingSummary() {
  return (
    <Card className="p-0" >
      <CardContent className="p-0 space-y-4">
        {/* Villa Info */}
        <div className="flex gap-4 px-6 pt-6 ">
          <Image
            src={img}
            alt="Tropic flat villa"
            width={150}
            height={80}
            className="rounded-md object-cover"
          />
          <div className="space-y-1" >
            <h3 className="font-semibold ">Tropic flat villa</h3>
            <p className="text-sm text-gray-500">Elebu Ibadan ⭐ 4.9</p>
            <p className="text-xs text-gray-500">Jul 30 – Aug 30, 2025</p>
          </div>
        </div>
            <p className="text-sm border-b pb-3 px-6">
              This reservation is non-refundable.{" "}
              <span className="underline cursor-pointer">Full policy</span>
            </p>

        {/* Price Details */}
        <div className="space-y-6 text-sm ">
          <div className="flex px-6 justify-between">
            <span>NGN30,000 × 1 month</span>
            <span>NGN30,000</span>
          </div>
          <div className="flex justify-between font-semibold border-t p-6">
            <span>Total Price</span>
            <span>NGN30,000</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
