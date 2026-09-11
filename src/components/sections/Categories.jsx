import { travelCategories } from '../../data/siteData';
import SectionHeader from '../common/SectionHeader';

export default function Categories() {
  return <section className="section" id="packages"><div className="container"><SectionHeader eyebrow="More travel categories" title="Packages for every kind of journey"/><div className="category-grid">{travelCategories.map(cat => <CategoryCard key={cat.title} category={cat} />)}</div></div></section>;
}

function CategoryCard({ category }) {
  return <article className="category-card"><div className="category-icon">{category.icon}</div><h3>{category.title}</h3><p>{category.description}</p><div className="tag-row">{category.packages.map(item => <span key={item}>{item}</span>)}</div></article>;
}
