import { SummaryCard } from "../dashboard/SummaryCard";
import { Card, CardContent } from "../ui/card";
import img from "../../assets/images/profile.png";
import Image from "next/image";
import { Button } from "../ui/button";

const PaymentTransactionCards = () => {
  return (
   <div className="text grid grid-cols-1 md:grid-cols-4 gap-3">
        {[
          {
            title: "Total Payments",
            value: "N320k",
            description: "From 22 rooms linked",
          },
          {
            title: "Pending Payments",
            value: "N90k",
            description: "From 2 rooms linked",
          },
        ].map((v, i) => (
          <div key={i} className="text">
            <SummaryCard
              title={v.title}
              value={v.value}
              description={v.description}
            />
          </div>
        ))}
        <div className="text md:col-span-2">
          <Card className="shadow-sm">
            <CardContent className="space-y-9">
              <h4 className="text-base text-gray-500 font-semibold">
                Payment Method
              </h4>
              <div className="text-lg text-[#121212] flex justify-between">
                <div className="flex items-center">
                  <Image
                    src={img}
                    alt="data image"
                    width={60}
                    height={60}
                    className="rounded-full mr-1"
                  />
                  <div className="text">
                    <h1 className="text-[#474747] text-[25px] font-medium leading-6">9123419848</h1>
                    <span className="text-[16px] text-[#474747] ">First Bank</span>
                  </div>
                </div>
                <Button className="rounded-full bg-[#F6F6F6] text-[#474747] hover:bg-gray-200 cursor-pointer" >Change</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
  )
}

export default PaymentTransactionCards