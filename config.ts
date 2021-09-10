export const endpoint = 'https://admin.wordpress-demo.dew.vn'
export const storeEndpoint = `${endpoint}/wp-json/wc/store`
export const graphqlEndpoint = `${endpoint}/graphql`

export const taxonomiesMap: Record<
  string,
  { code: 'category' | 'gender' | 'size' | 'color'; name: string }
> = {
  product_cat: { code: 'category', name: 'Danh mục' },
  gender: { code: 'gender', name: 'Giới tính' },
  pa_size: { code: 'size', name: 'Kích cỡ' },
  pa_color: { code: 'color', name: 'Màu' },
}
