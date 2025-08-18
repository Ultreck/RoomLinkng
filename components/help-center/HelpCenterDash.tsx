
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function HelpCenterDash() {
  return (
    <div className="space-y-6 max-w-2xl mx-auto lg:mt-32 mt-8">
        <h2 className="text-2xl font-semibold text-[#474747]">Help Line</h2>

      {/* FAQs Card */}
      <Card className="rounded-xl border-gray-200">
        <CardContent className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-6 px-6 space-y-4 sm:space-y-0">
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-[#474747]">Do you have unanswered questions?</h3>
            <p className="text-sm text-[#474747] mt-1">Check out our resources and FAQs</p>
          </div>
          <Button className="rounded-full cursor-pointer px-8 hover:bg-gray-900 bg-gray-700">Get help</Button>
        </CardContent>
      </Card>

      {/* Contact Card */}
      <Card className="rounded-xl border-gray-200">
        <CardContent className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-6 px-6 space-y-4 sm:space-y-0">
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-[#474747]">Still need help? Contact our support team</h3>
            <p className="text-sm text-[#474747] mt-1">We are always glad to help. Contact us</p>
          </div>
          <Button variant="outline" className="rounded-full cursor-pointer bg-gray-100 px-8 hover:bg-gray-200">Contact us</Button>
        </CardContent>
      </Card>
    </div>
  )
}