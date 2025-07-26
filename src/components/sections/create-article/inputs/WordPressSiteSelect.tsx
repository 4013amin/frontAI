"use client"
import { Earth } from "lucide-react"
import { Controller } from "react-hook-form"
import CustomSelect from "@/components/ui/CustomSelect"
import useGetSites from "@/hooks/useGetSites"


const WordPressSiteSelect = ({ control, error }: any) => {
  const { sites, isLoading } = useGetSites()

  const siteOptions = sites?.map(s => ({
    value: String(s.id),
    label: s.name
  })) || []


  return (
    <Controller
      name="wordpress_site_id"
      control={control}
      render={
        ({ field }) => (
          <CustomSelect
            field={field}
            label="سایت وردپرس"
            emptyOptionLabel="یک سایت انتخاب کنید"
            options={siteOptions}
            isLoading={isLoading}
            error={error}
            labelIcon={<Earth size={17} />}
          />
        )
      }
    />
  )
}

export default WordPressSiteSelect