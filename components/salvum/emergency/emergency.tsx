import cn from "classnames"
import Image from "next/image"
import { ComponentType, FC, ReactNode, ReactNodeArray } from "react"
import { IconType } from "react-icons"
import { IoOpenOutline } from "react-icons/io5"
import { IoCallOutline, IoChatbubblesOutline } from "react-icons/io5"

import Breathe from "../breath"
import React from "react"

interface Props {
  children?: ReactNode | ReactNodeArray
  className?: string
}

export const Container: FC<Props> = ({ children, className }) => (
  <div className={cn("emergency-container", className)}>{children}</div>
)

interface SectionProps extends Props {
  transparent?: boolean
}
export const Section: FC<SectionProps> = ({
  children,
  className,
  transparent,
}) => (
  <div
    className={cn("card", "emergency-section", className, {
      ["transparent"]: transparent,
    })}
  >
    {children}
  </div>
)

interface RowLinkProps {
  label: string
  href: string
  icon?: IconType
  marginTop?: number | string
}
export const RowLink: FC<RowLinkProps> = ({ label, href, icon, marginTop }) => {
  const Icon = icon ?? IoOpenOutline

  return (
    <a
      className="rowLink"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        marginTop: marginTop ?? 0,
      }}
    >
      <p>{label}</p>
      <Icon size={15} />
    </a>
  )
}

export const PeerSupportResourcesSection: FC<SectionProps> = (props) => (
  <Section {...props}>
    <h2>Peer Support Resources</h2>
    <RowLink
      label="Fireside Project's Calling Line"
      href="tel:+16234737433"
      icon={IoCallOutline}
    />
    <br/>
    <RowLink
      label="Fireside Project's Texting Line"
      href="sms:+16234737433"
      icon={IoChatbubblesOutline}
    />
    <br/>
    <RowLink label="TripSit's Internet Chat" href="https://chat.tripsit.me" />
  </Section>
)

interface SignsProps {
  signs: {
    icon: ComponentType<{ size: number; color: string }>
    label: string
  }[]
}
export const Signs: FC<SignsProps> = ({ signs }) => (
  <div className="signs">
    {signs.map(({ icon: Icon, label }) => (
      <div key={label} className="sign">
        <div className="signIconWrapper">
          <Icon size={40} color="#ffffff" />
        </div>
        <p className="text">{label}</p>
      </div>
    ))}
  </div>
)

export const RecoveryPositionSection: FC<SectionProps> = (props) => (
  <Section {...props}>
    <h2>Recovery position</h2>
    <p className="white">
      If they are unconscious, or if you must leave them alone (even for a
      minute), place them in the recovery position so they cannot choke on their
      own vomit.
    </p>

    <Image
      src="/svg/recovery_position.svg"
      alt="Recovery position illustration"
      width={400}
      height={150}
    />

    <li>
      Ensure their airway is clear (remove anything inside their mouth).
    </li>
    <li>Lay them on their side.</li>
    <li>
      Bend the knee that is higher up in the air over their body to prevent
      them from rolling over.
    </li>
    <li>Turn their face to the side, optionally resting it on their arm.</li>
    <li>Position their chin up so their throat is open.</li>


    <RowLink
      label="Photograph by Rama, Wikimedia Commons, Cc-by-sa-2.0-fr"
      href="https://commons.wikimedia.org/wiki/File:Recovery_position.svg"
      marginTop="1rem"
    />
  </Section>
)

export const BreatheSection: FC<SectionProps> = (props) => (
  <Section className="breatheSection" {...props}>
    <h2>Breathing exercise</h2>
    <Breathe smaller />
  </Section>
)