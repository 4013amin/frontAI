"use client"
import { Controller } from "react-hook-form"
import dynamic from "next/dynamic"
import { useRef } from "react"

const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false })

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

  const config: Partial<any> = {
    readonly: false,
    toolbarButtonSize: "middle",
    buttons: [
      "bold",
      "italic",
      "underline",
      "ul",
      "ol",
      "link",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "undo",
      "redo",
      "source" 
    ],
    showXPathInStatusbar: false,
    // showCharsCounter: false,
    // showWordsCounter: false,
    // showStatusbar: false,
    // askBeforePasteHTML: false,
    // askBeforePasteFromWord: false,
    // enableSpeechRecognition: false,
    contextMenu: [
      "undo",
      "redo",
      "cut",
      "copy",
      "paste",
      "link"
    ],
    removeButtons: "font,fontsize,brush,paragraph,spellcheck" 
  }

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
              config={config}
            />
          )
        }
      />
    </div>
  )
}