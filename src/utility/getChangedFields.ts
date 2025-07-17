export function getChangedFields<T extends Record<string, any>>(
  formData: T,
  initialData: Partial<T>,
  forceIncludeFields: (keyof T)[] = []
): Partial<T> {
  const updatedFields: Partial<T> = {}

  for (const key in formData) {
    const formValue = formData[key]
    const initialValue = initialData[key]

    const isForced = forceIncludeFields.includes(key as keyof T)

    // If the field is in forceIncludeFields (e.g. app_password)
    if (isForced) {
      if (
        formValue !== undefined &&
        formValue !== null &&
        formValue !== "" &&
        !(typeof formValue === "string" && formValue.trim() === "")
      ) {
        updatedFields[key] = formValue
      }
      continue
    }

    // If one value is empty and the other is not
    const oneIsEmpty = (formValue == null || formValue === "") && (initialValue != null && initialValue !== "")
    const otherIsEmpty = (initialValue == null || initialValue === "") && (formValue != null && formValue !== "")

    if (oneIsEmpty || otherIsEmpty) {
      updatedFields[key] = formValue
      continue
    }

    // If both values are non-empty and differ
    if (
      typeof formValue === "object" && formValue !== null &&
      typeof initialValue === "object" && initialValue !== null
    ) {
      // Shallow compare for objects (can be replaced with deep compare if needed)
      if (JSON.stringify(formValue) !== JSON.stringify(initialValue)) {
        updatedFields[key] = formValue
      }
    }
    else if (formValue !== initialValue) {
      updatedFields[key] = formValue
    }
  }

  return updatedFields
}