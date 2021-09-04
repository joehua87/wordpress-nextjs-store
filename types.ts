export interface GalleryItem {
  id: string | null
  src: string | null
  alt: string | null
  caption: string | null
  description: string | null
  href: string | null
}

export interface Gallery {
  id: string
  items?: GalleryItem[]
}
