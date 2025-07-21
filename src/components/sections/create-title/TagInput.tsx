"use client"

import React, { useState, useImperativeHandle, forwardRef } from "react"
import { X } from "lucide-react"
import { useController, Control } from "react-hook-form"
import { Input } from "@/components/shadcn/Input"
import { Badge } from "@/components/shadcn/Badge"

export interface TagInputHandle {
  flushInputToTags: () => void
}

interface TagInputProps {
  name: string
  control: Control<any>
}

const TagInput = forwardRef<TagInputHandle, TagInputProps>(({ name, control }, ref) => {
  const { field, fieldState: { invalid, error } } = useController({ name, control })

  const tags: string[] = field.value ? field.value.split(",") : []
  const [inputValue, setInputValue] = useState("")

  const updateTags = (newTags: string[]) => {
    field.onChange(newTags.join(","))
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue.trim()) {
      e.preventDefault()
      addInputToTags()
    }
  }

  const addInputToTags = () => {
    const trimmed = inputValue.trim()

    // Only add tags with at least 3 characters and avoid duplicates
    if (trimmed.length < 3 || tags.includes(trimmed)) return

    updateTags([...tags, trimmed])
    setInputValue("")
  }

  const removeTag = (tagToRemove: string) => {
    updateTags(tags.filter(tag => tag !== tagToRemove))
  }

  // Expose method to flush input value to tags manually
  useImperativeHandle(ref, () => ({
    flushInputToTags: () => {
      addInputToTags()
    }
  }))

  return (
    <div className="space-y-2 mt-5">
      <Input
        type="text"
        placeholder="کلمه کلیدی را وارد کرده و Enter بزنید..."
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        className={
          `bg-white text-sm dark:bg-zinc-900 border-blue-300 dark:border-blue-900 ${
            invalid ? "border-red-500 focus-visible:ring-red-500" : ""
          }`
        }
      />

      {/* Show error message if invalid */}
      {
        invalid && error?.message && (
          <p className="text-sm text-red-500 mt-1">{error.message}</p>
        )
      }

      {
        tags.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-2">
            {
              tags.map((tag, index) => (
                <Badge
                  key={index}
                  className="flex items-center gap-1 p-2 cursor-pointer hover:!bg-red-500 dark:hover:text-white"
                  onClick={() => removeTag(tag)}
                >
                  {tag}

                  <X className="w-3 h-3 mr-2" />
                </Badge>
              ))
            }
          </div>
        )
      }
    </div>
  )
})

TagInput.displayName = "TagInput"

export default TagInput