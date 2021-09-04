/* eslint-disable jsx-a11y/alt-text */

import Image, { ImageProps } from 'next/image'

export interface DewImageProps extends Omit<ImageProps, 'src'> {
  src?: string | null
}

export default function DewImage({ src, ...rest }: DewImageProps) {
  return (
    <Image
      src={
        src ||
        'http://admin.wordpress-demo.dew.vn/wp-content/uploads/woocommerce-placeholder.png'
      }
      {...rest}
    />
  )
}
