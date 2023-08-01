import {Comfortaa} from "next/font/google";

const comfortaa = Comfortaa({ subsets: ["latin"] })

interface PageTitleProps {
  title: string
}

export default function PageTitle(props: PageTitleProps) {
  return (
    <h1 className={`text-slate-50 text-2xl mb-6 ${comfortaa.className}`}>
      {props.title}
    </h1>
  )
}