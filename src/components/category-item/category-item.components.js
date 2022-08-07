import '../category-item/categories.styles.scss'

export const CategoryItem = ({ key, category }) => {
  return (
    <div key={key} className="category-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${category.imageUrl})`,
        }}
      />
      <div className="category-body-container">
        <h1>{category.title}</h1>
        <p>Shop Now</p>
      </div>
    </div>
  )
}
