"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { HiDownload } from "react-icons/hi"
import { FaGithub } from "react-icons/fa";
import { FaBilibili } from "react-icons/fa6";

export function Intro() {
  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              src="https://avatars.githubusercontent.com/u/107763489?v=4"
              alt="developer-image"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute text-4xl bottom-0 right-0"
            transition={{
              type: "spring",
              duration: 0.7,
              delay: 0.1,
              stiffness: 125,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div>你好，我是&nbsp;<span className="font-bold">韩毅</span></div>
        <div>一个&nbsp;<span className="font-bold">前端开发工程师</span></div>
      </motion.h1>

      <motion.div
        className="flex items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <a
          href="/前端开发-韩毅.pdf"
          download={true}
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
        >
          下载简历
          <HiDownload />
        </a>
        <Link
          href="https://github.com/magician-hy"
          target="_blank"
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
        >
          <FaGithub />
        </Link>
        <Link
          href="https://space.bilibili.com/1990934566"
          target="_blank"
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
        >
          <FaBilibili />
        </Link>
      </motion.div>
    </section>
  )
}