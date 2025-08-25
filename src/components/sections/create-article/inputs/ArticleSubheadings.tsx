import React, { useState, useEffect } from "react"
import { Controller } from "react-hook-form"
import { AlignLeft } from "lucide-react"
import { Input } from "@/components/shadcn/Input"

const ArticleSubheadings = ({ control }: any) => {
  const [inputValue, setInputValue] = useState("")
  const [subheadings, setSubheadings] = useState<string[]>([])

  useEffect(() => {
    // If input has value and form is submitted, add value to subheadings array
    const handleFormSubmit = () => {
      if (inputValue.trim()) {
        setSubheadings(prev => [...prev, inputValue.trim()])
        setInputValue("")
      }
    }

    // Find parent form element
    const form = document.querySelector("form")
    if (form) {
      form.addEventListener("submit", handleFormSubmit)
    }
    return () => {
      if (form) {
        form.removeEventListener("submit", handleFormSubmit)
      }
    }
  }, [inputValue])

  useEffect(() => {
    // Sync subheadings with form field
    if (control?._formValues?.subheadings !== subheadings) {
      control._formValues.subheadings = subheadings
    }
  }, [subheadings, control])

  // Add input value to subheadings array
  const handleAdd = () => {
    const val = inputValue.trim()
    if (val) {
      setSubheadings(prev => [...prev, val])
      setInputValue("")
    }
  }

  return (
    <>
      <Controller
        control={control}
        name="subheadings"
        render={() => <></>}
      />

      <div className="w-full">
        <label className="text-sm flex items-center mb-2 text-zinc-500 gap-2 font-medium">
          <AlignLeft size={17} />
          زیرتیترها (اختیاری)
        </label>

        <Input
          type="text"
          className="w-full border rounded-md p-2 min-h-[40px]"
          placeholder="هر زیرتیتر را وارد کنید و اینتر بزنید"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          onKeyDown={
            e => {
              if (e.key === "Enter") {
                handleAdd()
                e.preventDefault()
              }
            }
          }
        />

        {
          subheadings.length > 0 && (
            <ul className="mt-2 mb-2 list-disc pr-4 text-sm text-zinc-700">
              {
                subheadings.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 my-2 dark:text-white">
                    <span>{item}</span>

                    <button
                      type="button"
                      className="px-2 py-0.5 rounded border border-zinc-700 text-zinc-500 text-xs
                       hover:bg-red-600 cursor-pointer hover:text-white dark:!border-zinc-500 dark:!text-red-400
                       dark:hover:text-white dark:hover:bg-red-600/40"
                      onClick={() => setSubheadings(subheadings.filter((_, i) => i !== idx))}
                    >حذف
                    </button>
                  </li>
                ))
              }
            </ul>
          )
        }
      </div>
    </>
  )
}

export default ArticleSubheadings