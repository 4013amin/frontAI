"use client"
import { Earth } from "lucide-react"
import { Control, Controller, FieldError } from "react-hook-form"
import CustomSelect from "@/components/ui/CustomSelect"
import useGetSites from "@/hooks/useGetSites"
import { ISite } from "@/types/globa_types"

type WordPressSiteSelectProps = {
  control: Control<any>
  error?: FieldError
  setSelectedSite: (site: ISite | null) => void
}


const WordPressSiteSelect = ({
  control,
  error,
  setSelectedSite
}: WordPressSiteSelectProps) => {
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
            field={
              {
                ...field,
                onChange: (val: string) => {
                  field.onChange(val)
                  const selected = sites?.find(s => String(s.id) === val) || null
                  setSelectedSite(selected)
                }
              }
            }
            label="سایت وردپرس"
            emptyOptionLabel="یک سایت انتخاب کنید"
            options={siteOptions}
            isLoading={isLoading}
            error={error?.message}
            labelIcon={<Earth size={17} />}
          />
        )
      }
    />
  )
}

export default WordPressSiteSelect