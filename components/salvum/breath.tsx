import cn from "classnames"
import { FC, useEffect, useState } from "react"

import React from "react"

enum BreatheState {
  NotStarted,
  Inhale,
  HoldIn,
  Exhale,
  HoldOut,
}
const nextBreatheState: Record<BreatheState, BreatheState> = {
  [BreatheState.NotStarted]: BreatheState.Inhale,
  [BreatheState.Inhale]: BreatheState.HoldIn,
  [BreatheState.HoldIn]: BreatheState.Exhale,
  [BreatheState.Exhale]: BreatheState.HoldOut,
  [BreatheState.HoldOut]: BreatheState.Inhale,
}
const breatheTextMap: Record<BreatheState, string> = {
  [BreatheState.NotStarted]: "Get ready...",
  [BreatheState.Inhale]: "Inhale through your nose",
  [BreatheState.HoldIn]: "Hold",
  [BreatheState.Exhale]: "Exhale through your mouth",
  [BreatheState.HoldOut]: "Hold",
}
const breatheCountMap: Record<BreatheState, number> = {
  [BreatheState.NotStarted]: 3,
  [BreatheState.Inhale]: 4,
  [BreatheState.HoldIn]: 4,
  [BreatheState.Exhale]: 4,
  [BreatheState.HoldOut]: 4,
}

interface BreatheProps {
  smaller?: boolean
}

const Breathe: FC<BreatheProps> = ({ smaller }) => {
  const [breathingIn, setBreathingIn] = useState(false)
  const [breathingOut, setBreathingOut] = useState(false)
  const [count, setCount] = useState(breatheCountMap[BreatheState.NotStarted])
  const [instructions, setInstructions] = useState(
    breatheTextMap[BreatheState.NotStarted]
  )

  useEffect(() => {
    let t = 0
    let state: BreatheState = BreatheState.NotStarted
    const tick = () => {
      t++

      const topCount = state === BreatheState.NotStarted ? 3 : 4
      if (t >= topCount) {
        t = 0
        state = nextBreatheState[state]
        setCount(breatheCountMap[state])
        setInstructions(breatheTextMap[state])
        // update animation if necessary
        switch (state) {
          case BreatheState.Inhale:
            setBreathingIn(true)
            setBreathingOut(false)
            break
          case BreatheState.Exhale:
            setBreathingOut(true)
            setBreathingIn(false)
            break
          default:
            break
        }
      } else setCount(topCount - t)
    }

    const interval = setInterval(tick, 1100)
    return () => clearInterval(interval)
  }, [setBreathingIn, setBreathingOut, setCount])

  return (
    <div className="breatheContainer">
      <div
        className={cn("outer", {
          "breatheIn": breathingIn,
          "breatheOut": breathingOut,
        })}
      >
        <div className="middle">
          <div className="inner">
            <p>{count}</p>
          </div>
        </div>
      </div>

      <p className={cn("instructions", { ["smaller"]: smaller })}>
        {instructions}
      </p>
    </div>
  )
}

export default Breathe