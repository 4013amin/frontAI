"use client"

import React, { useCallback, useEffect, useState } from "react"
import { useDropzone } from "react-dropzone"
import { UseFormRegisterReturn } from "react-hook-form"
import { Pencil, UploadCloud } from "lucide-react"

interface ImageUploaderProps {
  field: UseFormRegisterReturn
  error?: string
  defaultPreview?: string
}

const MAX_FILE_SIZE = 5 * 1024 * 1024 // 5MB

const ACCEPTED_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
  "image/heic",
  "image/heif"
]

const ImageUploader: React.FC<ImageUploaderProps> = ({
  field,
  error,
  defaultPreview
}) => {
  const [preview, setPreview] = useState<string | null>(defaultPreview || null)
  const [localError, setLocalError] = useState<string | null>(null)

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0]

    if (file) {
      // Validate file type
      if (!ACCEPTED_TYPES.includes(file.type)) {
        setLocalError("فرمت پشتیبانی نشده. فقط فایل های JPG, PNG, WebP or HEIC مجاز هستند.")
        return
      }

      // Validate file size
      if (file.size > MAX_FILE_SIZE) {
        setLocalError("سایز فایل انتخاب شده باید کمتر از 5 مگابایت باشد.")
        return
      }

      // Everything is valid — set preview and update form field
      const previewUrl = URL.createObjectURL(file)
      setPreview(previewUrl)
      setLocalError(null)
      field.onChange({ target: { name: field.name, value: file } })
    }
  }, [field])

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    open
  } = useDropzone({
    onDrop,
    accept: ACCEPTED_TYPES.reduce((acc, type) => ({ ...acc, [type]: [] }), {}),
    maxFiles: 1,
    noClick: true,      // Disable default click behavior — we control it manually
    noKeyboard: true    // Disable default keyboard behavior
  })

  // Cleanup object URL on unmount
  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview)
    }
  }, [preview])

  return (
    <div className="flex flex-col gap-2">
      <div
        {...getRootProps()}
        className={
          `
          relative border-2 border-dashed rounded-xl p-4 transition-all cursor-pointer
          ${isDragActive
      ? "border-blue-500 bg-blue-50" : 
      "border-zinc-300 dark:border-zinc-600 hover:bg-zinc-50 dark:hover:bg-zinc-900"}
        `
        }
      >
        <input {...getInputProps()} name={field.name} />

        {
          preview ?
            (
            // Show preview image with overlay edit button
              <div className="relative group">
                <img src={preview} alt="Preview" className="w-full h-60 object-cover rounded-xl shadow" />

                <div
                  className="absolute inset-0 bg-black/50 rounded-xl opacity-0 group-hover:opacity-100 
                transition flex items-center justify-center"
                >
                  <button
                    type="button"
                    onClick={open}
                    className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-1 
                    rounded-full text-sm flex items-center gap-1"
                  >
                    <Pencil size={16} />
                    ویرایش تصویر
                  </button>
                </div>
              </div>
              
            ) : 
            
            (
            // Default placeholder UI
              <div
                className="flex flex-col items-center justify-center h-40 text-zinc-500 text-center"
                onClick={open}
              >
                <UploadCloud size={32} className="mb-2" />

                <p>تصویر را بکشید یا کلید کنید</p>
              </div>
            )
        }
      </div>

      {/* Display error message if any */}
      {
        (localError || error) && (
          <p className="text-red-500 text-sm">{localError || error}</p>
        )
      }
    </div>
  )
}

export default ImageUploader