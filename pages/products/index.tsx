import type { NextPage } from 'next'
import { ProductCardList } from '../../components/ProductCardList'
import { host } from '../../config'
import { ProductsPageQuery } from '../../generated/graphql'
import { edgesToList } from '../../utils'

const Products: NextPage<{ data: ProductsPageQuery }> = ({ data }) => {
  return (
    <div className="container mx-auto">
      <ProductCardList entities={edgesToList(data.products)} />
    </div>
  )
}

export default Products

export async function getServerSideProps() {
  const res = await fetch(`${host}/api/products`)
  const { data } = await res.json()
  return { props: { data } }
}
