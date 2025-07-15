"use client"
import React from "react"
import { List } from "lucide-react"
import EmptySiteList from "./EmptySiteList"
import SitesListSkeleton from "./SitesListSkeleton"
import useGetSites from "@/hooks/useGetSites"
import NotLoadErorr from "@/components/ui/NotLoadErorr"
import { ISite } from "@/types/globa_types"
import { Separator } from "@/components/shadcn/Separator"

const SitesList = () => {
  const {
    isLoading,
    isError,
    sites
  } = useGetSites()

  console.log(sites)

  return (
    <div
      className="w-full lg:!w-3/5 flex flex-col items-start justify-start p-3
    border rounded-xl"
    >
      <h2 className="flex items-center gap-2 text-bold">
        <List />
        لیست سایت ها
      </h2>

      <Separator className="my-3" />

      {isError && <NotLoadErorr />}
    
      {isLoading && <SitesListSkeleton />}

      {
        sites &&
        sites.map((site: ISite) => (
          <p key={site.id}>{site.name}</p>
        ))
      }

      {
        sites === undefined || sites.length < 1 && (
          <EmptySiteList />
        )
      }
    </div>
  )
}

export default SitesList