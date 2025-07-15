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

  return (
    <div
      className="lg:w-3/5 flex flex-col items-start justify-center p-3
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
        !isLoading && sites?.length &&
        sites.map((site: ISite) => (
          <p key={site.id}>{site.name}</p>
        ))
      }

      {
        !isLoading && !sites?.length && (
          <EmptySiteList />
        )
      }
    </div>
  )
}

export default SitesList