import React from 'react'
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
const ListingDetailsPage = () => {
  return (
<div>
      <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <div>
          <a href="#" className="text-sm text-gray-500 mb-2 inline-block">&lt; Back - Listings / Tropic Flat Villa</a>
          <h1 className="text-2xl font-bold">Tropic Flat Villa</h1>
          <div className="text-green-600 font-semibold">N30,000/room</div>
          <div className="text-sm text-gray-500">9, Salton Rd, Lekki Lagos • Listed 10 days ago</div>
        </div>
        <div className="space-x-2">
          <Button variant="outline" size="sm">Share</Button>
          <Button variant="outline" size="sm">Pause</Button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="relative">
          <Image src="/villa-main.jpg" alt="Main Villa" width={400} height={300} className="rounded-lg" />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <Image src="/villa-1.jpg" alt="Villa 1" width={200} height={150} className="rounded-lg" />
          <Image src="/villa-2.jpg" alt="Villa 2" width={200} height={150} className="rounded-lg" />
          <Image src="/villa-3.jpg" alt="Villa 3" width={200} height={150} className="rounded-lg" />
          <Image src="/villa-4.jpg" alt="Villa 4" width={200} height={150} className="rounded-lg" />
        </div>
      </div>

      <div className="flex space-x-4 mb-4">
        <Button variant="outline">Overview</Button>
        <Button variant="outline">Calendar</Button>
        <Button variant="outline">Reviews</Button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-sm text-gray-600 mb-2">
            Is there another way I can pass to the house because I don&apos;t know again o, is there
            another way I can pass. Is there another way I can pass to the house because I don&apos;t know
            again o, is there another way I can pass. Read more
          </p>
          <div className="space-x-2">
            <Badge variant="secondary">Bed</Badge>
            <Badge variant="secondary">Table</Badge>
            <Badge variant="secondary">Bathroom (private)</Badge>
            <Badge variant="secondary">AC/Fan</Badge>
            <Badge variant="secondary">Carpet/Rug</Badge>
            <Badge variant="secondary">WiFi</Badge>
            <Badge variant="secondary">TV</Badge>
          </div>
          <div className="mt-2 space-x-2">
            <Badge variant="outline">Grid+Inverter</Badge>
            <Badge variant="outline">7hrs Backup</Badge>
          </div>
        </div>
        <div>
          <div className="space-y-2">
            <h3 className="font-semibold">Rules</h3>
            <ul className="list-disc list-inside text-sm text-gray-600">
              <li>No smoking</li>
              <li>No parties</li>
              <li>No overnight guests</li>
              <li>No littering around</li>
              <li>No loud music</li>
              <li>Gate closes by 10pm</li>
            </ul>
            <h3 className="font-semibold mt-4">Reviews and Ratings</h3>
            <div className="space-y-1">
              <div className="flex items-center">
                <span className="text-sm mr-2">4.8 (12 reviews)</span>
                <div className="flex-1 h-2 bg-gray-200 rounded">
                  <div className="h-2 bg-yellow-400" style={{ width: '96%' }}></div>
                </div>
                <span className="text-sm ml-2">5.0</span>
              </div>
              <div className="flex items-center">
                <span className="text-sm mr-2">Cleanliness</span>
                <div className="flex-1 h-2 bg-gray-200 rounded">
                  <div className="h-2 bg-yellow-400" style={{ width: '96%' }}></div>
                </div>
                <span className="text-sm ml-2">4.8</span>
              </div>
              <div className="flex items-center">
                <span className="text-sm mr-2">Communications</span>
                <div className="flex-1 h-2 bg-gray-200 rounded">
                  <div className="h-2 bg-yellow-400" style={{ width: '96%' }}></div>
                </div>
                <span className="text-sm ml-2">4.8</span>
              </div>
              <div className="flex items-center">
                <span className="text-sm mr-2">Check in</span>
                <div className="flex-1 h-2 bg-gray-200 rounded">
                  <div className="h-2 bg-yellow-400" style={{ width: '96%' }}></div>
                </div>
                <span className="text-sm ml-2">4.8</span>
              </div>
              <div className="flex items-center">
                <span className="text-sm mr-2">Accuracy</span>
                <div className="flex-1 h-2 bg-gray-200 rounded">
                  <div className="h-2 bg-yellow-400" style={{ width: '96%' }}></div>
                </div>
                <span className="text-sm ml-2">4.8</span>
              </div>
              <div className="flex items-center">
                <span className="text-sm mr-2">Location</span>
                <div className="flex-1 h-2 bg-gray-200 rounded">
                  <div className="h-2 bg-yellow-400" style={{ width: '96%' }}></div>
                </div>
                <span className="text-sm ml-2">4.8</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
)
}

export default ListingDetailsPage