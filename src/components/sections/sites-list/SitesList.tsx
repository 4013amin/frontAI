"use client"
import React, { memo, useState } from "react"
import { List } from "lucide-react"
import EmptySiteList from "./EmptySiteList"
import SitesListSkeleton from "./SitesListSkeleton"
import SiteCard from "./SiteCard"
import RemoveSiteDialog from "./RemoveSiteDialog"
import NewSiteForm from "./new-site-form/NewSiteForm"
import EditSiteDialog from "./EditSiteDialog"
import useGetSites from "@/hooks/useGetSites"
import NotLoadErorr from "@/components/ui/NotLoadErorr"
import { ISite } from "@/types/globa_types"
import { Separator } from "@/components/shadcn/Separator"

const SitesList = () => {
  const [selectedForRemove, setSelectedForRemove] = useState<number>(0)
  const [isOpenRemoveDialog, setIsOpenRemoveDialog] = useState<boolean>(false)
  const [selectedForEdit, setSelectedForEdit] = useState<number>(0)
  const [isOpenEditDialog, setIsOpenEditDialog] = useState<boolean>(false)

  const {
    isLoading,
    isError,
    sites
  } = useGetSites()


  return (
    <div
      className="flex flex-col lg:!flex-row gap-5 w-full 
            justify-start items-start"
    >
     
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
            <SiteCard
              key={site.id}
              {...site} 
              setRemoveId={setSelectedForRemove} 
              setEditId={setSelectedForEdit} 
              setIsOpenRemoveDialog={setIsOpenRemoveDialog}
              setIsOpenEditDialog={setIsOpenEditDialog}
            />
          ))
        }

        {
          sites === undefined || sites.length < 1 && (
            <EmptySiteList />
          )
        }

      </div>

      {
        sites && (
          <>
            <RemoveSiteDialog
              isOpen={isOpenRemoveDialog}
              siteId={selectedForRemove} 
              setIsOpen={setIsOpenRemoveDialog}
            />

            <EditSiteDialog 
              currentSite={sites.find(site => site.id === selectedForEdit)}
              isOpen={isOpenEditDialog}
              setIsOpen={setIsOpenEditDialog}
            />
          </>
        )
      }


      <NewSiteForm isLoadingSites={isLoading} sitesLength={sites?.length} />

    </div>
  )
}

export default memo(SitesList)