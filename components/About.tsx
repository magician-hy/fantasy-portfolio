"use client"

import React from "react"
import { motion } from "framer-motion"
import SectionHeading from "./SectionHeading"
import Image from "next/image"
import { useSectionInView } from "@/lib/hooks"

export function About() {
  const { ref } = useSectionInView("关于")

  return (
    <motion.section
      id="about"
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      className="mb-28 max-w-[36rem] text-center leading-8 sm:mb-40 scroll-mt-28"
    >
      <SectionHeading>关于</SectionHeading>
      <p className="text-xl font-bold">
        「实迷途其未远，觉今是而昨非」
      </p>
      <p className="mt-[16px] text-left">
        一个人，不就是一系列选择堆砌而成的吗。
      </p>
      <p className="mt-[16px] text-left">
        过去种种已无法再改变。但是，比起做错了选择，什么都没做才是更让人懊悔的。
      </p>
      <Image
        src="https://www.pnglog.com/gwPmyU.jpg"
        alt=""
        width="1600"
        height="900"
        quality="100"
        priority={true}
        className="rounded-[16px] object-cover mt-[16px]"
      />
    </motion.section>
  )
}