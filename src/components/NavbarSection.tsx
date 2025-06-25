"use client"

import { ArrowLeft, Heart, Share, Star } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"

export default function NavbarSection() {
  return (
    <div className="w-full bg-white border-b">
      {/* Main navbar */}
      <div className="flex items-center justify-between px-4 py-3 max-w-7xl mx-auto">
        {/* Left section - Back link */}
        <div className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors">
          <ArrowLeft className="h-4 w-4" />
          <Link href="#" className="text-sm underline">
            See all Things to Do in Malang
          </Link>
        </div>

        {/* Center section - Title and rating */}
        <div className="flex-1 flex items-center justify-center gap-4 mx-8">
          <h1 className="text-lg font-semibold text-gray-900 text-center">
            1 Day - Amazing Bromo Sunrise tour with 7 spots // 00.30 -13.00
          </h1>
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">4.9</span>
          </div>
        </div>

        {/* Right section - Action buttons */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-800">
            <Share className="h-4 w-4 mr-1" />
            Share
          </Button>
          <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-800">
            Review
          </Button>
          <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-800">
            <Heart className="h-4 w-4 mr-1" />
            Save
          </Button>
        </div>
      </div>

      {/* Secondary navigation */}
      <div className="flex items-center justify-between px-4 py-2 max-w-7xl mx-auto border-t">
        {/* Navigation tabs */}
        <nav className="flex items-center gap-8">
          <Link href="#" className="text-sm text-gray-600 hover:text-gray-900 py-2">
            Overview
          </Link>
          <Link href="#" className="text-sm text-gray-600 hover:text-gray-900 py-2">
            Details
          </Link>
          <Link href="#" className="text-sm text-gray-900 font-medium py-2 border-b-2 border-gray-900">
            Itinerary
          </Link>
          <Link href="#" className="text-sm text-gray-600 hover:text-gray-900 py-2">
            Operator
          </Link>
          <Link href="#" className="text-sm text-gray-600 hover:text-gray-900 py-2">
            Reviews
          </Link>
        </nav>

        {/* Pricing and booking */}
        <div className="flex items-center gap-4">
          <div className="text-right">
            <div className="text-sm text-gray-600">from</div>
            <div className="text-lg font-semibold text-gray-900">$42.22</div>
          </div>
          <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium px-6">Check availability</Button>
        </div>
      </div>
    </div>
  )
}
