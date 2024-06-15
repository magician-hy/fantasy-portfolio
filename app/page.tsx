import { Intro } from "@/components/Intro"
import { About } from "@/components/About"
import { SectionDivider } from "@/components/SectionDivider"

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center px-4">
      <Intro />
      <SectionDivider />
      <About />
    </main>
  )
}
