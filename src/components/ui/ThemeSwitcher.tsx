"use client"
import React, { memo, useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "../shadcn/Button"
import { IThemes } from "../types"

const ThemeSwitcher = () => {
  const { setTheme } = useTheme()
  const [currentTheme, setCurrentTheme] = useState<IThemes>("light")

  const changeThemeHandler = (): void => {
    if (currentTheme === "dark") {
      setCurrentTheme("light")
      setTheme("light")
    }
    if (currentTheme === "light") {
      setCurrentTheme("dark")
      setTheme("dark")
    }
  }

  useEffect(() => {
    const theme = localStorage.getItem("theme") as IThemes
    if (theme) {
      setCurrentTheme(theme)
      setTheme(theme)
    }
    else {
      setCurrentTheme("light")
      setTheme("light")
    }
  }, [])

  return (
    <Button variant="outline" onClick={changeThemeHandler}>
      {currentTheme === "dark" ? <Sun /> : <Moon />}
    </Button>
  )
}

export default memo(ThemeSwitcher)