import Image from "next/image"
import React from "react"
import Link from "next/link"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/Accordion"
import { Button } from "@/components/shadcn/Button"

const faqs = [
  {
    id: 1,
    title: "این سوال متداول اول هست",
    content: `لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
         از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها
         و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است`
  },
  {
    id: 2,
    title: "این سوال متداول دوم هست",
    content: `لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
         از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها
         و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است`
  },
  {
    id: 3,
    title: "این سوال متداول سوم هست",
    content: `لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
         از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها
         و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است`
  }
]

const TicketsFaq = () => {
  return (
    <section
      className="w-full lg:!w-4/12 p-4 border rounded-lg flex items-center justify-center
      gap-1 flex-col "
    >
      <Image
        src="/images/newqq-b.webp"
        alt="Robot Writing"
        width={250}
        height={250}
        className="w-24"
      />

      <h2 className="font-semibold !text-lg">سوالات متداول</h2>

      <p className="text-sm text-center">لطفا قبل از ارسال تیکت سوالات متداول را مطالعه فرمایید</p>

      <div className="w-full">

        <Accordion type="single" collapsible className="mt-3">
          {
            faqs.map(item => (
              <AccordionItem
                key={item.id}
                value={`value-${item.id}`}
                className="mt-3 !border-none outline-none "
              >
                <AccordionTrigger
                  className="bg-slate-100 p-2 rounded cursor-pointer 
                dark:bg-zinc-900 border"
                >
                  {item.title}
                </AccordionTrigger>

                <AccordionContent className="mt-2 !border-none outline-none ">
                  {item.content}
                </AccordionContent>
              </AccordionItem>
            ))
          }
        </Accordion>

      </div>

      <Button 
        className="mt-6 mx-auto !text-xs "
      >
        <Link href="/panel/help" >
          نمایش تمام سوالات
        </Link> 
      </Button>
    </section>
  )
}

export default TicketsFaq