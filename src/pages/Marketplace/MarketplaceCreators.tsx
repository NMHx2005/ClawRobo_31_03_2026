import { useId, useMemo, useState } from 'react'
import { MARKETPLACE_CREATORS } from './marketplaceCreatorsData'

function SearchIcon() {
  return (
    <svg className="marketplace-search-icon" width={24} height={24} viewBox="0 0 24 24" aria-hidden>
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth={2} fill="none" />
      <path d="M20 20l-4.3-4.3" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
    </svg>
  )
}

function FireIcon() {
  const gradId = useId().replace(/:/g, '')
  return (
    <svg className="creator-card-fire-icon" width={20} height={20} viewBox="0 0 20 20" aria-hidden>
      <defs>
        <linearGradient id={gradId} x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#006c4d" />
          <stop offset="100%" stopColor="#48d19f" />
        </linearGradient>
      </defs>
      <path
        fill={`url(#${gradId})`}
        d="M10 2c-.5 2-2 3.2-2 5.2 0 1.8 1 3.3 2.5 4.1C9 13.8 8 15.8 8 17.5c0 .5.2 1 .5 1.5h7c.3-.5.5-1 .5-1.5 0-1.7-1-3.7-2.5-6.2C15.5 10.5 17 9 17 7.2c0-2-1.5-3.2-2-5.2-.8 1.5-2.2 2.5-3.5 3.5C11.2 4.5 10.8 3.2 10 2z"
      />
    </svg>
  )
}

function StarIcon() {
  return (
    <svg className="creator-card-star-icon" width={20} height={20} viewBox="0 0 24 24" aria-hidden>
      <path
        fill="#ffb800"
        d="m12 17.27 6.18 3.73-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"
      />
    </svg>
  )
}

const MarketplaceCreators = () => {
  const [search, setSearch] = useState('')

  const visible = useMemo(() => {
    const q = search.trim().toLowerCase()
    if (!q) return MARKETPLACE_CREATORS
    return MARKETPLACE_CREATORS.filter((c) => {
      const hay = `${c.name} ${c.role} ${c.bio}`.toLowerCase()
      return hay.includes(q)
    })
  }, [search])

  return (
    <section className="marketplace-creators" aria-labelledby="marketplace-creators-heading">
      <div className="marketplace-creators-inner">
        <div className="marketplace-creators-header">
          <h2 id="marketplace-creators-heading" className="marketplace-creators-title">
            Featured Creators
          </h2>
          <button type="button" className="marketplace-creators-view-all">
            <span>View All Creators</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 3L8.285 3.6965L12.075 7.5H2V8.5H12.075L8.285 12.2865L9 13L14 8L9 3Z" fill="#141A1A" />
            </svg>

          </button>
        </div>

        <div className="marketplace-creators-toolbar">
          <label className="marketplace-search">
            <SearchIcon />
            <input
              type="search"
              placeholder="Find Creators..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              autoComplete="off"
            />
          </label>
        </div>

        <div className="marketplace-creator-grid">
          {visible.map((c) => (
            <article
              key={c.id}
              className={`creator-card ${c.featured ? 'creator-card--featured' : ''}`}
            >
              <div className="creator-card-body">
                <div className="creator-card-infor">
                  <div className="creator-card-avatar" aria-hidden>
                    {c.initials}
                  </div>
                  <div className="creator-card-id">
                    <p className="creator-card-name">{c.name}</p>
                    <p className="creator-card-role">{c.role}</p>
                  </div>
                </div>
                <p className="creator-card-bio">{c.bio}</p>
                <div className="creator-card-stats">
                  <div className="creator-card-stat">
                    <FireIcon />
                    <span>{c.listings} listing</span>
                  </div>
                  <div className="creator-card-stat">
                    <StarIcon />
                    <span>{c.rating}</span>
                  </div>
                </div>
              </div>
              <div className="creator-card-footer">
                <button type="button" className="creator-card-profile-link">
                  View PROFILE
                </button>
              </div>
            </article>
          ))}
        </div>

        {visible.length === 0 ? (
          <p className="marketplace-creators-empty">No creators match your search.</p>
        ) : null}
      </div>
    </section>
  )
}

export default MarketplaceCreators
