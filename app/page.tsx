"use client"

import { useState, useEffect } from "react"
import Button from "@/components/Button/Button"
import styles from "./page.module.css"

export default function Home() {
  const [theme, setTheme] = useState<"light" | "dark">("dark")
  const [isLoading, setIsLoading] = useState(false)
  const [selectedFont, setSelectedFont] = useState<string>("Inter, sans-serif")

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [theme])

  useEffect(() => {
    document.body.style.fontFamily = selectedFont
  }, [selectedFont])

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  const handleLoadingDemo = () => {
    setIsLoading(true)
    setTimeout(() => setIsLoading(false), 2000)
  }

  return (
    <div className={`${styles.container} ${styles[theme]}`}>
      <header className={styles.header}>
        <h1 className={styles.title}>GRC Next Button Component</h1>
        <p className={styles.subtitle}>GRC Next design system</p>
        <div className={styles.controls}>
          <select
            className={styles.fontSelect}
            value={selectedFont}
            onChange={(e) => setSelectedFont(e.target.value)}
            aria-label="Select font"
          >
            <option value="Inter, sans-serif">Inter Variable</option>
            <option value="'Noto Sans', sans-serif">Noto Sans</option>
            <option value="'IBM Plex Sans', sans-serif">IBM Plex Sans</option>
            <option value="'Source Sans 3', sans-serif">Source Sans 3</option>
          </select>
          <Button variant="ghost" size="sm" onClick={toggleTheme} leadingIcon={<i className="fas fa-moon" />}>
            {theme === "light" ? "Dark" : "Light"} Mode
          </Button>
        </div>
      </header>

      <main className={styles.main}>
        {/* Variants Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Variants</h2>
          <div className={styles.grid}>
            <Button variant="primary" size="sm">
              Primary Button
            </Button>
            <Button variant="secondary" size="sm">
              Secondary Button
            </Button>
            <Button variant="outline" size="sm">
              Outline Button
            </Button>
            <Button variant="ghost" size="sm">
              Ghost Button
            </Button>
            <Button variant="destructive" size="sm">
              Destructive Button
            </Button>
          </div>
        </section>

        {/* With Icons Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>With Icons</h2>
          <div className={styles.grid}>
            <Button variant="primary" size="sm" leadingIcon={<i className="fas fa-plus" />}>
              New Task
            </Button>
            <Button variant="secondary" size="sm" trailingIcon={<i className="fas fa-chevron-down" />}>
              View settings
            </Button>
            <Button variant="outline" size="sm" leadingIcon={<i className="fas fa-download bg-transparent" />}>
              Import / Export
            </Button>
            <Button variant="ghost" size="sm" leadingIcon={<i className="fas fa-search" />}>
              Search
            </Button>
          </div>
        </section>

        {/* Icon Only Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Icon Only</h2>
          <div className={styles.grid}>
            <Button variant="primary" size="sm" iconOnly aria-label="Add new item">
              <i className="fas fa-plus" />
            </Button>
            <Button variant="secondary" size="sm" iconOnly aria-label="Settings">
              <i className="fas fa-cog" />
            </Button>
            <Button variant="outline" size="sm" iconOnly aria-label="Search">
              <i className="fas fa-search" />
            </Button>
            <Button variant="ghost" size="sm" iconOnly aria-label="More options">
              <i className="fas fa-ellipsis-h" />
            </Button>
          </div>
        </section>

        {/* With Keyboard Hints Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>With Keyboard Hints</h2>
          <div className={styles.grid}>
            <Button variant="primary" size="sm" kbdHint="⌘↵">
              Save
            </Button>
            <Button variant="secondary" size="sm" kbdHint="ESC">
              Cancel
            </Button>
            <Button
              variant="outline"
              size="sm"
              leadingIcon={<i className="fas fa-search bg-transparent" />}
              kbdHint="⌘K"
            >
              Quick actions
            </Button>
            <Button variant="ghost" size="sm" kbdHint="⌘N">
              New
            </Button>
          </div>
        </section>

        {/* Loading States Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Loading States</h2>
          <div className={styles.grid}>
            <Button variant="primary" size="sm" isLoading={isLoading} onClick={handleLoadingDemo}>
              Save Changes
            </Button>
            <Button variant="secondary" size="sm" isLoading={isLoading} leadingIcon={<i className="fas fa-download" />}>
              Download
            </Button>
            <Button variant="outline" size="sm" isLoading={isLoading}>
              Processing
            </Button>
          </div>
        </section>

        {/* Disabled States Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Disabled States</h2>
          <div className={styles.grid}>
            <Button variant="primary" size="sm" disabled>
              Primary Disabled
            </Button>
            <Button variant="secondary" size="sm" disabled>
              Secondary Disabled
            </Button>
            <Button variant="outline" size="sm" disabled>
              Outline Disabled
            </Button>
            <Button variant="ghost" size="sm" disabled>
              Ghost Disabled
            </Button>
          </div>
        </section>

        {/* Real-world Examples Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Real-world Examples</h2>

          <div className={styles.example}>
            <h3 className={styles.exampleTitle}>Modal Actions</h3>
            <div className={styles.modalActions}>
              <Button variant="ghost" size="sm" kbdHint="ESC">
                Cancel
              </Button>
              <Button variant="primary" size="sm" kbdHint="⌘↵">
                Save
              </Button>
            </div>
          </div>

          <div className={styles.example}>
            <h3 className={styles.exampleTitle}>Toolbar Actions</h3>
            <div className={styles.toolbar}>
              <Button variant="outline" size="sm" leadingIcon={<i className="fas fa-download bg-transparent" />}>
                Import / Export
              </Button>
              <Button variant="primary" size="sm" leadingIcon={<i className="fas fa-plus" />}>
                New Person
              </Button>
            </div>
          </div>

          <div className={styles.example}>
            <h3 className={styles.exampleTitle}>Action Bar</h3>
            <div className={styles.actionBar}>
              <span className={styles.selectionCount}>14 selected</span>
              <div className={styles.actions}>
                <Button variant="ghost" size="sm" leadingIcon={<i className="fas fa-list" />}>
                  Add to list
                </Button>
                <Button variant="ghost" size="sm" leadingIcon={<i className="fas fa-envelope" />}>
                  Send email
                </Button>
                <Button variant="ghost" size="sm" leadingIcon={<i className="fas fa-play" />}>
                  Run workflow
                </Button>
                <Button variant="primary" size="sm" trailingIcon={<i className="fas fa-chevron-down" />}>
                  Open record
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
