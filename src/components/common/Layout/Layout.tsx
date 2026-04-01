import type { ReactNode } from 'react'
import Navigation from '../Navigation/Navigation'
import './Layout.css'

interface LayoutProps {
  title: string
  subtitle: string
  children: ReactNode
}

const Layout = ({ title, subtitle, children }: LayoutProps) => {
  return (
    <div className="page-shell">
      <header className="page-header">
        <Navigation />
        <div className="page-hero-text">
          <p className="header-eyebrow">ClawRobo Platform</p>
          <h1 className="header-title">{title}</h1>
          <p className="header-subtitle">{subtitle}</p>
        </div>
      </header>
      <main className="page-content">{children}</main>
    </div>
  )
}

export default Layout
