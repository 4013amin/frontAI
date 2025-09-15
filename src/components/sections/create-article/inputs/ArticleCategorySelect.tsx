"use client"
import { Earth } from "lucide-react"
import { Controller, Control } from "react-hook-form"
import { useEffect } from "react"
import { useWordPressCategories } from "../hooks/useWordPressCategories"
import CustomSelect from "@/components/ui/CustomSelect"
import { ISite } from "@/types/globa_types"

type ArticleCategorySelectProps = {
  control: Control<any>
  error?: string
  selectedSite?: ISite | null
}

const ArticleCategorySelect = ({
  control,
  error,
  selectedSite
}: ArticleCategorySelectProps) => {
  const {
    categories,
    error: fetchError,
    isLoading,
    refetch
  } = useWordPressCategories(selectedSite?.site_url || "")

  // هر وقت سایت تغییر کنه → ریفچ کن
  useEffect(() => {
    if (selectedSite?.site_url) {
      refetch()
    }
  }, [selectedSite?.site_url, refetch])

  const categoryOptions =
    categories?.map(c => ({
      value: String(c.id),
      label: c.name
    })) || []


  return (
    <Controller
      name="wordpress_category_id"
      control={control}
      render={
        ({ field }) => (
          <CustomSelect
            field={field}
            label="دسته‌بندی مقاله"
            emptyOptionLabel={selectedSite ? "یک دسته‌بندی انتخاب کنید" : "ابتدا یک سایت انتخاب کنید"}
            options={categoryOptions}
            isLoading={isLoading}
            error={error || fetchError?.message}
            labelIcon={<Earth size={17} />}
          />
        )
      }
    />
  )
}

export default ArticleCategorySelect