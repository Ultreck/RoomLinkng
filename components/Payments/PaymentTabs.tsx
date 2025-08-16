import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TransactionsTable, { paymentData } from "./TransactionsTable";

const PaymentTabs = () => {
    console.log(paymentData);
    
  return (
    <div className="mt-8">
      <Tabs defaultValue="all">
        <TabsList className="bg-white w-full z-10 grid sm:flex justify-between">
          <div className="text-[25px] text-[#474747] font-medium ">
            Transaction History ({paymentData?.length || 8} Results)
          </div>
          <div className="text py-3 z-10 bg-white md:space-x-4 space-x-2.5">
            <TabsTrigger
              className="data-[state=active]:bg-[#474747] data-[state=active]:rounded-full border border-gray-200 px-3 lg:px-5 data-[state=active]:text-white cursor-pointer rounded-full data-[state=active]:py-2"
              value="all"
            >
              All
            </TabsTrigger>
            <TabsTrigger
              className="data-[state=active]:bg-[#474747] data-[state=active]:rounded-full border border-gray-200 px-3 lg:px-5 data-[state=active]:text-white cursor-pointer rounded-full data-[state=active]:py-2"
              value="successful"
            >
              Successful
            </TabsTrigger>
            <TabsTrigger
              className="data-[state=active]:bg-[#474747] data-[state=active]:rounded-full border border-gray-200 px-3 lg:px-5 data-[state=active]:text-white cursor-pointer rounded-full data-[state=active]:py-2"
              value="in progress"
            >
              In progress
            </TabsTrigger>
            <TabsTrigger
              className="data-[state=active]:bg-[#474747] data-[state=active]:rounded-full border border-gray-200 px-3 lg:px-5 data-[state=active]:text-white cursor-pointer rounded-full data-[state=active]:py-2"
              value="cancelled"
            >
              Cancelled
            </TabsTrigger>
          </div>
        </TabsList>
        <TabsContent value="all">
          <TransactionsTable type="All" />
        </TabsContent>
        <TabsContent className="w-full" value="in progress">
          <TransactionsTable type="In progress" />
        </TabsContent>
        <TabsContent value="successful">
          <TransactionsTable type="Successful" />
        </TabsContent>
        <TabsContent value="cancelled">
          <TransactionsTable type="Cancelled" />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PaymentTabs;
