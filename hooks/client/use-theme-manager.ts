'use client'

import { useTheme } from 'next-themes'
import { useMemo } from 'react'

export const COLOR_THEMES = ['default', 'warm', 'cool', 'fluo', 'claude'] as const
export type ColorTheme = (typeof COLOR_THEMES)[number]

export const MODES = ['light', 'dark', 'system'] as const
export type Mode = (typeof MODES)[number]

type ThemeParts = {
    colorTheme: ColorTheme
    mode: Mode
}

export function useThemeManager () {
    const { theme, setTheme, resolvedTheme, systemTheme } = useTheme()

    /**
     * 安全解析 theme 字符串
     * 允许 fallback 给 default + system
     * 支持旧格式 `default`、`dark` 这种单独设置
     */
    const parsedTheme = useMemo((): ThemeParts => {
        if (!theme || typeof theme !== 'string') {
            return { colorTheme: 'default', mode: 'system' }
        }

        const parts = theme.split('-')
        if (parts.length === 2) {
            const [colorStr, modeStr] = parts
            const colorTheme = COLOR_THEMES.includes(colorStr as ColorTheme) ? (colorStr as ColorTheme) : 'default'
            const mode = MODES.includes(modeStr as Mode) ? (modeStr as Mode) : 'system'
            return { colorTheme, mode } as ThemeParts
        }

        // fallback：无 `-` 的值，如仅为 'dark' 或 'default'
        const fallback = MODES.includes(theme as Mode)
            ? { colorTheme: 'default' as const, mode: theme as Mode }
            : { colorTheme: COLOR_THEMES.includes(theme as ColorTheme) ? (theme as ColorTheme) : 'default', mode: 'system' as const }

        return fallback
    }, [theme])

    const { colorTheme, mode } = parsedTheme

    /**
     * 拼接完整 theme 字符串
     */
    const generateTheme = (newMode: Mode, newColor: ColorTheme): string => {
        return `${newColor}-${newMode}`
    }

    /**
     * 更新主题色
     */
    const updateColorTheme = (newColorTheme: ColorTheme) => {
        setTheme(generateTheme(mode, newColorTheme))
    }

    /**
     * 更新明暗模式
     */
    const updateMode = (newMode: Mode) => {
        setTheme(generateTheme(newMode, colorTheme))
    }

    /**
     * 获取实际应用的明暗模式（resolved）
     */
    const actualMode = useMemo<Exclude<Mode, 'system'>>(() => {
        return mode === 'system' ? (systemTheme === 'dark' ? 'dark' : 'light') : mode
    }, [mode, systemTheme])

    return {
        colorTheme,
        mode,
        actualMode,
        updateColorTheme,
        updateMode,
        currentTheme: theme,
        resolvedTheme,
    }
}
