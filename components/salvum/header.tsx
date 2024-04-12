import cn from "classnames"
import Link from "next/link"
import { FC } from "react"
import { FiChevronLeft } from "react-icons/fi"

import React from "react"

interface Props {
  title: string
  backHref?: string
  centered?: boolean
}

const Header: FC<Props> = ({ title, backHref, centered }) => {
  const content = (
    <h1
      className={cn({
        "header-centered": centered,
        "hasBack": !!backHref,
      })}
    >
      {title}
    </h1>
  )

  return backHref ? (
    <Link href={backHref}>

        <FiChevronLeft size={30} />
        {content}
    </Link>
  ) : (
    <div className="header-container">{content}</div>
  )
}

export default Header