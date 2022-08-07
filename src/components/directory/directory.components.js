import { CategoryItem } from '../category-item/category-item.components'
import '../directory/directory.styles.scss'

export const Directory = ({ categories }) => (
  <div className="categories-container">
    {categories.map((category) => (
      <CategoryItem key={category.id} category={category} />
    ))}
  </div>
)
