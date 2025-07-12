import { User } from "lucide-react"
import React from "react"
import { Button } from "../shadcn/Button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/shadcn/DropdownMenu"

const UserAvatarDropbar = () => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button>
            <User />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>

          <DropdownMenuSeparator />

          <DropdownMenuItem>Profile</DropdownMenuItem>

          <DropdownMenuItem>Billing</DropdownMenuItem>

          <DropdownMenuItem>Team</DropdownMenuItem>

          <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

    </div>
  )
}

export default UserAvatarDropbar