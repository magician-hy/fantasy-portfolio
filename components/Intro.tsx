"use client"

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { HiDownload } from "react-icons/hi"
import { FaGithub } from "react-icons/fa";
import { FaBilibili } from "react-icons/fa6";
import { SiXiaohongshu } from "react-icons/si";
import { useSectionInView } from "@/lib/hooks";

export function Intro() {
  const { ref } = useSectionInView("首页", 0.5)

  return (
    <section
      id="home"
      ref={ref}
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-28"
    >
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
              width="250"
              height="250"
              quality="100"
              priority={true}
              className="h-28 w-28 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.25, rotate: 15 }}
            className="absolute text-4xl bottom-0 right-0 hover:rotate-2"
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
        <div className="mt-8 text-lg tracking-wider">你好，我是</div>
        <div className="mt-4 text-center text-3xl sm:text-4xl lg:text-5xl lg:leading-normal font-extrabold">韩毅</div>
        <div className="mt-4 text-lg tracking-wider">一个</div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mt-4 col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <div
            id="name"
            className="text-center text-3xl sm:text-4xl lg:text-5xl lg:leading-normal font-extrabold"
          >
            <TypeAnimation
              sequence={[
                "前端开发工程师💻",
                1000,
                "云养猫专家🐱",
                1000,
                "提瓦特旅行者💫",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>
        </motion.div>
      </motion.h1>
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4 text-lg font-medium"
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
        <div className="flex sm:flex-row items-center justify-center gap-2">
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
          <Link
            href="https://www.xiaohongshu.com/user/profile/64603970000000001002467e"
            target="_blank"
            className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          >
            <SiXiaohongshu />
          </Link>
        </div>
      </motion.div>
    </section>
  )
}