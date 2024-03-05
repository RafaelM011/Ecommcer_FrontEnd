import { useLocation } from 'react-router-dom'
import { ProductCard } from '../../components/productCard/product_card.component'

import { type Product } from '../../app.types'

const CategoryRoute: React.FC = (): JSX.Element => {
  const { state } = useLocation()
  return (
    <section className='flex flex-col gap-4'>
      <h1 className='text-4xl font-bold text-center my-8'> {state.title} </h1>
      <div className='flex flex-wrap gap-4 justify-center'>
        {state.items.map((product: Product) => <ProductCard key={product.id} product={product}/>)}
      </div>
    </section>
  )
}

export default CategoryRoute
