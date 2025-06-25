"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Calendar,
  Users,
  Clock,
  Smartphone,
  Globe,
  ChevronDown,
  Info,
  Shield,
  CheckCircle,
} from "lucide-react";

interface ContentSectionProps {
  itineraryRef?: React.RefObject<HTMLDivElement | null>
}

export default function ContentSection({ itineraryRef }: ContentSectionProps = {}) {
  const [selectedOption, setSelectedOption] = useState("public");
  const [activeTab, setActiveTab] = useState("overview");
  const [expandedSection, setExpandedSection] = useState("included");

  const tabs = ["Overview", "Details", "Itinerary", "Operator", "Reviews"];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* About Section */}
            <Card>
              <CardContent className="p-6">
                {/* Navigation Tabs */}
                <div className="bg-white border-b">
                  <div className="max-w-7xl mx-auto">
                    <nav className="flex space-x-8">
                      {tabs.map((tab) => (
                        <button
                          key={tab}
                          onClick={() => setActiveTab(tab.toLowerCase())}
                          className={`py-4 px-1 border-b-2 font-medium text-sm ${
                            activeTab === tab.toLowerCase()
                              ? "border-black text-black"
                              : "border-transparent text-gray-500 hover:text-gray-700"
                          }`}
                        >
                          {tab}
                        </button>
                      ))}
                    </nav>
                  </div>
                </div>
                <h2 className="text-xl font-semibold my-4">About</h2>
                <p className="text-gray-700 mb-4">
                  Ideal for travelers short on time, this small-group full-day
                  tour covers the best of the Bromo Tengger Semeru National Park
                  region in a single day of sightseeing. Highlights include
                  seeing an early sunrise from a mountain viewpoint, visiting a
                  Hindu temple, and...
                  <button className="text-blue-600 hover:underline ml-1">
                    Read more
                  </button>
                </p>

                {/* Policy Badges */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <Info className="w-5 h-5 text-orange-500 mt-0.5" />
                    <div>
                      <span className="font-medium">Free cancellation</span>
                      <span className="text-gray-600">
                        {" "}
                        • Full refund if cancelled up to 24 hours before the
                        experience starts (local time).
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-orange-500 mt-0.5" />
                    <div>
                      <span className="font-medium">
                        Reserve now & pay later
                      </span>
                      <span className="text-gray-600">
                        {" "}
                        • Secure your spot while staying flexible.
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-orange-500 mt-0.5" />
                    <div>
                      <span className="font-medium">
                        Lowest price guarantee
                      </span>
                      <span className="text-gray-600">
                        {" "}
                        • Find a lower price online? Get the difference
                        refunded!
                      </span>
                    </div>
                  </div>
                </div>

                {/* Tour Details */}
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3">
                    <Users className="w-4 h-4 text-gray-500" />
                    <span>Ages 0-70, max of 6 per group</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-gray-500" />
                    <span>Duration: 13h</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-gray-500" />
                    <span>Start time: Check availability</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Smartphone className="w-4 h-4 text-gray-500" />
                    <span>Mobile ticket</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="w-4 h-4 text-gray-500" />
                    <span>Written guide: English</span>
                  </div>
                </div>

                <Separator className="my-6" />

                {/* Highlights */}
                <div>
                  <h3 className="font-semibold mb-3">Highlights</h3>
                  <button className="text-blue-600 hover:underline text-sm">
                    • See itinerary
                  </button>
                </div>

                {/* What's included - Expanded */}
                <Card>
                  <CardContent className="p-6">
                    <button
                      className="flex items-center justify-between w-full text-left mb-4"
                      onClick={() =>
                        setExpandedSection(
                          expandedSection === "included" ? "" : "included"
                        )
                      }
                    >
                      <h3 className="font-semibold">What's included</h3>
                      <ChevronDown
                        className={`w-5 h-5 text-gray-400 transition-transform ${
                          expandedSection === "included" ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {expandedSection === "included" && (
                      <div className="space-y-3 text-sm">
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <span className="w-1 h-1 bg-black rounded-full mt-2 flex-shrink-0"></span>
                            <span>
                              Transport: Toyota Landcruiser 4WD (Local called
                              it, Jeep)
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="w-1 h-1 bg-black rounded-full mt-2 flex-shrink-0"></span>
                            <span>Fuel and parking fee</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="w-1 h-1 bg-black rounded-full mt-2 flex-shrink-0"></span>
                            <span>National park ticket entrance</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="w-1 h-1 bg-black rounded-full mt-2 flex-shrink-0"></span>
                            <span>
                              Driver with basic english and google translate in
                              hand (in case they need it)
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="w-1 h-1 bg-black rounded-full mt-2 flex-shrink-0"></span>
                            <span>
                              Breakfast snack box and mineral water 600ml
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="w-1 h-1 bg-black rounded-full mt-2 flex-shrink-0"></span>
                            <span>Visiting 7 epic places in Bromo!</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="w-1 h-1 bg-black rounded-full mt-2 flex-shrink-0"></span>
                            <span>Local tax</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="w-1 h-1 bg-black rounded-full mt-2 flex-shrink-0"></span>
                            <span>Pick up and drop off in Malang city.</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="w-1 h-1 bg-black rounded-full mt-2 flex-shrink-0"></span>
                            <span>
                              WARNING: Confirmation to WhatsApp needed at least
                              3 days before the tour starts.
                            </span>
                          </li>
                        </ul>

                        <Separator className="my-4" />

                        <div className="flex items-center justify-between text-sm">
                          <button className="text-blue-600 hover:underline flex items-center gap-1">
                            <ChevronDown className="w-4 h-4 rotate-90" />
                            See all Things to Do in Malang
                          </button>
                          <span className="text-gray-600">
                            1 Day - Amazing Bromo Sunrise tour with 7 spots /
                          </span>
                        </div>

                        <div className="border-b border-gray-200 mb-4">
                          <nav className="flex space-x-6">
                            {[
                              "Overview",
                              "Details",
                              "Itinerary",
                              "Operator",
                              "Reviews",
                            ].map((tab) => (
                              <button
                                key={tab}
                                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                                  tab === "Details"
                                    ? "border-black text-black"
                                    : "border-transparent text-gray-500 hover:text-gray-700"
                                }`}
                              >
                                {tab}
                              </button>
                            ))}
                          </nav>
                        </div>

                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <span className="w-1 h-1 bg-black rounded-full mt-2 flex-shrink-0"></span>
                            <span>Entry/Admission - Mount Bromo</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="w-1 h-1 bg-black rounded-full mt-2 flex-shrink-0"></span>
                            <span>Entry/Admission - Whispering Sands</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="w-1 h-1 bg-black rounded-full mt-2 flex-shrink-0"></span>
                            <span>
                              Entry/Admission - Bromo Tengger Semeru National
                              Park
                            </span>
                          </li>
                        </ul>

                        <div className="mt-6">
                          <h4 className="font-semibold mb-3">
                            What's not included
                          </h4>
                          <ul className="space-y-2">
                            <li className="flex items-start gap-2">
                              <span className="w-1 h-1 bg-black rounded-full mt-2 flex-shrink-0"></span>
                              <span>Lunch</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="w-1 h-1 bg-black rounded-full mt-2 flex-shrink-0"></span>
                              <span>Travel insurance</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="w-1 h-1 bg-black rounded-full mt-2 flex-shrink-0"></span>
                              <span>Personal expenses</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="w-1 h-1 bg-black rounded-full mt-2 flex-shrink-0"></span>
                              <span>
                                Ticket entrance for the Rainbow waterfall +IDR
                                15.000 (option)
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="w-1 h-1 bg-black rounded-full mt-2 flex-shrink-0"></span>
                              <span>
                                Drop: SUB airport / Surabaya city +IDR
                                170.000/person one way open trip (option)
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="w-1 h-1 bg-black rounded-full mt-2 flex-shrink-0"></span>
                              <span>
                                Pick up & drop to/from Batu city +IDR
                                150.000/car one way open trip (option)
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="w-1 h-1 bg-black rounded-full mt-2 flex-shrink-0"></span>
                              <span>
                                Private Tour Guide + 200.000 / Private Group
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Other Collapsible Sections */}
                {[
                  "What to expect",
                  "Departure and return",
                  "Accessibility",
                  "Additional information",
                  "Cancellation policy",
                  "Help",
                ].map((section) => (
                  <Card key={section}>
                    <CardContent className="p-6">
                      <button
                        className="flex items-center justify-between w-full text-left"
                        onClick={() =>
                          setExpandedSection(
                            expandedSection ===
                              section.toLowerCase().replace(/\s+/g, "-")
                              ? ""
                              : section.toLowerCase().replace(/\s+/g, "-")
                          )
                        }
                      >
                        <h3 className="font-semibold">{section}</h3>
                        <ChevronDown
                          className={`w-5 h-5 text-gray-400 transition-transform ${
                            expandedSection ===
                            section.toLowerCase().replace(/\s+/g, "-")
                              ? "rotate-180"
                              : ""
                          }`}
                        />
                      </button>
                    </CardContent>
                  </Card>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Right Booking Panel */}
          <div className="space-y-4">
            <Card className="sticky top-4">
              <CardContent className="p-6">
                <div className="mb-6">
                  <div className="text-2xl font-bold">From $42.22</div>
                  <div className="text-sm text-gray-600">
                    per adult (price varies by group size)
                  </div>
                </div>

                {/* Date and Travelers */}
                <div className="mb-6">
                  <h3 className="font-semibold mb-3">
                    Select date and travelers
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    <Button variant="outline" className="justify-start h-12">
                      <Calendar className="w-4 h-4 mr-2" />
                      Saturday, June 28, 2025
                    </Button>
                    <Button variant="outline" className="justify-start h-12">
                      <Users className="w-4 h-4 mr-2" />2
                    </Button>
                  </div>
                </div>

                {/* Cancellation Policy */}
                <div className="mb-6 p-3 bg-orange-50 rounded-lg">
                  <div className="flex items-start gap-2">
                    <Info className="w-4 h-4 text-orange-600 mt-0.5" />
                    <div className="text-sm">
                      <span className="font-medium">Cancellation policy</span>
                      <span className="text-gray-600">
                        {" "}
                        • Cancel anytime before Jun 27 for full refund.
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mb-6 p-3 bg-orange-50 rounded-lg">
                  <div className="flex items-start gap-2">
                    <Calendar className="w-4 h-4 text-orange-600 mt-0.5" />
                    <div className="text-sm">
                      <span className="font-medium">
                        Reserve now & pay later
                      </span>
                      <span className="text-gray-600">
                        {" "}
                        • Secure your spot while staying flexible.
                      </span>
                    </div>
                  </div>
                </div>

                <div className="text-sm text-gray-600 mb-4">
                  2 options available
                </div>

                {/* Tour Options */}
                <div className="space-y-4 mb-6">
                  {/* Public Tour Option */}
                  <div
                    className={`border rounded-lg p-4 cursor-pointer ${
                      selectedOption === "public"
                        ? "border-black bg-gray-50"
                        : "border-gray-200"
                    }`}
                    onClick={() => setSelectedOption("public")}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <input
                          type="radio"
                          checked={selectedOption === "public"}
                          onChange={() => setSelectedOption("public")}
                          className="mt-1"
                        />
                        <div>
                          <div className="flex items-center gap-2">
                            <Badge variant="secondary" className="text-xs">
                              POPULAR
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              RESERVE NOW & PAY LATER ELIGIBLE
                            </Badge>
                          </div>
                          <h4 className="font-semibold mt-1">
                            Public tour / Sharing
                          </h4>
                          <p className="text-sm text-gray-600">
                            Bread and mineral water 600 ml, 4WD Toyota
                            Landcruiser, Ponchos...
                            <button className="text-blue-600 hover:underline ml-1">
                              Read more
                            </button>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="ml-6">
                      <div className="text-sm text-gray-600">
                        2 Adults x $42.22
                      </div>
                      <div className="font-semibold">Total $84.44</div>
                      <div className="text-xs text-gray-500">
                        (Price includes taxes and booking fees)
                      </div>
                      <Button variant="outline" size="sm" className="mt-2">
                        12:30 AM
                      </Button>
                      <p className="text-xs text-gray-500 mt-2">
                        *Popular option based on the number of bookings on the
                        Tripadvisor site over the past 60 days.
                      </p>
                    </div>
                  </div>

                  {/* Private Tour Option */}
                  <div
                    className={`border rounded-lg p-4 cursor-pointer ${
                      selectedOption === "private"
                        ? "border-black bg-gray-50"
                        : "border-gray-200"
                    }`}
                    onClick={() => setSelectedOption("private")}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <input
                          type="radio"
                          checked={selectedOption === "private"}
                          onChange={() => setSelectedOption("private")}
                          className="mt-1"
                        />
                        <div>
                          <Badge variant="outline" className="text-xs mb-1">
                            RESERVE NOW & PAY LATER ELIGIBLE
                          </Badge>
                          <h4 className="font-semibold">Private tour</h4>
                          <p className="text-sm text-gray-600">
                            Duration: 13 hours, Bread and mineral...
                            <button className="text-blue-600 hover:underline ml-1">
                              Read more
                            </button>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="ml-6">
                      <div className="text-sm text-gray-600">
                        2 Adults x $81.93
                      </div>
                      <div className="font-semibold">Total $163.86</div>
                      <div className="text-xs text-gray-500">
                        (Price includes taxes and booking fees)
                      </div>
                      <Button variant="outline" size="sm" className="mt-2">
                        12:30 AM
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Booking Info */}
                <div className="mb-6 p-3 bg-green-50 rounded-lg">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                    <div className="text-sm">
                      <span className="font-medium">Book ahead</span>
                      <span className="text-gray-600">
                        {" "}
                        • This is booked 17 days in advance on average.
                      </span>
                    </div>
                  </div>
                </div>

                {/* Reserve Button */}
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3">
                  Reserve Now
                </Button>

                <div className="mt-4 text-center">
                  <h4 className="font-semibold text-sm">
                    Have booking questions?
                  </h4>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <div className="p-6 container mx-auto" ref={itineraryRef}>
        <h2 className="text-2xl font-semibold mb-6">Itinerary</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left side - Itinerary Steps */}
          <div className="space-y-6">
            {/* Pickup */}
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full border-2 border-gray-300 flex items-center justify-center bg-white">
                <div className="w-2 h-2 rounded-full bg-gray-400"></div>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold">You'll get picked up</h3>
                <button className="text-blue-600 hover:underline text-sm">
                  See departure details
                </button>
              </div>
            </div>

            {/* Dotted line */}
            <div className="ml-4 border-l-2 border-dotted border-gray-300 h-4"></div>

            {/* Itinerary Steps */}
            {[
              {
                number: 1,
                title: "Bukit Cinta Taman Nasional Bromo Tengger Semeru",
                duration: "15 minutes",
                admission: "Admission included",
              },
              {
                number: 2,
                title: "Luhur Poten Temple",
                duration: "30 minutes",
                admission: "Admission included",
              },
              {
                number: 3,
                title: "Bromo Tengger Semeru National Park",
                duration: "30 minutes",
                admission: "Admission included",
              },
              {
                number: 4,
                title: "Gunung Penanjakan",
                duration: "3 hours",
                admission: "Admission included",
              },
              {
                number: 5,
                title: "Mount Bromo",
                duration: "30 minutes",
                admission: "Admission included",
              },
              {
                number: 6,
                title: "Whispering Sands",
                duration: "15 minutes",
                admission: "Admission included",
              },
              {
                number: 7,
                title: "Bromo Tengger Semeru National Park",
                duration: "15 minutes",
                admission: "Admission included",
              },
            ].map((stop, index) => (
              <div key={stop.number}>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-sm font-semibold">
                    {stop.number}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">{stop.title}</h3>
                    <p className="text-sm text-gray-600 mb-2">
                      Stop: {stop.duration} - {stop.admission}
                    </p>
                    <button className="text-blue-600 hover:underline text-sm">
                      See details & photo
                    </button>
                  </div>
                </div>
                {index < 6 && (
                  <div className="ml-4 border-l-2 border-dotted border-gray-300 h-6"></div>
                )}
              </div>
            ))}

            {/* Final dotted line */}
            <div className="ml-4 border-l-2 border-dotted border-gray-300 h-4"></div>

            {/* Return */}
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full border-2 border-gray-300 flex items-center justify-center bg-white">
                <div className="w-2 h-2 rounded-full bg-gray-400"></div>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold">
                  You'll return to the starting point
                </h3>
              </div>
            </div>
          </div>

          {/* Right side - Map */}
          <div className="relative">
            <div className="flex justify-center items-center w-full h-96 lg:h-full rounded-lg overflow-hidden relative">
              <img
                src="/placeholder.png"
                alt="Bromo Tengger Semeru National Park Itinerary Map"
                className="aspect-square object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}