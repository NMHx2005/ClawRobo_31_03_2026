import { useMemo, useState } from 'react'
import {
  MARKETPLACE_FILTER_TAGS,
  MARKETPLACE_SKILL_CARDS,
  type MarketplaceSkillCard,
} from './marketplaceSkillsData'

function SearchIcon() {
  return (
    <svg className="marketplace-search-icon" width={24} height={24} viewBox="0 0 24 24" aria-hidden>
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth={2} fill="none" />
      <path d="M20 20l-4.3-4.3" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
    </svg>
  )
}

const STAR_PATH =
  'M11.5912 4.0595C11.1198 3.09117 9.71382 3.09117 9.24248 4.0595L7.79603 7.03114L4.46614 7.46144C3.38107 7.60166 2.94659 8.91256 3.74035 9.65124L6.17629 11.9181L5.56476 15.1557C5.36548 16.2107 6.50297 17.0209 7.46489 16.5091L10.4168 14.9384L13.3688 16.5091C14.3307 17.0209 15.4682 16.2107 15.2689 15.1557L14.6574 11.9181L17.0933 9.65124C17.8871 8.91256 17.4526 7.60166 16.3675 7.46144L13.0376 7.03114L11.5912 4.0595Z'

const STAR_GRAY = '#B8C0C6'
const STAR_GOLD = '#FFB800'

function SkillCardStar() {
  const [active, setActive] = useState(false)

  return (
    <button
      type="button"
      className="skill-card-star-btn"
      aria-label={active ? 'Remove from favorites' : 'Add to favorites'}
      aria-pressed={active}
      onClick={() => setActive((v) => !v)}
    >
      <svg className="skill-card-star-icon" width={20} height={20} viewBox="0 0 20 20" fill="none" aria-hidden>
        <path d={STAR_PATH} fill={active ? STAR_GOLD : STAR_GRAY} />
      </svg>
    </button>
  )
}

function matchesFilter(card: MarketplaceSkillCard, filter: string): boolean {
  if (filter === 'All') return true
  const direct = [
    'Claw-Fold',
    'Claw-Pick',
    'Claw-Inspect',
    'Claw-Sort',
    'Claw-Deliver',
    'Claw-Clean',
  ]
  if (direct.includes(filter)) return card.tag === filter
  return true
}

const MarketplaceSkills = () => {
  const [search, setSearch] = useState('')
  const [activeTag, setActiveTag] = useState<string>('All')

  const visibleCards = useMemo(() => {
    const q = search.trim().toLowerCase()
    return MARKETPLACE_SKILL_CARDS.filter((card) => {
      if (!matchesFilter(card, activeTag)) return false
      if (!q) return true
      const hay = `${card.title} ${card.description} ${card.tag}`.toLowerCase()
      return hay.includes(q)
    })
  }, [search, activeTag])

  return (
    <section className="marketplace-skills" aria-labelledby="marketplace-skills-heading">
      <div className="marketplace-skills-inner">
        <div className="marketplace-skills-header">
          <h2 id="marketplace-skills-heading" className="marketplace-skills-title">
            Operational Skills
          </h2>
          <button type="button" className="marketplace-skills-view-all">
            <span>View All Skills</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 3L8.285 3.6965L12.075 7.5H2V8.5H12.075L8.285 12.2865L9 13L14 8L9 3Z" fill="#141A1A" />
            </svg>

          </button>
        </div>

        <div className="marketplace-skills-toolbar">
          <label className="marketplace-search">
            <SearchIcon />
            <input
              type="search"
              placeholder="Find skills..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              autoComplete="off"
            />
          </label>

          <div className="marketplace-tag-row" role="tablist" aria-label="Filter by category">
            {MARKETPLACE_FILTER_TAGS.map((tag) => (
              <button
                key={tag}
                type="button"
                role="tab"
                aria-selected={activeTag === tag}
                className={`marketplace-filter-tag ${activeTag === tag ? 'is-active' : ''}`}
                onClick={() => setActiveTag(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        <div className="marketplace-card-grid">
          {visibleCards.map((card) => (
            <article
              key={card.id}
              className={`skill-card ${card.featured ? 'skill-card--featured' : ''}`}
            >
              <div className="skill-card-top">
                <div className="skill-card-head">
                  <span className="skill-card-type">{card.tag}</span>
                  <div className="skill-card-rating">
                    <SkillCardStar />
                    <span>{card.rating}</span>
                  </div>
                </div>
                <h3 className="skill-card-title">{card.title}</h3>
                <p className="skill-card-desc">
                  {card.description}
                  {card.descriptionExtra ? ` ${card.descriptionExtra}` : ''}
                </p>
              </div>

              <div className="skill-card-stats">
                <div className="skill-card-stat-row">
                  <span>Sold</span>
                  <span className="skill-card-stat-value skill-card-stat-value--accent">{card.sold}</span>
                </div>
                <div className="skill-card-stat-row">
                  <span>Cost</span>
                  <span className="skill-card-stat-value">{card.cost}</span>
                </div>
              </div>

              <div className="skill-card-footer">
                <div className="skill-card-author">
                  <span className="skill-card-avatar" aria-hidden>
                    {card.authorInitials}
                  </span>
                  <span className="skill-card-author-name">{card.author}</span>
                </div>
                <button type="button" className="skill-card-purchase">
                  Purchase
                </button>
              </div>
            </article>
          ))}
        </div>

        {visibleCards.length === 0 ? (
          <p className="marketplace-skills-empty">No skills match your filters.</p>
        ) : null}

        <nav className="marketplace-pagination" aria-label="Pagination">
          <button type="button" className="marketplace-page-btn" aria-label="Previous page" disabled>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.75 16.25L9.63125 15.3687L4.89375 10.625H17.5V9.375H4.89375L9.63125 4.63125L8.75 3.75L2.5 10L8.75 16.25Z" fill="#141A1A" />
            </svg>
          </button>
          <button type="button" className="marketplace-page-btn" aria-label="Next page" disabled>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.25 3.75L10.3562 4.62063L15.0938 9.375H2.5V10.625H15.0938L10.3562 15.3581L11.25 16.25L17.5 10L11.25 3.75Z" fill="#141A1A" />
            </svg>

          </button>
        </nav>
      </div>
    </section>
  )
}

export default MarketplaceSkills
