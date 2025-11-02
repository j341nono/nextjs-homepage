'use client'

import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import ImageSlider from "../ui/image-slider"

export default function PickupSection() {
  return (
    <section className="w-full py-10 bg-[#f9f4ef]">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <Link href="/pickup" passHref>
              <Badge asChild variant="destructive">
                <span>PICKUP</span>
              </Badge>
            </Link>
            注目のコンテンツ
          </h2>
          <Link href="/pickup" className="text-sm text-gray-500 hover:underline">
            もっと見る →
          </Link>
        </div>

        <ImageSlider />
      </div>
    </section>
  )
}
