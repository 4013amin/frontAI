"use client"
import { FolderTree } from "lucide-react"
import { Controller, Control } from "react-hook-form"
import { useEffect, useState } from "react"
import { toast } from "sonner"
import dynamic from "next/dynamic"
import { useWordPressCategories } from "../hooks/useWordPressCategories"
import CustomSelect from "@/components/ui/CustomSelect"
import { ISite } from "@/types/globa_types"

// dynamic import کامپوننت دیالوگ
const NetworkErrorDialog = dynamic(() => import("./NetworkErrorDialog"), { ssr: false })

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
  } =
    useWordPressCategories(selectedSite?.site_url || "")

  const [showDialog, setShowDialog] = useState(false)

  // Handle Network Error
  useEffect(() => {
    if (fetchError && !isLoading && fetchError.message === "Network Error") {
      toast.error("دسته‌بندی‌ها دریافت نشدند!")
      setShowDialog(true)
    }
  }, [fetchError, isLoading])

  useEffect(() => {
    if (selectedSite?.site_url) {
      refetch()
    }
  }, [selectedSite?.site_url, refetch])

  const categoryOptions =
    categories?.map(c => ({ value: String(c.id), label: c.name })) || []

  const errorMessage =
    fetchError && !isLoading
      ? fetchError.message !== "Network Error"
        ? fetchError.message
        : "خطای بارگیری دسته‌بندی‌ها!"
      : error || undefined

  return (
    <>
      <Controller
        name="category_id"
        control={control}
        render={
          ({ field }) => (
            <CustomSelect
              field={field}
              label="دسته‌بندی مقاله"
              emptyOptionLabel={
                isLoading
                  ? "در حال بارگذاری..."
                  : selectedSite
                    ? "یک دسته‌بندی انتخاب کنید"
                    : "ابتدا یک سایت انتخاب کنید"
              }
              options={categoryOptions}
              isLoading={isLoading}
              error={errorMessage}
              labelIcon={<FolderTree size={17} />}
              disabled={!selectedSite}
            />
          )
        }
      />

      {/* dynamic network dialog*/}
      {
        showDialog && (
          <NetworkErrorDialog
            open={showDialog}
            onOpenChange={setShowDialog}
            message={fetchError?.message}
          />
        )
      }
    </>
  )
}

export default ArticleCategorySelect