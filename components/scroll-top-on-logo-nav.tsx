'use client'

import { useEffect } from 'react'

export const LOGO_NAV_FLAG = 'asiaedits:logo-nav'

export function ScrollTopOnLogoNav() {
  useEffect(() => {
    if (window.sessionStorage.getItem(LOGO_NAV_FLAG) !== '1') return
    window.sessionStorage.removeItem(LOGO_NAV_FLAG)

    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname)
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [])

  return null
}
