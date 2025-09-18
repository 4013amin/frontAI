"use client"
import { Controller } from "react-hook-form"
import JoditEditor from "jodit-react"
import { useRef } from "react"

type EditorProps = {
  name: string
  control: any
  label?: string
}

export default function TextEditor({
  name,
  control,
  label
}: EditorProps) {
  const editor = useRef(null)

  return (
    <div className="space-y-2">
      {label && <label className="font-medium">{label}</label>}

      <Controller
        name={name}
        control={control}
        render={
          ({ field }) => (
            <JoditEditor
              ref={editor}
              value={field.value || ""}
              onChange={newContent => field.onChange(newContent)}
            />
          )
        }
      />
    </div>
  )
}