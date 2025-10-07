"use client"

import type React from "react"
import { forwardRef, useEffect, useState } from "react"
import styles from "./Button.module.css"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "destructive"
  size?: "sm"
  leadingIcon?: React.ReactNode
  trailingIcon?: React.ReactNode
  iconOnly?: boolean
  kbdHint?: string
  isLoading?: boolean
  forceHover?: boolean
  forceFocus?: boolean
  forceActive?: boolean
  children?: React.ReactNode
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "sm",
      leadingIcon,
      trailingIcon,
      iconOnly = false,
      kbdHint,
      isLoading = false,
      disabled = false,
      forceHover = false,
      forceFocus = false,
      forceActive = false,
      className = "",
      children,
      ...props
    },
    ref,
  ) => {
    const [theme, setTheme] = useState<"light" | "dark">("dark")

    useEffect(() => {
      const isDark = document.documentElement.classList.contains("dark")
      setTheme(isDark ? "dark" : "light")

      const observer = new MutationObserver(() => {
        const isDark = document.documentElement.classList.contains("dark")
        setTheme(isDark ? "dark" : "light")
      })

      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["class"],
      })

      return () => observer.disconnect()
    }, [])

    const buttonClasses = [
      styles.button,
      styles[variant],
      styles[size],
      styles[theme],
      iconOnly && styles.iconOnly,
      isLoading && styles.loading,
      forceHover && styles.forceHover,
      forceFocus && styles.forceFocus,
      forceActive && styles.forceActive,
      className,
    ]
      .filter(Boolean)
      .join(" ")

    return (
      <button
        ref={ref}
        className={buttonClasses}
        disabled={disabled || isLoading}
        aria-disabled={disabled || isLoading}
        {...props}
      >
        {isLoading && (
          <span className={styles.spinner}>
            <i className="fas fa-circle-notch fa-spin" />
          </span>
        )}

        {!isLoading && leadingIcon && <span className={styles.icon}>{leadingIcon}</span>}

        {!iconOnly && children && <span className={styles.label}>{children}</span>}

        {iconOnly && !isLoading && children}

        {!isLoading && trailingIcon && <span className={styles.icon}>{trailingIcon}</span>}

        {kbdHint && !isLoading && <kbd className={styles.kbd}>{kbdHint}</kbd>}
      </button>
    )
  },
)

Button.displayName = "Button"

export default Button
