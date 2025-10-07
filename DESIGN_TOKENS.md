# GRC Next Design Token Structure

## Token Naming Convention

Based on Nathan Curtis's design token methodology, we use the following structure:

```
[namespace]-[category]-[concept]-[property]-[variant]-[state]-[mode]
```

**Example:** `grc-color-action-background-primary-hover-on-dark`

## Token Categories

### 1. Color Tokens

#### Primitive Colors (Base Palette)
```css
--grc-primitive-neutral-0: #ffffff
--grc-primitive-neutral-100: #f0f2f8  /* Blue-gray tint */
--grc-primitive-neutral-200: #e2e5ee
--grc-primitive-neutral-400: #98a0b5
--grc-primitive-neutral-600: #47526b
--grc-primitive-neutral-900: #0d1630

--grc-primitive-blue-400: #4A9EFF
--grc-primitive-blue-500: #0066FF
--grc-primitive-blue-600: #0052CC
```

#### Semantic Colors (Purpose-driven)
```css
/* Action/Interactive */
--grc-color-action-background-primary: var(--grc-primitive-blue-500)
--grc-color-action-background-primary-hover: var(--grc-primitive-blue-600)
--grc-color-action-text-primary: var(--grc-primitive-neutral-0)

/* Feedback */
--grc-color-feedback-background-success: #10b981
--grc-color-feedback-background-error: #ef4444
--grc-color-feedback-background-warning: #f59e0b

/* UI Controls */
--grc-color-ui-controls-background-secondary: var(--grc-primitive-neutral-100)
--grc-color-ui-controls-border-outline: var(--grc-primitive-neutral-300)
```

### 2. Spacing Tokens

```css
--grc-space-0-5x: 4px   /* 0.5 × base */
--grc-space-1x: 8px     /* 1 × base */
--grc-space-1-5x: 12px  /* 1.5 × base */
--grc-space-2x: 16px    /* 2 × base */
--grc-space-3x: 24px    /* 3 × base */
--grc-space-4x: 32px    /* 4 × base */
```

### 3. Typography Tokens

```css
/* Font Families */
--grc-font-family-sans: 'Inter', sans-serif
--grc-font-family-mono: 'IBM Plex Mono', monospace

/* Font Sizes */
--grc-font-size-xs: 12px
--grc-font-size-sm: 14px
--grc-font-size-base: 16px
--grc-font-size-lg: 18px
--grc-font-size-xl: 20px

/* Font Weights */
--grc-font-weight-normal: 400
--grc-font-weight-medium: 500
--grc-font-weight-semibold: 600
--grc-font-weight-bold: 700

/* Line Heights */
--grc-line-height-tight: 1.25
--grc-line-height-normal: 1.5
--grc-line-height-relaxed: 1.75
```

### 4. Border Radius Tokens

```css
/* iOS-style continuous corners */
--grc-radius-sm: 8px
--grc-radius-md: 12px
--grc-radius-lg: 14px   /* iOS squircle approximation */
--grc-radius-xl: 16px
--grc-radius-full: 9999px
```

### 5. Shadow Tokens

```css
/* Uniform shadows (no directional offset) */
--grc-shadow-sm: 0 0 2px rgba(0, 0, 0, 0.05)
--grc-shadow-md: 0 0 4px rgba(0, 0, 0, 0.1)
--grc-shadow-lg: 0 0 8px rgba(0, 0, 0, 0.15)

/* Dark mode shadows */
--grc-shadow-sm-dark: 0 0 2px rgba(0, 0, 0, 0.3)
--grc-shadow-md-dark: 0 0 4px rgba(0, 0, 0, 0.4)
```

### 6. Component-Specific Tokens

#### Button Component Example
```css
/* Button - Primary Variant */
--grc-button-primary-background: var(--grc-color-action-background-primary)
--grc-button-primary-background-hover: var(--grc-color-action-background-primary-hover)
--grc-button-primary-text: var(--grc-primitive-neutral-0)
--grc-button-primary-border-radius: var(--grc-radius-lg)

/* Button - Size: Small */
--grc-button-sm-height: 32px
--grc-button-sm-padding-x: 10px
--grc-button-sm-padding-y: 6px
--grc-button-sm-font-size: var(--grc-font-size-sm)
--grc-button-sm-gap: 6px

/* Button - Keyboard Hint */
--grc-button-kbd-background: rgba(255, 255, 255, 0.1)
--grc-button-kbd-padding: 2px 6px
--grc-button-kbd-border-radius: 4px
```

## Theme Structure

### Light Theme
```css
:root {
  --grc-background: oklch(0.985 0.005 240);  /* Subtle blue-white */
  --grc-foreground: oklch(0.145 0.008 240);  /* Blue-black text */
  --grc-muted: oklch(0.708 0.01 240);        /* Blue-gray */
}
```

### Dark Theme
```css
.dark {
  --grc-background: #171c26;  /* Dark blue-gray */
  --grc-foreground: #EEEFF1;  /* Off-white with blue tint */
  --grc-muted: #47526b;       /* Medium blue-gray */
}
```

## Key Principles

1. **Blue-Gray Palette**: All neutral colors have a subtle blue tint (not pure gray)
2. **Namespace Prefix**: All tokens start with `grc-` for GRC Next
3. **Semantic Naming**: Use purpose-driven names (action, feedback, ui-controls) not just colors
4. **Mode Support**: Separate tokens for light/dark themes using `-on-light` / `-on-dark` suffixes
5. **Component Isolation**: Component-specific tokens reference semantic tokens, not primitives directly
6. **iOS-Inspired**: Larger border radius (14px) for squircle effect, uniform shadows

## Token Hierarchy

```
Primitive Tokens (Base palette)
    ↓
Semantic Tokens (Purpose-driven)
    ↓
Component Tokens (Specific use cases)
```

**Example Flow:**
```
#0066FF (primitive)
  → --grc-primitive-blue-500
    → --grc-color-action-background-primary
      → --grc-button-primary-background
```

## Next Steps for Discussion

1. **Expand color concepts**: Add tokens for data visualization, commerce, status indicators
2. **Component groups**: Define tokens for form controls, navigation, cards, modals
3. **Responsive tokens**: Media query breakpoints and responsive spacing
4. **Animation tokens**: Duration, easing functions for transitions
5. **Elevation system**: Z-index tokens for layering components
6. **Icon sizing**: Standardized icon size tokens (16px, 20px, 24px)
