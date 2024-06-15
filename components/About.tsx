"use client"

import React from "react"
import { motion } from "framer-motion"
import SectionHeading from "./SectionHeading"

export function About() {
  return (
    <motion.section
      className="mb-28 max-w-[36rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>关于</SectionHeading>
      <p className="text-xl font-bold">
        「实迷途其未远，觉今是而昨非」
      </p>
      <p className="mt-[16px] text-left">
        人的本质，不就是一系列选择的结合吗？
      </p>
      <p className="mt-[16px] text-left">
        我曾经时常会思考为什么会有今天的自己。大学期间表现平平，毕业时眼高手低，于是逃避现实。直到受了教训，懊悔不已，才意识到必须直面人生。</p>
      <p className="mt-[16px] text-left">
        在重新学习的过程里，我逐渐发掘了对于编程、设计、写作和英语的兴趣，尽管还没有明确的答案，但是我会找到属于自己的路。
      </p>
    </motion.section>
  )
}