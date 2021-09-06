export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AcfFieldGroup = {
  fieldGroupName?: Maybe<Scalars['String']>;
};

export type AddCartItemsInput = {
  clientMutationId?: Maybe<Scalars['String']>;
  items?: Maybe<Array<Maybe<CartItemInput>>>;
};

export type AddCartItemsPayload = {
  __typename?: 'AddCartItemsPayload';
  added?: Maybe<Array<Maybe<CartItem>>>;
  cart?: Maybe<Cart>;
  cartErrors?: Maybe<Array<Maybe<CartItemError>>>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type AddFeeInput = {
  amount?: Maybe<Scalars['Float']>;
  clientMutationId?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  taxClass?: Maybe<TaxClassEnum>;
  taxable?: Maybe<Scalars['Boolean']>;
};

export type AddFeePayload = {
  __typename?: 'AddFeePayload';
  cart?: Maybe<Cart>;
  cartFee?: Maybe<CartFee>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type AddToCartInput = {
  clientMutationId?: Maybe<Scalars['String']>;
  extraData?: Maybe<Scalars['String']>;
  productId: Scalars['Int'];
  quantity?: Maybe<Scalars['Int']>;
  variation?: Maybe<Array<Maybe<ProductAttributeInput>>>;
  variationId?: Maybe<Scalars['Int']>;
};

export type AddToCartPayload = {
  __typename?: 'AddToCartPayload';
  cart?: Maybe<Cart>;
  cartItem?: Maybe<CartItem>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type AppliedCoupon = {
  __typename?: 'AppliedCoupon';
  code: Scalars['String'];
  discountAmount: Scalars['String'];
  discountTax: Scalars['String'];
};


export type AppliedCouponDiscountAmountArgs = {
  excludeTax?: Maybe<Scalars['Boolean']>;
};

export type ApplyCouponInput = {
  clientMutationId?: Maybe<Scalars['String']>;
  code: Scalars['String'];
};

export type ApplyCouponPayload = {
  __typename?: 'ApplyCouponPayload';
  applied?: Maybe<AppliedCoupon>;
  cart?: Maybe<Cart>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type Attribute = {
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type Avatar = {
  __typename?: 'Avatar';
  default?: Maybe<Scalars['String']>;
  extraAttr?: Maybe<Scalars['String']>;
  forceDefault?: Maybe<Scalars['Boolean']>;
  foundAvatar?: Maybe<Scalars['Boolean']>;
  height?: Maybe<Scalars['Int']>;
  isRestricted?: Maybe<Scalars['Boolean']>;
  rating?: Maybe<Scalars['String']>;
  scheme?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};

export enum AvatarRatingEnum {
  G = 'G',
  Pg = 'PG',
  R = 'R',
  X = 'X'
}

export enum BackordersEnum {
  No = 'NO',
  Notify = 'NOTIFY',
  Yes = 'YES'
}

export type Cart = {
  __typename?: 'Cart';
  appliedCoupons?: Maybe<Array<Maybe<AppliedCoupon>>>;
  availableShippingMethods?: Maybe<Array<Maybe<ShippingPackage>>>;
  chosenShippingMethods?: Maybe<Array<Maybe<Scalars['String']>>>;
  contents?: Maybe<CartToCartItemConnection>;
  contentsTax?: Maybe<Scalars['String']>;
  contentsTotal?: Maybe<Scalars['String']>;
  discountTax?: Maybe<Scalars['String']>;
  discountTotal?: Maybe<Scalars['String']>;
  displayPricesIncludeTax?: Maybe<Scalars['Boolean']>;
  feeTax?: Maybe<Scalars['String']>;
  feeTotal?: Maybe<Scalars['String']>;
  fees?: Maybe<Array<Maybe<CartFee>>>;
  isEmpty?: Maybe<Scalars['Boolean']>;
  needsShippingAddress?: Maybe<Scalars['Boolean']>;
  shippingTax?: Maybe<Scalars['String']>;
  shippingTotal?: Maybe<Scalars['String']>;
  subtotal?: Maybe<Scalars['String']>;
  subtotalTax?: Maybe<Scalars['String']>;
  total?: Maybe<Scalars['String']>;
  totalTax?: Maybe<Scalars['String']>;
  totalTaxes?: Maybe<Array<Maybe<CartTax>>>;
};


export type CartContentsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<CartToCartItemConnectionWhereArgs>;
};

export type CartError = {
  reasons?: Maybe<Array<Maybe<Scalars['String']>>>;
  type: CartErrorType;
};

export enum CartErrorType {
  InvalidCartItem = 'INVALID_CART_ITEM',
  InvalidCoupon = 'INVALID_COUPON',
  InvalidShippingMethod = 'INVALID_SHIPPING_METHOD'
}

export type CartFee = {
  __typename?: 'CartFee';
  amount?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  taxClass?: Maybe<TaxClassEnum>;
  taxable?: Maybe<Scalars['Boolean']>;
  total?: Maybe<Scalars['Float']>;
};

export type CartItem = {
  __typename?: 'CartItem';
  extraData?: Maybe<Array<Maybe<MetaData>>>;
  key: Scalars['ID'];
  product?: Maybe<CartItemToProductConnectionEdge>;
  quantity?: Maybe<Scalars['Int']>;
  subtotal?: Maybe<Scalars['String']>;
  subtotalTax?: Maybe<Scalars['String']>;
  tax?: Maybe<Scalars['String']>;
  total?: Maybe<Scalars['String']>;
  variation?: Maybe<CartItemToProductVariationConnectionEdge>;
};


export type CartItemExtraDataArgs = {
  key?: Maybe<Scalars['String']>;
  keysIn?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type CartItemError = CartError & {
  __typename?: 'CartItemError';
  extraData?: Maybe<Scalars['String']>;
  productId: Scalars['Int'];
  quantity?: Maybe<Scalars['Int']>;
  reasons?: Maybe<Array<Maybe<Scalars['String']>>>;
  type: CartErrorType;
  variation?: Maybe<Array<Maybe<ProductAttributeOutput>>>;
  variationId?: Maybe<Scalars['Int']>;
};

export type CartItemInput = {
  extraData?: Maybe<Scalars['String']>;
  productId: Scalars['Int'];
  quantity?: Maybe<Scalars['Int']>;
  variation?: Maybe<Array<Maybe<ProductAttributeInput>>>;
  variationId?: Maybe<Scalars['Int']>;
};

export type CartItemQuantityInput = {
  key: Scalars['ID'];
  quantity: Scalars['Int'];
};

export type CartItemToProductConnectionEdge = {
  __typename?: 'CartItemToProductConnectionEdge';
  node?: Maybe<Product>;
  simpleVariations?: Maybe<Array<Maybe<SimpleAttribute>>>;
};

export type CartItemToProductVariationConnectionEdge = {
  __typename?: 'CartItemToProductVariationConnectionEdge';
  attributes?: Maybe<Array<Maybe<VariationAttribute>>>;
  node?: Maybe<ProductVariation>;
};

export type CartTax = {
  __typename?: 'CartTax';
  amount?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isCompound?: Maybe<Scalars['Boolean']>;
  label: Scalars['String'];
};

export type CartToCartItemConnection = {
  __typename?: 'CartToCartItemConnection';
  edges?: Maybe<Array<Maybe<CartToCartItemConnectionEdge>>>;
  itemCount?: Maybe<Scalars['Int']>;
  nodes?: Maybe<Array<Maybe<CartItem>>>;
  pageInfo?: Maybe<WpPageInfo>;
  productCount?: Maybe<Scalars['Int']>;
};

export type CartToCartItemConnectionEdge = {
  __typename?: 'CartToCartItemConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<CartItem>;
};

export type CartToCartItemConnectionWhereArgs = {
  needsShipping?: Maybe<Scalars['Boolean']>;
};

export enum CatalogVisibilityEnum {
  Catalog = 'CATALOG',
  Hidden = 'HIDDEN',
  Search = 'SEARCH',
  Visible = 'VISIBLE'
}

export type Category = Node & TermNode & UniformResourceIdentifiable & DatabaseIdentifier & HierarchicalTermNode & MenuItemLinkable & {
  __typename?: 'Category';
  ancestors?: Maybe<CategoryToAncestorsCategoryConnection>;
  /** @deprecated Deprecated in favor of databaseId */
  categoryId?: Maybe<Scalars['Int']>;
  children?: Maybe<CategoryToCategoryConnection>;
  contentNodes?: Maybe<CategoryToContentNodeConnection>;
  count?: Maybe<Scalars['Int']>;
  databaseId: Scalars['Int'];
  description?: Maybe<Scalars['String']>;
  enqueuedScripts?: Maybe<TermNodeToEnqueuedScriptConnection>;
  enqueuedStylesheets?: Maybe<TermNodeToEnqueuedStylesheetConnection>;
  id: Scalars['ID'];
  isContentNode: Scalars['Boolean'];
  isRestricted?: Maybe<Scalars['Boolean']>;
  isTermNode: Scalars['Boolean'];
  link?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  parent?: Maybe<CategoryToParentCategoryConnectionEdge>;
  parentDatabaseId?: Maybe<Scalars['Int']>;
  parentId?: Maybe<Scalars['ID']>;
  posts?: Maybe<CategoryToPostConnection>;
  seo?: Maybe<TaxonomySeo>;
  slug?: Maybe<Scalars['String']>;
  taxonomy?: Maybe<CategoryToTaxonomyConnectionEdge>;
  termGroupId?: Maybe<Scalars['Int']>;
  termTaxonomyId?: Maybe<Scalars['Int']>;
  uri?: Maybe<Scalars['String']>;
};


export type CategoryAncestorsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


export type CategoryChildrenArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<CategoryToCategoryConnectionWhereArgs>;
};


export type CategoryContentNodesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<CategoryToContentNodeConnectionWhereArgs>;
};


export type CategoryEnqueuedScriptsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


export type CategoryEnqueuedStylesheetsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


export type CategoryPostsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<CategoryToPostConnectionWhereArgs>;
};

export enum CategoryIdType {
  DatabaseId = 'DATABASE_ID',
  Id = 'ID',
  Name = 'NAME',
  Slug = 'SLUG',
  Uri = 'URI'
}

export type CategoryToAncestorsCategoryConnection = {
  __typename?: 'CategoryToAncestorsCategoryConnection';
  edges?: Maybe<Array<Maybe<CategoryToAncestorsCategoryConnectionEdge>>>;
  nodes?: Maybe<Array<Maybe<Category>>>;
  pageInfo?: Maybe<WpPageInfo>;
};

export type CategoryToAncestorsCategoryConnectionEdge = {
  __typename?: 'CategoryToAncestorsCategoryConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<Category>;
};

export type CategoryToCategoryConnection = {
  __typename?: 'CategoryToCategoryConnection';
  edges?: Maybe<Array<Maybe<CategoryToCategoryConnectionEdge>>>;
  nodes?: Maybe<Array<Maybe<Category>>>;
  pageInfo?: Maybe<WpPageInfo>;
};

export type CategoryToCategoryConnectionEdge = {
  __typename?: 'CategoryToCategoryConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<Category>;
};

export type CategoryToCategoryConnectionWhereArgs = {
  cacheDomain?: Maybe<Scalars['String']>;
  childOf?: Maybe<Scalars['Int']>;
  childless?: Maybe<Scalars['Boolean']>;
  descriptionLike?: Maybe<Scalars['String']>;
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  hideEmpty?: Maybe<Scalars['Boolean']>;
  hierarchical?: Maybe<Scalars['Boolean']>;
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  nameLike?: Maybe<Scalars['String']>;
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  order?: Maybe<OrderEnum>;
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  padCounts?: Maybe<Scalars['Boolean']>;
  parent?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

export type CategoryToContentNodeConnection = {
  __typename?: 'CategoryToContentNodeConnection';
  edges?: Maybe<Array<Maybe<CategoryToContentNodeConnectionEdge>>>;
  nodes?: Maybe<Array<Maybe<ContentNode>>>;
  pageInfo?: Maybe<WpPageInfo>;
};

export type CategoryToContentNodeConnectionEdge = {
  __typename?: 'CategoryToContentNodeConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<ContentNode>;
};

export type CategoryToContentNodeConnectionWhereArgs = {
  contentTypes?: Maybe<Array<Maybe<ContentTypesOfCategoryEnum>>>;
  dateQuery?: Maybe<DateQueryInput>;
  hasPassword?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  mimeType?: Maybe<MimeTypeEnum>;
  name?: Maybe<Scalars['String']>;
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  parent?: Maybe<Scalars['ID']>;
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  password?: Maybe<Scalars['String']>;
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  title?: Maybe<Scalars['String']>;
};

export type CategoryToParentCategoryConnectionEdge = {
  __typename?: 'CategoryToParentCategoryConnectionEdge';
  node?: Maybe<Category>;
};

export type CategoryToPostConnection = {
  __typename?: 'CategoryToPostConnection';
  edges?: Maybe<Array<Maybe<CategoryToPostConnectionEdge>>>;
  nodes?: Maybe<Array<Maybe<Post>>>;
  pageInfo?: Maybe<WpPageInfo>;
};

export type CategoryToPostConnectionEdge = {
  __typename?: 'CategoryToPostConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<Post>;
};

export type CategoryToPostConnectionWhereArgs = {
  author?: Maybe<Scalars['Int']>;
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  authorName?: Maybe<Scalars['String']>;
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  categoryId?: Maybe<Scalars['Int']>;
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  categoryName?: Maybe<Scalars['String']>;
  categoryNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  dateQuery?: Maybe<DateQueryInput>;
  hasPassword?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  mimeType?: Maybe<MimeTypeEnum>;
  name?: Maybe<Scalars['String']>;
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  parent?: Maybe<Scalars['ID']>;
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  password?: Maybe<Scalars['String']>;
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  tag?: Maybe<Scalars['String']>;
  tagId?: Maybe<Scalars['String']>;
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  tagNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>;
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  title?: Maybe<Scalars['String']>;
};

export type CategoryToTaxonomyConnectionEdge = {
  __typename?: 'CategoryToTaxonomyConnectionEdge';
  node?: Maybe<Taxonomy>;
};

export type CheckoutInput = {
  account?: Maybe<CreateAccountInput>;
  billing?: Maybe<CustomerAddressInput>;
  clientMutationId?: Maybe<Scalars['String']>;
  customerNote?: Maybe<Scalars['String']>;
  isPaid?: Maybe<Scalars['Boolean']>;
  metaData?: Maybe<Array<Maybe<MetaDataInput>>>;
  paymentMethod?: Maybe<Scalars['String']>;
  shipToDifferentAddress?: Maybe<Scalars['Boolean']>;
  shipping?: Maybe<CustomerAddressInput>;
  shippingMethod?: Maybe<Array<Maybe<Scalars['String']>>>;
  transactionId?: Maybe<Scalars['String']>;
};

export type CheckoutPayload = {
  __typename?: 'CheckoutPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  customer?: Maybe<Customer>;
  order?: Maybe<Order>;
  redirect?: Maybe<Scalars['String']>;
  result?: Maybe<Scalars['String']>;
};

export type Comment = Node & DatabaseIdentifier & {
  __typename?: 'Comment';
  agent?: Maybe<Scalars['String']>;
  approved?: Maybe<Scalars['Boolean']>;
  author?: Maybe<CommentToCommenterConnectionEdge>;
  authorIp?: Maybe<Scalars['String']>;
  /** @deprecated Deprecated in favor of databaseId */
  commentId?: Maybe<Scalars['Int']>;
  commentedOn?: Maybe<CommentToContentNodeConnectionEdge>;
  content?: Maybe<Scalars['String']>;
  databaseId: Scalars['Int'];
  date?: Maybe<Scalars['String']>;
  dateGmt?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isRestricted?: Maybe<Scalars['Boolean']>;
  karma?: Maybe<Scalars['Int']>;
  parent?: Maybe<CommentToParentCommentConnectionEdge>;
  parentDatabaseId?: Maybe<Scalars['Int']>;
  parentId?: Maybe<Scalars['ID']>;
  replies?: Maybe<CommentToCommentConnection>;
  type?: Maybe<Scalars['String']>;
};


export type CommentContentArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>;
};


export type CommentParentArgs = {
  where?: Maybe<CommentToParentCommentConnectionWhereArgs>;
};


export type CommentRepliesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<CommentToCommentConnectionWhereArgs>;
};

export type CommentAuthor = Node & Commenter & {
  __typename?: 'CommentAuthor';
  databaseId: Scalars['Int'];
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isRestricted?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type CommentToCommentConnection = {
  __typename?: 'CommentToCommentConnection';
  edges?: Maybe<Array<Maybe<CommentToCommentConnectionEdge>>>;
  nodes?: Maybe<Array<Maybe<Comment>>>;
  pageInfo?: Maybe<WpPageInfo>;
};

export type CommentToCommentConnectionEdge = {
  __typename?: 'CommentToCommentConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<Comment>;
};

export type CommentToCommentConnectionWhereArgs = {
  authorEmail?: Maybe<Scalars['String']>;
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  authorUrl?: Maybe<Scalars['String']>;
  commentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  commentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  commentType?: Maybe<Scalars['String']>;
  commentTypeIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  commentTypeNotIn?: Maybe<Scalars['String']>;
  contentAuthor?: Maybe<Array<Maybe<Scalars['ID']>>>;
  contentAuthorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  contentAuthorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  contentId?: Maybe<Scalars['ID']>;
  contentIdIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  contentIdNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  contentName?: Maybe<Scalars['String']>;
  contentParent?: Maybe<Scalars['Int']>;
  contentStatus?: Maybe<Array<Maybe<PostStatusEnum>>>;
  contentType?: Maybe<Array<Maybe<ContentTypeEnum>>>;
  includeUnapproved?: Maybe<Array<Maybe<Scalars['ID']>>>;
  karma?: Maybe<Scalars['Int']>;
  order?: Maybe<OrderEnum>;
  orderby?: Maybe<CommentsConnectionOrderbyEnum>;
  parent?: Maybe<Scalars['Int']>;
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  search?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['ID']>;
};

export type CommentToCommenterConnectionEdge = {
  __typename?: 'CommentToCommenterConnectionEdge';
  node?: Maybe<Commenter>;
};

export type CommentToContentNodeConnectionEdge = {
  __typename?: 'CommentToContentNodeConnectionEdge';
  node?: Maybe<ContentNode>;
};

export type CommentToParentCommentConnectionEdge = {
  __typename?: 'CommentToParentCommentConnectionEdge';
  node?: Maybe<Comment>;
};

export type CommentToParentCommentConnectionWhereArgs = {
  authorEmail?: Maybe<Scalars['String']>;
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  authorUrl?: Maybe<Scalars['String']>;
  commentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  commentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  commentType?: Maybe<Scalars['String']>;
  commentTypeIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  commentTypeNotIn?: Maybe<Scalars['String']>;
  contentAuthor?: Maybe<Array<Maybe<Scalars['ID']>>>;
  contentAuthorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  contentAuthorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  contentId?: Maybe<Scalars['ID']>;
  contentIdIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  contentIdNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  contentName?: Maybe<Scalars['String']>;
  contentParent?: Maybe<Scalars['Int']>;
  contentStatus?: Maybe<Array<Maybe<PostStatusEnum>>>;
  contentType?: Maybe<Array<Maybe<ContentTypeEnum>>>;
  includeUnapproved?: Maybe<Array<Maybe<Scalars['ID']>>>;
  karma?: Maybe<Scalars['Int']>;
  order?: Maybe<OrderEnum>;
  orderby?: Maybe<CommentsConnectionOrderbyEnum>;
  parent?: Maybe<Scalars['Int']>;
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  search?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['ID']>;
};

export type Commenter = {
  databaseId: Scalars['Int'];
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isRestricted?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export enum CommentsConnectionOrderbyEnum {
  CommentAgent = 'COMMENT_AGENT',
  CommentApproved = 'COMMENT_APPROVED',
  CommentAuthor = 'COMMENT_AUTHOR',
  CommentAuthorEmail = 'COMMENT_AUTHOR_EMAIL',
  CommentAuthorIp = 'COMMENT_AUTHOR_IP',
  CommentAuthorUrl = 'COMMENT_AUTHOR_URL',
  CommentContent = 'COMMENT_CONTENT',
  CommentDate = 'COMMENT_DATE',
  CommentDateGmt = 'COMMENT_DATE_GMT',
  CommentId = 'COMMENT_ID',
  CommentIn = 'COMMENT_IN',
  CommentKarma = 'COMMENT_KARMA',
  CommentParent = 'COMMENT_PARENT',
  CommentPostId = 'COMMENT_POST_ID',
  CommentType = 'COMMENT_TYPE',
  UserId = 'USER_ID'
}

export type Config = Node & ContentNode & UniformResourceIdentifiable & DatabaseIdentifier & NodeWithTemplate & NodeWithTitle & NodeWithContentEditor & NodeWithFeaturedImage & MenuItemLinkable & {
  __typename?: 'Config';
  /** @deprecated Deprecated in favor of the databaseId field */
  configId: Scalars['Int'];
  content?: Maybe<Scalars['String']>;
  contentType?: Maybe<ContentNodeToContentTypeConnectionEdge>;
  databaseId: Scalars['Int'];
  date?: Maybe<Scalars['String']>;
  dateGmt?: Maybe<Scalars['String']>;
  desiredSlug?: Maybe<Scalars['String']>;
  editingLockedBy?: Maybe<ContentNodeToEditLockConnectionEdge>;
  enclosure?: Maybe<Scalars['String']>;
  enqueuedScripts?: Maybe<ContentNodeToEnqueuedScriptConnection>;
  enqueuedStylesheets?: Maybe<ContentNodeToEnqueuedStylesheetConnection>;
  featuredImage?: Maybe<NodeWithFeaturedImageToMediaItemConnectionEdge>;
  featuredImageDatabaseId?: Maybe<Scalars['Int']>;
  featuredImageId?: Maybe<Scalars['ID']>;
  guid?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isContentNode: Scalars['Boolean'];
  isPreview?: Maybe<Scalars['Boolean']>;
  isRestricted?: Maybe<Scalars['Boolean']>;
  isTermNode: Scalars['Boolean'];
  lastEditedBy?: Maybe<ContentNodeToEditLastConnectionEdge>;
  link?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['String']>;
  modifiedGmt?: Maybe<Scalars['String']>;
  preview?: Maybe<ConfigToPreviewConnectionEdge>;
  previewRevisionDatabaseId?: Maybe<Scalars['Int']>;
  previewRevisionId?: Maybe<Scalars['ID']>;
  seo?: Maybe<PostTypeSeo>;
  slug?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  template?: Maybe<ContentTemplate>;
  title?: Maybe<Scalars['String']>;
  uri?: Maybe<Scalars['String']>;
};


export type ConfigContentArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>;
};


export type ConfigEnqueuedScriptsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


export type ConfigEnqueuedStylesheetsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


export type ConfigTitleArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>;
};

export enum ConfigIdType {
  DatabaseId = 'DATABASE_ID',
  Id = 'ID',
  Slug = 'SLUG',
  Uri = 'URI'
}

export type ConfigToPreviewConnectionEdge = {
  __typename?: 'ConfigToPreviewConnectionEdge';
  node?: Maybe<Config>;
};

export type ContentNode = {
  contentType?: Maybe<ContentNodeToContentTypeConnectionEdge>;
  databaseId: Scalars['Int'];
  date?: Maybe<Scalars['String']>;
  dateGmt?: Maybe<Scalars['String']>;
  desiredSlug?: Maybe<Scalars['String']>;
  editingLockedBy?: Maybe<ContentNodeToEditLockConnectionEdge>;
  enclosure?: Maybe<Scalars['String']>;
  enqueuedScripts?: Maybe<ContentNodeToEnqueuedScriptConnection>;
  enqueuedStylesheets?: Maybe<ContentNodeToEnqueuedStylesheetConnection>;
  guid?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isContentNode: Scalars['Boolean'];
  isPreview?: Maybe<Scalars['Boolean']>;
  isRestricted?: Maybe<Scalars['Boolean']>;
  isTermNode: Scalars['Boolean'];
  lastEditedBy?: Maybe<ContentNodeToEditLastConnectionEdge>;
  link?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['String']>;
  modifiedGmt?: Maybe<Scalars['String']>;
  previewRevisionDatabaseId?: Maybe<Scalars['Int']>;
  previewRevisionId?: Maybe<Scalars['ID']>;
  slug?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  template?: Maybe<ContentTemplate>;
  uri?: Maybe<Scalars['String']>;
};


export type ContentNodeEnqueuedScriptsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


export type ContentNodeEnqueuedStylesheetsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};

export enum ContentNodeIdTypeEnum {
  DatabaseId = 'DATABASE_ID',
  Id = 'ID',
  Uri = 'URI'
}

export type ContentNodeToContentTypeConnectionEdge = {
  __typename?: 'ContentNodeToContentTypeConnectionEdge';
  node?: Maybe<ContentType>;
};

export type ContentNodeToEditLastConnectionEdge = {
  __typename?: 'ContentNodeToEditLastConnectionEdge';
  node?: Maybe<User>;
};

export type ContentNodeToEditLockConnectionEdge = {
  __typename?: 'ContentNodeToEditLockConnectionEdge';
  lockTimestamp?: Maybe<Scalars['String']>;
  node?: Maybe<User>;
};

export type ContentNodeToEnqueuedScriptConnection = {
  __typename?: 'ContentNodeToEnqueuedScriptConnection';
  edges?: Maybe<Array<Maybe<ContentNodeToEnqueuedScriptConnectionEdge>>>;
  nodes?: Maybe<Array<Maybe<EnqueuedScript>>>;
  pageInfo?: Maybe<WpPageInfo>;
};

export type ContentNodeToEnqueuedScriptConnectionEdge = {
  __typename?: 'ContentNodeToEnqueuedScriptConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<EnqueuedScript>;
};

export type ContentNodeToEnqueuedStylesheetConnection = {
  __typename?: 'ContentNodeToEnqueuedStylesheetConnection';
  edges?: Maybe<Array<Maybe<ContentNodeToEnqueuedStylesheetConnectionEdge>>>;
  nodes?: Maybe<Array<Maybe<EnqueuedStylesheet>>>;
  pageInfo?: Maybe<WpPageInfo>;
};

export type ContentNodeToEnqueuedStylesheetConnectionEdge = {
  __typename?: 'ContentNodeToEnqueuedStylesheetConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<EnqueuedStylesheet>;
};

export type ContentRevisionUnion = Post | Page;

export type ContentTemplate = {
  templateName?: Maybe<Scalars['String']>;
};

export type ContentType = Node & UniformResourceIdentifiable & {
  __typename?: 'ContentType';
  canExport?: Maybe<Scalars['Boolean']>;
  connectedTaxonomies?: Maybe<ContentTypeToTaxonomyConnection>;
  contentNodes?: Maybe<ContentTypeToContentNodeConnection>;
  deleteWithUser?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  excludeFromSearch?: Maybe<Scalars['Boolean']>;
  graphqlPluralName?: Maybe<Scalars['String']>;
  graphqlSingleName?: Maybe<Scalars['String']>;
  hasArchive?: Maybe<Scalars['Boolean']>;
  hierarchical?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  isContentNode: Scalars['Boolean'];
  isFrontPage: Scalars['Boolean'];
  isPostsPage: Scalars['Boolean'];
  isRestricted?: Maybe<Scalars['Boolean']>;
  isTermNode: Scalars['Boolean'];
  label?: Maybe<Scalars['String']>;
  labels?: Maybe<PostTypeLabelDetails>;
  menuIcon?: Maybe<Scalars['String']>;
  menuPosition?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  public?: Maybe<Scalars['Boolean']>;
  publiclyQueryable?: Maybe<Scalars['Boolean']>;
  restBase?: Maybe<Scalars['String']>;
  restControllerClass?: Maybe<Scalars['String']>;
  showInAdminBar?: Maybe<Scalars['Boolean']>;
  showInGraphql?: Maybe<Scalars['Boolean']>;
  showInMenu?: Maybe<Scalars['Boolean']>;
  showInNavMenus?: Maybe<Scalars['Boolean']>;
  showInRest?: Maybe<Scalars['Boolean']>;
  showUi?: Maybe<Scalars['Boolean']>;
  uri?: Maybe<Scalars['String']>;
};


export type ContentTypeConnectedTaxonomiesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


export type ContentTypeContentNodesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ContentTypeToContentNodeConnectionWhereArgs>;
};

export enum ContentTypeEnum {
  Attachment = 'ATTACHMENT',
  Config = 'CONFIG',
  Page = 'PAGE',
  Post = 'POST',
  Product = 'PRODUCT',
  ProductVariation = 'PRODUCT_VARIATION',
  RealProject = 'REAL_PROJECT',
  ShopCoupon = 'SHOP_COUPON',
  ShopOrder = 'SHOP_ORDER',
  ShopOrderRefund = 'SHOP_ORDER_REFUND'
}

export enum ContentTypeIdTypeEnum {
  Id = 'ID',
  Name = 'NAME'
}

export type ContentTypeToContentNodeConnection = {
  __typename?: 'ContentTypeToContentNodeConnection';
  edges?: Maybe<Array<Maybe<ContentTypeToContentNodeConnectionEdge>>>;
  nodes?: Maybe<Array<Maybe<ContentNode>>>;
  pageInfo?: Maybe<WpPageInfo>;
};

export type ContentTypeToContentNodeConnectionEdge = {
  __typename?: 'ContentTypeToContentNodeConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<ContentNode>;
};

export type ContentTypeToContentNodeConnectionWhereArgs = {
  contentTypes?: Maybe<Array<Maybe<ContentTypeEnum>>>;
  dateQuery?: Maybe<DateQueryInput>;
  hasPassword?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  mimeType?: Maybe<MimeTypeEnum>;
  name?: Maybe<Scalars['String']>;
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  parent?: Maybe<Scalars['ID']>;
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  password?: Maybe<Scalars['String']>;
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  title?: Maybe<Scalars['String']>;
};

export type ContentTypeToTaxonomyConnection = {
  __typename?: 'ContentTypeToTaxonomyConnection';
  edges?: Maybe<Array<Maybe<ContentTypeToTaxonomyConnectionEdge>>>;
  nodes?: Maybe<Array<Maybe<Taxonomy>>>;
  pageInfo?: Maybe<WpPageInfo>;
};

export type ContentTypeToTaxonomyConnectionEdge = {
  __typename?: 'ContentTypeToTaxonomyConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<Taxonomy>;
};

export enum ContentTypesOfCategoryEnum {
  Post = 'POST'
}

export enum ContentTypesOfGenderEnum {
  Product = 'PRODUCT'
}

export enum ContentTypesOfPaColorEnum {
  Product = 'PRODUCT'
}

export enum ContentTypesOfPaSizeEnum {
  Product = 'PRODUCT'
}

export enum ContentTypesOfPostFormatEnum {
  Post = 'POST'
}

export enum ContentTypesOfProductCategoryEnum {
  Product = 'PRODUCT'
}

export enum ContentTypesOfProductTagEnum {
  Product = 'PRODUCT'
}

export enum ContentTypesOfProductTypeEnum {
  Product = 'PRODUCT'
}

export enum ContentTypesOfShippingClassEnum {
  Product = 'PRODUCT',
  ProductVariation = 'PRODUCT_VARIATION'
}

export enum ContentTypesOfTagEnum {
  Post = 'POST'
}

export enum ContentTypesOfVisibleProductEnum {
  Product = 'PRODUCT',
  ProductVariation = 'PRODUCT_VARIATION'
}

export enum CountriesEnum {
  Ad = 'AD',
  Ae = 'AE',
  Af = 'AF',
  Ag = 'AG',
  Ai = 'AI',
  Al = 'AL',
  Am = 'AM',
  Ao = 'AO',
  Aq = 'AQ',
  Ar = 'AR',
  As = 'AS',
  At = 'AT',
  Au = 'AU',
  Aw = 'AW',
  Ax = 'AX',
  Az = 'AZ',
  Ba = 'BA',
  Bb = 'BB',
  Bd = 'BD',
  Be = 'BE',
  Bf = 'BF',
  Bg = 'BG',
  Bh = 'BH',
  Bi = 'BI',
  Bj = 'BJ',
  Bl = 'BL',
  Bm = 'BM',
  Bn = 'BN',
  Bo = 'BO',
  Bq = 'BQ',
  Br = 'BR',
  Bs = 'BS',
  Bt = 'BT',
  Bv = 'BV',
  Bw = 'BW',
  By = 'BY',
  Bz = 'BZ',
  Ca = 'CA',
  Cc = 'CC',
  Cd = 'CD',
  Cf = 'CF',
  Cg = 'CG',
  Ch = 'CH',
  Ci = 'CI',
  Ck = 'CK',
  Cl = 'CL',
  Cm = 'CM',
  Cn = 'CN',
  Co = 'CO',
  Cr = 'CR',
  Cu = 'CU',
  Cv = 'CV',
  Cw = 'CW',
  Cx = 'CX',
  Cy = 'CY',
  Cz = 'CZ',
  De = 'DE',
  Dj = 'DJ',
  Dk = 'DK',
  Dm = 'DM',
  Do = 'DO',
  Dz = 'DZ',
  Ec = 'EC',
  Ee = 'EE',
  Eg = 'EG',
  Eh = 'EH',
  Er = 'ER',
  Es = 'ES',
  Et = 'ET',
  Fi = 'FI',
  Fj = 'FJ',
  Fk = 'FK',
  Fm = 'FM',
  Fo = 'FO',
  Fr = 'FR',
  Ga = 'GA',
  Gb = 'GB',
  Gd = 'GD',
  Ge = 'GE',
  Gf = 'GF',
  Gg = 'GG',
  Gh = 'GH',
  Gi = 'GI',
  Gl = 'GL',
  Gm = 'GM',
  Gn = 'GN',
  Gp = 'GP',
  Gq = 'GQ',
  Gr = 'GR',
  Gs = 'GS',
  Gt = 'GT',
  Gu = 'GU',
  Gw = 'GW',
  Gy = 'GY',
  Hk = 'HK',
  Hm = 'HM',
  Hn = 'HN',
  Hr = 'HR',
  Ht = 'HT',
  Hu = 'HU',
  Id = 'ID',
  Ie = 'IE',
  Il = 'IL',
  Im = 'IM',
  In = 'IN',
  Io = 'IO',
  Iq = 'IQ',
  Ir = 'IR',
  Is = 'IS',
  It = 'IT',
  Je = 'JE',
  Jm = 'JM',
  Jo = 'JO',
  Jp = 'JP',
  Ke = 'KE',
  Kg = 'KG',
  Kh = 'KH',
  Ki = 'KI',
  Km = 'KM',
  Kn = 'KN',
  Kp = 'KP',
  Kr = 'KR',
  Kw = 'KW',
  Ky = 'KY',
  Kz = 'KZ',
  La = 'LA',
  Lb = 'LB',
  Lc = 'LC',
  Li = 'LI',
  Lk = 'LK',
  Lr = 'LR',
  Ls = 'LS',
  Lt = 'LT',
  Lu = 'LU',
  Lv = 'LV',
  Ly = 'LY',
  Ma = 'MA',
  Mc = 'MC',
  Md = 'MD',
  Me = 'ME',
  Mf = 'MF',
  Mg = 'MG',
  Mh = 'MH',
  Mk = 'MK',
  Ml = 'ML',
  Mm = 'MM',
  Mn = 'MN',
  Mo = 'MO',
  Mp = 'MP',
  Mq = 'MQ',
  Mr = 'MR',
  Ms = 'MS',
  Mt = 'MT',
  Mu = 'MU',
  Mv = 'MV',
  Mw = 'MW',
  Mx = 'MX',
  My = 'MY',
  Mz = 'MZ',
  Na = 'NA',
  Nc = 'NC',
  Ne = 'NE',
  Nf = 'NF',
  Ng = 'NG',
  Ni = 'NI',
  Nl = 'NL',
  No = 'NO',
  Np = 'NP',
  Nr = 'NR',
  Nu = 'NU',
  Nz = 'NZ',
  Om = 'OM',
  Pa = 'PA',
  Pe = 'PE',
  Pf = 'PF',
  Pg = 'PG',
  Ph = 'PH',
  Pk = 'PK',
  Pl = 'PL',
  Pm = 'PM',
  Pn = 'PN',
  Pr = 'PR',
  Ps = 'PS',
  Pt = 'PT',
  Pw = 'PW',
  Py = 'PY',
  Qa = 'QA',
  Re = 'RE',
  Ro = 'RO',
  Rs = 'RS',
  Ru = 'RU',
  Rw = 'RW',
  Sa = 'SA',
  Sb = 'SB',
  Sc = 'SC',
  Sd = 'SD',
  Se = 'SE',
  Sg = 'SG',
  Sh = 'SH',
  Si = 'SI',
  Sj = 'SJ',
  Sk = 'SK',
  Sl = 'SL',
  Sm = 'SM',
  Sn = 'SN',
  So = 'SO',
  Sr = 'SR',
  Ss = 'SS',
  St = 'ST',
  Sv = 'SV',
  Sx = 'SX',
  Sy = 'SY',
  Sz = 'SZ',
  Tc = 'TC',
  Td = 'TD',
  Tf = 'TF',
  Tg = 'TG',
  Th = 'TH',
  Tj = 'TJ',
  Tk = 'TK',
  Tl = 'TL',
  Tm = 'TM',
  Tn = 'TN',
  To = 'TO',
  Tr = 'TR',
  Tt = 'TT',
  Tv = 'TV',
  Tw = 'TW',
  Tz = 'TZ',
  Ua = 'UA',
  Ug = 'UG',
  Um = 'UM',
  Us = 'US',
  Uy = 'UY',
  Uz = 'UZ',
  Va = 'VA',
  Vc = 'VC',
  Ve = 'VE',
  Vg = 'VG',
  Vi = 'VI',
  Vn = 'VN',
  Vu = 'VU',
  Wf = 'WF',
  Ws = 'WS',
  Ye = 'YE',
  Yt = 'YT',
  Za = 'ZA',
  Zm = 'ZM',
  Zw = 'ZW'
}

export type Coupon = Node & {
  __typename?: 'Coupon';
  amount?: Maybe<Scalars['Float']>;
  code?: Maybe<Scalars['String']>;
  databaseId?: Maybe<Scalars['Int']>;
  date?: Maybe<Scalars['String']>;
  dateExpiry?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  discountType?: Maybe<DiscountTypeEnum>;
  emailRestrictions?: Maybe<Array<Maybe<Scalars['String']>>>;
  excludeSaleItems?: Maybe<Scalars['Boolean']>;
  excludedProductCategories?: Maybe<CouponToExcludedProductCategoriesConnection>;
  excludedProducts?: Maybe<CouponToExcludedProductsConnection>;
  freeShipping?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  individualUse?: Maybe<Scalars['Boolean']>;
  limitUsageToXItems?: Maybe<Scalars['Int']>;
  maximumAmount?: Maybe<Scalars['Float']>;
  metaData?: Maybe<Array<Maybe<MetaData>>>;
  minimumAmount?: Maybe<Scalars['Float']>;
  modified?: Maybe<Scalars['String']>;
  productCategories?: Maybe<CouponToProductCategoryConnection>;
  products?: Maybe<CouponToProductConnection>;
  usageCount?: Maybe<Scalars['Int']>;
  usageLimit?: Maybe<Scalars['Int']>;
  usageLimitPerUser?: Maybe<Scalars['Int']>;
  usedBy?: Maybe<CouponToCustomerConnection>;
};


export type CouponExcludedProductCategoriesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<CouponToExcludedProductCategoriesConnectionWhereArgs>;
};


export type CouponExcludedProductsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<CouponToExcludedProductsConnectionWhereArgs>;
};


export type CouponMetaDataArgs = {
  key?: Maybe<Scalars['String']>;
  keysIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  multiple?: Maybe<Scalars['Boolean']>;
};


export type CouponProductCategoriesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<CouponToProductCategoryConnectionWhereArgs>;
};


export type CouponProductsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<CouponToProductConnectionWhereArgs>;
};


export type CouponUsedByArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<CouponToCustomerConnectionWhereArgs>;
};

export enum CouponIdTypeEnum {
  Code = 'CODE',
  DatabaseId = 'DATABASE_ID',
  Id = 'ID'
}

export type CouponLine = {
  __typename?: 'CouponLine';
  code?: Maybe<Scalars['String']>;
  coupon?: Maybe<Coupon>;
  databaseId?: Maybe<Scalars['Int']>;
  discount?: Maybe<Scalars['String']>;
  discountTax?: Maybe<Scalars['String']>;
  metaData?: Maybe<Array<Maybe<MetaData>>>;
  orderId?: Maybe<Scalars['Int']>;
};


export type CouponLineMetaDataArgs = {
  key?: Maybe<Scalars['String']>;
  keysIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  multiple?: Maybe<Scalars['Boolean']>;
};

export type CouponToCustomerConnection = {
  __typename?: 'CouponToCustomerConnection';
  edges?: Maybe<Array<Maybe<CouponToCustomerConnectionEdge>>>;
  nodes?: Maybe<Array<Maybe<Customer>>>;
  pageInfo?: Maybe<WpPageInfo>;
};

export type CouponToCustomerConnectionEdge = {
  __typename?: 'CouponToCustomerConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<Customer>;
};

export type CouponToCustomerConnectionWhereArgs = {
  email?: Maybe<Scalars['String']>;
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>;
  include?: Maybe<Array<Maybe<Scalars['Int']>>>;
  order?: Maybe<OrderEnum>;
  orderby?: Maybe<CustomerConnectionOrderbyEnum>;
  search?: Maybe<Scalars['String']>;
};

export type CouponToExcludedProductCategoriesConnection = {
  __typename?: 'CouponToExcludedProductCategoriesConnection';
  edges?: Maybe<Array<Maybe<CouponToExcludedProductCategoriesConnectionEdge>>>;
  nodes?: Maybe<Array<Maybe<ProductCategory>>>;
  pageInfo?: Maybe<WpPageInfo>;
};

export type CouponToExcludedProductCategoriesConnectionEdge = {
  __typename?: 'CouponToExcludedProductCategoriesConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<ProductCategory>;
};

export type CouponToExcludedProductCategoriesConnectionWhereArgs = {
  cacheDomain?: Maybe<Scalars['String']>;
  childOf?: Maybe<Scalars['Int']>;
  childless?: Maybe<Scalars['Boolean']>;
  descriptionLike?: Maybe<Scalars['String']>;
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  hideEmpty?: Maybe<Scalars['Boolean']>;
  hierarchical?: Maybe<Scalars['Boolean']>;
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  nameLike?: Maybe<Scalars['String']>;
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  order?: Maybe<OrderEnum>;
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  padCounts?: Maybe<Scalars['Boolean']>;
  parent?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

export type CouponToExcludedProductsConnection = {
  __typename?: 'CouponToExcludedProductsConnection';
  edges?: Maybe<Array<Maybe<CouponToExcludedProductsConnectionEdge>>>;
  nodes?: Maybe<Array<Maybe<Product>>>;
  pageInfo?: Maybe<WpPageInfo>;
};

export type CouponToExcludedProductsConnectionEdge = {
  __typename?: 'CouponToExcludedProductsConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<Product>;
};

export type CouponToExcludedProductsConnectionWhereArgs = {
  attribute?: Maybe<Scalars['String']>;
  attributeTerm?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  categoryId?: Maybe<Scalars['Int']>;
  categoryIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  categoryIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  categoryIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  categoryNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  dateQuery?: Maybe<DateQueryInput>;
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>;
  featured?: Maybe<Scalars['Boolean']>;
  include?: Maybe<Array<Maybe<Scalars['Int']>>>;
  maxPrice?: Maybe<Scalars['Float']>;
  minPrice?: Maybe<Scalars['Float']>;
  onSale?: Maybe<Scalars['Boolean']>;
  orderby?: Maybe<Array<Maybe<ProductsOrderbyInput>>>;
  parent?: Maybe<Scalars['Int']>;
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  search?: Maybe<Scalars['String']>;
  shippingClassId?: Maybe<Scalars['Int']>;
  sku?: Maybe<Scalars['String']>;
  slugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  status?: Maybe<Scalars['String']>;
  stockStatus?: Maybe<Array<Maybe<StockStatusEnum>>>;
  supportedTypesOnly?: Maybe<Scalars['Boolean']>;
  tag?: Maybe<Scalars['String']>;
  tagId?: Maybe<Scalars['Int']>;
  tagIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  tagIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  tagIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  tagNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  taxonomyFilter?: Maybe<ProductTaxonomyInput>;
  type?: Maybe<ProductTypesEnum>;
  typeIn?: Maybe<Array<Maybe<ProductTypesEnum>>>;
  typeNotIn?: Maybe<Array<Maybe<ProductTypesEnum>>>;
  visibility?: Maybe<CatalogVisibilityEnum>;
};

export type CouponToProductCategoryConnection = {
  __typename?: 'CouponToProductCategoryConnection';
  edges?: Maybe<Array<Maybe<CouponToProductCategoryConnectionEdge>>>;
  nodes?: Maybe<Array<Maybe<ProductCategory>>>;
  pageInfo?: Maybe<WpPageInfo>;
};

export type CouponToProductCategoryConnectionEdge = {
  __typename?: 'CouponToProductCategoryConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<ProductCategory>;
};

export type CouponToProductCategoryConnectionWhereArgs = {
  cacheDomain?: Maybe<Scalars['String']>;
  childOf?: Maybe<Scalars['Int']>;
  childless?: Maybe<Scalars['Boolean']>;
  descriptionLike?: Maybe<Scalars['String']>;
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  hideEmpty?: Maybe<Scalars['Boolean']>;
  hierarchical?: Maybe<Scalars['Boolean']>;
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  nameLike?: Maybe<Scalars['String']>;
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  order?: Maybe<OrderEnum>;
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  padCounts?: Maybe<Scalars['Boolean']>;
  parent?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

export type CouponToProductConnection = {
  __typename?: 'CouponToProductConnection';
  edges?: Maybe<Array<Maybe<CouponToProductConnectionEdge>>>;
  nodes?: Maybe<Array<Maybe<Product>>>;
  pageInfo?: Maybe<WpPageInfo>;
};

export type CouponToProductConnectionEdge = {
  __typename?: 'CouponToProductConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<Product>;
};

export type CouponToProductConnectionWhereArgs = {
  attribute?: Maybe<Scalars['String']>;
  attributeTerm?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  categoryId?: Maybe<Scalars['Int']>;
  categoryIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  categoryIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  categoryIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  categoryNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  dateQuery?: Maybe<DateQueryInput>;
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>;
  featured?: Maybe<Scalars['Boolean']>;
  include?: Maybe<Array<Maybe<Scalars['Int']>>>;
  maxPrice?: Maybe<Scalars['Float']>;
  minPrice?: Maybe<Scalars['Float']>;
  onSale?: Maybe<Scalars['Boolean']>;
  orderby?: Maybe<Array<Maybe<ProductsOrderbyInput>>>;
  parent?: Maybe<Scalars['Int']>;
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  search?: Maybe<Scalars['String']>;
  shippingClassId?: Maybe<Scalars['Int']>;
  sku?: Maybe<Scalars['String']>;
  slugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  status?: Maybe<Scalars['String']>;
  stockStatus?: Maybe<Array<Maybe<StockStatusEnum>>>;
  supportedTypesOnly?: Maybe<Scalars['Boolean']>;
  tag?: Maybe<Scalars['String']>;
  tagId?: Maybe<Scalars['Int']>;
  tagIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  tagIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  tagIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  tagNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  taxonomyFilter?: Maybe<ProductTaxonomyInput>;
  type?: Maybe<ProductTypesEnum>;
  typeIn?: Maybe<Array<Maybe<ProductTypesEnum>>>;
  typeNotIn?: Maybe<Array<Maybe<ProductTypesEnum>>>;
  visibility?: Maybe<CatalogVisibilityEnum>;
};

export type CreateAccountInput = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type CreateCategoryInput = {
  aliasOf?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  parentId?: Maybe<Scalars['ID']>;
  slug?: Maybe<Scalars['String']>;
};

export type CreateCategoryPayload = {
  __typename?: 'CreateCategoryPayload';
  category?: Maybe<Category>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateCommentInput = {
  approved?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  authorEmail?: Maybe<Scalars['String']>;
  authorUrl?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
  commentOn?: Maybe<Scalars['Int']>;
  content?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['String']>;
  parent?: Maybe<Scalars['ID']>;
  type?: Maybe<Scalars['String']>;
};

export type CreateCommentPayload = {
  __typename?: 'CreateCommentPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  comment?: Maybe<Comment>;
  success?: Maybe<Scalars['Boolean']>;
};

export type CreateConfigInput = {
  clientMutationId?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['String']>;
  menuOrder?: Maybe<Scalars['Int']>;
  password?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatusEnum>;
  title?: Maybe<Scalars['String']>;
};

export type CreateConfigPayload = {
  __typename?: 'CreateConfigPayload';
  config?: Maybe<Config>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateCouponInput = {
  amount?: Maybe<Scalars['Float']>;
  clientMutationId?: Maybe<Scalars['String']>;
  code: Scalars['String'];
  dateExpires?: Maybe<Scalars['String']>;
  dateExpiresGmt?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  discountType?: Maybe<DiscountTypeEnum>;
  emailRestrictions?: Maybe<Array<Maybe<Scalars['String']>>>;
  excludeSaleItems?: Maybe<Scalars['Boolean']>;
  excludedProductCategories?: Maybe<Array<Maybe<Scalars['Int']>>>;
  excludedProductIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
  freeShipping?: Maybe<Scalars['Boolean']>;
  individualUse?: Maybe<Scalars['Boolean']>;
  limitUsageToXItems?: Maybe<Scalars['Int']>;
  maximumAmount?: Maybe<Scalars['String']>;
  metaData?: Maybe<Array<Maybe<MetaDataInput>>>;
  minimumAmount?: Maybe<Scalars['String']>;
  productCategories?: Maybe<Array<Maybe<Scalars['Int']>>>;
  productIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
  usageLimit?: Maybe<Scalars['Int']>;
  usageLimitPerUser?: Maybe<Scalars['Int']>;
};

export type CreateCouponPayload = {
  __typename?: 'CreateCouponPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  coupon?: Maybe<Coupon>;
};

export type CreateGenderInput = {
  aliasOf?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  slug?: Maybe<Scalars['String']>;
};

export type CreateGenderPayload = {
  __typename?: 'CreateGenderPayload';
  gender?: Maybe<Gender>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateMediaItemInput = {
  altText?: Maybe<Scalars['String']>;
  authorId?: Maybe<Scalars['ID']>;
  caption?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
  commentStatus?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['String']>;
  dateGmt?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  filePath?: Maybe<Scalars['String']>;
  fileType?: Maybe<MimeTypeEnum>;
  parentId?: Maybe<Scalars['ID']>;
  pingStatus?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  status?: Maybe<MediaItemStatusEnum>;
  title?: Maybe<Scalars['String']>;
};

export type CreateMediaItemPayload = {
  __typename?: 'CreateMediaItemPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  mediaItem?: Maybe<MediaItem>;
};

export type CreateOrderInput = {
  billing?: Maybe<CustomerAddressInput>;
  clientMutationId?: Maybe<Scalars['String']>;
  coupons?: Maybe<Array<Maybe<Scalars['String']>>>;
  currency?: Maybe<Scalars['String']>;
  customerId?: Maybe<Scalars['Int']>;
  customerNote?: Maybe<Scalars['String']>;
  feeLines?: Maybe<Array<Maybe<FeeLineInput>>>;
  isPaid?: Maybe<Scalars['Boolean']>;
  lineItems?: Maybe<Array<Maybe<LineItemInput>>>;
  metaData?: Maybe<Array<Maybe<MetaDataInput>>>;
  parentId?: Maybe<Scalars['Int']>;
  paymentMethod?: Maybe<Scalars['String']>;
  paymentMethodTitle?: Maybe<Scalars['String']>;
  shipping?: Maybe<CustomerAddressInput>;
  shippingLines?: Maybe<Array<Maybe<ShippingLineInput>>>;
  status?: Maybe<OrderStatusEnum>;
  transactionId?: Maybe<Scalars['String']>;
};

export type CreateOrderPayload = {
  __typename?: 'CreateOrderPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  order?: Maybe<Order>;
  orderId?: Maybe<Scalars['Int']>;
};

export type CreatePaColorInput = {
  aliasOf?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  slug?: Maybe<Scalars['String']>;
};

export type CreatePaColorPayload = {
  __typename?: 'CreatePaColorPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  paColor?: Maybe<PaColor>;
};

export type CreatePaSizeInput = {
  aliasOf?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  slug?: Maybe<Scalars['String']>;
};

export type CreatePaSizePayload = {
  __typename?: 'CreatePaSizePayload';
  clientMutationId?: Maybe<Scalars['String']>;
  paSize?: Maybe<PaSize>;
};

export type CreatePageInput = {
  authorId?: Maybe<Scalars['ID']>;
  clientMutationId?: Maybe<Scalars['String']>;
  commentStatus?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['String']>;
  menuOrder?: Maybe<Scalars['Int']>;
  parentId?: Maybe<Scalars['ID']>;
  password?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatusEnum>;
  title?: Maybe<Scalars['String']>;
};

export type CreatePagePayload = {
  __typename?: 'CreatePagePayload';
  clientMutationId?: Maybe<Scalars['String']>;
  page?: Maybe<Page>;
};

export type CreatePostFormatInput = {
  aliasOf?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  slug?: Maybe<Scalars['String']>;
};

export type CreatePostFormatPayload = {
  __typename?: 'CreatePostFormatPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  postFormat?: Maybe<PostFormat>;
};

export type CreatePostInput = {
  authorId?: Maybe<Scalars['ID']>;
  categories?: Maybe<PostCategoriesInput>;
  clientMutationId?: Maybe<Scalars['String']>;
  commentStatus?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['String']>;
  excerpt?: Maybe<Scalars['String']>;
  menuOrder?: Maybe<Scalars['Int']>;
  password?: Maybe<Scalars['String']>;
  pingStatus?: Maybe<Scalars['String']>;
  pinged?: Maybe<Array<Maybe<Scalars['String']>>>;
  postFormats?: Maybe<PostPostFormatsInput>;
  slug?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatusEnum>;
  tags?: Maybe<PostTagsInput>;
  title?: Maybe<Scalars['String']>;
  toPing?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type CreatePostPayload = {
  __typename?: 'CreatePostPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  post?: Maybe<Post>;
};

export type CreateProductCategoryInput = {
  aliasOf?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  parentId?: Maybe<Scalars['ID']>;
  slug?: Maybe<Scalars['String']>;
};

export type CreateProductCategoryPayload = {
  __typename?: 'CreateProductCategoryPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  productCategory?: Maybe<ProductCategory>;
};

export type CreateProductTagInput = {
  aliasOf?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  slug?: Maybe<Scalars['String']>;
};

export type CreateProductTagPayload = {
  __typename?: 'CreateProductTagPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  productTag?: Maybe<ProductTag>;
};

export type CreateProductTypeInput = {
  aliasOf?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  slug?: Maybe<Scalars['String']>;
};

export type CreateProductTypePayload = {
  __typename?: 'CreateProductTypePayload';
  clientMutationId?: Maybe<Scalars['String']>;
  productType?: Maybe<ProductType>;
};

export type CreateRealProjectInput = {
  clientMutationId?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['String']>;
  menuOrder?: Maybe<Scalars['Int']>;
  password?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatusEnum>;
  title?: Maybe<Scalars['String']>;
};

export type CreateRealProjectPayload = {
  __typename?: 'CreateRealProjectPayload';
  realProject?: Maybe<RealProject>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateShippingClassInput = {
  aliasOf?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  slug?: Maybe<Scalars['String']>;
};

export type CreateShippingClassPayload = {
  __typename?: 'CreateShippingClassPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  shippingClass?: Maybe<ShippingClass>;
};

export type CreateTagInput = {
  aliasOf?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  slug?: Maybe<Scalars['String']>;
};

export type CreateTagPayload = {
  __typename?: 'CreateTagPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  tag?: Maybe<Tag>;
};

export type CreateUserInput = {
  aim?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  jabber?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  nicename?: Maybe<Scalars['String']>;
  nickname?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  registered?: Maybe<Scalars['String']>;
  richEditing?: Maybe<Scalars['String']>;
  roles?: Maybe<Array<Maybe<Scalars['String']>>>;
  username: Scalars['String'];
  websiteUrl?: Maybe<Scalars['String']>;
  yim?: Maybe<Scalars['String']>;
};

export type CreateUserPayload = {
  __typename?: 'CreateUserPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export type CreateVisibleProductInput = {
  aliasOf?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  slug?: Maybe<Scalars['String']>;
};

export type CreateVisibleProductPayload = {
  __typename?: 'CreateVisibleProductPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  visibleProduct?: Maybe<VisibleProduct>;
};

export type Customer = Node & {
  __typename?: 'Customer';
  billing?: Maybe<CustomerAddress>;
  calculatedShipping?: Maybe<Scalars['Boolean']>;
  databaseId?: Maybe<Scalars['Int']>;
  date?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  downloadableItems?: Maybe<CustomerToDownloadableItemConnection>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  hasCalculatedShipping?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  isPayingCustomer?: Maybe<Scalars['Boolean']>;
  isVatExempt?: Maybe<Scalars['Boolean']>;
  lastName?: Maybe<Scalars['String']>;
  lastOrder?: Maybe<Order>;
  metaData?: Maybe<Array<Maybe<MetaData>>>;
  modified?: Maybe<Scalars['String']>;
  orderCount?: Maybe<Scalars['Int']>;
  orders?: Maybe<CustomerToOrderConnection>;
  refunds?: Maybe<CustomerToRefundConnection>;
  role?: Maybe<Scalars['String']>;
  sessionToken?: Maybe<Scalars['String']>;
  shipping?: Maybe<CustomerAddress>;
  totalSpent?: Maybe<Scalars['Float']>;
  username?: Maybe<Scalars['String']>;
};


export type CustomerDownloadableItemsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<CustomerToDownloadableItemConnectionWhereArgs>;
};


export type CustomerMetaDataArgs = {
  key?: Maybe<Scalars['String']>;
  keysIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  multiple?: Maybe<Scalars['Boolean']>;
};


export type CustomerOrdersArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<CustomerToOrderConnectionWhereArgs>;
};


export type CustomerRefundsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<CustomerToRefundConnectionWhereArgs>;
};

export type CustomerAddress = {
  __typename?: 'CustomerAddress';
  address1?: Maybe<Scalars['String']>;
  address2?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  country?: Maybe<CountriesEnum>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  postcode?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
};

export type CustomerAddressInput = {
  address1?: Maybe<Scalars['String']>;
  address2?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  country?: Maybe<CountriesEnum>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  overwrite?: Maybe<Scalars['Boolean']>;
  phone?: Maybe<Scalars['String']>;
  postcode?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
};

export enum CustomerConnectionOrderbyEnum {
  Email = 'EMAIL',
  Id = 'ID',
  Include = 'INCLUDE',
  Name = 'NAME',
  RegisteredDate = 'REGISTERED_DATE',
  Username = 'USERNAME'
}

export type CustomerToDownloadableItemConnection = {
  __typename?: 'CustomerToDownloadableItemConnection';
  edges?: Maybe<Array<Maybe<CustomerToDownloadableItemConnectionEdge>>>;
  nodes?: Maybe<Array<Maybe<DownloadableItem>>>;
  pageInfo?: Maybe<WpPageInfo>;
};

export type CustomerToDownloadableItemConnectionEdge = {
  __typename?: 'CustomerToDownloadableItemConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<DownloadableItem>;
};

export type CustomerToDownloadableItemConnectionWhereArgs = {
  active?: Maybe<Scalars['Boolean']>;
  expired?: Maybe<Scalars['Boolean']>;
  hasDownloadsRemaining?: Maybe<Scalars['Boolean']>;
};

export type CustomerToOrderConnection = {
  __typename?: 'CustomerToOrderConnection';
  edges?: Maybe<Array<Maybe<CustomerToOrderConnectionEdge>>>;
  nodes?: Maybe<Array<Maybe<Order>>>;
  pageInfo?: Maybe<WpPageInfo>;
};

export type CustomerToOrderConnectionEdge = {
  __typename?: 'CustomerToOrderConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<Order>;
};

export type CustomerToOrderConnectionWhereArgs = {
  customerId?: Maybe<Scalars['Int']>;
  customersIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  dateQuery?: Maybe<DateQueryInput>;
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>;
  include?: Maybe<Array<Maybe<Scalars['Int']>>>;
  orderby?: Maybe<Array<Maybe<OrdersOrderbyInput>>>;
  parent?: Maybe<Scalars['Int']>;
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  productId?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
  statuses?: Maybe<Array<Maybe<OrderStatusEnum>>>;
};

export type CustomerToRefundConnection = {
  __typename?: 'CustomerToRefundConnection';
  edges?: Maybe<Array<Maybe<CustomerToRefundConnectionEdge>>>;
  nodes?: Maybe<Array<Maybe<Refund>>>;
  pageInfo?: Maybe<WpPageInfo>;
};

export type CustomerToRefundConnectionEdge = {
  __typename?: 'CustomerToRefundConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<Refund>;
};

export type CustomerToRefundConnectionWhereArgs = {
  dateQuery?: Maybe<DateQueryInput>;
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>;
  include?: Maybe<Array<Maybe<Scalars['Int']>>>;
  orderIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  orderby?: Maybe<Array<Maybe<PostTypeOrderbyInput>>>;
  parent?: Maybe<Scalars['Int']>;
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  search?: Maybe<Scalars['String']>;
  statuses?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type DatabaseIdentifier = {
  databaseId: Scalars['Int'];
};

export type DateInput = {
  day?: Maybe<Scalars['Int']>;
  month?: Maybe<Scalars['Int']>;
  year?: Maybe<Scalars['Int']>;
};

export type DateQueryInput = {
  after?: Maybe<DateInput>;
  before?: Maybe<DateInput>;
  column?: Maybe<PostObjectsConnectionDateColumnEnum>;
  compare?: Maybe<Scalars['String']>;
  day?: Maybe<Scalars['Int']>;
  hour?: Maybe<Scalars['Int']>;
  inclusive?: Maybe<Scalars['Boolean']>;
  minute?: Maybe<Scalars['Int']>;
  month?: Maybe<Scalars['Int']>;
  relation?: Maybe<RelationEnum>;
  second?: Maybe<Scalars['Int']>;
  week?: Maybe<Scalars['Int']>;
  year?: Maybe<Scalars['Int']>;
};

export type DefaultTemplate = ContentTemplate & {
  __typename?: 'DefaultTemplate';
  templateName?: Maybe<Scalars['String']>;
};

export type DeleteCategoryInput = {
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
};

export type DeleteCategoryPayload = {
  __typename?: 'DeleteCategoryPayload';
  category?: Maybe<Category>;
  clientMutationId?: Maybe<Scalars['String']>;
  deletedId?: Maybe<Scalars['ID']>;
};

export type DeleteCommentInput = {
  clientMutationId?: Maybe<Scalars['String']>;
  forceDelete?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
};

export type DeleteCommentPayload = {
  __typename?: 'DeleteCommentPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  comment?: Maybe<Comment>;
  deletedId?: Maybe<Scalars['ID']>;
};

export type DeleteConfigInput = {
  clientMutationId?: Maybe<Scalars['String']>;
  forceDelete?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
};

export type DeleteConfigPayload = {
  __typename?: 'DeleteConfigPayload';
  config?: Maybe<Config>;
  clientMutationId?: Maybe<Scalars['String']>;
  deletedId?: Maybe<Scalars['ID']>;
};

export type DeleteCouponInput = {
  clientMutationId?: Maybe<Scalars['String']>;
  forceDelete?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
};

export type DeleteCouponPayload = {
  __typename?: 'DeleteCouponPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  coupon?: Maybe<Coupon>;
};

export type DeleteGenderInput = {
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
};

export type DeleteGenderPayload = {
  __typename?: 'DeleteGenderPayload';
  gender?: Maybe<Gender>;
  clientMutationId?: Maybe<Scalars['String']>;
  deletedId?: Maybe<Scalars['ID']>;
};

export type DeleteMediaItemInput = {
  clientMutationId?: Maybe<Scalars['String']>;
  forceDelete?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
};

export type DeleteMediaItemPayload = {
  __typename?: 'DeleteMediaItemPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  deletedId?: Maybe<Scalars['ID']>;
  mediaItem?: Maybe<MediaItem>;
};

export type DeleteOrderInput = {
  clientMutationId?: Maybe<Scalars['String']>;
  forceDelete?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['ID']>;
  orderId?: Maybe<Scalars['Int']>;
};

export type DeleteOrderItemsInput = {
  clientMutationId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  itemIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
  orderId?: Maybe<Scalars['Int']>;
};

export type DeleteOrderItemsPayload = {
  __typename?: 'DeleteOrderItemsPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  order?: Maybe<Order>;
};

export type DeleteOrderPayload = {
  __typename?: 'DeleteOrderPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  order?: Maybe<Order>;
};

export type DeletePaColorInput = {
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
};

export type DeletePaColorPayload = {
  __typename?: 'DeletePaColorPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  deletedId?: Maybe<Scalars['ID']>;
  paColor?: Maybe<PaColor>;
};

export type DeletePaSizeInput = {
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
};

export type DeletePaSizePayload = {
  __typename?: 'DeletePaSizePayload';
  clientMutationId?: Maybe<Scalars['String']>;
  deletedId?: Maybe<Scalars['ID']>;
  paSize?: Maybe<PaSize>;
};

export type DeletePageInput = {
  clientMutationId?: Maybe<Scalars['String']>;
  forceDelete?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
};

export type DeletePagePayload = {
  __typename?: 'DeletePagePayload';
  clientMutationId?: Maybe<Scalars['String']>;
  deletedId?: Maybe<Scalars['ID']>;
  page?: Maybe<Page>;
};

export type DeletePostFormatInput = {
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
};

export type DeletePostFormatPayload = {
  __typename?: 'DeletePostFormatPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  deletedId?: Maybe<Scalars['ID']>;
  postFormat?: Maybe<PostFormat>;
};

export type DeletePostInput = {
  clientMutationId?: Maybe<Scalars['String']>;
  forceDelete?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
};

export type DeletePostPayload = {
  __typename?: 'DeletePostPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  deletedId?: Maybe<Scalars['ID']>;
  post?: Maybe<Post>;
};

export type DeleteProductCategoryInput = {
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
};

export type DeleteProductCategoryPayload = {
  __typename?: 'DeleteProductCategoryPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  deletedId?: Maybe<Scalars['ID']>;
  productCategory?: Maybe<ProductCategory>;
};

export type DeleteProductTagInput = {
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
};

export type DeleteProductTagPayload = {
  __typename?: 'DeleteProductTagPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  deletedId?: Maybe<Scalars['ID']>;
  productTag?: Maybe<ProductTag>;
};

export type DeleteProductTypeInput = {
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
};

export type DeleteProductTypePayload = {
  __typename?: 'DeleteProductTypePayload';
  clientMutationId?: Maybe<Scalars['String']>;
  deletedId?: Maybe<Scalars['ID']>;
  productType?: Maybe<ProductType>;
};

export type DeleteRealProjectInput = {
  clientMutationId?: Maybe<Scalars['String']>;
  forceDelete?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
};

export type DeleteRealProjectPayload = {
  __typename?: 'DeleteRealProjectPayload';
  realProject?: Maybe<RealProject>;
  clientMutationId?: Maybe<Scalars['String']>;
  deletedId?: Maybe<Scalars['ID']>;
};

export type DeleteReviewInput = {
  clientMutationId?: Maybe<Scalars['String']>;
  forceDelete?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
};

export type DeleteReviewPayload = {
  __typename?: 'DeleteReviewPayload';
  affectedId?: Maybe<Scalars['ID']>;
  clientMutationId?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Float']>;
  review?: Maybe<Comment>;
};

export type DeleteShippingClassInput = {
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
};

export type DeleteShippingClassPayload = {
  __typename?: 'DeleteShippingClassPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  deletedId?: Maybe<Scalars['ID']>;
  shippingClass?: Maybe<ShippingClass>;
};

export type DeleteTagInput = {
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
};

export type DeleteTagPayload = {
  __typename?: 'DeleteTagPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  deletedId?: Maybe<Scalars['ID']>;
  tag?: Maybe<Tag>;
};

export type DeleteUserInput = {
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  reassignId?: Maybe<Scalars['ID']>;
};

export type DeleteUserPayload = {
  __typename?: 'DeleteUserPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  deletedId?: Maybe<Scalars['ID']>;
  user?: Maybe<User>;
};

export type DeleteVisibleProductInput = {
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
};

export type DeleteVisibleProductPayload = {
  __typename?: 'DeleteVisibleProductPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  deletedId?: Maybe<Scalars['ID']>;
  visibleProduct?: Maybe<VisibleProduct>;
};

export enum DiscountTypeEnum {
  FixedCart = 'FIXED_CART',
  FixedProduct = 'FIXED_PRODUCT',
  Percent = 'PERCENT'
}

export type DiscussionSettings = {
  __typename?: 'DiscussionSettings';
  defaultCommentStatus?: Maybe<Scalars['String']>;
  defaultPingStatus?: Maybe<Scalars['String']>;
};

export type DownloadableItem = {
  __typename?: 'DownloadableItem';
  accessExpires?: Maybe<Scalars['String']>;
  download?: Maybe<ProductDownload>;
  downloadId: Scalars['String'];
  downloadsRemaining?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  product?: Maybe<Product>;
  url?: Maybe<Scalars['String']>;
};

export type EmptyCartInput = {
  clearPersistentCart?: Maybe<Scalars['Boolean']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type EmptyCartPayload = {
  __typename?: 'EmptyCartPayload';
  cart?: Maybe<Cart>;
  clientMutationId?: Maybe<Scalars['String']>;
  deletedCart?: Maybe<Cart>;
};

export type EnqueuedAsset = {
  args?: Maybe<Scalars['Boolean']>;
  dependencies?: Maybe<Array<Maybe<EnqueuedScript>>>;
  extra?: Maybe<Scalars['String']>;
  handle?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  src?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type EnqueuedScript = Node & EnqueuedAsset & {
  __typename?: 'EnqueuedScript';
  args?: Maybe<Scalars['Boolean']>;
  dependencies?: Maybe<Array<Maybe<EnqueuedScript>>>;
  extra?: Maybe<Scalars['String']>;
  handle?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  src?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type EnqueuedStylesheet = Node & EnqueuedAsset & {
  __typename?: 'EnqueuedStylesheet';
  args?: Maybe<Scalars['Boolean']>;
  dependencies?: Maybe<Array<Maybe<EnqueuedScript>>>;
  extra?: Maybe<Scalars['String']>;
  handle?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  src?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type ExternalProduct = Node & Product & NodeWithComments & NodeWithContentEditor & NodeWithFeaturedImage & ContentNode & UniformResourceIdentifiable & DatabaseIdentifier & {
  __typename?: 'ExternalProduct';
  attributes?: Maybe<ProductToProductAttributeConnection>;
  averageRating?: Maybe<Scalars['Float']>;
  buttonText?: Maybe<Scalars['String']>;
  catalogVisibility?: Maybe<CatalogVisibilityEnum>;
  commentCount?: Maybe<Scalars['Int']>;
  commentStatus?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  contentType?: Maybe<ContentNodeToContentTypeConnectionEdge>;
  databaseId: Scalars['Int'];
  date?: Maybe<Scalars['String']>;
  dateGmt?: Maybe<Scalars['String']>;
  dateOnSaleFrom?: Maybe<Scalars['String']>;
  dateOnSaleTo?: Maybe<Scalars['String']>;
  defaultAttributes?: Maybe<ExternalProductToVariationAttributeConnection>;
  description?: Maybe<Scalars['String']>;
  desiredSlug?: Maybe<Scalars['String']>;
  editingLockedBy?: Maybe<ContentNodeToEditLockConnectionEdge>;
  enclosure?: Maybe<Scalars['String']>;
  enqueuedScripts?: Maybe<ContentNodeToEnqueuedScriptConnection>;
  enqueuedStylesheets?: Maybe<ContentNodeToEnqueuedStylesheetConnection>;
  externalUrl?: Maybe<Scalars['String']>;
  featured?: Maybe<Scalars['Boolean']>;
  featuredImage?: Maybe<NodeWithFeaturedImageToMediaItemConnectionEdge>;
  featuredImageDatabaseId?: Maybe<Scalars['Int']>;
  featuredImageId?: Maybe<Scalars['ID']>;
  galleryImages?: Maybe<ProductToMediaItemConnection>;
  genders?: Maybe<ProductToGenderConnection>;
  globalAttributes?: Maybe<ProductToGlobalProductAttributeConnection>;
  guid?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image?: Maybe<MediaItem>;
  isContentNode: Scalars['Boolean'];
  isPreview?: Maybe<Scalars['Boolean']>;
  isRestricted?: Maybe<Scalars['Boolean']>;
  isTermNode: Scalars['Boolean'];
  lastEditedBy?: Maybe<ContentNodeToEditLastConnectionEdge>;
  link?: Maybe<Scalars['String']>;
  localAttributes?: Maybe<ProductToLocalProductAttributeConnection>;
  menuOrder?: Maybe<Scalars['Int']>;
  metaData?: Maybe<Array<Maybe<MetaData>>>;
  modified?: Maybe<Scalars['String']>;
  modifiedGmt?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  onSale?: Maybe<Scalars['Boolean']>;
  paColors?: Maybe<ProductToPaColorConnection>;
  paSizes?: Maybe<ProductToPaSizeConnection>;
  parent?: Maybe<Product>;
  previewRevisionDatabaseId?: Maybe<Scalars['Int']>;
  previewRevisionId?: Maybe<Scalars['ID']>;
  price?: Maybe<Scalars['String']>;
  productCategories?: Maybe<ProductToProductCategoryConnection>;
  productTags?: Maybe<ProductToProductTagConnection>;
  productTypes?: Maybe<ProductToProductTypeConnection>;
  purchasable?: Maybe<Scalars['Boolean']>;
  purchaseNote?: Maybe<Scalars['String']>;
  regularPrice?: Maybe<Scalars['String']>;
  related?: Maybe<ProductToProductConnection>;
  reviewCount?: Maybe<Scalars['Int']>;
  reviews?: Maybe<ProductToCommentConnection>;
  reviewsAllowed?: Maybe<Scalars['Boolean']>;
  salePrice?: Maybe<Scalars['String']>;
  seo?: Maybe<PostTypeSeo>;
  shippingClasses?: Maybe<ProductToShippingClassConnection>;
  shortDescription?: Maybe<Scalars['String']>;
  sku?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  taxClass?: Maybe<TaxClassEnum>;
  taxStatus?: Maybe<TaxStatusEnum>;
  template?: Maybe<ContentTemplate>;
  totalSales?: Maybe<Scalars['Int']>;
  type?: Maybe<ProductTypesEnum>;
  upsell?: Maybe<ProductToUpsellConnection>;
  uri?: Maybe<Scalars['String']>;
  visibleProducts?: Maybe<ProductToVisibleProductConnection>;
};


export type ExternalProductAttributesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToProductAttributeConnectionWhereArgs>;
};


export type ExternalProductContentArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>;
};


export type ExternalProductDefaultAttributesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


export type ExternalProductDescriptionArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>;
};


export type ExternalProductEnqueuedScriptsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


export type ExternalProductEnqueuedStylesheetsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


export type ExternalProductGalleryImagesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToMediaItemConnectionWhereArgs>;
};


export type ExternalProductGendersArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToGenderConnectionWhereArgs>;
};


export type ExternalProductGlobalAttributesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToGlobalProductAttributeConnectionWhereArgs>;
};


export type ExternalProductLocalAttributesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToLocalProductAttributeConnectionWhereArgs>;
};


export type ExternalProductMetaDataArgs = {
  key?: Maybe<Scalars['String']>;
  keysIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  multiple?: Maybe<Scalars['Boolean']>;
};


export type ExternalProductPaColorsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToPaColorConnectionWhereArgs>;
};


export type ExternalProductPaSizesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToPaSizeConnectionWhereArgs>;
};


export type ExternalProductPriceArgs = {
  format?: Maybe<PricingFieldFormatEnum>;
};


export type ExternalProductProductCategoriesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToProductCategoryConnectionWhereArgs>;
};


export type ExternalProductProductTagsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToProductTagConnectionWhereArgs>;
};


export type ExternalProductProductTypesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToProductTypeConnectionWhereArgs>;
};


export type ExternalProductRegularPriceArgs = {
  format?: Maybe<PricingFieldFormatEnum>;
};


export type ExternalProductRelatedArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToProductConnectionWhereArgs>;
};


export type ExternalProductReviewsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToCommentConnectionWhereArgs>;
};


export type ExternalProductSalePriceArgs = {
  format?: Maybe<PricingFieldFormatEnum>;
};


export type ExternalProductShippingClassesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToShippingClassConnectionWhereArgs>;
};


export type ExternalProductShortDescriptionArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>;
};


export type ExternalProductUpsellArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToUpsellConnectionWhereArgs>;
};


export type ExternalProductVisibleProductsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToVisibleProductConnectionWhereArgs>;
};

export type ExternalProductToVariationAttributeConnection = {
  __typename?: 'ExternalProductToVariationAttributeConnection';
  edges?: Maybe<Array<Maybe<ExternalProductToVariationAttributeConnectionEdge>>>;
  nodes?: Maybe<Array<Maybe<VariationAttribute>>>;
  pageInfo?: Maybe<WpPageInfo>;
};

export type ExternalProductToVariationAttributeConnectionEdge = {
  __typename?: 'ExternalProductToVariationAttributeConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<VariationAttribute>;
};

export type FeeLine = {
  __typename?: 'FeeLine';
  amount?: Maybe<Scalars['String']>;
  databaseId?: Maybe<Scalars['Int']>;
  metaData?: Maybe<Array<Maybe<MetaData>>>;
  name?: Maybe<Scalars['String']>;
  orderId?: Maybe<Scalars['Int']>;
  taxClass?: Maybe<TaxClassEnum>;
  taxStatus?: Maybe<TaxStatusEnum>;
  taxes?: Maybe<Array<Maybe<OrderItemTax>>>;
  total?: Maybe<Scalars['String']>;
  totalTax?: Maybe<Scalars['String']>;
};


export type FeeLineMetaDataArgs = {
  key?: Maybe<Scalars['String']>;
  keysIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  multiple?: Maybe<Scalars['Boolean']>;
};

export type FeeLineInput = {
  amount?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  taxClass?: Maybe<TaxClassEnum>;
  taxStatus?: Maybe<TaxStatusEnum>;
  total?: Maybe<Scalars['String']>;
};

export type FillCartInput = {
  clientMutationId?: Maybe<Scalars['String']>;
  coupons?: Maybe<Array<Maybe<Scalars['String']>>>;
  items?: Maybe<Array<Maybe<CartItemInput>>>;
  shippingMethods?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FillCartPayload = {
  __typename?: 'FillCartPayload';
  added?: Maybe<Array<Maybe<CartItem>>>;
  applied?: Maybe<Array<Maybe<AppliedCoupon>>>;
  cart?: Maybe<Cart>;
  cartErrors?: Maybe<Array<Maybe<CartError>>>;
  chosenShippingMethods?: Maybe<Array<Maybe<Scalars['String']>>>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type Gender = Node & TermNode & UniformResourceIdentifiable & DatabaseIdentifier & MenuItemLinkable & {
  __typename?: 'Gender';
  /** @deprecated Deprecated in favor of databaseId */
  genderId?: Maybe<Scalars['Int']>;
  contentNodes?: Maybe<GenderToContentNodeConnection>;
  count?: Maybe<Scalars['Int']>;
  databaseId: Scalars['Int'];
  description?: Maybe<Scalars['String']>;
  enqueuedScripts?: Maybe<TermNodeToEnqueuedScriptConnection>;
  enqueuedStylesheets?: Maybe<TermNodeToEnqueuedStylesheetConnection>;
  id: Scalars['ID'];
  isContentNode: Scalars['Boolean'];
  isRestricted?: Maybe<Scalars['Boolean']>;
  isTermNode: Scalars['Boolean'];
  link?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  seo?: Maybe<TaxonomySeo>;
  slug?: Maybe<Scalars['String']>;
  taxonomy?: Maybe<GenderToTaxonomyConnectionEdge>;
  termGroupId?: Maybe<Scalars['Int']>;
  termTaxonomyId?: Maybe<Scalars['Int']>;
  uri?: Maybe<Scalars['String']>;
};


export type GenderContentNodesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<GenderToContentNodeConnectionWhereArgs>;
};


export type GenderEnqueuedScriptsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


export type GenderEnqueuedStylesheetsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};

export enum GenderIdType {
  DatabaseId = 'DATABASE_ID',
  Id = 'ID',
  Name = 'NAME',
  Slug = 'SLUG',
  Uri = 'URI'
}

export type GenderToContentNodeConnection = {
  __typename?: 'GenderToContentNodeConnection';
  edges?: Maybe<Array<Maybe<GenderToContentNodeConnectionEdge>>>;
  nodes?: Maybe<Array<Maybe<ContentNode>>>;
  pageInfo?: Maybe<WpPageInfo>;
};

export type GenderToContentNodeConnectionEdge = {
  __typename?: 'GenderToContentNodeConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<ContentNode>;
};

export type GenderToContentNodeConnectionWhereArgs = {
  contentTypes?: Maybe<Array<Maybe<ContentTypesOfGenderEnum>>>;
  dateQuery?: Maybe<DateQueryInput>;
  hasPassword?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  mimeType?: Maybe<MimeTypeEnum>;
  name?: Maybe<Scalars['String']>;
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  parent?: Maybe<Scalars['ID']>;
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  password?: Maybe<Scalars['String']>;
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  title?: Maybe<Scalars['String']>;
};

export type GenderToTaxonomyConnectionEdge = {
  __typename?: 'GenderToTaxonomyConnectionEdge';
  node?: Maybe<Taxonomy>;
};

export type GeneralSettings = {
  __typename?: 'GeneralSettings';
  dateFormat?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  language?: Maybe<Scalars['String']>;
  startOfWeek?: Maybe<Scalars['Int']>;
  timeFormat?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type GlobalProductAttribute = ProductAttribute & {
  __typename?: 'GlobalProductAttribute';
  attributeId: Scalars['Int'];
  id: Scalars['ID'];
  label: Scalars['String'];
  name: Scalars['String'];
  options?: Maybe<Array<Maybe<Scalars['String']>>>;
  position: Scalars['Int'];
  scope: ProductAttributeTypesEnum;
  slug: Scalars['String'];
  terms?: Maybe<GlobalProductAttributeToTermNodeConnection>;
  variation: Scalars['Boolean'];
  visible: Scalars['Boolean'];
};


export type GlobalProductAttributeTermsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<GlobalProductAttributeToTermNodeConnectionWhereArgs>;
};

export type GlobalProductAttributeToTermNodeConnection = {
  __typename?: 'GlobalProductAttributeToTermNodeConnection';
  edges?: Maybe<Array<Maybe<GlobalProductAttributeToTermNodeConnectionEdge>>>;
  nodes?: Maybe<Array<Maybe<TermNode>>>;
  pageInfo?: Maybe<WpPageInfo>;
};

export type GlobalProductAttributeToTermNodeConnectionEdge = {
  __typename?: 'GlobalProductAttributeToTermNodeConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<TermNode>;
};

export type GlobalProductAttributeToTermNodeConnectionWhereArgs = {
  cacheDomain?: Maybe<Scalars['String']>;
  childOf?: Maybe<Scalars['Int']>;
  childless?: Maybe<Scalars['Boolean']>;
  descriptionLike?: Maybe<Scalars['String']>;
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  hideEmpty?: Maybe<Scalars['Boolean']>;
  hierarchical?: Maybe<Scalars['Boolean']>;
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  nameLike?: Maybe<Scalars['String']>;
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  order?: Maybe<OrderEnum>;
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  padCounts?: Maybe<Scalars['Boolean']>;
  parent?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

export type GroupProduct = Node & Product & NodeWithComments & NodeWithContentEditor & NodeWithFeaturedImage & ContentNode & UniformResourceIdentifiable & DatabaseIdentifier & {
  __typename?: 'GroupProduct';
  addToCartDescription?: Maybe<Scalars['String']>;
  addToCartText?: Maybe<Scalars['String']>;
  attributes?: Maybe<ProductToProductAttributeConnection>;
  averageRating?: Maybe<Scalars['Float']>;
  catalogVisibility?: Maybe<CatalogVisibilityEnum>;
  commentCount?: Maybe<Scalars['Int']>;
  commentStatus?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  contentType?: Maybe<ContentNodeToContentTypeConnectionEdge>;
  databaseId: Scalars['Int'];
  date?: Maybe<Scalars['String']>;
  dateGmt?: Maybe<Scalars['String']>;
  dateOnSaleFrom?: Maybe<Scalars['String']>;
  dateOnSaleTo?: Maybe<Scalars['String']>;
  defaultAttributes?: Maybe<GroupProductToVariationAttributeConnection>;
  description?: Maybe<Scalars['String']>;
  desiredSlug?: Maybe<Scalars['String']>;
  editingLockedBy?: Maybe<ContentNodeToEditLockConnectionEdge>;
  enclosure?: Maybe<Scalars['String']>;
  enqueuedScripts?: Maybe<ContentNodeToEnqueuedScriptConnection>;
  enqueuedStylesheets?: Maybe<ContentNodeToEnqueuedStylesheetConnection>;
  featured?: Maybe<Scalars['Boolean']>;
  featuredImage?: Maybe<NodeWithFeaturedImageToMediaItemConnectionEdge>;
  featuredImageDatabaseId?: Maybe<Scalars['Int']>;
  featuredImageId?: Maybe<Scalars['ID']>;
  galleryImages?: Maybe<ProductToMediaItemConnection>;
  genders?: Maybe<ProductToGenderConnection>;
  globalAttributes?: Maybe<ProductToGlobalProductAttributeConnection>;
  guid?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image?: Maybe<MediaItem>;
  isContentNode: Scalars['Boolean'];
  isPreview?: Maybe<Scalars['Boolean']>;
  isRestricted?: Maybe<Scalars['Boolean']>;
  isTermNode: Scalars['Boolean'];
  lastEditedBy?: Maybe<ContentNodeToEditLastConnectionEdge>;
  link?: Maybe<Scalars['String']>;
  localAttributes?: Maybe<ProductToLocalProductAttributeConnection>;
  menuOrder?: Maybe<Scalars['Int']>;
  metaData?: Maybe<Array<Maybe<MetaData>>>;
  modified?: Maybe<Scalars['String']>;
  modifiedGmt?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  onSale?: Maybe<Scalars['Boolean']>;
  paColors?: Maybe<ProductToPaColorConnection>;
  paSizes?: Maybe<ProductToPaSizeConnection>;
  parent?: Maybe<Product>;
  previewRevisionDatabaseId?: Maybe<Scalars['Int']>;
  previewRevisionId?: Maybe<Scalars['ID']>;
  price?: Maybe<Scalars['String']>;
  productCategories?: Maybe<ProductToProductCategoryConnection>;
  productTags?: Maybe<ProductToProductTagConnection>;
  productTypes?: Maybe<ProductToProductTypeConnection>;
  products?: Maybe<GroupProductToProductConnection>;
  purchasable?: Maybe<Scalars['Boolean']>;
  purchaseNote?: Maybe<Scalars['String']>;
  related?: Maybe<ProductToProductConnection>;
  reviewCount?: Maybe<Scalars['Int']>;
  reviews?: Maybe<ProductToCommentConnection>;
  reviewsAllowed?: Maybe<Scalars['Boolean']>;
  seo?: Maybe<PostTypeSeo>;
  shippingClasses?: Maybe<ProductToShippingClassConnection>;
  shortDescription?: Maybe<Scalars['String']>;
  sku?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  template?: Maybe<ContentTemplate>;
  totalSales?: Maybe<Scalars['Int']>;
  type?: Maybe<ProductTypesEnum>;
  upsell?: Maybe<ProductToUpsellConnection>;
  uri?: Maybe<Scalars['String']>;
  visibleProducts?: Maybe<ProductToVisibleProductConnection>;
};


export type GroupProductAttributesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToProductAttributeConnectionWhereArgs>;
};


export type GroupProductContentArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>;
};


export type GroupProductDefaultAttributesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


export type GroupProductDescriptionArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>;
};


export type GroupProductEnqueuedScriptsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


export type GroupProductEnqueuedStylesheetsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


export type GroupProductGalleryImagesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToMediaItemConnectionWhereArgs>;
};


export type GroupProductGendersArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToGenderConnectionWhereArgs>;
};


export type GroupProductGlobalAttributesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToGlobalProductAttributeConnectionWhereArgs>;
};


export type GroupProductLocalAttributesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToLocalProductAttributeConnectionWhereArgs>;
};


export type GroupProductMetaDataArgs = {
  key?: Maybe<Scalars['String']>;
  keysIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  multiple?: Maybe<Scalars['Boolean']>;
};


export type GroupProductPaColorsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToPaColorConnectionWhereArgs>;
};


export type GroupProductPaSizesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToPaSizeConnectionWhereArgs>;
};


export type GroupProductProductCategoriesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToProductCategoryConnectionWhereArgs>;
};


export type GroupProductProductTagsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToProductTagConnectionWhereArgs>;
};


export type GroupProductProductTypesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToProductTypeConnectionWhereArgs>;
};


export type GroupProductProductsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<GroupProductToProductConnectionWhereArgs>;
};


export type GroupProductRelatedArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToProductConnectionWhereArgs>;
};


export type GroupProductReviewsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToCommentConnectionWhereArgs>;
};


export type GroupProductShippingClassesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToShippingClassConnectionWhereArgs>;
};


export type GroupProductShortDescriptionArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>;
};


export type GroupProductUpsellArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToUpsellConnectionWhereArgs>;
};


export type GroupProductVisibleProductsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToVisibleProductConnectionWhereArgs>;
};

export type GroupProductToProductConnection = {
  __typename?: 'GroupProductToProductConnection';
  edges?: Maybe<Array<Maybe<GroupProductToProductConnectionEdge>>>;
  nodes?: Maybe<Array<Maybe<Product>>>;
  pageInfo?: Maybe<WpPageInfo>;
};

export type GroupProductToProductConnectionEdge = {
  __typename?: 'GroupProductToProductConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<Product>;
};

export type GroupProductToProductConnectionWhereArgs = {
  attribute?: Maybe<Scalars['String']>;
  attributeTerm?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  categoryId?: Maybe<Scalars['Int']>;
  categoryIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  categoryIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  categoryIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  categoryNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  dateQuery?: Maybe<DateQueryInput>;
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>;
  featured?: Maybe<Scalars['Boolean']>;
  include?: Maybe<Array<Maybe<Scalars['Int']>>>;
  maxPrice?: Maybe<Scalars['Float']>;
  minPrice?: Maybe<Scalars['Float']>;
  onSale?: Maybe<Scalars['Boolean']>;
  orderby?: Maybe<Array<Maybe<ProductsOrderbyInput>>>;
  parent?: Maybe<Scalars['Int']>;
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  search?: Maybe<Scalars['String']>;
  shippingClassId?: Maybe<Scalars['Int']>;
  sku?: Maybe<Scalars['String']>;
  slugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  status?: Maybe<Scalars['String']>;
  stockStatus?: Maybe<Array<Maybe<StockStatusEnum>>>;
  supportedTypesOnly?: Maybe<Scalars['Boolean']>;
  tag?: Maybe<Scalars['String']>;
  tagId?: Maybe<Scalars['Int']>;
  tagIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  tagIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  tagIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  tagNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  taxonomyFilter?: Maybe<ProductTaxonomyInput>;
  type?: Maybe<ProductTypesEnum>;
  typeIn?: Maybe<Array<Maybe<ProductTypesEnum>>>;
  typeNotIn?: Maybe<Array<Maybe<ProductTypesEnum>>>;
  visibility?: Maybe<CatalogVisibilityEnum>;
};

export type GroupProductToVariationAttributeConnection = {
  __typename?: 'GroupProductToVariationAttributeConnection';
  edges?: Maybe<Array<Maybe<GroupProductToVariationAttributeConnectionEdge>>>;
  nodes?: Maybe<Array<Maybe<VariationAttribute>>>;
  pageInfo?: Maybe<WpPageInfo>;
};

export type GroupProductToVariationAttributeConnectionEdge = {
  __typename?: 'GroupProductToVariationAttributeConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<VariationAttribute>;
};

export type HierarchicalContentNode = {
  ancestors?: Maybe<HierarchicalContentNodeToContentNodeAncestorsConnection>;
  children?: Maybe<HierarchicalContentNodeToContentNodeChildrenConnection>;
  parent?: Maybe<HierarchicalContentNodeToParentContentNodeConnectionEdge>;
  parentDatabaseId?: Maybe<Scalars['Int']>;
  parentId?: Maybe<Scalars['ID']>;
};


export type HierarchicalContentNodeAncestorsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<HierarchicalContentNodeToContentNodeAncestorsConnectionWhereArgs>;
};


export type HierarchicalContentNodeChildrenArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<HierarchicalContentNodeToContentNodeChildrenConnectionWhereArgs>;
};

export type HierarchicalContentNodeToContentNodeAncestorsConnection = {
  __typename?: 'HierarchicalContentNodeToContentNodeAncestorsConnection';
  edges?: Maybe<Array<Maybe<HierarchicalContentNodeToContentNodeAncestorsConnectionEdge>>>;
  nodes?: Maybe<Array<Maybe<ContentNode>>>;
  pageInfo?: Maybe<WpPageInfo>;
};

export type HierarchicalContentNodeToContentNodeAncestorsConnectionEdge = {
  __typename?: 'HierarchicalContentNodeToContentNodeAncestorsConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<ContentNode>;
};

export type HierarchicalContentNodeToContentNodeAncestorsConnectionWhereArgs = {
  contentTypes?: Maybe<Array<Maybe<ContentTypeEnum>>>;
  dateQuery?: Maybe<DateQueryInput>;
  hasPassword?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  mimeType?: Maybe<MimeTypeEnum>;
  name?: Maybe<Scalars['String']>;
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  parent?: Maybe<Scalars['ID']>;
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  password?: Maybe<Scalars['String']>;
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  title?: Maybe<Scalars['String']>;
};

export type HierarchicalContentNodeToContentNodeChildrenConnection = {
  __typename?: 'HierarchicalContentNodeToContentNodeChildrenConnection';
  edges?: Maybe<Array<Maybe<HierarchicalContentNodeToContentNodeChildrenConnectionEdge>>>;
  nodes?: Maybe<Array<Maybe<ContentNode>>>;
  pageInfo?: Maybe<WpPageInfo>;
};

export type HierarchicalContentNodeToContentNodeChildrenConnectionEdge = {
  __typename?: 'HierarchicalContentNodeToContentNodeChildrenConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<ContentNode>;
};

export type HierarchicalContentNodeToContentNodeChildrenConnectionWhereArgs = {
  contentTypes?: Maybe<Array<Maybe<ContentTypeEnum>>>;
  dateQuery?: Maybe<DateQueryInput>;
  hasPassword?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  mimeType?: Maybe<MimeTypeEnum>;
  name?: Maybe<Scalars['String']>;
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  parent?: Maybe<Scalars['ID']>;
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  password?: Maybe<Scalars['String']>;
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  title?: Maybe<Scalars['String']>;
};

export type HierarchicalContentNodeToParentContentNodeConnectionEdge = {
  __typename?: 'HierarchicalContentNodeToParentContentNodeConnectionEdge';
  node?: Maybe<ContentNode>;
};

export type HierarchicalTermNode = {
  parentDatabaseId?: Maybe<Scalars['Int']>;
  parentId?: Maybe<Scalars['ID']>;
};

export type LineItem = {
  __typename?: 'LineItem';
  databaseId?: Maybe<Scalars['Int']>;
  itemDownloads?: Maybe<Array<Maybe<ProductDownload>>>;
  metaData?: Maybe<Array<Maybe<MetaData>>>;
  orderId?: Maybe<Scalars['Int']>;
  product?: Maybe<Product>;
  productId?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
  subtotal?: Maybe<Scalars['String']>;
  subtotalTax?: Maybe<Scalars['String']>;
  taxClass?: Maybe<TaxClassEnum>;
  taxStatus?: Maybe<TaxStatusEnum>;
  taxes?: Maybe<Array<Maybe<OrderItemTax>>>;
  total?: Maybe<Scalars['String']>;
  totalTax?: Maybe<Scalars['String']>;
  variation?: Maybe<ProductVariation>;
  variationId?: Maybe<Scalars['Int']>;
};


export type LineItemMetaDataArgs = {
  key?: Maybe<Scalars['String']>;
  keysIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  multiple?: Maybe<Scalars['Boolean']>;
};

export type LineItemInput = {
  id?: Maybe<Scalars['ID']>;
  metaData?: Maybe<Array<Maybe<MetaDataInput>>>;
  name?: Maybe<Scalars['String']>;
  productId?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
  sku?: Maybe<Scalars['String']>;
  subtotal?: Maybe<Scalars['String']>;
  taxClass?: Maybe<TaxClassEnum>;
  total?: Maybe<Scalars['String']>;
  variationId?: Maybe<Scalars['Int']>;
};

export type LocalProductAttribute = ProductAttribute & {
  __typename?: 'LocalProductAttribute';
  attributeId: Scalars['Int'];
  id: Scalars['ID'];
  label: Scalars['String'];
  name: Scalars['String'];
  options?: Maybe<Array<Maybe<Scalars['String']>>>;
  position: Scalars['Int'];
  scope: ProductAttributeTypesEnum;
  variation: Scalars['Boolean'];
  visible: Scalars['Boolean'];
};

export enum ManageStockEnum {
  False = 'FALSE',
  Parent = 'PARENT',
  True = 'TRUE'
}

export type MediaDetails = {
  __typename?: 'MediaDetails';
  file?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  meta?: Maybe<MediaItemMeta>;
  sizes?: Maybe<Array<Maybe<MediaSize>>>;
  width?: Maybe<Scalars['Int']>;
};

export type MediaItem = Node & ContentNode & UniformResourceIdentifiable & DatabaseIdentifier & NodeWithTemplate & NodeWithTitle & NodeWithAuthor & NodeWithComments & HierarchicalContentNode & {
  __typename?: 'MediaItem';
  altText?: Maybe<Scalars['String']>;
  ancestors?: Maybe<HierarchicalContentNodeToContentNodeAncestorsConnection>;
  author?: Maybe<NodeWithAuthorToUserConnectionEdge>;
  authorDatabaseId?: Maybe<Scalars['Int']>;
  authorId?: Maybe<Scalars['ID']>;
  caption?: Maybe<Scalars['String']>;
  children?: Maybe<HierarchicalContentNodeToContentNodeChildrenConnection>;
  commentCount?: Maybe<Scalars['Int']>;
  commentStatus?: Maybe<Scalars['String']>;
  comments?: Maybe<MediaItemToCommentConnection>;
  contentType?: Maybe<ContentNodeToContentTypeConnectionEdge>;
  databaseId: Scalars['Int'];
  date?: Maybe<Scalars['String']>;
  dateGmt?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  desiredSlug?: Maybe<Scalars['String']>;
  editingLockedBy?: Maybe<ContentNodeToEditLockConnectionEdge>;
  enclosure?: Maybe<Scalars['String']>;
  enqueuedScripts?: Maybe<ContentNodeToEnqueuedScriptConnection>;
  enqueuedStylesheets?: Maybe<ContentNodeToEnqueuedStylesheetConnection>;
  fileSize?: Maybe<Scalars['Int']>;
  guid?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isContentNode: Scalars['Boolean'];
  isPreview?: Maybe<Scalars['Boolean']>;
  isRestricted?: Maybe<Scalars['Boolean']>;
  isTermNode: Scalars['Boolean'];
  lastEditedBy?: Maybe<ContentNodeToEditLastConnectionEdge>;
  link?: Maybe<Scalars['String']>;
  mediaDetails?: Maybe<MediaDetails>;
  /** @deprecated Deprecated in favor of the databaseId field */
  mediaItemId: Scalars['Int'];
  mediaItemUrl?: Maybe<Scalars['String']>;
  mediaType?: Maybe<Scalars['String']>;
  mimeType?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['String']>;
  modifiedGmt?: Maybe<Scalars['String']>;
  parent?: Maybe<HierarchicalContentNodeToParentContentNodeConnectionEdge>;
  parentDatabaseId?: Maybe<Scalars['Int']>;
  parentId?: Maybe<Scalars['ID']>;
  previewRevisionDatabaseId?: Maybe<Scalars['Int']>;
  previewRevisionId?: Maybe<Scalars['ID']>;
  seo?: Maybe<PostTypeSeo>;
  sizes?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  sourceUrl?: Maybe<Scalars['String']>;
  srcSet?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  template?: Maybe<ContentTemplate>;
  title?: Maybe<Scalars['String']>;
  uri?: Maybe<Scalars['String']>;
};


export type MediaItemAncestorsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<HierarchicalContentNodeToContentNodeAncestorsConnectionWhereArgs>;
};


export type MediaItemCaptionArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>;
};


export type MediaItemChildrenArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<HierarchicalContentNodeToContentNodeChildrenConnectionWhereArgs>;
};


export type MediaItemCommentsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<MediaItemToCommentConnectionWhereArgs>;
};


export type MediaItemDescriptionArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>;
};


export type MediaItemEnqueuedScriptsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


export type MediaItemEnqueuedStylesheetsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


export type MediaItemFileSizeArgs = {
  size?: Maybe<MediaItemSizeEnum>;
};


export type MediaItemSizesArgs = {
  size?: Maybe<MediaItemSizeEnum>;
};


export type MediaItemSourceUrlArgs = {
  size?: Maybe<MediaItemSizeEnum>;
};


export type MediaItemSrcSetArgs = {
  size?: Maybe<MediaItemSizeEnum>;
};


export type MediaItemTitleArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>;
};

export enum MediaItemIdType {
  DatabaseId = 'DATABASE_ID',
  Id = 'ID',
  Slug = 'SLUG',
  SourceUrl = 'SOURCE_URL',
  Uri = 'URI'
}

export type MediaItemMeta = {
  __typename?: 'MediaItemMeta';
  aperture?: Maybe<Scalars['Float']>;
  camera?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  copyright?: Maybe<Scalars['String']>;
  createdTimestamp?: Maybe<Scalars['Int']>;
  credit?: Maybe<Scalars['String']>;
  focalLength?: Maybe<Scalars['Float']>;
  iso?: Maybe<Scalars['Int']>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
  orientation?: Maybe<Scalars['String']>;
  shutterSpeed?: Maybe<Scalars['Float']>;
  title?: Maybe<Scalars['String']>;
};

export enum MediaItemSizeEnum {
  Large = 'LARGE',
  Medium = 'MEDIUM',
  MediumLarge = 'MEDIUM_LARGE',
  ShopCatalog = 'SHOP_CATALOG',
  ShopSingle = 'SHOP_SINGLE',
  ShopThumbnail = 'SHOP_THUMBNAIL',
  Thumbnail = 'THUMBNAIL',
  WoocommerceGalleryThumbnail = 'WOOCOMMERCE_GALLERY_THUMBNAIL',
  WoocommerceSingle = 'WOOCOMMERCE_SINGLE',
  WoocommerceThumbnail = 'WOOCOMMERCE_THUMBNAIL',
  '1536X1536' = '_1536X1536',
  '2048X2048' = '_2048X2048'
}

export enum MediaItemStatusEnum {
  AutoDraft = 'AUTO_DRAFT',
  Inherit = 'INHERIT',
  Private = 'PRIVATE',
  Trash = 'TRASH'
}

export type MediaItemToCommentConnection = {
  __typename?: 'MediaItemToCommentConnection';
  edges?: Maybe<Array<Maybe<MediaItemToCommentConnectionEdge>>>;
  nodes?: Maybe<Array<Maybe<Comment>>>;
  pageInfo?: Maybe<WpPageInfo>;
};

export type MediaItemToCommentConnectionEdge = {
  __typename?: 'MediaItemToCommentConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<Comment>;
};

export type MediaItemToCommentConnectionWhereArgs = {
  authorEmail?: Maybe<Scalars['String']>;
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  authorUrl?: Maybe<Scalars['String']>;
  commentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  commentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  commentType?: Maybe<Scalars['String']>;
  commentTypeIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  commentTypeNotIn?: Maybe<Scalars['String']>;
  contentAuthor?: Maybe<Array<Maybe<Scalars['ID']>>>;
  contentAuthorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  contentAuthorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  contentId?: Maybe<Scalars['ID']>;
  contentIdIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  contentIdNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  contentName?: Maybe<Scalars['String']>;
  contentParent?: Maybe<Scalars['Int']>;
  contentStatus?: Maybe<Array<Maybe<PostStatusEnum>>>;
  contentType?: Maybe<Array<Maybe<ContentTypeEnum>>>;
  includeUnapproved?: Maybe<Array<Maybe<Scalars['ID']>>>;
  karma?: Maybe<Scalars['Int']>;
  order?: Maybe<OrderEnum>;
  orderby?: Maybe<CommentsConnectionOrderbyEnum>;
  parent?: Maybe<Scalars['Int']>;
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  search?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['ID']>;
};

export type MediaSize = {
  __typename?: 'MediaSize';
  file?: Maybe<Scalars['String']>;
  fileSize?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['String']>;
  mimeType?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  sourceUrl?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['String']>;
};

export type Menu = Node & DatabaseIdentifier & {
  __typename?: 'Menu';
  count?: Maybe<Scalars['Int']>;
  databaseId: Scalars['Int'];
  id: Scalars['ID'];
  isRestricted?: Maybe<Scalars['Boolean']>;
  locations?: Maybe<Array<Maybe<MenuLocationEnum>>>;
  /** @deprecated Deprecated in favor of the databaseId field */
  menuId?: Maybe<Scalars['Int']>;
  menuItems?: Maybe<MenuToMenuItemConnection>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};


export type MenuMenuItemsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<MenuToMenuItemConnectionWhereArgs>;
};

export type MenuItem = Node & DatabaseIdentifier & {
  __typename?: 'MenuItem';
  childItems?: Maybe<MenuItemToMenuItemConnection>;
  connectedNode?: Maybe<MenuItemToMenuItemLinkableConnectionEdge>;
  /** @deprecated Deprecated in favor of the connectedNode field */
  connectedObject?: Maybe<MenuItemObjectUnion>;
  cssClasses?: Maybe<Array<Maybe<Scalars['String']>>>;
  databaseId: Scalars['Int'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isRestricted?: Maybe<Scalars['Boolean']>;
  label?: Maybe<Scalars['String']>;
  linkRelationship?: Maybe<Scalars['String']>;
  locations?: Maybe<Array<Maybe<MenuLocationEnum>>>;
  menu?: Maybe<MenuItemToMenuConnectionEdge>;
  /** @deprecated Deprecated in favor of the databaseId field */
  menuItemId?: Maybe<Scalars['Int']>;
  order?: Maybe<Scalars['Int']>;
  parentDatabaseId?: Maybe<Scalars['Int']>;
  parentId?: Maybe<Scalars['ID']>;
  path?: Maybe<Scalars['String']>;
  target?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};


export type MenuItemChildItemsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<MenuItemToMenuItemConnectionWhereArgs>;
};

export type MenuItemLinkable = {
  databaseId: Scalars['Int'];
  id: Scalars['ID'];
  uri?: Maybe<Scalars['String']>;
};

export enum MenuItemNodeIdTypeEnum {
  DatabaseId = 'DATABASE_ID',
  Id = 'ID'
}

export type MenuItemObjectUnion = Post | Page | RealProject | Config | Category | Tag | ProductCategory | ProductTag | Gender;

export type MenuItemToMenuConnectionEdge = {
  __typename?: 'MenuItemToMenuConnectionEdge';
  node?: Maybe<Menu>;
};

export type MenuItemToMenuItemConnection = {
  __typename?: 'MenuItemToMenuItemConnection';
  edges?: Maybe<Array<Maybe<MenuItemToMenuItemConnectionEdge>>>;
  nodes?: Maybe<Array<Maybe<MenuItem>>>;
  pageInfo?: Maybe<WpPageInfo>;
};

export type MenuItemToMenuItemConnectionEdge = {
  __typename?: 'MenuItemToMenuItemConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<MenuItem>;
};

export type MenuItemToMenuItemConnectionWhereArgs = {
  id?: Maybe<Scalars['Int']>;
  location?: Maybe<MenuLocationEnum>;
  parentDatabaseId?: Maybe<Scalars['Int']>;
  parentId?: Maybe<Scalars['ID']>;
};

export type MenuItemToMenuItemLinkableConnectionEdge = {
  __typename?: 'MenuItemToMenuItemLinkableConnectionEdge';
  node?: Maybe<MenuItemLinkable>;
};

export enum MenuLocationEnum {
  Handheld = 'HANDHELD',
  Primary = 'PRIMARY',
  Secondary = 'SECONDARY'
}

export enum MenuNodeIdTypeEnum {
  DatabaseId = 'DATABASE_ID',
  Id = 'ID',
  Name = 'NAME'
}

export type MenuToMenuItemConnection = {
  __typename?: 'MenuToMenuItemConnection';
  edges?: Maybe<Array<Maybe<MenuToMenuItemConnectionEdge>>>;
  nodes?: Maybe<Array<Maybe<MenuItem>>>;
  pageInfo?: Maybe<WpPageInfo>;
};

export type MenuToMenuItemConnectionEdge = {
  __typename?: 'MenuToMenuItemConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<MenuItem>;
};

export type MenuToMenuItemConnectionWhereArgs = {
  id?: Maybe<Scalars['Int']>;
  location?: Maybe<MenuLocationEnum>;
  parentDatabaseId?: Maybe<Scalars['Int']>;
  parentId?: Maybe<Scalars['ID']>;
};

export type MetaData = {
  __typename?: 'MetaData';
  id?: Maybe<Scalars['ID']>;
  key: Scalars['String'];
  value?: Maybe<Scalars['String']>;
};

export type MetaDataInput = {
  key: Scalars['String'];
  value: Scalars['String'];
};

export enum MimeTypeEnum {
  ApplicationJava = 'APPLICATION_JAVA',
  ApplicationMsword = 'APPLICATION_MSWORD',
  ApplicationOctetStream = 'APPLICATION_OCTET_STREAM',
  ApplicationOnenote = 'APPLICATION_ONENOTE',
  ApplicationOxps = 'APPLICATION_OXPS',
  ApplicationPdf = 'APPLICATION_PDF',
  ApplicationRar = 'APPLICATION_RAR',
  ApplicationRtf = 'APPLICATION_RTF',
  ApplicationTtafXml = 'APPLICATION_TTAF_XML',
  ApplicationVndAppleKeynote = 'APPLICATION_VND_APPLE_KEYNOTE',
  ApplicationVndAppleNumbers = 'APPLICATION_VND_APPLE_NUMBERS',
  ApplicationVndApplePages = 'APPLICATION_VND_APPLE_PAGES',
  ApplicationVndMsAccess = 'APPLICATION_VND_MS_ACCESS',
  ApplicationVndMsExcel = 'APPLICATION_VND_MS_EXCEL',
  ApplicationVndMsExcelAddinMacroenabled_12 = 'APPLICATION_VND_MS_EXCEL_ADDIN_MACROENABLED_12',
  ApplicationVndMsExcelSheetBinaryMacroenabled_12 = 'APPLICATION_VND_MS_EXCEL_SHEET_BINARY_MACROENABLED_12',
  ApplicationVndMsExcelSheetMacroenabled_12 = 'APPLICATION_VND_MS_EXCEL_SHEET_MACROENABLED_12',
  ApplicationVndMsExcelTemplateMacroenabled_12 = 'APPLICATION_VND_MS_EXCEL_TEMPLATE_MACROENABLED_12',
  ApplicationVndMsPowerpoint = 'APPLICATION_VND_MS_POWERPOINT',
  ApplicationVndMsPowerpointAddinMacroenabled_12 = 'APPLICATION_VND_MS_POWERPOINT_ADDIN_MACROENABLED_12',
  ApplicationVndMsPowerpointPresentationMacroenabled_12 = 'APPLICATION_VND_MS_POWERPOINT_PRESENTATION_MACROENABLED_12',
  ApplicationVndMsPowerpointSlideshowMacroenabled_12 = 'APPLICATION_VND_MS_POWERPOINT_SLIDESHOW_MACROENABLED_12',
  ApplicationVndMsPowerpointSlideMacroenabled_12 = 'APPLICATION_VND_MS_POWERPOINT_SLIDE_MACROENABLED_12',
  ApplicationVndMsPowerpointTemplateMacroenabled_12 = 'APPLICATION_VND_MS_POWERPOINT_TEMPLATE_MACROENABLED_12',
  ApplicationVndMsProject = 'APPLICATION_VND_MS_PROJECT',
  ApplicationVndMsWordDocumentMacroenabled_12 = 'APPLICATION_VND_MS_WORD_DOCUMENT_MACROENABLED_12',
  ApplicationVndMsWordTemplateMacroenabled_12 = 'APPLICATION_VND_MS_WORD_TEMPLATE_MACROENABLED_12',
  ApplicationVndMsWrite = 'APPLICATION_VND_MS_WRITE',
  ApplicationVndMsXpsdocument = 'APPLICATION_VND_MS_XPSDOCUMENT',
  ApplicationVndOasisOpendocumentChart = 'APPLICATION_VND_OASIS_OPENDOCUMENT_CHART',
  ApplicationVndOasisOpendocumentDatabase = 'APPLICATION_VND_OASIS_OPENDOCUMENT_DATABASE',
  ApplicationVndOasisOpendocumentFormula = 'APPLICATION_VND_OASIS_OPENDOCUMENT_FORMULA',
  ApplicationVndOasisOpendocumentGraphics = 'APPLICATION_VND_OASIS_OPENDOCUMENT_GRAPHICS',
  ApplicationVndOasisOpendocumentPresentation = 'APPLICATION_VND_OASIS_OPENDOCUMENT_PRESENTATION',
  ApplicationVndOasisOpendocumentSpreadsheet = 'APPLICATION_VND_OASIS_OPENDOCUMENT_SPREADSHEET',
  ApplicationVndOasisOpendocumentText = 'APPLICATION_VND_OASIS_OPENDOCUMENT_TEXT',
  ApplicationVndOpenxmlformatsOfficedocumentPresentationmlPresentation = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_PRESENTATION',
  ApplicationVndOpenxmlformatsOfficedocumentPresentationmlSlide = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_SLIDE',
  ApplicationVndOpenxmlformatsOfficedocumentPresentationmlSlideshow = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_SLIDESHOW',
  ApplicationVndOpenxmlformatsOfficedocumentPresentationmlTemplate = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_TEMPLATE',
  ApplicationVndOpenxmlformatsOfficedocumentSpreadsheetmlSheet = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_SHEET',
  ApplicationVndOpenxmlformatsOfficedocumentSpreadsheetmlTemplate = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_TEMPLATE',
  ApplicationVndOpenxmlformatsOfficedocumentWordprocessingmlDocument = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_DOCUMENT',
  ApplicationVndOpenxmlformatsOfficedocumentWordprocessingmlTemplate = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_TEMPLATE',
  ApplicationWordperfect = 'APPLICATION_WORDPERFECT',
  ApplicationX_7ZCompressed = 'APPLICATION_X_7Z_COMPRESSED',
  ApplicationXGzip = 'APPLICATION_X_GZIP',
  ApplicationXTar = 'APPLICATION_X_TAR',
  ApplicationZip = 'APPLICATION_ZIP',
  AudioAac = 'AUDIO_AAC',
  AudioFlac = 'AUDIO_FLAC',
  AudioMidi = 'AUDIO_MIDI',
  AudioMpeg = 'AUDIO_MPEG',
  AudioOgg = 'AUDIO_OGG',
  AudioWav = 'AUDIO_WAV',
  AudioXMatroska = 'AUDIO_X_MATROSKA',
  AudioXMsWax = 'AUDIO_X_MS_WAX',
  AudioXMsWma = 'AUDIO_X_MS_WMA',
  AudioXRealaudio = 'AUDIO_X_REALAUDIO',
  ImageBmp = 'IMAGE_BMP',
  ImageGif = 'IMAGE_GIF',
  ImageHeic = 'IMAGE_HEIC',
  ImageJpeg = 'IMAGE_JPEG',
  ImagePng = 'IMAGE_PNG',
  ImageTiff = 'IMAGE_TIFF',
  ImageWebp = 'IMAGE_WEBP',
  ImageXIcon = 'IMAGE_X_ICON',
  TextCalendar = 'TEXT_CALENDAR',
  TextCss = 'TEXT_CSS',
  TextCsv = 'TEXT_CSV',
  TextPlain = 'TEXT_PLAIN',
  TextRichtext = 'TEXT_RICHTEXT',
  TextTabSeparatedValues = 'TEXT_TAB_SEPARATED_VALUES',
  TextVtt = 'TEXT_VTT',
  Video_3Gpp = 'VIDEO_3GPP',
  Video_3Gpp2 = 'VIDEO_3GPP2',
  VideoAvi = 'VIDEO_AVI',
  VideoDivx = 'VIDEO_DIVX',
  VideoMp4 = 'VIDEO_MP4',
  VideoMpeg = 'VIDEO_MPEG',
  VideoOgg = 'VIDEO_OGG',
  VideoQuicktime = 'VIDEO_QUICKTIME',
  VideoWebm = 'VIDEO_WEBM',
  VideoXFlv = 'VIDEO_X_FLV',
  VideoXMatroska = 'VIDEO_X_MATROSKA',
  VideoXMsAsf = 'VIDEO_X_MS_ASF',
  VideoXMsWm = 'VIDEO_X_MS_WM',
  VideoXMsWmv = 'VIDEO_X_MS_WMV',
  VideoXMsWmx = 'VIDEO_X_MS_WMX'
}

export type Node = {
  id: Scalars['ID'];
};

export type NodeWithAuthor = {
  author?: Maybe<NodeWithAuthorToUserConnectionEdge>;
  authorDatabaseId?: Maybe<Scalars['Int']>;
  authorId?: Maybe<Scalars['ID']>;
};

export type NodeWithAuthorToUserConnectionEdge = {
  __typename?: 'NodeWithAuthorToUserConnectionEdge';
  node?: Maybe<User>;
};

export type NodeWithComments = {
  commentCount?: Maybe<Scalars['Int']>;
  commentStatus?: Maybe<Scalars['String']>;
};

export type NodeWithContentEditor = {
  content?: Maybe<Scalars['String']>;
};


export type NodeWithContentEditorContentArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>;
};

export type NodeWithExcerpt = {
  excerpt?: Maybe<Scalars['String']>;
};


export type NodeWithExcerptExcerptArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>;
};

export type NodeWithFeaturedImage = {
  contentType?: Maybe<ContentNodeToContentTypeConnectionEdge>;
  databaseId: Scalars['Int'];
  date?: Maybe<Scalars['String']>;
  dateGmt?: Maybe<Scalars['String']>;
  desiredSlug?: Maybe<Scalars['String']>;
  editingLockedBy?: Maybe<ContentNodeToEditLockConnectionEdge>;
  enclosure?: Maybe<Scalars['String']>;
  enqueuedScripts?: Maybe<ContentNodeToEnqueuedScriptConnection>;
  enqueuedStylesheets?: Maybe<ContentNodeToEnqueuedStylesheetConnection>;
  featuredImage?: Maybe<NodeWithFeaturedImageToMediaItemConnectionEdge>;
  featuredImageDatabaseId?: Maybe<Scalars['Int']>;
  featuredImageId?: Maybe<Scalars['ID']>;
  guid?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isContentNode: Scalars['Boolean'];
  isPreview?: Maybe<Scalars['Boolean']>;
  isRestricted?: Maybe<Scalars['Boolean']>;
  isTermNode: Scalars['Boolean'];
  lastEditedBy?: Maybe<ContentNodeToEditLastConnectionEdge>;
  link?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['String']>;
  modifiedGmt?: Maybe<Scalars['String']>;
  previewRevisionDatabaseId?: Maybe<Scalars['Int']>;
  previewRevisionId?: Maybe<Scalars['ID']>;
  slug?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  template?: Maybe<ContentTemplate>;
  uri?: Maybe<Scalars['String']>;
};


export type NodeWithFeaturedImageEnqueuedScriptsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


export type NodeWithFeaturedImageEnqueuedStylesheetsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};

export type NodeWithFeaturedImageToMediaItemConnectionEdge = {
  __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
  node?: Maybe<MediaItem>;
};

export type NodeWithPageAttributes = {
  menuOrder?: Maybe<Scalars['Int']>;
};

export type NodeWithRevisions = {
  isRevision?: Maybe<Scalars['Boolean']>;
  revisionOf?: Maybe<NodeWithRevisionsToContentNodeConnectionEdge>;
};

export type NodeWithRevisionsToContentNodeConnectionEdge = {
  __typename?: 'NodeWithRevisionsToContentNodeConnectionEdge';
  node?: Maybe<ContentNode>;
};

export type NodeWithTemplate = {
  template?: Maybe<ContentTemplate>;
};

export type NodeWithTitle = {
  title?: Maybe<Scalars['String']>;
};


export type NodeWithTitleTitleArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>;
};

export type NodeWithTrackbacks = {
  pingStatus?: Maybe<Scalars['String']>;
  pinged?: Maybe<Array<Maybe<Scalars['String']>>>;
  toPing?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type Order = Node & NodeWithComments & {
  __typename?: 'Order';
  billing?: Maybe<CustomerAddress>;
  cartHash?: Maybe<Scalars['String']>;
  cartTax?: Maybe<Scalars['String']>;
  commentCount?: Maybe<Scalars['Int']>;
  commentStatus?: Maybe<Scalars['String']>;
  couponLines?: Maybe<OrderToCouponLineConnection>;
  createdVia?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  customer?: Maybe<Customer>;
  customerIpAddress?: Maybe<Scalars['String']>;
  customerNote?: Maybe<Scalars['String']>;
  customerUserAgent?: Maybe<Scalars['String']>;
  databaseId?: Maybe<Scalars['Int']>;
  date?: Maybe<Scalars['String']>;
  dateCompleted?: Maybe<Scalars['String']>;
  datePaid?: Maybe<Scalars['String']>;
  discountTax?: Maybe<Scalars['String']>;
  discountTotal?: Maybe<Scalars['String']>;
  downloadableItems?: Maybe<OrderToDownloadableItemConnection>;
  feeLines?: Maybe<OrderToFeeLineConnection>;
  hasBillingAddress?: Maybe<Scalars['Boolean']>;
  hasDownloadableItem?: Maybe<Scalars['Boolean']>;
  hasShippingAddress?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  isDownloadPermitted?: Maybe<Scalars['Boolean']>;
  lineItems?: Maybe<OrderToLineItemConnection>;
  metaData?: Maybe<Array<Maybe<MetaData>>>;
  modified?: Maybe<Scalars['String']>;
  needsPayment?: Maybe<Scalars['Boolean']>;
  needsProcessing?: Maybe<Scalars['Boolean']>;
  needsShippingAddress?: Maybe<Scalars['Boolean']>;
  orderKey?: Maybe<Scalars['String']>;
  orderNotes?: Maybe<OrderToCommentConnection>;
  orderNumber?: Maybe<Scalars['String']>;
  orderVersion?: Maybe<Scalars['String']>;
  parent?: Maybe<Order>;
  paymentMethod?: Maybe<Scalars['String']>;
  paymentMethodTitle?: Maybe<Scalars['String']>;
  pricesIncludeTax?: Maybe<Scalars['Boolean']>;
  refunds?: Maybe<OrderToRefundConnection>;
  shipping?: Maybe<CustomerAddress>;
  shippingAddressMapUrl?: Maybe<Scalars['String']>;
  shippingLines?: Maybe<OrderToShippingLineConnection>;
  shippingTax?: Maybe<Scalars['String']>;
  shippingTotal?: Maybe<Scalars['String']>;
  status?: Maybe<OrderStatusEnum>;
  subtotal?: Maybe<Scalars['String']>;
  taxLines?: Maybe<OrderToTaxLineConnection>;
  total?: Maybe<Scalars['String']>;
  totalTax?: Maybe<Scalars['String']>;
  transactionId?: Maybe<Scalars['String']>;
};


export type OrderCartTaxArgs = {
  format?: Maybe<PricingFieldFormatEnum>;
};


export type OrderCouponLinesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


export type OrderDiscountTaxArgs = {
  format?: Maybe<PricingFieldFormatEnum>;
};


export type OrderDiscountTotalArgs = {
  format?: Maybe<PricingFieldFormatEnum>;
};


export type OrderDownloadableItemsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<OrderToDownloadableItemConnectionWhereArgs>;
};


export type OrderFeeLinesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


export type OrderLineItemsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


export type OrderMetaDataArgs = {
  key?: Maybe<Scalars['String']>;
  keysIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  multiple?: Maybe<Scalars['Boolean']>;
};


export type OrderOrderNotesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<OrderToCommentConnectionWhereArgs>;
};


export type OrderRefundsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<OrderToRefundConnectionWhereArgs>;
};


export type OrderShippingLinesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


export type OrderShippingTaxArgs = {
  format?: Maybe<PricingFieldFormatEnum>;
};


export type OrderShippingTotalArgs = {
  format?: Maybe<PricingFieldFormatEnum>;
};


export type OrderSubtotalArgs = {
  format?: Maybe<PricingFieldFormatEnum>;
};


export type OrderTaxLinesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


export type OrderTotalArgs = {
  format?: Maybe<PricingFieldFormatEnum>;
};


export type OrderTotalTaxArgs = {
  format?: Maybe<PricingFieldFormatEnum>;
};

export enum OrderEnum {
  Asc = 'ASC',
  Desc = 'DESC'
}

export enum OrderIdTypeEnum {
  DatabaseId = 'DATABASE_ID',
  Id = 'ID',
  OrderNumber = 'ORDER_NUMBER'
}

export type OrderItemTax = {
  __typename?: 'OrderItemTax';
  amount?: Maybe<Scalars['Float']>;
  subtotal?: Maybe<Scalars['Float']>;
  taxLine?: Maybe<TaxLine>;
  taxLineId: Scalars['Int'];
  total?: Maybe<Scalars['Float']>;
};

export enum OrderStatusEnum {
  Cancelled = 'CANCELLED',
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  OnHold = 'ON_HOLD',
  Pending = 'PENDING',
  Processing = 'PROCESSING',
  Refunded = 'REFUNDED'
}

export type OrderToCommentConnection = {
  __typename?: 'OrderToCommentConnection';
  edges?: Maybe<Array<Maybe<OrderToCommentConnectionEdge>>>;
  nodes?: Maybe<Array<Maybe<Comment>>>;
  pageInfo?: Maybe<WpPageInfo>;
};

export type OrderToCommentConnectionEdge = {
  __typename?: 'OrderToCommentConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  isCustomerNote?: Maybe<Scalars['Boolean']>;
  node?: Maybe<Comment>;
};

export type OrderToCommentConnectionWhereArgs = {
  authorEmail?: Maybe<Scalars['String']>;
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  authorUrl?: Maybe<Scalars['String']>;
  commentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  commentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  commentType?: Maybe<Scalars['String']>;
  commentTypeIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  commentTypeNotIn?: Maybe<Scalars['String']>;
  contentAuthor?: Maybe<Array<Maybe<Scalars['ID']>>>;
  contentAuthorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  contentAuthorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  contentId?: Maybe<Scalars['ID']>;
  contentIdIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  contentIdNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  contentName?: Maybe<Scalars['String']>;
  contentParent?: Maybe<Scalars['Int']>;
  contentStatus?: Maybe<Array<Maybe<PostStatusEnum>>>;
  contentType?: Maybe<Array<Maybe<ContentTypeEnum>>>;
  includeUnapproved?: Maybe<Array<Maybe<Scalars['ID']>>>;
  karma?: Maybe<Scalars['Int']>;
  order?: Maybe<OrderEnum>;
  orderby?: Maybe<CommentsConnectionOrderbyEnum>;
  parent?: Maybe<Scalars['Int']>;
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  search?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['ID']>;
};

export type OrderToCouponLineConnection = {
  __typename?: 'OrderToCouponLineConnection';
  edges?: Maybe<Array<Maybe<OrderToCouponLineConnectionEdge>>>;
  nodes?: Maybe<Array<Maybe<CouponLine>>>;
  pageInfo?: Maybe<WpPageInfo>;
};

export type OrderToCouponLineConnectionEdge = {
  __typename?: 'OrderToCouponLineConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<CouponLine>;
};

export type OrderToDownloadableItemConnection = {
  __typename?: 'OrderToDownloadableItemConnection';
  edges?: Maybe<Array<Maybe<OrderToDownloadableItemConnectionEdge>>>;
  nodes?: Maybe<Array<Maybe<DownloadableItem>>>;
  pageInfo?: Maybe<WpPageInfo>;
};

export type OrderToDownloadableItemConnectionEdge = {
  __typename?: 'OrderToDownloadableItemConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<DownloadableItem>;
};

export type OrderToDownloadableItemConnectionWhereArgs = {
  active?: Maybe<Scalars['Boolean']>;
  expired?: Maybe<Scalars['Boolean']>;
  hasDownloadsRemaining?: Maybe<Scalars['Boolean']>;
};

export type OrderToFeeLineConnection = {
  __typename?: 'OrderToFeeLineConnection';
  edges?: Maybe<Array<Maybe<OrderToFeeLineConnectionEdge>>>;
  nodes?: Maybe<Array<Maybe<FeeLine>>>;
  pageInfo?: Maybe<WpPageInfo>;
};

export type OrderToFeeLineConnectionEdge = {
  __typename?: 'OrderToFeeLineConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<FeeLine>;
};

export type OrderToLineItemConnection = {
  __typename?: 'OrderToLineItemConnection';
  edges?: Maybe<Array<Maybe<OrderToLineItemConnectionEdge>>>;
  nodes?: Maybe<Array<Maybe<LineItem>>>;
  pageInfo?: Maybe<WpPageInfo>;
};

export type OrderToLineItemConnectionEdge = {
  __typename?: 'OrderToLineItemConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<LineItem>;
};

export type OrderToRefundConnection = {
  __typename?: 'OrderToRefundConnection';
  edges?: Maybe<Array<Maybe<OrderToRefundConnectionEdge>>>;
  nodes?: Maybe<Array<Maybe<Refund>>>;
  pageInfo?: Maybe<WpPageInfo>;
};

export type OrderToRefundConnectionEdge = {
  __typename?: 'OrderToRefundConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<Refund>;
};

export type OrderToRefundConnectionWhereArgs = {
  dateQuery?: Maybe<DateQueryInput>;
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>;
  include?: Maybe<Array<Maybe<Scalars['Int']>>>;
  orderIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  orderby?: Maybe<Array<Maybe<PostTypeOrderbyInput>>>;
  parent?: Maybe<Scalars['Int']>;
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  search?: Maybe<Scalars['String']>;
  statuses?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type OrderToShippingLineConnection = {
  __typename?: 'OrderToShippingLineConnection';
  edges?: Maybe<Array<Maybe<OrderToShippingLineConnectionEdge>>>;
  nodes?: Maybe<Array<Maybe<ShippingLine>>>;
  pageInfo?: Maybe<WpPageInfo>;
};

export type OrderToShippingLineConnectionEdge = {
  __typename?: 'OrderToShippingLineConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<ShippingLine>;
};

export type OrderToTaxLineConnection = {
  __typename?: 'OrderToTaxLineConnection';
  edges?: Maybe<Array<Maybe<OrderToTaxLineConnectionEdge>>>;
  nodes?: Maybe<Array<Maybe<TaxLine>>>;
  pageInfo?: Maybe<WpPageInfo>;
};

export type OrderToTaxLineConnectionEdge = {
  __typename?: 'OrderToTaxLineConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<TaxLine>;
};

export enum OrdersOrderByEnum {
  Date = 'DATE',
  DateCompleted = 'DATE_COMPLETED',
  DatePaid = 'DATE_PAID',
  Discount = 'DISCOUNT',
  In = 'IN',
  MenuOrder = 'MENU_ORDER',
  Modified = 'MODIFIED',
  NameIn = 'NAME_IN',
  OrderKey = 'ORDER_KEY',
  Parent = 'PARENT',
  Slug = 'SLUG',
  Tax = 'TAX',
  Total = 'TOTAL'
}

export type OrdersOrderbyInput = {
  field: OrdersOrderByEnum;
  order?: Maybe<OrderEnum>;
};

export type PaColor = Node & TermNode & UniformResourceIdentifiable & DatabaseIdentifier & {
  __typename?: 'PaColor';
  contentNodes?: Maybe<PaColorToContentNodeConnection>;
  count?: Maybe<Scalars['Int']>;
  databaseId: Scalars['Int'];
  description?: Maybe<Scalars['String']>;
  enqueuedScripts?: Maybe<TermNodeToEnqueuedScriptConnection>;
  enqueuedStylesheets?: Maybe<TermNodeToEnqueuedStylesheetConnection>;
  id: Scalars['ID'];
  isContentNode: Scalars['Boolean'];
  isRestricted?: Maybe<Scalars['Boolean']>;
  isTermNode: Scalars['Boolean'];
  link?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  /** @deprecated Deprecated in favor of databaseId */
  paColorId?: Maybe<Scalars['Int']>;
  products?: Maybe<PaColorToProductConnection>;
  seo?: Maybe<TaxonomySeo>;
  slug?: Maybe<Scalars['String']>;
  taxonomy?: Maybe<PaColorToTaxonomyConnectionEdge>;
  termGroupId?: Maybe<Scalars['Int']>;
  termTaxonomyId?: Maybe<Scalars['Int']>;
  uri?: Maybe<Scalars['String']>;
  variations?: Maybe<PaColorToProductVariationConnection>;
};


export type PaColorContentNodesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<PaColorToContentNodeConnectionWhereArgs>;
};


export type PaColorEnqueuedScriptsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


export type PaColorEnqueuedStylesheetsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


export type PaColorProductsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<PaColorToProductConnectionWhereArgs>;
};


export type PaColorVariationsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<PaColorToProductVariationConnectionWhereArgs>;
};

export enum PaColorIdType {
  DatabaseId = 'DATABASE_ID',
  Id = 'ID',
  Name = 'NAME',
  Slug = 'SLUG',
  Uri = 'URI'
}

export type PaColorToContentNodeConnection = {
  __typename?: 'PaColorToContentNodeConnection';
  edges?: Maybe<Array<Maybe<PaColorToContentNodeConnectionEdge>>>;
  nodes?: Maybe<Array<Maybe<ContentNode>>>;
  pageInfo?: Maybe<WpPageInfo>;
};

export type PaColorToContentNodeConnectionEdge = {
  __typename?: 'PaColorToContentNodeConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<ContentNode>;
};

export type PaColorToContentNodeConnectionWhereArgs = {
  contentTypes?: Maybe<Array<Maybe<ContentTypesOfPaColorEnum>>>;
  dateQuery?: Maybe<DateQueryInput>;
  hasPassword?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  mimeType?: Maybe<MimeTypeEnum>;
  name?: Maybe<Scalars['String']>;
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  parent?: Maybe<Scalars['ID']>;
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  password?: Maybe<Scalars['String']>;
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  title?: Maybe<Scalars['String']>;
};

export type PaColorToProductConnection = {
  __typename?: 'PaColorToProductConnection';
  edges?: Maybe<Array<Maybe<PaColorToProductConnectionEdge>>>;
  nodes?: Maybe<Array<Maybe<Product>>>;
  pageInfo?: Maybe<WpPageInfo>;
};

export type PaColorToProductConnectionEdge = {
  __typename?: 'PaColorToProductConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<Product>;
};

export type PaColorToProductConnectionWhereArgs = {
  attribute?: Maybe<Scalars['String']>;
  attributeTerm?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  categoryId?: Maybe<Scalars['Int']>;
  categoryIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  categoryIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  categoryIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  categoryNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  dateQuery?: Maybe<DateQueryInput>;
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>;
  featured?: Maybe<Scalars['Boolean']>;
  include?: Maybe<Array<Maybe<Scalars['Int']>>>;
  maxPrice?: Maybe<Scalars['Float']>;
  minPrice?: Maybe<Scalars['Float']>;
  onSale?: Maybe<Scalars['Boolean']>;
  orderby?: Maybe<Array<Maybe<ProductsOrderbyInput>>>;
  parent?: Maybe<Scalars['Int']>;
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  search?: Maybe<Scalars['String']>;
  shippingClassId?: Maybe<Scalars['Int']>;
  sku?: Maybe<Scalars['String']>;
  slugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  status?: Maybe<Scalars['String']>;
  stockStatus?: Maybe<Array<Maybe<StockStatusEnum>>>;
  supportedTypesOnly?: Maybe<Scalars['Boolean']>;
  tag?: Maybe<Scalars['String']>;
  tagId?: Maybe<Scalars['Int']>;
  tagIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  tagIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  tagIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  tagNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  taxonomyFilter?: Maybe<ProductTaxonomyInput>;
  type?: Maybe<ProductTypesEnum>;
  typeIn?: Maybe<Array<Maybe<ProductTypesEnum>>>;
  typeNotIn?: Maybe<Array<Maybe<ProductTypesEnum>>>;
  visibility?: Maybe<CatalogVisibilityEnum>;
};

export type PaColorToProductVariationConnection = {
  __typename?: 'PaColorToProductVariationConnection';
  edges?: Maybe<Array<Maybe<PaColorToProductVariationConnectionEdge>>>;
  nodes?: Maybe<Array<Maybe<ProductVariation>>>;
  pageInfo?: Maybe<WpPageInfo>;
};

export type PaColorToProductVariationConnectionEdge = {
  __typename?: 'PaColorToProductVariationConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<ProductVariation>;
};

export type PaColorToProductVariationConnectionWhereArgs = {
  attribute?: Maybe<Scalars['String']>;
  attributeTerm?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  categoryId?: Maybe<Scalars['Int']>;
  categoryIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  categoryIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  categoryIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  categoryNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  dateQuery?: Maybe<DateQueryInput>;
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>;
  featured?: Maybe<Scalars['Boolean']>;
  include?: Maybe<Array<Maybe<Scalars['Int']>>>;
  maxPrice?: Maybe<Scalars['Float']>;
  minPrice?: Maybe<Scalars['Float']>;
  onSale?: Maybe<Scalars['Boolean']>;
  orderby?: Maybe<Array<Maybe<ProductsOrderbyInput>>>;
  parent?: Maybe<Scalars['Int']>;
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  search?: Maybe<Scalars['String']>;
  shippingClassId?: Maybe<Scalars['Int']>;
  sku?: Maybe<Scalars['String']>;
  slugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  status?: Maybe<Scalars['String']>;
  stockStatus?: Maybe<Array<Maybe<StockStatusEnum>>>;
  supportedTypesOnly?: Maybe<Scalars['Boolean']>;
  tag?: Maybe<Scalars['String']>;
  tagId?: Maybe<Scalars['Int']>;
  tagIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  tagIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  tagIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  tagNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  taxonomyFilter?: Maybe<ProductTaxonomyInput>;
  type?: Maybe<ProductTypesEnum>;
  typeIn?: Maybe<Array<Maybe<ProductTypesEnum>>>;
  typeNotIn?: Maybe<Array<Maybe<ProductTypesEnum>>>;
  visibility?: Maybe<CatalogVisibilityEnum>;
};

export type PaColorToTaxonomyConnectionEdge = {
  __typename?: 'PaColorToTaxonomyConnectionEdge';
  node?: Maybe<Taxonomy>;
};

export type PaSize = Node & TermNode & UniformResourceIdentifiable & DatabaseIdentifier & {
  __typename?: 'PaSize';
  contentNodes?: Maybe<PaSizeToContentNodeConnection>;
  count?: Maybe<Scalars['Int']>;
  databaseId: Scalars['Int'];
  description?: Maybe<Scalars['String']>;
  enqueuedScripts?: Maybe<TermNodeToEnqueuedScriptConnection>;
  enqueuedStylesheets?: Maybe<TermNodeToEnqueuedStylesheetConnection>;
  id: Scalars['ID'];
  isContentNode: Scalars['Boolean'];
  isRestricted?: Maybe<Scalars['Boolean']>;
  isTermNode: Scalars['Boolean'];
  link?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  /** @deprecated Deprecated in favor of databaseId */
  paSizeId?: Maybe<Scalars['Int']>;
  products?: Maybe<PaSizeToProductConnection>;
  seo?: Maybe<TaxonomySeo>;
  slug?: Maybe<Scalars['String']>;
  taxonomy?: Maybe<PaSizeToTaxonomyConnectionEdge>;
  termGroupId?: Maybe<Scalars['Int']>;
  termTaxonomyId?: Maybe<Scalars['Int']>;
  uri?: Maybe<Scalars['String']>;
  variations?: Maybe<PaSizeToProductVariationConnection>;
};


export type PaSizeContentNodesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<PaSizeToContentNodeConnectionWhereArgs>;
};


export type PaSizeEnqueuedScriptsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


export type PaSizeEnqueuedStylesheetsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


export type PaSizeProductsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<PaSizeToProductConnectionWhereArgs>;
};


export type PaSizeVariationsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<PaSizeToProductVariationConnectionWhereArgs>;
};

export enum PaSizeIdType {
  DatabaseId = 'DATABASE_ID',
  Id = 'ID',
  Name = 'NAME',
  Slug = 'SLUG',
  Uri = 'URI'
}

export type PaSizeToContentNodeConnection = {
  __typename?: 'PaSizeToContentNodeConnection';
  edges?: Maybe<Array<Maybe<PaSizeToContentNodeConnectionEdge>>>;
  nodes?: Maybe<Array<Maybe<ContentNode>>>;
  pageInfo?: Maybe<WpPageInfo>;
};

export type PaSizeToContentNodeConnectionEdge = {
  __typename?: 'PaSizeToContentNodeConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<ContentNode>;
};

export type PaSizeToContentNodeConnectionWhereArgs = {
  contentTypes?: Maybe<Array<Maybe<ContentTypesOfPaSizeEnum>>>;
  dateQuery?: Maybe<DateQueryInput>;
  hasPassword?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  mimeType?: Maybe<MimeTypeEnum>;
  name?: Maybe<Scalars['String']>;
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  parent?: Maybe<Scalars['ID']>;
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  password?: Maybe<Scalars['String']>;
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  title?: Maybe<Scalars['String']>;
};

export type PaSizeToProductConnection = {
  __typename?: 'PaSizeToProductConnection';
  edges?: Maybe<Array<Maybe<PaSizeToProductConnectionEdge>>>;
  nodes?: Maybe<Array<Maybe<Product>>>;
  pageInfo?: Maybe<WpPageInfo>;
};

export type PaSizeToProductConnectionEdge = {
  __typename?: 'PaSizeToProductConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<Product>;
};

export type PaSizeToProductConnectionWhereArgs = {
  attribute?: Maybe<Scalars['String']>;
  attributeTerm?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  categoryId?: Maybe<Scalars['Int']>;
  categoryIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  categoryIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  categoryIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  categoryNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  dateQuery?: Maybe<DateQueryInput>;
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>;
  featured?: Maybe<Scalars['Boolean']>;
  include?: Maybe<Array<Maybe<Scalars['Int']>>>;
  maxPrice?: Maybe<Scalars['Float']>;
  minPrice?: Maybe<Scalars['Float']>;
  onSale?: Maybe<Scalars['Boolean']>;
  orderby?: Maybe<Array<Maybe<ProductsOrderbyInput>>>;
  parent?: Maybe<Scalars['Int']>;
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  search?: Maybe<Scalars['String']>;
  shippingClassId?: Maybe<Scalars['Int']>;
  sku?: Maybe<Scalars['String']>;
  slugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  status?: Maybe<Scalars['String']>;
  stockStatus?: Maybe<Array<Maybe<StockStatusEnum>>>;
  supportedTypesOnly?: Maybe<Scalars['Boolean']>;
  tag?: Maybe<Scalars['String']>;
  tagId?: Maybe<Scalars['Int']>;
  tagIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  tagIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  tagIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  tagNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  taxonomyFilter?: Maybe<ProductTaxonomyInput>;
  type?: Maybe<ProductTypesEnum>;
  typeIn?: Maybe<Array<Maybe<ProductTypesEnum>>>;
  typeNotIn?: Maybe<Array<Maybe<ProductTypesEnum>>>;
  visibility?: Maybe<CatalogVisibilityEnum>;
};

export type PaSizeToProductVariationConnection = {
  __typename?: 'PaSizeToProductVariationConnection';
  edges?: Maybe<Array<Maybe<PaSizeToProductVariationConnectionEdge>>>;
  nodes?: Maybe<Array<Maybe<ProductVariation>>>;
  pageInfo?: Maybe<WpPageInfo>;
};

export type PaSizeToProductVariationConnectionEdge = {
  __typename?: 'PaSizeToProductVariationConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<ProductVariation>;
};

export type PaSizeToProductVariationConnectionWhereArgs = {
  attribute?: Maybe<Scalars['String']>;
  attributeTerm?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  categoryId?: Maybe<Scalars['Int']>;
  categoryIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  categoryIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  categoryIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  categoryNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  dateQuery?: Maybe<DateQueryInput>;
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>;
  featured?: Maybe<Scalars['Boolean']>;
  include?: Maybe<Array<Maybe<Scalars['Int']>>>;
  maxPrice?: Maybe<Scalars['Float']>;
  minPrice?: Maybe<Scalars['Float']>;
  onSale?: Maybe<Scalars['Boolean']>;
  orderby?: Maybe<Array<Maybe<ProductsOrderbyInput>>>;
  parent?: Maybe<Scalars['Int']>;
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  search?: Maybe<Scalars['String']>;
  shippingClassId?: Maybe<Scalars['Int']>;
  sku?: Maybe<Scalars['String']>;
  slugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  status?: Maybe<Scalars['String']>;
  stockStatus?: Maybe<Array<Maybe<StockStatusEnum>>>;
  supportedTypesOnly?: Maybe<Scalars['Boolean']>;
  tag?: Maybe<Scalars['String']>;
  tagId?: Maybe<Scalars['Int']>;
  tagIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  tagIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  tagIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  tagNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  taxonomyFilter?: Maybe<ProductTaxonomyInput>;
  type?: Maybe<ProductTypesEnum>;
  typeIn?: Maybe<Array<Maybe<ProductTypesEnum>>>;
  typeNotIn?: Maybe<Array<Maybe<ProductTypesEnum>>>;
  visibility?: Maybe<CatalogVisibilityEnum>;
};

export type PaSizeToTaxonomyConnectionEdge = {
  __typename?: 'PaSizeToTaxonomyConnectionEdge';
  node?: Maybe<Taxonomy>;
};

export type Page = Node & ContentNode & UniformResourceIdentifiable & DatabaseIdentifier & NodeWithTemplate & NodeWithTitle & NodeWithContentEditor & NodeWithAuthor & NodeWithFeaturedImage & NodeWithComments & NodeWithRevisions & NodeWithPageAttributes & HierarchicalContentNode & MenuItemLinkable & {
  __typename?: 'Page';
  ancestors?: Maybe<HierarchicalContentNodeToContentNodeAncestorsConnection>;
  author?: Maybe<NodeWithAuthorToUserConnectionEdge>;
  authorDatabaseId?: Maybe<Scalars['Int']>;
  authorId?: Maybe<Scalars['ID']>;
  children?: Maybe<HierarchicalContentNodeToContentNodeChildrenConnection>;
  commentCount?: Maybe<Scalars['Int']>;
  commentStatus?: Maybe<Scalars['String']>;
  comments?: Maybe<PageToCommentConnection>;
  content?: Maybe<Scalars['String']>;
  contentType?: Maybe<ContentNodeToContentTypeConnectionEdge>;
  databaseId: Scalars['Int'];
  date?: Maybe<Scalars['String']>;
  dateGmt?: Maybe<Scalars['String']>;
  desiredSlug?: Maybe<Scalars['String']>;
  editingLockedBy?: Maybe<ContentNodeToEditLockConnectionEdge>;
  enclosure?: Maybe<Scalars['String']>;
  enqueuedScripts?: Maybe<ContentNodeToEnqueuedScriptConnection>;
  enqueuedStylesheets?: Maybe<ContentNodeToEnqueuedStylesheetConnection>;
  featuredImage?: Maybe<NodeWithFeaturedImageToMediaItemConnectionEdge>;
  featuredImageDatabaseId?: Maybe<Scalars['Int']>;
  featuredImageId?: Maybe<Scalars['ID']>;
  guid?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isContentNode: Scalars['Boolean'];
  isFrontPage: Scalars['Boolean'];
  isPostsPage: Scalars['Boolean'];
  isPreview?: Maybe<Scalars['Boolean']>;
  isPrivacyPage: Scalars['Boolean'];
  isRestricted?: Maybe<Scalars['Boolean']>;
  isRevision?: Maybe<Scalars['Boolean']>;
  isTermNode: Scalars['Boolean'];
  lastEditedBy?: Maybe<ContentNodeToEditLastConnectionEdge>;
  link?: Maybe<Scalars['String']>;
  menuOrder?: Maybe<Scalars['Int']>;
  modified?: Maybe<Scalars['String']>;
  modifiedGmt?: Maybe<Scalars['String']>;
  /** @deprecated Deprecated in favor of the databaseId field */
  pageId: Scalars['Int'];
  parent?: Maybe<HierarchicalContentNodeToParentContentNodeConnectionEdge>;
  parentDatabaseId?: Maybe<Scalars['Int']>;
  parentId?: Maybe<Scalars['ID']>;
  preview?: Maybe<PageToPreviewConnectionEdge>;
  previewRevisionDatabaseId?: Maybe<Scalars['Int']>;
  previewRevisionId?: Maybe<Scalars['ID']>;
  revisionOf?: Maybe<NodeWithRevisionsToContentNodeConnectionEdge>;
  revisions?: Maybe<PageToRevisionConnection>;
  seo?: Maybe<PostTypeSeo>;
  slug?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  template?: Maybe<ContentTemplate>;
  title?: Maybe<Scalars['String']>;
  uri?: Maybe<Scalars['String']>;
};


export type PageAncestorsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<HierarchicalContentNodeToContentNodeAncestorsConnectionWhereArgs>;
};


export type PageChildrenArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<HierarchicalContentNodeToContentNodeChildrenConnectionWhereArgs>;
};


export type PageCommentsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<PageToCommentConnectionWhereArgs>;
};


export type PageContentArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>;
};


export type PageEnqueuedScriptsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


export type PageEnqueuedStylesheetsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


export type PageRevisionsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<PageToRevisionConnectionWhereArgs>;
};


export type PageTitleArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>;
};

export enum PageIdType {
  DatabaseId = 'DATABASE_ID',
  Id = 'ID',
  Uri = 'URI'
}

export type PageToCommentConnection = {
  __typename?: 'PageToCommentConnection';
  edges?: Maybe<Array<Maybe<PageToCommentConnectionEdge>>>;
  nodes?: Maybe<Array<Maybe<Comment>>>;
  pageInfo?: Maybe<WpPageInfo>;
};

export type PageToCommentConnectionEdge = {
  __typename?: 'PageToCommentConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<Comment>;
};

export type PageToCommentConnectionWhereArgs = {
  authorEmail?: Maybe<Scalars['String']>;
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  authorUrl?: Maybe<Scalars['String']>;
  commentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  commentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  commentType?: Maybe<Scalars['String']>;
  commentTypeIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  commentTypeNotIn?: Maybe<Scalars['String']>;
  contentAuthor?: Maybe<Array<Maybe<Scalars['ID']>>>;
  contentAuthorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  contentAuthorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  contentId?: Maybe<Scalars['ID']>;
  contentIdIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  contentIdNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  contentName?: Maybe<Scalars['String']>;
  contentParent?: Maybe<Scalars['Int']>;
  contentStatus?: Maybe<Array<Maybe<PostStatusEnum>>>;
  contentType?: Maybe<Array<Maybe<ContentTypeEnum>>>;
  includeUnapproved?: Maybe<Array<Maybe<Scalars['ID']>>>;
  karma?: Maybe<Scalars['Int']>;
  order?: Maybe<OrderEnum>;
  orderby?: Maybe<CommentsConnectionOrderbyEnum>;
  parent?: Maybe<Scalars['Int']>;
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  search?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['ID']>;
};

export type PageToPreviewConnectionEdge = {
  __typename?: 'PageToPreviewConnectionEdge';
  node?: Maybe<Page>;
};

export type PageToRevisionConnection = {
  __typename?: 'PageToRevisionConnection';
  edges?: Maybe<Array<Maybe<PageToRevisionConnectionEdge>>>;
  nodes?: Maybe<Array<Maybe<Page>>>;
  pageInfo?: Maybe<WpPageInfo>;
};

export type PageToRevisionConnectionEdge = {
  __typename?: 'PageToRevisionConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<Page>;
};

export type PageToRevisionConnectionWhereArgs = {
  author?: Maybe<Scalars['Int']>;
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  authorName?: Maybe<Scalars['String']>;
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  dateQuery?: Maybe<DateQueryInput>;
  hasPassword?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  mimeType?: Maybe<MimeTypeEnum>;
  name?: Maybe<Scalars['String']>;
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  parent?: Maybe<Scalars['ID']>;
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  password?: Maybe<Scalars['String']>;
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  title?: Maybe<Scalars['String']>;
};

export type PaymentGateway = {
  __typename?: 'PaymentGateway';
  description?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  title?: Maybe<Scalars['String']>;
};

export type Plugin = Node & {
  __typename?: 'Plugin';
  author?: Maybe<Scalars['String']>;
  authorUri?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isRestricted?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  pluginUri?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type Post = Node & ContentNode & UniformResourceIdentifiable & DatabaseIdentifier & NodeWithTemplate & NodeWithTitle & NodeWithContentEditor & NodeWithAuthor & NodeWithFeaturedImage & NodeWithExcerpt & NodeWithComments & NodeWithTrackbacks & NodeWithRevisions & MenuItemLinkable & {
  __typename?: 'Post';
  author?: Maybe<NodeWithAuthorToUserConnectionEdge>;
  authorDatabaseId?: Maybe<Scalars['Int']>;
  authorId?: Maybe<Scalars['ID']>;
  categories?: Maybe<PostToCategoryConnection>;
  commentCount?: Maybe<Scalars['Int']>;
  commentStatus?: Maybe<Scalars['String']>;
  comments?: Maybe<PostToCommentConnection>;
  content?: Maybe<Scalars['String']>;
  contentType?: Maybe<ContentNodeToContentTypeConnectionEdge>;
  databaseId: Scalars['Int'];
  date?: Maybe<Scalars['String']>;
  dateGmt?: Maybe<Scalars['String']>;
  desiredSlug?: Maybe<Scalars['String']>;
  editingLockedBy?: Maybe<ContentNodeToEditLockConnectionEdge>;
  enclosure?: Maybe<Scalars['String']>;
  enqueuedScripts?: Maybe<ContentNodeToEnqueuedScriptConnection>;
  enqueuedStylesheets?: Maybe<ContentNodeToEnqueuedStylesheetConnection>;
  excerpt?: Maybe<Scalars['String']>;
  featuredImage?: Maybe<NodeWithFeaturedImageToMediaItemConnectionEdge>;
  featuredImageDatabaseId?: Maybe<Scalars['Int']>;
  featuredImageId?: Maybe<Scalars['ID']>;
  guid?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isContentNode: Scalars['Boolean'];
  isPreview?: Maybe<Scalars['Boolean']>;
  isRestricted?: Maybe<Scalars['Boolean']>;
  isRevision?: Maybe<Scalars['Boolean']>;
  isSticky: Scalars['Boolean'];
  isTermNode: Scalars['Boolean'];
  lastEditedBy?: Maybe<ContentNodeToEditLastConnectionEdge>;
  link?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['String']>;
  modifiedGmt?: Maybe<Scalars['String']>;
  pingStatus?: Maybe<Scalars['String']>;
  pinged?: Maybe<Array<Maybe<Scalars['String']>>>;
  postFormats?: Maybe<PostToPostFormatConnection>;
  /** @deprecated Deprecated in favor of the databaseId field */
  postId: Scalars['Int'];
  preview?: Maybe<PostToPreviewConnectionEdge>;
  previewRevisionDatabaseId?: Maybe<Scalars['Int']>;
  previewRevisionId?: Maybe<Scalars['ID']>;
  revisionOf?: Maybe<NodeWithRevisionsToContentNodeConnectionEdge>;
  revisions?: Maybe<PostToRevisionConnection>;
  seo?: Maybe<PostTypeSeo>;
  slug?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  tags?: Maybe<PostToTagConnection>;
  template?: Maybe<ContentTemplate>;
  terms?: Maybe<PostToTermNodeConnection>;
  title?: Maybe<Scalars['String']>;
  toPing?: Maybe<Array<Maybe<Scalars['String']>>>;
  uri?: Maybe<Scalars['String']>;
};


export type PostCategoriesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<PostToCategoryConnectionWhereArgs>;
};


export type PostCommentsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<PostToCommentConnectionWhereArgs>;
};


export type PostContentArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>;
};


export type PostEnqueuedScriptsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


export type PostEnqueuedStylesheetsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


export type PostExcerptArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>;
};


export type PostPostFormatsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<PostToPostFormatConnectionWhereArgs>;
};


export type PostRevisionsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<PostToRevisionConnectionWhereArgs>;
};


export type PostTagsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<PostToTagConnectionWhereArgs>;
};


export type PostTermsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<PostToTermNodeConnectionWhereArgs>;
};


export type PostTitleArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>;
};

export type PostCategoriesInput = {
  append?: Maybe<Scalars['Boolean']>;
  nodes?: Maybe<Array<Maybe<PostCategoriesNodeInput>>>;
};

export type PostCategoriesNodeInput = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};

export type PostFormat = Node & TermNode & UniformResourceIdentifiable & DatabaseIdentifier & {
  __typename?: 'PostFormat';
  contentNodes?: Maybe<PostFormatToContentNodeConnection>;
  count?: Maybe<Scalars['Int']>;
  databaseId: Scalars['Int'];
  description?: Maybe<Scalars['String']>;
  enqueuedScripts?: Maybe<TermNodeToEnqueuedScriptConnection>;
  enqueuedStylesheets?: Maybe<TermNodeToEnqueuedStylesheetConnection>;
  id: Scalars['ID'];
  isContentNode: Scalars['Boolean'];
  isRestricted?: Maybe<Scalars['Boolean']>;
  isTermNode: Scalars['Boolean'];
  link?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  /** @deprecated Deprecated in favor of databaseId */
  postFormatId?: Maybe<Scalars['Int']>;
  posts?: Maybe<PostFormatToPostConnection>;
  seo?: Maybe<TaxonomySeo>;
  slug?: Maybe<Scalars['String']>;
  taxonomy?: Maybe<PostFormatToTaxonomyConnectionEdge>;
  termGroupId?: Maybe<Scalars['Int']>;
  termTaxonomyId?: Maybe<Scalars['Int']>;
  uri?: Maybe<Scalars['String']>;
};


export type PostFormatContentNodesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<PostFormatToContentNodeConnectionWhereArgs>;
};


export type PostFormatEnqueuedScriptsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


export type PostFormatEnqueuedStylesheetsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


export type PostFormatPostsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<PostFormatToPostConnectionWhereArgs>;
};

export enum PostFormatIdType {
  DatabaseId = 'DATABASE_ID',
  Id = 'ID',
  Name = 'NAME',
  Slug = 'SLUG',
  Uri = 'URI'
}

export type PostFormatToContentNodeConnection = {
  __typename?: 'PostFormatToContentNodeConnection';
  edges?: Maybe<Array<Maybe<PostFormatToContentNodeConnectionEdge>>>;
  nodes?: Maybe<Array<Maybe<ContentNode>>>;
  pageInfo?: Maybe<WpPageInfo>;
};

export type PostFormatToContentNodeConnectionEdge = {
  __typename?: 'PostFormatToContentNodeConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<ContentNode>;
};

export type PostFormatToContentNodeConnectionWhereArgs = {
  contentTypes?: Maybe<Array<Maybe<ContentTypesOfPostFormatEnum>>>;
  dateQuery?: Maybe<DateQueryInput>;
  hasPassword?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  mimeType?: Maybe<MimeTypeEnum>;
  name?: Maybe<Scalars['String']>;
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  parent?: Maybe<Scalars['ID']>;
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  password?: Maybe<Scalars['String']>;
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  title?: Maybe<Scalars['String']>;
};

export type PostFormatToPostConnection = {
  __typename?: 'PostFormatToPostConnection';
  edges?: Maybe<Array<Maybe<PostFormatToPostConnectionEdge>>>;
  nodes?: Maybe<Array<Maybe<Post>>>;
  pageInfo?: Maybe<WpPageInfo>;
};

export type PostFormatToPostConnectionEdge = {
  __typename?: 'PostFormatToPostConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<Post>;
};

export type PostFormatToPostConnectionWhereArgs = {
  author?: Maybe<Scalars['Int']>;
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  authorName?: Maybe<Scalars['String']>;
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  categoryId?: Maybe<Scalars['Int']>;
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  categoryName?: Maybe<Scalars['String']>;
  categoryNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  dateQuery?: Maybe<DateQueryInput>;
  hasPassword?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  mimeType?: Maybe<MimeTypeEnum>;
  name?: Maybe<Scalars['String']>;
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  parent?: Maybe<Scalars['ID']>;
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  password?: Maybe<Scalars['String']>;
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  tag?: Maybe<Scalars['String']>;
  tagId?: Maybe<Scalars['String']>;
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  tagNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>;
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  title?: Maybe<Scalars['String']>;
};

export type PostFormatToTaxonomyConnectionEdge = {
  __typename?: 'PostFormatToTaxonomyConnectionEdge';
  node?: Maybe<Taxonomy>;
};

export enum PostIdType {
  DatabaseId = 'DATABASE_ID',
  Id = 'ID',
  Slug = 'SLUG',
  Uri = 'URI'
}

export enum PostObjectFieldFormatEnum {
  Raw = 'RAW',
  Rendered = 'RENDERED'
}

export enum PostObjectsConnectionDateColumnEnum {
  Date = 'DATE',
  Modified = 'MODIFIED'
}

export enum PostObjectsConnectionOrderbyEnum {
  Author = 'AUTHOR',
  CommentCount = 'COMMENT_COUNT',
  Date = 'DATE',
  In = 'IN',
  MenuOrder = 'MENU_ORDER',
  Modified = 'MODIFIED',
  NameIn = 'NAME_IN',
  Parent = 'PARENT',
  Slug = 'SLUG',
  Title = 'TITLE'
}

export type PostObjectsConnectionOrderbyInput = {
  field: PostObjectsConnectionOrderbyEnum;
  order: OrderEnum;
};

export type PostPostFormatsInput = {
  append?: Maybe<Scalars['Boolean']>;
  nodes?: Maybe<Array<Maybe<PostPostFormatsNodeInput>>>;
};

export type PostPostFormatsNodeInput = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};

export enum PostStatusEnum {
  AcfDisabled = 'ACF_DISABLED',
  AutoDraft = 'AUTO_DRAFT',
  Draft = 'DRAFT',
  Future = 'FUTURE',
  Inherit = 'INHERIT',
  Pending = 'PENDING',
  Private = 'PRIVATE',
  Publish = 'PUBLISH',
  RequestCompleted = 'REQUEST_COMPLETED',
  RequestConfirmed = 'REQUEST_CONFIRMED',
  RequestFailed = 'REQUEST_FAILED',
  RequestPending = 'REQUEST_PENDING',
  Trash = 'TRASH',
  WcCancelled = 'WC_CANCELLED',
  WcCompleted = 'WC_COMPLETED',
  WcFailed = 'WC_FAILED',
  WcOnHold = 'WC_ON_HOLD',
  WcPending = 'WC_PENDING',
  WcProcessing = 'WC_PROCESSING',
  WcRefunded = 'WC_REFUNDED'
}

export type PostTagsInput = {
  append?: Maybe<Scalars['Boolean']>;
  nodes?: Maybe<Array<Maybe<PostTagsNodeInput>>>;
};

export type PostTagsNodeInput = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};

export type PostToCategoryConnection = {
  __typename?: 'PostToCategoryConnection';
  edges?: Maybe<Array<Maybe<PostToCategoryConnectionEdge>>>;
  nodes?: Maybe<Array<Maybe<Category>>>;
  pageInfo?: Maybe<WpPageInfo>;
};

export type PostToCategoryConnectionEdge = {
  __typename?: 'PostToCategoryConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  isPrimary?: Maybe<Scalars['Boolean']>;
  node?: Maybe<Category>;
};

export type PostToCategoryConnectionWhereArgs = {
  cacheDomain?: Maybe<Scalars['String']>;
  childOf?: Maybe<Scalars['Int']>;
  childless?: Maybe<Scalars['Boolean']>;
  descriptionLike?: Maybe<Scalars['String']>;
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  hideEmpty?: Maybe<Scalars['Boolean']>;
  hierarchical?: Maybe<Scalars['Boolean']>;
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  nameLike?: Maybe<Scalars['String']>;
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  order?: Maybe<OrderEnum>;
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  padCounts?: Maybe<Scalars['Boolean']>;
  parent?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

export type PostToCommentConnection = {
  __typename?: 'PostToCommentConnection';
  edges?: Maybe<Array<Maybe<PostToCommentConnectionEdge>>>;
  nodes?: Maybe<Array<Maybe<Comment>>>;
  pageInfo?: Maybe<WpPageInfo>;
};

export type PostToCommentConnectionEdge = {
  __typename?: 'PostToCommentConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<Comment>;
};

export type PostToCommentConnectionWhereArgs = {
  authorEmail?: Maybe<Scalars['String']>;
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  authorUrl?: Maybe<Scalars['String']>;
  commentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  commentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  commentType?: Maybe<Scalars['String']>;
  commentTypeIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  commentTypeNotIn?: Maybe<Scalars['String']>;
  contentAuthor?: Maybe<Array<Maybe<Scalars['ID']>>>;
  contentAuthorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  contentAuthorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  contentId?: Maybe<Scalars['ID']>;
  contentIdIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  contentIdNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  contentName?: Maybe<Scalars['String']>;
  contentParent?: Maybe<Scalars['Int']>;
  contentStatus?: Maybe<Array<Maybe<PostStatusEnum>>>;
  contentType?: Maybe<Array<Maybe<ContentTypeEnum>>>;
  includeUnapproved?: Maybe<Array<Maybe<Scalars['ID']>>>;
  karma?: Maybe<Scalars['Int']>;
  order?: Maybe<OrderEnum>;
  orderby?: Maybe<CommentsConnectionOrderbyEnum>;
  parent?: Maybe<Scalars['Int']>;
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  search?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['ID']>;
};

export type PostToPostFormatConnection = {
  __typename?: 'PostToPostFormatConnection';
  edges?: Maybe<Array<Maybe<PostToPostFormatConnectionEdge>>>;
  nodes?: Maybe<Array<Maybe<PostFormat>>>;
  pageInfo?: Maybe<WpPageInfo>;
};

export type PostToPostFormatConnectionEdge = {
  __typename?: 'PostToPostFormatConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  isPrimary?: Maybe<Scalars['Boolean']>;
  node?: Maybe<PostFormat>;
};

export type PostToPostFormatConnectionWhereArgs = {
  cacheDomain?: Maybe<Scalars['String']>;
  childOf?: Maybe<Scalars['Int']>;
  childless?: Maybe<Scalars['Boolean']>;
  descriptionLike?: Maybe<Scalars['String']>;
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  hideEmpty?: Maybe<Scalars['Boolean']>;
  hierarchical?: Maybe<Scalars['Boolean']>;
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  nameLike?: Maybe<Scalars['String']>;
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  order?: Maybe<OrderEnum>;
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  padCounts?: Maybe<Scalars['Boolean']>;
  parent?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

export type PostToPreviewConnectionEdge = {
  __typename?: 'PostToPreviewConnectionEdge';
  node?: Maybe<Post>;
};

export type PostToRevisionConnection = {
  __typename?: 'PostToRevisionConnection';
  edges?: Maybe<Array<Maybe<PostToRevisionConnectionEdge>>>;
  nodes?: Maybe<Array<Maybe<Post>>>;
  pageInfo?: Maybe<WpPageInfo>;
};

export type PostToRevisionConnectionEdge = {
  __typename?: 'PostToRevisionConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<Post>;
};

export type PostToRevisionConnectionWhereArgs = {
  author?: Maybe<Scalars['Int']>;
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  authorName?: Maybe<Scalars['String']>;
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  categoryId?: Maybe<Scalars['Int']>;
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  categoryName?: Maybe<Scalars['String']>;
  categoryNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  dateQuery?: Maybe<DateQueryInput>;
  hasPassword?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  mimeType?: Maybe<MimeTypeEnum>;
  name?: Maybe<Scalars['String']>;
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  parent?: Maybe<Scalars['ID']>;
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  password?: Maybe<Scalars['String']>;
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  tag?: Maybe<Scalars['String']>;
  tagId?: Maybe<Scalars['String']>;
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  tagNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>;
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  title?: Maybe<Scalars['String']>;
};

export type PostToTagConnection = {
  __typename?: 'PostToTagConnection';
  edges?: Maybe<Array<Maybe<PostToTagConnectionEdge>>>;
  nodes?: Maybe<Array<Maybe<Tag>>>;
  pageInfo?: Maybe<WpPageInfo>;
};

export type PostToTagConnectionEdge = {
  __typename?: 'PostToTagConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  isPrimary?: Maybe<Scalars['Boolean']>;
  node?: Maybe<Tag>;
};

export type PostToTagConnectionWhereArgs = {
  cacheDomain?: Maybe<Scalars['String']>;
  childOf?: Maybe<Scalars['Int']>;
  childless?: Maybe<Scalars['Boolean']>;
  descriptionLike?: Maybe<Scalars['String']>;
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  hideEmpty?: Maybe<Scalars['Boolean']>;
  hierarchical?: Maybe<Scalars['Boolean']>;
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  nameLike?: Maybe<Scalars['String']>;
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  order?: Maybe<OrderEnum>;
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  padCounts?: Maybe<Scalars['Boolean']>;
  parent?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

export type PostToTermNodeConnection = {
  __typename?: 'PostToTermNodeConnection';
  edges?: Maybe<Array<Maybe<PostToTermNodeConnectionEdge>>>;
  nodes?: Maybe<Array<Maybe<TermNode>>>;
  pageInfo?: Maybe<WpPageInfo>;
};

export type PostToTermNodeConnectionEdge = {
  __typename?: 'PostToTermNodeConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<TermNode>;
};

export type PostToTermNodeConnectionWhereArgs = {
  cacheDomain?: Maybe<Scalars['String']>;
  childOf?: Maybe<Scalars['Int']>;
  childless?: Maybe<Scalars['Boolean']>;
  descriptionLike?: Maybe<Scalars['String']>;
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  hideEmpty?: Maybe<Scalars['Boolean']>;
  hierarchical?: Maybe<Scalars['Boolean']>;
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  nameLike?: Maybe<Scalars['String']>;
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  order?: Maybe<OrderEnum>;
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  padCounts?: Maybe<Scalars['Boolean']>;
  parent?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>;
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

export type PostTypeLabelDetails = {
  __typename?: 'PostTypeLabelDetails';
  addNew?: Maybe<Scalars['String']>;
  addNewItem?: Maybe<Scalars['String']>;
  allItems?: Maybe<Scalars['String']>;
  archives?: Maybe<Scalars['String']>;
  attributes?: Maybe<Scalars['String']>;
  editItem?: Maybe<Scalars['String']>;
  featuredImage?: Maybe<Scalars['String']>;
  filterItemsList?: Maybe<Scalars['String']>;
  insertIntoItem?: Maybe<Scalars['String']>;
  itemsList?: Maybe<Scalars['String']>;
  itemsListNavigation?: Maybe<Scalars['String']>;
  menuName?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  newItem?: Maybe<Scalars['String']>;
  notFound?: Maybe<Scalars['String']>;
  notFoundInTrash?: Maybe<Scalars['String']>;
  parentItemColon?: Maybe<Scalars['String']>;
  removeFeaturedImage?: Maybe<Scalars['String']>;
  searchItems?: Maybe<Scalars['String']>;
  setFeaturedImage?: Maybe<Scalars['String']>;
  singularName?: Maybe<Scalars['String']>;
  uploadedToThisItem?: Maybe<Scalars['String']>;
  useFeaturedImage?: Maybe<Scalars['String']>;
  viewItem?: Maybe<Scalars['String']>;
  viewItems?: Maybe<Scalars['String']>;
};

export enum PostTypeOrderByEnum {
  Date = 'DATE',
  In = 'IN',
  MenuOrder = 'MENU_ORDER',
  Modified = 'MODIFIED',
  NameIn = 'NAME_IN',
  Parent = 'PARENT',
  Slug = 'SLUG'
}

export type PostTypeOrderbyInput = {
  field: PostTypeOrderByEnum;
  order?: Maybe<OrderEnum>;
};

export type PostTypeSeo = {
  __typename?: 'PostTypeSEO';
  breadcrumbs?: Maybe<Array<Maybe<SeoPostTypeBreadcrumbs>>>;
  canonical?: Maybe<Scalars['String']>;
  cornerstone?: Maybe<Scalars['Boolean']>;
  focuskw?: Maybe<Scalars['String']>;
  fullHead?: Maybe<Scalars['String']>;
  metaDesc?: Maybe<Scalars['String']>;
  metaKeywords?: Maybe<Scalars['String']>;
  metaRobotsNofollow?: Maybe<Scalars['String']>;
  metaRobotsNoindex?: Maybe<Scalars['String']>;
  opengraphAuthor?: Maybe<Scalars['String']>;
  opengraphDescription?: Maybe<Scalars['String']>;
  opengraphImage?: Maybe<MediaItem>;
  opengraphModifiedTime?: Maybe<Scalars['String']>;
  opengraphPublishedTime?: Maybe<Scalars['String']>;
  opengraphPublisher?: Maybe<Scalars['String']>;
  opengraphSiteName?: Maybe<Scalars['String']>;
  opengraphTitle?: Maybe<Scalars['String']>;
  opengraphType?: Maybe<Scalars['String']>;
  opengraphUrl?: Maybe<Scalars['String']>;
  readingTime?: Maybe<Scalars['Float']>;
  schema?: Maybe<SeoPostTypeSchema>;
  title?: Maybe<Scalars['String']>;
  twitterDescription?: Maybe<Scalars['String']>;
  twitterImage?: Maybe<MediaItem>;
  twitterTitle?: Maybe<Scalars['String']>;
};

export enum PricingFieldFormatEnum {
  Formatted = 'FORMATTED',
  Raw = 'RAW'
}

export type Product = {
  attributes?: Maybe<ProductToProductAttributeConnection>;
  averageRating?: Maybe<Scalars['Float']>;
  catalogVisibility?: Maybe<CatalogVisibilityEnum>;
  databaseId: Scalars['Int'];
  date?: Maybe<Scalars['String']>;
  dateOnSaleFrom?: Maybe<Scalars['String']>;
  dateOnSaleTo?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  featured?: Maybe<Scalars['Boolean']>;
  galleryImages?: Maybe<ProductToMediaItemConnection>;
  genders?: Maybe<ProductToGenderConnection>;
  globalAttributes?: Maybe<ProductToGlobalProductAttributeConnection>;
  id: Scalars['ID'];
  image?: Maybe<MediaItem>;
  link?: Maybe<Scalars['String']>;
  localAttributes?: Maybe<ProductToLocalProductAttributeConnection>;
  menuOrder?: Maybe<Scalars['Int']>;
  metaData?: Maybe<Array<Maybe<MetaData>>>;
  modified?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  onSale?: Maybe<Scalars['Boolean']>;
  paColors?: Maybe<ProductToPaColorConnection>;
  paSizes?: Maybe<ProductToPaSizeConnection>;
  parent?: Maybe<Product>;
  productCategories?: Maybe<ProductToProductCategoryConnection>;
  productTags?: Maybe<ProductToProductTagConnection>;
  productTypes?: Maybe<ProductToProductTypeConnection>;
  purchasable?: Maybe<Scalars['Boolean']>;
  purchaseNote?: Maybe<Scalars['String']>;
  related?: Maybe<ProductToProductConnection>;
  reviewCount?: Maybe<Scalars['Int']>;
  reviews?: Maybe<ProductToCommentConnection>;
  reviewsAllowed?: Maybe<Scalars['Boolean']>;
  seo?: Maybe<PostTypeSeo>;
  shippingClasses?: Maybe<ProductToShippingClassConnection>;
  shortDescription?: Maybe<Scalars['String']>;
  sku?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  totalSales?: Maybe<Scalars['Int']>;
  type?: Maybe<ProductTypesEnum>;
  upsell?: Maybe<ProductToUpsellConnection>;
  visibleProducts?: Maybe<ProductToVisibleProductConnection>;
};


export type ProductAttributesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToProductAttributeConnectionWhereArgs>;
};


export type ProductDescriptionArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>;
};


export type ProductGalleryImagesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToMediaItemConnectionWhereArgs>;
};


export type ProductGendersArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToGenderConnectionWhereArgs>;
};


export type ProductGlobalAttributesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToGlobalProductAttributeConnectionWhereArgs>;
};


export type ProductLocalAttributesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToLocalProductAttributeConnectionWhereArgs>;
};


export type ProductMetaDataArgs = {
  key?: Maybe<Scalars['String']>;
  keysIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  multiple?: Maybe<Scalars['Boolean']>;
};


export type ProductPaColorsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToPaColorConnectionWhereArgs>;
};


export type ProductPaSizesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToPaSizeConnectionWhereArgs>;
};


export type ProductProductCategoriesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToProductCategoryConnectionWhereArgs>;
};


export type ProductProductTagsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToProductTagConnectionWhereArgs>;
};


export type ProductProductTypesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToProductTypeConnectionWhereArgs>;
};


export type ProductRelatedArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToProductConnectionWhereArgs>;
};


export type ProductReviewsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToCommentConnectionWhereArgs>;
};


export type ProductShippingClassesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToShippingClassConnectionWhereArgs>;
};


export type ProductShortDescriptionArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>;
};


export type ProductUpsellArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToUpsellConnectionWhereArgs>;
};


export type ProductVisibleProductsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToVisibleProductConnectionWhereArgs>;
};

export type ProductAttribute = {
  attributeId: Scalars['Int'];
  id: Scalars['ID'];
  label: Scalars['String'];
  name: Scalars['String'];
  options?: Maybe<Array<Maybe<Scalars['String']>>>;
  position: Scalars['Int'];
  scope: ProductAttributeTypesEnum;
  variation: Scalars['Boolean'];
  visible: Scalars['Boolean'];
};

export type ProductAttributeInput = {
  attributeName: Scalars['String'];
  attributeValue?: Maybe<Scalars['String']>;
};

export type ProductAttributeOutput = {
  __typename?: 'ProductAttributeOutput';
  attributeName?: Maybe<Scalars['String']>;
  attributeValue?: Maybe<Scalars['String']>;
};

export enum ProductAttributeTypesEnum {
  Global = 'GLOBAL',
  Local = 'LOCAL'
}

export type ProductCategory = Node & TermNode & UniformResourceIdentifiable & DatabaseIdentifier & HierarchicalTermNode & MenuItemLinkable & {
  __typename?: 'ProductCategory';
  ancestors?: Maybe<ProductCategoryToAncestorsProductCategoryConnection>;
  children?: Maybe<ProductCategoryToProductCategoryConnection>;
  contentNodes?: Maybe<ProductCategoryToContentNodeConnection>;
  count?: Maybe<Scalars['Int']>;
  databaseId: Scalars['Int'];
  description?: Maybe<Scalars['String']>;
  display?: Maybe<ProductCategoryDisplay>;
  enqueuedScripts?: Maybe<TermNodeToEnqueuedScriptConnection>;
  enqueuedStylesheets?: Maybe<TermNodeToEnqueuedStylesheetConnection>;
  id: Scalars['ID'];
  image?: Maybe<MediaItem>;
  isContentNode: Scalars['Boolean'];
  isRestricted?: Maybe<Scalars['Boolean']>;
  isTermNode: Scalars['Boolean'];
  link?: Maybe<Scalars['String']>;
  menuOrder?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  parent?: Maybe<ProductCategoryToParentProductCategoryConnectionEdge>;
  parentDatabaseId?: Maybe<Scalars['Int']>;
  parentId?: Maybe<Scalars['ID']>;
  /** @deprecated Deprecated in favor of databaseId */
  productCategoryId?: Maybe<Scalars['Int']>;
  products?: Maybe<ProductCategoryToProductConnection>;
  seo?: Maybe<TaxonomySeo>;
  slug?: Maybe<Scalars['String']>;
  taxonomy?: Maybe<ProductCategoryToTaxonomyConnectionEdge>;
  termGroupId?: Maybe<Scalars['Int']>;
  termTaxonomyId?: Maybe<Scalars['Int']>;
  uri?: Maybe<Scalars['String']>;
};


export type ProductCategoryAncestorsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


export type ProductCategoryChildrenArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductCategoryToProductCategoryConnectionWhereArgs>;
};


export type ProductCategoryContentNodesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductCategoryToContentNodeConnectionWhereArgs>;
};


export type ProductCategoryEnqueuedScriptsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


export type ProductCategoryEnqueuedStylesheetsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


export type ProductCategoryProductsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductCategoryToProductConnectionWhereArgs>;
};

export enum ProductCategoryDisplay {
  Both = 'BOTH',
  Default = 'DEFAULT',
  Products = 'PRODUCTS',
  Subcategories = 'SUBCATEGORIES'
}

export enum ProductCategoryIdType {
  DatabaseId = 'DATABASE_ID',
  Id = 'ID',
  Name = 'NAME',
  Slug = 'SLUG',
  Uri = 'URI'
}

export type ProductCategoryToAncestorsProductCategoryConnection = {
  __typename?: 'ProductCategoryToAncestorsProductCategoryConnection';
  edges?: Maybe<Array<Maybe<ProductCategoryToAncestorsProductCategoryConnectionEdge>>>;
  nodes?: Maybe<Array<Maybe<ProductCategory>>>;
  pageInfo?: Maybe<WpPageInfo>;
};

export type ProductCategoryToAncestorsProductCategoryConnectionEdge = {
  __typename?: 'ProductCategoryToAncestorsProductCategoryConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<ProductCategory>;
};

export type ProductCategoryToContentNodeConnection = {
  __typename?: 'ProductCategoryToContentNodeConnection';
  edges?: Maybe<Array<Maybe<ProductCategoryToContentNodeConnectionEdge>>>;
  nodes?: Maybe<Array<Maybe<ContentNode>>>;
  pageInfo?: Maybe<WpPageInfo>;
};

export type ProductCategoryToContentNodeConnectionEdge = {
  __typename?: 'ProductCategoryToContentNodeConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<ContentNode>;
};

export type ProductCategoryToContentNodeConnectionWhereArgs = {
  contentTypes?: Maybe<Array<Maybe<ContentTypesOfProductCategoryEnum>>>;
  dateQuery?: Maybe<DateQueryInput>;
  hasPassword?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  mimeType?: Maybe<MimeTypeEnum>;
  name?: Maybe<Scalars['String']>;
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  parent?: Maybe<Scalars['ID']>;
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  password?: Maybe<Scalars['String']>;
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  title?: Maybe<Scalars['String']>;
};

export type ProductCategoryToParentProductCategoryConnectionEdge = {
  __typename?: 'ProductCategoryToParentProductCategoryConnectionEdge';
  node?: Maybe<ProductCategory>;
};

export type ProductCategoryToProductCategoryConnection = {
  __typename?: 'ProductCategoryToProductCategoryConnection';
  edges?: Maybe<Array<Maybe<ProductCategoryToProductCategoryConnectionEdge>>>;
  nodes?: Maybe<Array<Maybe<ProductCategory>>>;
  pageInfo?: Maybe<WpPageInfo>;
};

export type ProductCategoryToProductCategoryConnectionEdge = {
  __typename?: 'ProductCategoryToProductCategoryConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<ProductCategory>;
};

export type ProductCategoryToProductCategoryConnectionWhereArgs = {
  cacheDomain?: Maybe<Scalars['String']>;
  childOf?: Maybe<Scalars['Int']>;
  childless?: Maybe<Scalars['Boolean']>;
  descriptionLike?: Maybe<Scalars['String']>;
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  hideEmpty?: Maybe<Scalars['Boolean']>;
  hierarchical?: Maybe<Scalars['Boolean']>;
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  nameLike?: Maybe<Scalars['String']>;
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  order?: Maybe<OrderEnum>;
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  padCounts?: Maybe<Scalars['Boolean']>;
  parent?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

export type ProductCategoryToProductConnection = {
  __typename?: 'ProductCategoryToProductConnection';
  edges?: Maybe<Array<Maybe<ProductCategoryToProductConnectionEdge>>>;
  nodes?: Maybe<Array<Maybe<Product>>>;
  pageInfo?: Maybe<WpPageInfo>;
};

export type ProductCategoryToProductConnectionEdge = {
  __typename?: 'ProductCategoryToProductConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<Product>;
};

export type ProductCategoryToProductConnectionWhereArgs = {
  attribute?: Maybe<Scalars['String']>;
  attributeTerm?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  categoryId?: Maybe<Scalars['Int']>;
  categoryIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  categoryIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  categoryIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  categoryNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  dateQuery?: Maybe<DateQueryInput>;
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>;
  featured?: Maybe<Scalars['Boolean']>;
  include?: Maybe<Array<Maybe<Scalars['Int']>>>;
  maxPrice?: Maybe<Scalars['Float']>;
  minPrice?: Maybe<Scalars['Float']>;
  onSale?: Maybe<Scalars['Boolean']>;
  orderby?: Maybe<Array<Maybe<ProductsOrderbyInput>>>;
  parent?: Maybe<Scalars['Int']>;
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  search?: Maybe<Scalars['String']>;
  shippingClassId?: Maybe<Scalars['Int']>;
  sku?: Maybe<Scalars['String']>;
  slugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  status?: Maybe<Scalars['String']>;
  stockStatus?: Maybe<Array<Maybe<StockStatusEnum>>>;
  supportedTypesOnly?: Maybe<Scalars['Boolean']>;
  tag?: Maybe<Scalars['String']>;
  tagId?: Maybe<Scalars['Int']>;
  tagIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  tagIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  tagIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  tagNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  taxonomyFilter?: Maybe<ProductTaxonomyInput>;
  type?: Maybe<ProductTypesEnum>;
  typeIn?: Maybe<Array<Maybe<ProductTypesEnum>>>;
  typeNotIn?: Maybe<Array<Maybe<ProductTypesEnum>>>;
  visibility?: Maybe<CatalogVisibilityEnum>;
};

export type ProductCategoryToTaxonomyConnectionEdge = {
  __typename?: 'ProductCategoryToTaxonomyConnectionEdge';
  node?: Maybe<Taxonomy>;
};

export type ProductDownload = {
  __typename?: 'ProductDownload';
  allowedFileType?: Maybe<Scalars['Boolean']>;
  downloadId: Scalars['String'];
  file?: Maybe<Scalars['String']>;
  fileExists?: Maybe<Scalars['Boolean']>;
  fileExt?: Maybe<Scalars['String']>;
  filePathType?: Maybe<Scalars['String']>;
  fileType?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export enum ProductIdTypeEnum {
  DatabaseId = 'DATABASE_ID',
  Id = 'ID',
  Sku = 'SKU',
  Slug = 'SLUG'
}

export type ProductTag = Node & TermNode & UniformResourceIdentifiable & DatabaseIdentifier & MenuItemLinkable & {
  __typename?: 'ProductTag';
  contentNodes?: Maybe<ProductTagToContentNodeConnection>;
  count?: Maybe<Scalars['Int']>;
  databaseId: Scalars['Int'];
  description?: Maybe<Scalars['String']>;
  enqueuedScripts?: Maybe<TermNodeToEnqueuedScriptConnection>;
  enqueuedStylesheets?: Maybe<TermNodeToEnqueuedStylesheetConnection>;
  id: Scalars['ID'];
  isContentNode: Scalars['Boolean'];
  isRestricted?: Maybe<Scalars['Boolean']>;
  isTermNode: Scalars['Boolean'];
  link?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  /** @deprecated Deprecated in favor of databaseId */
  productTagId?: Maybe<Scalars['Int']>;
  products?: Maybe<ProductTagToProductConnection>;
  seo?: Maybe<TaxonomySeo>;
  slug?: Maybe<Scalars['String']>;
  taxonomy?: Maybe<ProductTagToTaxonomyConnectionEdge>;
  termGroupId?: Maybe<Scalars['Int']>;
  termTaxonomyId?: Maybe<Scalars['Int']>;
  uri?: Maybe<Scalars['String']>;
};


export type ProductTagContentNodesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductTagToContentNodeConnectionWhereArgs>;
};


export type ProductTagEnqueuedScriptsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


export type ProductTagEnqueuedStylesheetsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


export type ProductTagProductsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductTagToProductConnectionWhereArgs>;
};

export enum ProductTagIdType {
  DatabaseId = 'DATABASE_ID',
  Id = 'ID',
  Name = 'NAME',
  Slug = 'SLUG',
  Uri = 'URI'
}

export type ProductTagToContentNodeConnection = {
  __typename?: 'ProductTagToContentNodeConnection';
  edges?: Maybe<Array<Maybe<ProductTagToContentNodeConnectionEdge>>>;
  nodes?: Maybe<Array<Maybe<ContentNode>>>;
  pageInfo?: Maybe<WpPageInfo>;
};

export type ProductTagToContentNodeConnectionEdge = {
  __typename?: 'ProductTagToContentNodeConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<ContentNode>;
};

export type ProductTagToContentNodeConnectionWhereArgs = {
  contentTypes?: Maybe<Array<Maybe<ContentTypesOfProductTagEnum>>>;
  dateQuery?: Maybe<DateQueryInput>;
  hasPassword?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  mimeType?: Maybe<MimeTypeEnum>;
  name?: Maybe<Scalars['String']>;
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  parent?: Maybe<Scalars['ID']>;
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  password?: Maybe<Scalars['String']>;
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  title?: Maybe<Scalars['String']>;
};

export type ProductTagToProductConnection = {
  __typename?: 'ProductTagToProductConnection';
  edges?: Maybe<Array<Maybe<ProductTagToProductConnectionEdge>>>;
  nodes?: Maybe<Array<Maybe<Product>>>;
  pageInfo?: Maybe<WpPageInfo>;
};

export type ProductTagToProductConnectionEdge = {
  __typename?: 'ProductTagToProductConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<Product>;
};

export type ProductTagToProductConnectionWhereArgs = {
  attribute?: Maybe<Scalars['String']>;
  attributeTerm?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  categoryId?: Maybe<Scalars['Int']>;
  categoryIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  categoryIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  categoryIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  categoryNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  dateQuery?: Maybe<DateQueryInput>;
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>;
  featured?: Maybe<Scalars['Boolean']>;
  include?: Maybe<Array<Maybe<Scalars['Int']>>>;
  maxPrice?: Maybe<Scalars['Float']>;
  minPrice?: Maybe<Scalars['Float']>;
  onSale?: Maybe<Scalars['Boolean']>;
  orderby?: Maybe<Array<Maybe<ProductsOrderbyInput>>>;
  parent?: Maybe<Scalars['Int']>;
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  search?: Maybe<Scalars['String']>;
  shippingClassId?: Maybe<Scalars['Int']>;
  sku?: Maybe<Scalars['String']>;
  slugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  status?: Maybe<Scalars['String']>;
  stockStatus?: Maybe<Array<Maybe<StockStatusEnum>>>;
  supportedTypesOnly?: Maybe<Scalars['Boolean']>;
  tag?: Maybe<Scalars['String']>;
  tagId?: Maybe<Scalars['Int']>;
  tagIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  tagIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  tagIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  tagNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  taxonomyFilter?: Maybe<ProductTaxonomyInput>;
  type?: Maybe<ProductTypesEnum>;
  typeIn?: Maybe<Array<Maybe<ProductTypesEnum>>>;
  typeNotIn?: Maybe<Array<Maybe<ProductTypesEnum>>>;
  visibility?: Maybe<CatalogVisibilityEnum>;
};

export type ProductTagToTaxonomyConnectionEdge = {
  __typename?: 'ProductTagToTaxonomyConnectionEdge';
  node?: Maybe<Taxonomy>;
};

export enum ProductTaxonomyEnum {
  Gender = 'GENDER',
  Pacolor = 'PACOLOR',
  Pasize = 'PASIZE',
  Productcategory = 'PRODUCTCATEGORY',
  Producttag = 'PRODUCTTAG',
  Producttype = 'PRODUCTTYPE',
  Shippingclass = 'SHIPPINGCLASS',
  Visibleproduct = 'VISIBLEPRODUCT'
}

export type ProductTaxonomyFilterInput = {
  ids?: Maybe<Array<Maybe<Scalars['Int']>>>;
  operator?: Maybe<TaxonomyOperatorEnum>;
  taxonomy: ProductTaxonomyEnum;
  terms?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ProductTaxonomyInput = {
  filters?: Maybe<Array<Maybe<ProductTaxonomyFilterInput>>>;
  relation?: Maybe<RelationEnum>;
};

export type ProductToCommentConnection = {
  __typename?: 'ProductToCommentConnection';
  averageRating?: Maybe<Scalars['Float']>;
  edges?: Maybe<Array<Maybe<ProductToCommentConnectionEdge>>>;
  nodes?: Maybe<Array<Maybe<Comment>>>;
  pageInfo?: Maybe<WpPageInfo>;
};

export type ProductToCommentConnectionEdge = {
  __typename?: 'ProductToCommentConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<Comment>;
  rating?: Maybe<Scalars['Float']>;
};

export type ProductToCommentConnectionWhereArgs = {
  authorEmail?: Maybe<Scalars['String']>;
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  authorUrl?: Maybe<Scalars['String']>;
  commentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  commentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  commentType?: Maybe<Scalars['String']>;
  commentTypeIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  commentTypeNotIn?: Maybe<Scalars['String']>;
  contentAuthor?: Maybe<Array<Maybe<Scalars['ID']>>>;
  contentAuthorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  contentAuthorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  contentId?: Maybe<Scalars['ID']>;
  contentIdIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  contentIdNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  contentName?: Maybe<Scalars['String']>;
  contentParent?: Maybe<Scalars['Int']>;
  contentStatus?: Maybe<Array<Maybe<PostStatusEnum>>>;
  contentType?: Maybe<Array<Maybe<ContentTypeEnum>>>;
  includeUnapproved?: Maybe<Array<Maybe<Scalars['ID']>>>;
  karma?: Maybe<Scalars['Int']>;
  order?: Maybe<OrderEnum>;
  orderby?: Maybe<CommentsConnectionOrderbyEnum>;
  parent?: Maybe<Scalars['Int']>;
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  search?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['ID']>;
};

export type ProductToGenderConnection = {
  __typename?: 'ProductToGenderConnection';
  edges?: Maybe<Array<Maybe<ProductToGenderConnectionEdge>>>;
  nodes?: Maybe<Array<Maybe<Gender>>>;
  pageInfo?: Maybe<WpPageInfo>;
};

export type ProductToGenderConnectionEdge = {
  __typename?: 'ProductToGenderConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  isPrimary?: Maybe<Scalars['Boolean']>;
  node?: Maybe<Gender>;
};

export type ProductToGenderConnectionWhereArgs = {
  cacheDomain?: Maybe<Scalars['String']>;
  childOf?: Maybe<Scalars['Int']>;
  childless?: Maybe<Scalars['Boolean']>;
  descriptionLike?: Maybe<Scalars['String']>;
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  hideEmpty?: Maybe<Scalars['Boolean']>;
  hierarchical?: Maybe<Scalars['Boolean']>;
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  nameLike?: Maybe<Scalars['String']>;
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  order?: Maybe<OrderEnum>;
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  padCounts?: Maybe<Scalars['Boolean']>;
  parent?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

export type ProductToGlobalProductAttributeConnection = {
  __typename?: 'ProductToGlobalProductAttributeConnection';
  edges?: Maybe<Array<Maybe<ProductToGlobalProductAttributeConnectionEdge>>>;
  nodes?: Maybe<Array<Maybe<GlobalProductAttribute>>>;
  pageInfo?: Maybe<WpPageInfo>;
};

export type ProductToGlobalProductAttributeConnectionEdge = {
  __typename?: 'ProductToGlobalProductAttributeConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<GlobalProductAttribute>;
};

export type ProductToGlobalProductAttributeConnectionWhereArgs = {
  type?: Maybe<ProductAttributeTypesEnum>;
};

export type ProductToLocalProductAttributeConnection = {
  __typename?: 'ProductToLocalProductAttributeConnection';
  edges?: Maybe<Array<Maybe<ProductToLocalProductAttributeConnectionEdge>>>;
  nodes?: Maybe<Array<Maybe<LocalProductAttribute>>>;
  pageInfo?: Maybe<WpPageInfo>;
};

export type ProductToLocalProductAttributeConnectionEdge = {
  __typename?: 'ProductToLocalProductAttributeConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<LocalProductAttribute>;
};

export type ProductToLocalProductAttributeConnectionWhereArgs = {
  type?: Maybe<ProductAttributeTypesEnum>;
};

export type ProductToMediaItemConnection = {
  __typename?: 'ProductToMediaItemConnection';
  edges?: Maybe<Array<Maybe<ProductToMediaItemConnectionEdge>>>;
  nodes?: Maybe<Array<Maybe<MediaItem>>>;
  pageInfo?: Maybe<WpPageInfo>;
};

export type ProductToMediaItemConnectionEdge = {
  __typename?: 'ProductToMediaItemConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<MediaItem>;
};

export type ProductToMediaItemConnectionWhereArgs = {
  author?: Maybe<Scalars['Int']>;
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  authorName?: Maybe<Scalars['String']>;
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  dateQuery?: Maybe<DateQueryInput>;
  hasPassword?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  mimeType?: Maybe<MimeTypeEnum>;
  name?: Maybe<Scalars['String']>;
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  parent?: Maybe<Scalars['ID']>;
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  password?: Maybe<Scalars['String']>;
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  title?: Maybe<Scalars['String']>;
};

export type ProductToPaColorConnection = {
  __typename?: 'ProductToPaColorConnection';
  edges?: Maybe<Array<Maybe<ProductToPaColorConnectionEdge>>>;
  nodes?: Maybe<Array<Maybe<PaColor>>>;
  pageInfo?: Maybe<WpPageInfo>;
};

export type ProductToPaColorConnectionEdge = {
  __typename?: 'ProductToPaColorConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  isPrimary?: Maybe<Scalars['Boolean']>;
  node?: Maybe<PaColor>;
};

export type ProductToPaColorConnectionWhereArgs = {
  cacheDomain?: Maybe<Scalars['String']>;
  childOf?: Maybe<Scalars['Int']>;
  childless?: Maybe<Scalars['Boolean']>;
  descriptionLike?: Maybe<Scalars['String']>;
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  hideEmpty?: Maybe<Scalars['Boolean']>;
  hierarchical?: Maybe<Scalars['Boolean']>;
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  nameLike?: Maybe<Scalars['String']>;
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  order?: Maybe<OrderEnum>;
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  padCounts?: Maybe<Scalars['Boolean']>;
  parent?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

export type ProductToPaSizeConnection = {
  __typename?: 'ProductToPaSizeConnection';
  edges?: Maybe<Array<Maybe<ProductToPaSizeConnectionEdge>>>;
  nodes?: Maybe<Array<Maybe<PaSize>>>;
  pageInfo?: Maybe<WpPageInfo>;
};

export type ProductToPaSizeConnectionEdge = {
  __typename?: 'ProductToPaSizeConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  isPrimary?: Maybe<Scalars['Boolean']>;
  node?: Maybe<PaSize>;
};

export type ProductToPaSizeConnectionWhereArgs = {
  cacheDomain?: Maybe<Scalars['String']>;
  childOf?: Maybe<Scalars['Int']>;
  childless?: Maybe<Scalars['Boolean']>;
  descriptionLike?: Maybe<Scalars['String']>;
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  hideEmpty?: Maybe<Scalars['Boolean']>;
  hierarchical?: Maybe<Scalars['Boolean']>;
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  nameLike?: Maybe<Scalars['String']>;
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  order?: Maybe<OrderEnum>;
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  padCounts?: Maybe<Scalars['Boolean']>;
  parent?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

export type ProductToProductAttributeConnection = {
  __typename?: 'ProductToProductAttributeConnection';
  edges?: Maybe<Array<Maybe<ProductToProductAttributeConnectionEdge>>>;
  nodes?: Maybe<Array<Maybe<ProductAttribute>>>;
  pageInfo?: Maybe<WpPageInfo>;
};

export type ProductToProductAttributeConnectionEdge = {
  __typename?: 'ProductToProductAttributeConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<ProductAttribute>;
};

export type ProductToProductAttributeConnectionWhereArgs = {
  type?: Maybe<ProductAttributeTypesEnum>;
};

export type ProductToProductCategoryConnection = {
  __typename?: 'ProductToProductCategoryConnection';
  edges?: Maybe<Array<Maybe<ProductToProductCategoryConnectionEdge>>>;
  nodes?: Maybe<Array<Maybe<ProductCategory>>>;
  pageInfo?: Maybe<WpPageInfo>;
};

export type ProductToProductCategoryConnectionEdge = {
  __typename?: 'ProductToProductCategoryConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  isPrimary?: Maybe<Scalars['Boolean']>;
  node?: Maybe<ProductCategory>;
};

export type ProductToProductCategoryConnectionWhereArgs = {
  cacheDomain?: Maybe<Scalars['String']>;
  childOf?: Maybe<Scalars['Int']>;
  childless?: Maybe<Scalars['Boolean']>;
  descriptionLike?: Maybe<Scalars['String']>;
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  hideEmpty?: Maybe<Scalars['Boolean']>;
  hierarchical?: Maybe<Scalars['Boolean']>;
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  nameLike?: Maybe<Scalars['String']>;
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  order?: Maybe<OrderEnum>;
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  padCounts?: Maybe<Scalars['Boolean']>;
  parent?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

export type ProductToProductConnection = {
  __typename?: 'ProductToProductConnection';
  edges?: Maybe<Array<Maybe<ProductToProductConnectionEdge>>>;
  nodes?: Maybe<Array<Maybe<Product>>>;
  pageInfo?: Maybe<WpPageInfo>;
};

export type ProductToProductConnectionEdge = {
  __typename?: 'ProductToProductConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<Product>;
};

export type ProductToProductConnectionWhereArgs = {
  attribute?: Maybe<Scalars['String']>;
  attributeTerm?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  categoryId?: Maybe<Scalars['Int']>;
  categoryIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  categoryIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  categoryIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  categoryNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  dateQuery?: Maybe<DateQueryInput>;
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>;
  featured?: Maybe<Scalars['Boolean']>;
  include?: Maybe<Array<Maybe<Scalars['Int']>>>;
  maxPrice?: Maybe<Scalars['Float']>;
  minPrice?: Maybe<Scalars['Float']>;
  onSale?: Maybe<Scalars['Boolean']>;
  orderby?: Maybe<Array<Maybe<ProductsOrderbyInput>>>;
  parent?: Maybe<Scalars['Int']>;
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  search?: Maybe<Scalars['String']>;
  shippingClassId?: Maybe<Scalars['Int']>;
  shuffle?: Maybe<Scalars['Boolean']>;
  sku?: Maybe<Scalars['String']>;
  slugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  status?: Maybe<Scalars['String']>;
  stockStatus?: Maybe<Array<Maybe<StockStatusEnum>>>;
  supportedTypesOnly?: Maybe<Scalars['Boolean']>;
  tag?: Maybe<Scalars['String']>;
  tagId?: Maybe<Scalars['Int']>;
  tagIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  tagIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  tagIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  tagNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  taxonomyFilter?: Maybe<ProductTaxonomyInput>;
  type?: Maybe<ProductTypesEnum>;
  typeIn?: Maybe<Array<Maybe<ProductTypesEnum>>>;
  typeNotIn?: Maybe<Array<Maybe<ProductTypesEnum>>>;
  visibility?: Maybe<CatalogVisibilityEnum>;
};

export type ProductToProductTagConnection = {
  __typename?: 'ProductToProductTagConnection';
  edges?: Maybe<Array<Maybe<ProductToProductTagConnectionEdge>>>;
  nodes?: Maybe<Array<Maybe<ProductTag>>>;
  pageInfo?: Maybe<WpPageInfo>;
};

export type ProductToProductTagConnectionEdge = {
  __typename?: 'ProductToProductTagConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  isPrimary?: Maybe<Scalars['Boolean']>;
  node?: Maybe<ProductTag>;
};

export type ProductToProductTagConnectionWhereArgs = {
  cacheDomain?: Maybe<Scalars['String']>;
  childOf?: Maybe<Scalars['Int']>;
  childless?: Maybe<Scalars['Boolean']>;
  descriptionLike?: Maybe<Scalars['String']>;
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  hideEmpty?: Maybe<Scalars['Boolean']>;
  hierarchical?: Maybe<Scalars['Boolean']>;
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  nameLike?: Maybe<Scalars['String']>;
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  order?: Maybe<OrderEnum>;
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  padCounts?: Maybe<Scalars['Boolean']>;
  parent?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

export type ProductToProductTypeConnection = {
  __typename?: 'ProductToProductTypeConnection';
  edges?: Maybe<Array<Maybe<ProductToProductTypeConnectionEdge>>>;
  nodes?: Maybe<Array<Maybe<ProductType>>>;
  pageInfo?: Maybe<WpPageInfo>;
};

export type ProductToProductTypeConnectionEdge = {
  __typename?: 'ProductToProductTypeConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  isPrimary?: Maybe<Scalars['Boolean']>;
  node?: Maybe<ProductType>;
};

export type ProductToProductTypeConnectionWhereArgs = {
  cacheDomain?: Maybe<Scalars['String']>;
  childOf?: Maybe<Scalars['Int']>;
  childless?: Maybe<Scalars['Boolean']>;
  descriptionLike?: Maybe<Scalars['String']>;
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  hideEmpty?: Maybe<Scalars['Boolean']>;
  hierarchical?: Maybe<Scalars['Boolean']>;
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  nameLike?: Maybe<Scalars['String']>;
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  order?: Maybe<OrderEnum>;
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  padCounts?: Maybe<Scalars['Boolean']>;
  parent?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

export type ProductToShippingClassConnection = {
  __typename?: 'ProductToShippingClassConnection';
  edges?: Maybe<Array<Maybe<ProductToShippingClassConnectionEdge>>>;
  nodes?: Maybe<Array<Maybe<ShippingClass>>>;
  pageInfo?: Maybe<WpPageInfo>;
};

export type ProductToShippingClassConnectionEdge = {
  __typename?: 'ProductToShippingClassConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  isPrimary?: Maybe<Scalars['Boolean']>;
  node?: Maybe<ShippingClass>;
};

export type ProductToShippingClassConnectionWhereArgs = {
  cacheDomain?: Maybe<Scalars['String']>;
  childOf?: Maybe<Scalars['Int']>;
  childless?: Maybe<Scalars['Boolean']>;
  descriptionLike?: Maybe<Scalars['String']>;
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  hideEmpty?: Maybe<Scalars['Boolean']>;
  hierarchical?: Maybe<Scalars['Boolean']>;
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  nameLike?: Maybe<Scalars['String']>;
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  order?: Maybe<OrderEnum>;
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  padCounts?: Maybe<Scalars['Boolean']>;
  parent?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

export type ProductToUpsellConnection = {
  __typename?: 'ProductToUpsellConnection';
  edges?: Maybe<Array<Maybe<ProductToUpsellConnectionEdge>>>;
  nodes?: Maybe<Array<Maybe<Product>>>;
  pageInfo?: Maybe<WpPageInfo>;
};

export type ProductToUpsellConnectionEdge = {
  __typename?: 'ProductToUpsellConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<Product>;
};

export type ProductToUpsellConnectionWhereArgs = {
  attribute?: Maybe<Scalars['String']>;
  attributeTerm?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  categoryId?: Maybe<Scalars['Int']>;
  categoryIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  categoryIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  categoryIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  categoryNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  dateQuery?: Maybe<DateQueryInput>;
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>;
  featured?: Maybe<Scalars['Boolean']>;
  include?: Maybe<Array<Maybe<Scalars['Int']>>>;
  maxPrice?: Maybe<Scalars['Float']>;
  minPrice?: Maybe<Scalars['Float']>;
  onSale?: Maybe<Scalars['Boolean']>;
  orderby?: Maybe<Array<Maybe<ProductsOrderbyInput>>>;
  parent?: Maybe<Scalars['Int']>;
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  search?: Maybe<Scalars['String']>;
  shippingClassId?: Maybe<Scalars['Int']>;
  sku?: Maybe<Scalars['String']>;
  slugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  status?: Maybe<Scalars['String']>;
  stockStatus?: Maybe<Array<Maybe<StockStatusEnum>>>;
  supportedTypesOnly?: Maybe<Scalars['Boolean']>;
  tag?: Maybe<Scalars['String']>;
  tagId?: Maybe<Scalars['Int']>;
  tagIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  tagIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  tagIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  tagNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  taxonomyFilter?: Maybe<ProductTaxonomyInput>;
  type?: Maybe<ProductTypesEnum>;
  typeIn?: Maybe<Array<Maybe<ProductTypesEnum>>>;
  typeNotIn?: Maybe<Array<Maybe<ProductTypesEnum>>>;
  visibility?: Maybe<CatalogVisibilityEnum>;
};

export type ProductToVisibleProductConnection = {
  __typename?: 'ProductToVisibleProductConnection';
  edges?: Maybe<Array<Maybe<ProductToVisibleProductConnectionEdge>>>;
  nodes?: Maybe<Array<Maybe<VisibleProduct>>>;
  pageInfo?: Maybe<WpPageInfo>;
};

export type ProductToVisibleProductConnectionEdge = {
  __typename?: 'ProductToVisibleProductConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  isPrimary?: Maybe<Scalars['Boolean']>;
  node?: Maybe<VisibleProduct>;
};

export type ProductToVisibleProductConnectionWhereArgs = {
  cacheDomain?: Maybe<Scalars['String']>;
  childOf?: Maybe<Scalars['Int']>;
  childless?: Maybe<Scalars['Boolean']>;
  descriptionLike?: Maybe<Scalars['String']>;
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  hideEmpty?: Maybe<Scalars['Boolean']>;
  hierarchical?: Maybe<Scalars['Boolean']>;
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  nameLike?: Maybe<Scalars['String']>;
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  order?: Maybe<OrderEnum>;
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  padCounts?: Maybe<Scalars['Boolean']>;
  parent?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

export type ProductType = Node & TermNode & UniformResourceIdentifiable & DatabaseIdentifier & {
  __typename?: 'ProductType';
  contentNodes?: Maybe<ProductTypeToContentNodeConnection>;
  count?: Maybe<Scalars['Int']>;
  databaseId: Scalars['Int'];
  description?: Maybe<Scalars['String']>;
  enqueuedScripts?: Maybe<TermNodeToEnqueuedScriptConnection>;
  enqueuedStylesheets?: Maybe<TermNodeToEnqueuedStylesheetConnection>;
  id: Scalars['ID'];
  isContentNode: Scalars['Boolean'];
  isRestricted?: Maybe<Scalars['Boolean']>;
  isTermNode: Scalars['Boolean'];
  link?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  /** @deprecated Deprecated in favor of databaseId */
  productTypeId?: Maybe<Scalars['Int']>;
  seo?: Maybe<TaxonomySeo>;
  slug?: Maybe<Scalars['String']>;
  taxonomy?: Maybe<ProductTypeToTaxonomyConnectionEdge>;
  termGroupId?: Maybe<Scalars['Int']>;
  termTaxonomyId?: Maybe<Scalars['Int']>;
  uri?: Maybe<Scalars['String']>;
};


export type ProductTypeContentNodesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductTypeToContentNodeConnectionWhereArgs>;
};


export type ProductTypeEnqueuedScriptsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


export type ProductTypeEnqueuedStylesheetsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};

export enum ProductTypeIdType {
  DatabaseId = 'DATABASE_ID',
  Id = 'ID',
  Name = 'NAME',
  Slug = 'SLUG',
  Uri = 'URI'
}

export type ProductTypeToContentNodeConnection = {
  __typename?: 'ProductTypeToContentNodeConnection';
  edges?: Maybe<Array<Maybe<ProductTypeToContentNodeConnectionEdge>>>;
  nodes?: Maybe<Array<Maybe<ContentNode>>>;
  pageInfo?: Maybe<WpPageInfo>;
};

export type ProductTypeToContentNodeConnectionEdge = {
  __typename?: 'ProductTypeToContentNodeConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<ContentNode>;
};

export type ProductTypeToContentNodeConnectionWhereArgs = {
  contentTypes?: Maybe<Array<Maybe<ContentTypesOfProductTypeEnum>>>;
  dateQuery?: Maybe<DateQueryInput>;
  hasPassword?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  mimeType?: Maybe<MimeTypeEnum>;
  name?: Maybe<Scalars['String']>;
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  parent?: Maybe<Scalars['ID']>;
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  password?: Maybe<Scalars['String']>;
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  title?: Maybe<Scalars['String']>;
};

export type ProductTypeToTaxonomyConnectionEdge = {
  __typename?: 'ProductTypeToTaxonomyConnectionEdge';
  node?: Maybe<Taxonomy>;
};

export enum ProductTypesEnum {
  External = 'EXTERNAL',
  Grouped = 'GROUPED',
  Simple = 'SIMPLE',
  Variable = 'VARIABLE',
  Variation = 'VARIATION'
}

export type ProductVariation = Node & NodeWithFeaturedImage & ContentNode & UniformResourceIdentifiable & DatabaseIdentifier & {
  __typename?: 'ProductVariation';
  attributes?: Maybe<ProductVariationToVariationAttributeConnection>;
  backorders?: Maybe<BackordersEnum>;
  backordersAllowed?: Maybe<Scalars['Boolean']>;
  catalogVisibility?: Maybe<CatalogVisibilityEnum>;
  contentType?: Maybe<ContentNodeToContentTypeConnectionEdge>;
  databaseId: Scalars['Int'];
  date?: Maybe<Scalars['String']>;
  dateGmt?: Maybe<Scalars['String']>;
  dateOnSaleFrom?: Maybe<Scalars['String']>;
  dateOnSaleTo?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  desiredSlug?: Maybe<Scalars['String']>;
  downloadExpiry?: Maybe<Scalars['Int']>;
  downloadLimit?: Maybe<Scalars['Int']>;
  downloadable?: Maybe<Scalars['Boolean']>;
  downloads?: Maybe<Array<Maybe<ProductDownload>>>;
  editingLockedBy?: Maybe<ContentNodeToEditLockConnectionEdge>;
  enclosure?: Maybe<Scalars['String']>;
  enqueuedScripts?: Maybe<ContentNodeToEnqueuedScriptConnection>;
  enqueuedStylesheets?: Maybe<ContentNodeToEnqueuedStylesheetConnection>;
  featuredImage?: Maybe<NodeWithFeaturedImageToMediaItemConnectionEdge>;
  featuredImageDatabaseId?: Maybe<Scalars['Int']>;
  featuredImageId?: Maybe<Scalars['ID']>;
  guid?: Maybe<Scalars['String']>;
  hasAttributes?: Maybe<Scalars['Boolean']>;
  height?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image?: Maybe<MediaItem>;
  isContentNode: Scalars['Boolean'];
  isPreview?: Maybe<Scalars['Boolean']>;
  isRestricted?: Maybe<Scalars['Boolean']>;
  isTermNode: Scalars['Boolean'];
  lastEditedBy?: Maybe<ContentNodeToEditLastConnectionEdge>;
  length?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  manageStock?: Maybe<ManageStockEnum>;
  menuOrder?: Maybe<Scalars['Int']>;
  metaData?: Maybe<Array<Maybe<MetaData>>>;
  modified?: Maybe<Scalars['String']>;
  modifiedGmt?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  onSale?: Maybe<Scalars['Boolean']>;
  parent?: Maybe<ProductVariationToVariableProductConnectionEdge>;
  previewRevisionDatabaseId?: Maybe<Scalars['Int']>;
  previewRevisionId?: Maybe<Scalars['ID']>;
  price?: Maybe<Scalars['String']>;
  purchasable?: Maybe<Scalars['Boolean']>;
  purchaseNote?: Maybe<Scalars['String']>;
  regularPrice?: Maybe<Scalars['String']>;
  salePrice?: Maybe<Scalars['String']>;
  shippingClass?: Maybe<Scalars['String']>;
  shippingClasses?: Maybe<ProductVariationToShippingClassConnection>;
  sku?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  stockQuantity?: Maybe<Scalars['Int']>;
  stockStatus?: Maybe<StockStatusEnum>;
  taxClass?: Maybe<TaxClassEnum>;
  taxStatus?: Maybe<TaxStatusEnum>;
  template?: Maybe<ContentTemplate>;
  type?: Maybe<ProductTypesEnum>;
  uri?: Maybe<Scalars['String']>;
  virtual?: Maybe<Scalars['Boolean']>;
  visibleProducts?: Maybe<ProductVariationToVisibleProductConnection>;
  weight?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['String']>;
};


export type ProductVariationAttributesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


export type ProductVariationEnqueuedScriptsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


export type ProductVariationEnqueuedStylesheetsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


export type ProductVariationMetaDataArgs = {
  key?: Maybe<Scalars['String']>;
  keysIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  multiple?: Maybe<Scalars['Boolean']>;
};


export type ProductVariationPriceArgs = {
  format?: Maybe<PricingFieldFormatEnum>;
};


export type ProductVariationRegularPriceArgs = {
  format?: Maybe<PricingFieldFormatEnum>;
};


export type ProductVariationSalePriceArgs = {
  format?: Maybe<PricingFieldFormatEnum>;
};


export type ProductVariationShippingClassesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductVariationToShippingClassConnectionWhereArgs>;
};


export type ProductVariationVisibleProductsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductVariationToVisibleProductConnectionWhereArgs>;
};

export enum ProductVariationIdTypeEnum {
  DatabaseId = 'DATABASE_ID',
  Id = 'ID'
}

export type ProductVariationToShippingClassConnection = {
  __typename?: 'ProductVariationToShippingClassConnection';
  edges?: Maybe<Array<Maybe<ProductVariationToShippingClassConnectionEdge>>>;
  nodes?: Maybe<Array<Maybe<ShippingClass>>>;
  pageInfo?: Maybe<WpPageInfo>;
};

export type ProductVariationToShippingClassConnectionEdge = {
  __typename?: 'ProductVariationToShippingClassConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<ShippingClass>;
};

export type ProductVariationToShippingClassConnectionWhereArgs = {
  cacheDomain?: Maybe<Scalars['String']>;
  childOf?: Maybe<Scalars['Int']>;
  childless?: Maybe<Scalars['Boolean']>;
  descriptionLike?: Maybe<Scalars['String']>;
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  hideEmpty?: Maybe<Scalars['Boolean']>;
  hierarchical?: Maybe<Scalars['Boolean']>;
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  nameLike?: Maybe<Scalars['String']>;
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  order?: Maybe<OrderEnum>;
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  padCounts?: Maybe<Scalars['Boolean']>;
  parent?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

export type ProductVariationToVariableProductConnectionEdge = {
  __typename?: 'ProductVariationToVariableProductConnectionEdge';
  node?: Maybe<VariableProduct>;
};

export type ProductVariationToVariationAttributeConnection = {
  __typename?: 'ProductVariationToVariationAttributeConnection';
  edges?: Maybe<Array<Maybe<ProductVariationToVariationAttributeConnectionEdge>>>;
  nodes?: Maybe<Array<Maybe<VariationAttribute>>>;
  pageInfo?: Maybe<WpPageInfo>;
};

export type ProductVariationToVariationAttributeConnectionEdge = {
  __typename?: 'ProductVariationToVariationAttributeConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<VariationAttribute>;
};

export type ProductVariationToVisibleProductConnection = {
  __typename?: 'ProductVariationToVisibleProductConnection';
  edges?: Maybe<Array<Maybe<ProductVariationToVisibleProductConnectionEdge>>>;
  nodes?: Maybe<Array<Maybe<VisibleProduct>>>;
  pageInfo?: Maybe<WpPageInfo>;
};

export type ProductVariationToVisibleProductConnectionEdge = {
  __typename?: 'ProductVariationToVisibleProductConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<VisibleProduct>;
};

export type ProductVariationToVisibleProductConnectionWhereArgs = {
  cacheDomain?: Maybe<Scalars['String']>;
  childOf?: Maybe<Scalars['Int']>;
  childless?: Maybe<Scalars['Boolean']>;
  descriptionLike?: Maybe<Scalars['String']>;
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  hideEmpty?: Maybe<Scalars['Boolean']>;
  hierarchical?: Maybe<Scalars['Boolean']>;
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  nameLike?: Maybe<Scalars['String']>;
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  order?: Maybe<OrderEnum>;
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  padCounts?: Maybe<Scalars['Boolean']>;
  parent?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

export enum ProductsOrderByEnum {
  Date = 'DATE',
  In = 'IN',
  MenuOrder = 'MENU_ORDER',
  Modified = 'MODIFIED',
  NameIn = 'NAME_IN',
  OnSaleFrom = 'ON_SALE_FROM',
  OnSaleTo = 'ON_SALE_TO',
  Parent = 'PARENT',
  Price = 'PRICE',
  Rating = 'RATING',
  RegularPrice = 'REGULAR_PRICE',
  ReviewCount = 'REVIEW_COUNT',
  SalePrice = 'SALE_PRICE',
  Slug = 'SLUG',
  TotalSales = 'TOTAL_SALES'
}

export type ProductsOrderbyInput = {
  field: ProductsOrderByEnum;
  order?: Maybe<OrderEnum>;
};

export type ReadingSettings = {
  __typename?: 'ReadingSettings';
  postsPerPage?: Maybe<Scalars['Int']>;
};

export type RealProject = Node & ContentNode & UniformResourceIdentifiable & DatabaseIdentifier & NodeWithTemplate & NodeWithTitle & NodeWithContentEditor & NodeWithFeaturedImage & MenuItemLinkable & {
  __typename?: 'RealProject';
  /** @deprecated Deprecated in favor of the databaseId field */
  realProjectId: Scalars['Int'];
  content?: Maybe<Scalars['String']>;
  contentType?: Maybe<ContentNodeToContentTypeConnectionEdge>;
  databaseId: Scalars['Int'];
  date?: Maybe<Scalars['String']>;
  dateGmt?: Maybe<Scalars['String']>;
  desiredSlug?: Maybe<Scalars['String']>;
  editingLockedBy?: Maybe<ContentNodeToEditLockConnectionEdge>;
  enclosure?: Maybe<Scalars['String']>;
  enqueuedScripts?: Maybe<ContentNodeToEnqueuedScriptConnection>;
  enqueuedStylesheets?: Maybe<ContentNodeToEnqueuedStylesheetConnection>;
  featuredImage?: Maybe<NodeWithFeaturedImageToMediaItemConnectionEdge>;
  featuredImageDatabaseId?: Maybe<Scalars['Int']>;
  featuredImageId?: Maybe<Scalars['ID']>;
  guid?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isContentNode: Scalars['Boolean'];
  isPreview?: Maybe<Scalars['Boolean']>;
  isRestricted?: Maybe<Scalars['Boolean']>;
  isTermNode: Scalars['Boolean'];
  lastEditedBy?: Maybe<ContentNodeToEditLastConnectionEdge>;
  link?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['String']>;
  modifiedGmt?: Maybe<Scalars['String']>;
  preview?: Maybe<RealProjectToPreviewConnectionEdge>;
  previewRevisionDatabaseId?: Maybe<Scalars['Int']>;
  previewRevisionId?: Maybe<Scalars['ID']>;
  realProjectFields?: Maybe<RealProject_Realprojectfields>;
  seo?: Maybe<PostTypeSeo>;
  slug?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  template?: Maybe<ContentTemplate>;
  title?: Maybe<Scalars['String']>;
  uri?: Maybe<Scalars['String']>;
};


export type RealProjectContentArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>;
};


export type RealProjectEnqueuedScriptsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


export type RealProjectEnqueuedStylesheetsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


export type RealProjectTitleArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>;
};

export enum RealProjectIdType {
  DatabaseId = 'DATABASE_ID',
  Id = 'ID',
  Slug = 'SLUG',
  Uri = 'URI'
}

export type RealProjectToPreviewConnectionEdge = {
  __typename?: 'RealProjectToPreviewConnectionEdge';
  node?: Maybe<RealProject>;
};

export type RealProject_Realprojectfields = AcfFieldGroup & {
  __typename?: 'RealProject_Realprojectfields';
  dienTich?: Maybe<Scalars['Float']>;
  fieldGroupName?: Maybe<Scalars['String']>;
};

export type Refund = Node & {
  __typename?: 'Refund';
  amount?: Maybe<Scalars['Float']>;
  databaseId?: Maybe<Scalars['Int']>;
  date?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  metaData?: Maybe<Array<Maybe<MetaData>>>;
  reason?: Maybe<Scalars['String']>;
  refundedBy?: Maybe<User>;
  title?: Maybe<Scalars['String']>;
};


export type RefundMetaDataArgs = {
  key?: Maybe<Scalars['String']>;
  keysIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  multiple?: Maybe<Scalars['Boolean']>;
};

export enum RefundIdTypeEnum {
  DatabaseId = 'DATABASE_ID',
  Id = 'ID'
}

export type RegisterCustomerInput = {
  aim?: Maybe<Scalars['String']>;
  billing?: Maybe<CustomerAddressInput>;
  clientMutationId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  jabber?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  metaData?: Maybe<Array<Maybe<MetaDataInput>>>;
  nicename?: Maybe<Scalars['String']>;
  nickname?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  registered?: Maybe<Scalars['String']>;
  richEditing?: Maybe<Scalars['String']>;
  shipping?: Maybe<CustomerAddressInput>;
  shippingSameAsBilling?: Maybe<Scalars['Boolean']>;
  username?: Maybe<Scalars['String']>;
  websiteUrl?: Maybe<Scalars['String']>;
  yim?: Maybe<Scalars['String']>;
};

export type RegisterCustomerPayload = {
  __typename?: 'RegisterCustomerPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  customer?: Maybe<Customer>;
  viewer?: Maybe<User>;
};

export type RegisterUserInput = {
  aim?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  jabber?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  nicename?: Maybe<Scalars['String']>;
  nickname?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  registered?: Maybe<Scalars['String']>;
  richEditing?: Maybe<Scalars['String']>;
  username: Scalars['String'];
  websiteUrl?: Maybe<Scalars['String']>;
  yim?: Maybe<Scalars['String']>;
};

export type RegisterUserPayload = {
  __typename?: 'RegisterUserPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export enum RelationEnum {
  And = 'AND',
  Or = 'OR'
}

export type RemoveCouponsInput = {
  clientMutationId?: Maybe<Scalars['String']>;
  codes?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type RemoveCouponsPayload = {
  __typename?: 'RemoveCouponsPayload';
  cart?: Maybe<Cart>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type RemoveItemsFromCartInput = {
  all?: Maybe<Scalars['Boolean']>;
  clientMutationId?: Maybe<Scalars['String']>;
  keys?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type RemoveItemsFromCartPayload = {
  __typename?: 'RemoveItemsFromCartPayload';
  cart?: Maybe<Cart>;
  cartItems?: Maybe<Array<Maybe<CartItem>>>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type ResetUserPasswordInput = {
  clientMutationId?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  login?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};

export type ResetUserPasswordPayload = {
  __typename?: 'ResetUserPasswordPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export type RestoreCartItemsInput = {
  clientMutationId?: Maybe<Scalars['String']>;
  keys?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type RestoreCartItemsPayload = {
  __typename?: 'RestoreCartItemsPayload';
  cart?: Maybe<Cart>;
  cartItems?: Maybe<Array<Maybe<CartItem>>>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type RestoreCommentInput = {
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
};

export type RestoreCommentPayload = {
  __typename?: 'RestoreCommentPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  comment?: Maybe<Comment>;
  restoredId?: Maybe<Scalars['ID']>;
};

export type RestoreReviewInput = {
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
};

export type RestoreReviewPayload = {
  __typename?: 'RestoreReviewPayload';
  affectedId?: Maybe<Scalars['ID']>;
  clientMutationId?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Float']>;
  review?: Maybe<Comment>;
};

export type RootMutation = {
  __typename?: 'RootMutation';
  addCartItems?: Maybe<AddCartItemsPayload>;
  addFee?: Maybe<AddFeePayload>;
  addToCart?: Maybe<AddToCartPayload>;
  applyCoupon?: Maybe<ApplyCouponPayload>;
  checkout?: Maybe<CheckoutPayload>;
  createCategory?: Maybe<CreateCategoryPayload>;
  createComment?: Maybe<CreateCommentPayload>;
  createConfig?: Maybe<CreateConfigPayload>;
  createCoupon?: Maybe<CreateCouponPayload>;
  createGender?: Maybe<CreateGenderPayload>;
  createMediaItem?: Maybe<CreateMediaItemPayload>;
  createOrder?: Maybe<CreateOrderPayload>;
  createPaColor?: Maybe<CreatePaColorPayload>;
  createPaSize?: Maybe<CreatePaSizePayload>;
  createPage?: Maybe<CreatePagePayload>;
  createPost?: Maybe<CreatePostPayload>;
  createPostFormat?: Maybe<CreatePostFormatPayload>;
  createProductCategory?: Maybe<CreateProductCategoryPayload>;
  createProductTag?: Maybe<CreateProductTagPayload>;
  createProductType?: Maybe<CreateProductTypePayload>;
  createRealProject?: Maybe<CreateRealProjectPayload>;
  createShippingClass?: Maybe<CreateShippingClassPayload>;
  createTag?: Maybe<CreateTagPayload>;
  createUser?: Maybe<CreateUserPayload>;
  createVisibleProduct?: Maybe<CreateVisibleProductPayload>;
  deleteCategory?: Maybe<DeleteCategoryPayload>;
  deleteComment?: Maybe<DeleteCommentPayload>;
  deleteConfig?: Maybe<DeleteConfigPayload>;
  deleteCoupon?: Maybe<DeleteCouponPayload>;
  deleteGender?: Maybe<DeleteGenderPayload>;
  deleteMediaItem?: Maybe<DeleteMediaItemPayload>;
  deleteOrder?: Maybe<DeleteOrderPayload>;
  deleteOrderItems?: Maybe<DeleteOrderItemsPayload>;
  deletePaColor?: Maybe<DeletePaColorPayload>;
  deletePaSize?: Maybe<DeletePaSizePayload>;
  deletePage?: Maybe<DeletePagePayload>;
  deletePost?: Maybe<DeletePostPayload>;
  deletePostFormat?: Maybe<DeletePostFormatPayload>;
  deleteProductCategory?: Maybe<DeleteProductCategoryPayload>;
  deleteProductTag?: Maybe<DeleteProductTagPayload>;
  deleteProductType?: Maybe<DeleteProductTypePayload>;
  deleteRealProject?: Maybe<DeleteRealProjectPayload>;
  deleteReview?: Maybe<DeleteReviewPayload>;
  deleteShippingClass?: Maybe<DeleteShippingClassPayload>;
  deleteTag?: Maybe<DeleteTagPayload>;
  deleteUser?: Maybe<DeleteUserPayload>;
  deleteVisibleProduct?: Maybe<DeleteVisibleProductPayload>;
  emptyCart?: Maybe<EmptyCartPayload>;
  fillCart?: Maybe<FillCartPayload>;
  increaseCount?: Maybe<Scalars['Int']>;
  registerCustomer?: Maybe<RegisterCustomerPayload>;
  registerUser?: Maybe<RegisterUserPayload>;
  removeCoupons?: Maybe<RemoveCouponsPayload>;
  removeItemsFromCart?: Maybe<RemoveItemsFromCartPayload>;
  resetUserPassword?: Maybe<ResetUserPasswordPayload>;
  restoreCartItems?: Maybe<RestoreCartItemsPayload>;
  restoreComment?: Maybe<RestoreCommentPayload>;
  restoreReview?: Maybe<RestoreReviewPayload>;
  sendPasswordResetEmail?: Maybe<SendPasswordResetEmailPayload>;
  updateCategory?: Maybe<UpdateCategoryPayload>;
  updateComment?: Maybe<UpdateCommentPayload>;
  updateConfig?: Maybe<UpdateConfigPayload>;
  updateCoupon?: Maybe<UpdateCouponPayload>;
  updateCustomer?: Maybe<UpdateCustomerPayload>;
  updateGender?: Maybe<UpdateGenderPayload>;
  updateItemQuantities?: Maybe<UpdateItemQuantitiesPayload>;
  updateMediaItem?: Maybe<UpdateMediaItemPayload>;
  updateOrder?: Maybe<UpdateOrderPayload>;
  updatePaColor?: Maybe<UpdatePaColorPayload>;
  updatePaSize?: Maybe<UpdatePaSizePayload>;
  updatePage?: Maybe<UpdatePagePayload>;
  updatePost?: Maybe<UpdatePostPayload>;
  updatePostFormat?: Maybe<UpdatePostFormatPayload>;
  updateProductCategory?: Maybe<UpdateProductCategoryPayload>;
  updateProductTag?: Maybe<UpdateProductTagPayload>;
  updateProductType?: Maybe<UpdateProductTypePayload>;
  updateRealProject?: Maybe<UpdateRealProjectPayload>;
  updateReview?: Maybe<UpdateReviewPayload>;
  updateSettings?: Maybe<UpdateSettingsPayload>;
  updateShippingClass?: Maybe<UpdateShippingClassPayload>;
  updateShippingMethod?: Maybe<UpdateShippingMethodPayload>;
  updateTag?: Maybe<UpdateTagPayload>;
  updateUser?: Maybe<UpdateUserPayload>;
  updateVisibleProduct?: Maybe<UpdateVisibleProductPayload>;
  writeReview?: Maybe<WriteReviewPayload>;
};


export type RootMutationAddCartItemsArgs = {
  input: AddCartItemsInput;
};


export type RootMutationAddFeeArgs = {
  input: AddFeeInput;
};


export type RootMutationAddToCartArgs = {
  input: AddToCartInput;
};


export type RootMutationApplyCouponArgs = {
  input: ApplyCouponInput;
};


export type RootMutationCheckoutArgs = {
  input: CheckoutInput;
};


export type RootMutationCreateCategoryArgs = {
  input: CreateCategoryInput;
};


export type RootMutationCreateCommentArgs = {
  input: CreateCommentInput;
};


export type RootMutationCreateConfigArgs = {
  input: CreateConfigInput;
};


export type RootMutationCreateCouponArgs = {
  input: CreateCouponInput;
};


export type RootMutationCreateGenderArgs = {
  input: CreateGenderInput;
};


export type RootMutationCreateMediaItemArgs = {
  input: CreateMediaItemInput;
};


export type RootMutationCreateOrderArgs = {
  input: CreateOrderInput;
};


export type RootMutationCreatePaColorArgs = {
  input: CreatePaColorInput;
};


export type RootMutationCreatePaSizeArgs = {
  input: CreatePaSizeInput;
};


export type RootMutationCreatePageArgs = {
  input: CreatePageInput;
};


export type RootMutationCreatePostArgs = {
  input: CreatePostInput;
};


export type RootMutationCreatePostFormatArgs = {
  input: CreatePostFormatInput;
};


export type RootMutationCreateProductCategoryArgs = {
  input: CreateProductCategoryInput;
};


export type RootMutationCreateProductTagArgs = {
  input: CreateProductTagInput;
};


export type RootMutationCreateProductTypeArgs = {
  input: CreateProductTypeInput;
};


export type RootMutationCreateRealProjectArgs = {
  input: CreateRealProjectInput;
};


export type RootMutationCreateShippingClassArgs = {
  input: CreateShippingClassInput;
};


export type RootMutationCreateTagArgs = {
  input: CreateTagInput;
};


export type RootMutationCreateUserArgs = {
  input: CreateUserInput;
};


export type RootMutationCreateVisibleProductArgs = {
  input: CreateVisibleProductInput;
};


export type RootMutationDeleteCategoryArgs = {
  input: DeleteCategoryInput;
};


export type RootMutationDeleteCommentArgs = {
  input: DeleteCommentInput;
};


export type RootMutationDeleteConfigArgs = {
  input: DeleteConfigInput;
};


export type RootMutationDeleteCouponArgs = {
  input: DeleteCouponInput;
};


export type RootMutationDeleteGenderArgs = {
  input: DeleteGenderInput;
};


export type RootMutationDeleteMediaItemArgs = {
  input: DeleteMediaItemInput;
};


export type RootMutationDeleteOrderArgs = {
  input: DeleteOrderInput;
};


export type RootMutationDeleteOrderItemsArgs = {
  input: DeleteOrderItemsInput;
};


export type RootMutationDeletePaColorArgs = {
  input: DeletePaColorInput;
};


export type RootMutationDeletePaSizeArgs = {
  input: DeletePaSizeInput;
};


export type RootMutationDeletePageArgs = {
  input: DeletePageInput;
};


export type RootMutationDeletePostArgs = {
  input: DeletePostInput;
};


export type RootMutationDeletePostFormatArgs = {
  input: DeletePostFormatInput;
};


export type RootMutationDeleteProductCategoryArgs = {
  input: DeleteProductCategoryInput;
};


export type RootMutationDeleteProductTagArgs = {
  input: DeleteProductTagInput;
};


export type RootMutationDeleteProductTypeArgs = {
  input: DeleteProductTypeInput;
};


export type RootMutationDeleteRealProjectArgs = {
  input: DeleteRealProjectInput;
};


export type RootMutationDeleteReviewArgs = {
  input: DeleteReviewInput;
};


export type RootMutationDeleteShippingClassArgs = {
  input: DeleteShippingClassInput;
};


export type RootMutationDeleteTagArgs = {
  input: DeleteTagInput;
};


export type RootMutationDeleteUserArgs = {
  input: DeleteUserInput;
};


export type RootMutationDeleteVisibleProductArgs = {
  input: DeleteVisibleProductInput;
};


export type RootMutationEmptyCartArgs = {
  input: EmptyCartInput;
};


export type RootMutationFillCartArgs = {
  input: FillCartInput;
};


export type RootMutationIncreaseCountArgs = {
  count?: Maybe<Scalars['Int']>;
};


export type RootMutationRegisterCustomerArgs = {
  input: RegisterCustomerInput;
};


export type RootMutationRegisterUserArgs = {
  input: RegisterUserInput;
};


export type RootMutationRemoveCouponsArgs = {
  input: RemoveCouponsInput;
};


export type RootMutationRemoveItemsFromCartArgs = {
  input: RemoveItemsFromCartInput;
};


export type RootMutationResetUserPasswordArgs = {
  input: ResetUserPasswordInput;
};


export type RootMutationRestoreCartItemsArgs = {
  input: RestoreCartItemsInput;
};


export type RootMutationRestoreCommentArgs = {
  input: RestoreCommentInput;
};


export type RootMutationRestoreReviewArgs = {
  input: RestoreReviewInput;
};


export type RootMutationSendPasswordResetEmailArgs = {
  input: SendPasswordResetEmailInput;
};


export type RootMutationUpdateCategoryArgs = {
  input: UpdateCategoryInput;
};


export type RootMutationUpdateCommentArgs = {
  input: UpdateCommentInput;
};


export type RootMutationUpdateConfigArgs = {
  input: UpdateConfigInput;
};


export type RootMutationUpdateCouponArgs = {
  input: UpdateCouponInput;
};


export type RootMutationUpdateCustomerArgs = {
  input: UpdateCustomerInput;
};


export type RootMutationUpdateGenderArgs = {
  input: UpdateGenderInput;
};


export type RootMutationUpdateItemQuantitiesArgs = {
  input: UpdateItemQuantitiesInput;
};


export type RootMutationUpdateMediaItemArgs = {
  input: UpdateMediaItemInput;
};


export type RootMutationUpdateOrderArgs = {
  input: UpdateOrderInput;
};


export type RootMutationUpdatePaColorArgs = {
  input: UpdatePaColorInput;
};


export type RootMutationUpdatePaSizeArgs = {
  input: UpdatePaSizeInput;
};


export type RootMutationUpdatePageArgs = {
  input: UpdatePageInput;
};


export type RootMutationUpdatePostArgs = {
  input: UpdatePostInput;
};


export type RootMutationUpdatePostFormatArgs = {
  input: UpdatePostFormatInput;
};


export type RootMutationUpdateProductCategoryArgs = {
  input: UpdateProductCategoryInput;
};


export type RootMutationUpdateProductTagArgs = {
  input: UpdateProductTagInput;
};


export type RootMutationUpdateProductTypeArgs = {
  input: UpdateProductTypeInput;
};


export type RootMutationUpdateRealProjectArgs = {
  input: UpdateRealProjectInput;
};


export type RootMutationUpdateReviewArgs = {
  input: UpdateReviewInput;
};


export type RootMutationUpdateSettingsArgs = {
  input: UpdateSettingsInput;
};


export type RootMutationUpdateShippingClassArgs = {
  input: UpdateShippingClassInput;
};


export type RootMutationUpdateShippingMethodArgs = {
  input: UpdateShippingMethodInput;
};


export type RootMutationUpdateTagArgs = {
  input: UpdateTagInput;
};


export type RootMutationUpdateUserArgs = {
  input: UpdateUserInput;
};


export type RootMutationUpdateVisibleProductArgs = {
  input: UpdateVisibleProductInput;
};


export type RootMutationWriteReviewArgs = {
  input: WriteReviewInput;
};

export type RootQuery = {
  __typename?: 'RootQuery';
  allSettings?: Maybe<Settings>;
  cart?: Maybe<Cart>;
  cartFee?: Maybe<CartFee>;
  cartItem?: Maybe<CartItem>;
  categories?: Maybe<RootQueryToCategoryConnection>;
  category?: Maybe<Category>;
  comment?: Maybe<Comment>;
  comments?: Maybe<RootQueryToCommentConnection>;
  config?: Maybe<Config>;
  /** @deprecated Deprecated in favor of using the single entry point for this type with ID and IDType fields. For example, instead of postBy( id: &quot;&quot; ), use post(id: &quot;&quot; idType: &quot;&quot;) */
  configBy?: Maybe<Config>;
  configs?: Maybe<RootQueryToConfigConnection>;
  contentNode?: Maybe<ContentNode>;
  contentNodes?: Maybe<RootQueryToContentNodeConnection>;
  contentType?: Maybe<ContentType>;
  contentTypes?: Maybe<RootQueryToContentTypeConnection>;
  coupon?: Maybe<Coupon>;
  coupons?: Maybe<RootQueryToCouponConnection>;
  customer?: Maybe<Customer>;
  customers?: Maybe<RootQueryToCustomerConnection>;
  discussionSettings?: Maybe<DiscussionSettings>;
  externalProduct?: Maybe<ExternalProduct>;
  gender?: Maybe<Gender>;
  genders?: Maybe<RootQueryToGenderConnection>;
  generalSettings?: Maybe<GeneralSettings>;
  groupedProduct?: Maybe<GroupProduct>;
  mediaItem?: Maybe<MediaItem>;
  /** @deprecated Deprecated in favor of using the single entry point for this type with ID and IDType fields. For example, instead of postBy( id: &quot;&quot; ), use post(id: &quot;&quot; idType: &quot;&quot;) */
  mediaItemBy?: Maybe<MediaItem>;
  mediaItems?: Maybe<RootQueryToMediaItemConnection>;
  menu?: Maybe<Menu>;
  menuItem?: Maybe<MenuItem>;
  menuItems?: Maybe<RootQueryToMenuItemConnection>;
  menus?: Maybe<RootQueryToMenuConnection>;
  node?: Maybe<Node>;
  nodeByUri?: Maybe<UniformResourceIdentifiable>;
  order?: Maybe<Order>;
  orders?: Maybe<RootQueryToOrderConnection>;
  paColor?: Maybe<PaColor>;
  paColors?: Maybe<RootQueryToPaColorConnection>;
  paSize?: Maybe<PaSize>;
  paSizes?: Maybe<RootQueryToPaSizeConnection>;
  page?: Maybe<Page>;
  /** @deprecated Deprecated in favor of using the single entry point for this type with ID and IDType fields. For example, instead of postBy( id: &quot;&quot; ), use post(id: &quot;&quot; idType: &quot;&quot;) */
  pageBy?: Maybe<Page>;
  pages?: Maybe<RootQueryToPageConnection>;
  paymentGateways?: Maybe<RootQueryToPaymentGatewayConnection>;
  plugin?: Maybe<Plugin>;
  plugins?: Maybe<RootQueryToPluginConnection>;
  post?: Maybe<Post>;
  /** @deprecated Deprecated in favor of using the single entry point for this type with ID and IDType fields. For example, instead of postBy( id: &quot;&quot; ), use post(id: &quot;&quot; idType: &quot;&quot;) */
  postBy?: Maybe<Post>;
  postFormat?: Maybe<PostFormat>;
  postFormats?: Maybe<RootQueryToPostFormatConnection>;
  posts?: Maybe<RootQueryToPostConnection>;
  product?: Maybe<Product>;
  productCategories?: Maybe<RootQueryToProductCategoryConnection>;
  productCategory?: Maybe<ProductCategory>;
  productTag?: Maybe<ProductTag>;
  productTags?: Maybe<RootQueryToProductTagConnection>;
  productType?: Maybe<ProductType>;
  productTypes?: Maybe<RootQueryToProductTypeConnection>;
  productVariation?: Maybe<ProductVariation>;
  products?: Maybe<RootQueryToProductConnection>;
  readingSettings?: Maybe<ReadingSettings>;
  realProject?: Maybe<RealProject>;
  /** @deprecated Deprecated in favor of using the single entry point for this type with ID and IDType fields. For example, instead of postBy( id: &quot;&quot; ), use post(id: &quot;&quot; idType: &quot;&quot;) */
  realProjectBy?: Maybe<RealProject>;
  realProjects?: Maybe<RootQueryToRealProjectConnection>;
  refund?: Maybe<Refund>;
  refunds?: Maybe<RootQueryToRefundConnection>;
  registeredScripts?: Maybe<RootQueryToEnqueuedScriptConnection>;
  registeredStylesheets?: Maybe<RootQueryToEnqueuedStylesheetConnection>;
  revisions?: Maybe<RootQueryToContentRevisionUnionConnection>;
  seo?: Maybe<SeoConfig>;
  shippingClass?: Maybe<ShippingClass>;
  shippingClasses?: Maybe<RootQueryToShippingClassConnection>;
  shippingMethod?: Maybe<ShippingMethod>;
  shippingMethods?: Maybe<RootQueryToShippingMethodConnection>;
  simpleProduct?: Maybe<SimpleProduct>;
  tag?: Maybe<Tag>;
  tags?: Maybe<RootQueryToTagConnection>;
  taxRate?: Maybe<TaxRate>;
  taxRates?: Maybe<RootQueryToTaxRateConnection>;
  taxonomies?: Maybe<RootQueryToTaxonomyConnection>;
  taxonomy?: Maybe<Taxonomy>;
  termNode?: Maybe<TermNode>;
  terms?: Maybe<RootQueryToTermNodeConnection>;
  theme?: Maybe<Theme>;
  themes?: Maybe<RootQueryToThemeConnection>;
  user?: Maybe<User>;
  userRole?: Maybe<UserRole>;
  userRoles?: Maybe<RootQueryToUserRoleConnection>;
  users?: Maybe<RootQueryToUserConnection>;
  variableProduct?: Maybe<VariableProduct>;
  viewer?: Maybe<User>;
  visibleProduct?: Maybe<VisibleProduct>;
  visibleProducts?: Maybe<RootQueryToVisibleProductConnection>;
  writingSettings?: Maybe<WritingSettings>;
};


export type RootQueryCartArgs = {
  recalculateTotals?: Maybe<Scalars['Boolean']>;
};


export type RootQueryCartFeeArgs = {
  id: Scalars['ID'];
};


export type RootQueryCartItemArgs = {
  key: Scalars['ID'];
};


export type RootQueryCategoriesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<RootQueryToCategoryConnectionWhereArgs>;
};


export type RootQueryCategoryArgs = {
  id: Scalars['ID'];
  idType?: Maybe<CategoryIdType>;
};


export type RootQueryCommentArgs = {
  id: Scalars['ID'];
};


export type RootQueryCommentsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<RootQueryToCommentConnectionWhereArgs>;
};


export type RootQueryConfigArgs = {
  id: Scalars['ID'];
  idType?: Maybe<ConfigIdType>;
  asPreview?: Maybe<Scalars['Boolean']>;
};


export type RootQueryConfigByArgs = {
  id?: Maybe<Scalars['ID']>;
  configId?: Maybe<Scalars['Int']>;
  uri?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};


export type RootQueryConfigsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<RootQueryToConfigConnectionWhereArgs>;
};


export type RootQueryContentNodeArgs = {
  id: Scalars['ID'];
  idType?: Maybe<ContentNodeIdTypeEnum>;
  contentType?: Maybe<ContentTypeEnum>;
  asPreview?: Maybe<Scalars['Boolean']>;
};


export type RootQueryContentNodesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<RootQueryToContentNodeConnectionWhereArgs>;
};


export type RootQueryContentTypeArgs = {
  id: Scalars['ID'];
  idType?: Maybe<ContentTypeIdTypeEnum>;
};


export type RootQueryContentTypesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


export type RootQueryCouponArgs = {
  id: Scalars['ID'];
  idType?: Maybe<CouponIdTypeEnum>;
};


export type RootQueryCouponsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<RootQueryToCouponConnectionWhereArgs>;
};


export type RootQueryCustomerArgs = {
  id?: Maybe<Scalars['ID']>;
  customerId?: Maybe<Scalars['Int']>;
};


export type RootQueryCustomersArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<RootQueryToCustomerConnectionWhereArgs>;
};


export type RootQueryExternalProductArgs = {
  id?: Maybe<Scalars['ID']>;
  idType?: Maybe<ProductIdTypeEnum>;
};


export type RootQueryGenderArgs = {
  id: Scalars['ID'];
  idType?: Maybe<GenderIdType>;
};


export type RootQueryGendersArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<RootQueryToGenderConnectionWhereArgs>;
};


export type RootQueryGroupedProductArgs = {
  id?: Maybe<Scalars['ID']>;
  idType?: Maybe<ProductIdTypeEnum>;
};


export type RootQueryMediaItemArgs = {
  id: Scalars['ID'];
  idType?: Maybe<MediaItemIdType>;
  asPreview?: Maybe<Scalars['Boolean']>;
};


export type RootQueryMediaItemByArgs = {
  id?: Maybe<Scalars['ID']>;
  mediaItemId?: Maybe<Scalars['Int']>;
  uri?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};


export type RootQueryMediaItemsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<RootQueryToMediaItemConnectionWhereArgs>;
};


export type RootQueryMenuArgs = {
  id: Scalars['ID'];
  idType?: Maybe<MenuNodeIdTypeEnum>;
};


export type RootQueryMenuItemArgs = {
  id: Scalars['ID'];
  idType?: Maybe<MenuItemNodeIdTypeEnum>;
};


export type RootQueryMenuItemsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<RootQueryToMenuItemConnectionWhereArgs>;
};


export type RootQueryMenusArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<RootQueryToMenuConnectionWhereArgs>;
};


export type RootQueryNodeArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type RootQueryNodeByUriArgs = {
  uri: Scalars['String'];
};


export type RootQueryOrderArgs = {
  id?: Maybe<Scalars['ID']>;
  idType?: Maybe<OrderIdTypeEnum>;
};


export type RootQueryOrdersArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<RootQueryToOrderConnectionWhereArgs>;
};


export type RootQueryPaColorArgs = {
  id: Scalars['ID'];
  idType?: Maybe<PaColorIdType>;
};


export type RootQueryPaColorsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<RootQueryToPaColorConnectionWhereArgs>;
};


export type RootQueryPaSizeArgs = {
  id: Scalars['ID'];
  idType?: Maybe<PaSizeIdType>;
};


export type RootQueryPaSizesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<RootQueryToPaSizeConnectionWhereArgs>;
};


export type RootQueryPageArgs = {
  id: Scalars['ID'];
  idType?: Maybe<PageIdType>;
  asPreview?: Maybe<Scalars['Boolean']>;
};


export type RootQueryPageByArgs = {
  id?: Maybe<Scalars['ID']>;
  pageId?: Maybe<Scalars['Int']>;
  uri?: Maybe<Scalars['String']>;
};


export type RootQueryPagesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<RootQueryToPageConnectionWhereArgs>;
};


export type RootQueryPaymentGatewaysArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<RootQueryToPaymentGatewayConnectionWhereArgs>;
};


export type RootQueryPluginArgs = {
  id: Scalars['ID'];
};


export type RootQueryPluginsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


export type RootQueryPostArgs = {
  id: Scalars['ID'];
  idType?: Maybe<PostIdType>;
  asPreview?: Maybe<Scalars['Boolean']>;
};


export type RootQueryPostByArgs = {
  id?: Maybe<Scalars['ID']>;
  postId?: Maybe<Scalars['Int']>;
  uri?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};


export type RootQueryPostFormatArgs = {
  id: Scalars['ID'];
  idType?: Maybe<PostFormatIdType>;
};


export type RootQueryPostFormatsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<RootQueryToPostFormatConnectionWhereArgs>;
};


export type RootQueryPostsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<RootQueryToPostConnectionWhereArgs>;
};


export type RootQueryProductArgs = {
  id: Scalars['ID'];
  idType?: Maybe<ProductIdTypeEnum>;
};


export type RootQueryProductCategoriesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<RootQueryToProductCategoryConnectionWhereArgs>;
};


export type RootQueryProductCategoryArgs = {
  id: Scalars['ID'];
  idType?: Maybe<ProductCategoryIdType>;
};


export type RootQueryProductTagArgs = {
  id: Scalars['ID'];
  idType?: Maybe<ProductTagIdType>;
};


export type RootQueryProductTagsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<RootQueryToProductTagConnectionWhereArgs>;
};


export type RootQueryProductTypeArgs = {
  id: Scalars['ID'];
  idType?: Maybe<ProductTypeIdType>;
};


export type RootQueryProductTypesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<RootQueryToProductTypeConnectionWhereArgs>;
};


export type RootQueryProductVariationArgs = {
  id?: Maybe<Scalars['ID']>;
  idType?: Maybe<ProductVariationIdTypeEnum>;
};


export type RootQueryProductsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<RootQueryToProductConnectionWhereArgs>;
};


export type RootQueryRealProjectArgs = {
  id: Scalars['ID'];
  idType?: Maybe<RealProjectIdType>;
  asPreview?: Maybe<Scalars['Boolean']>;
};


export type RootQueryRealProjectByArgs = {
  id?: Maybe<Scalars['ID']>;
  realProjectId?: Maybe<Scalars['Int']>;
  uri?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};


export type RootQueryRealProjectsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<RootQueryToRealProjectConnectionWhereArgs>;
};


export type RootQueryRefundArgs = {
  id: Scalars['ID'];
  idType?: Maybe<RefundIdTypeEnum>;
};


export type RootQueryRefundsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<RootQueryToRefundConnectionWhereArgs>;
};


export type RootQueryRegisteredScriptsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


export type RootQueryRegisteredStylesheetsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


export type RootQueryRevisionsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<RootQueryToContentRevisionUnionConnectionWhereArgs>;
};


export type RootQueryShippingClassArgs = {
  id: Scalars['ID'];
  idType?: Maybe<ShippingClassIdType>;
};


export type RootQueryShippingClassesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<RootQueryToShippingClassConnectionWhereArgs>;
};


export type RootQueryShippingMethodArgs = {
  id?: Maybe<Scalars['ID']>;
  idType?: Maybe<ShippingMethodIdTypeEnum>;
};


export type RootQueryShippingMethodsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


export type RootQuerySimpleProductArgs = {
  id?: Maybe<Scalars['ID']>;
  idType?: Maybe<ProductIdTypeEnum>;
};


export type RootQueryTagArgs = {
  id: Scalars['ID'];
  idType?: Maybe<TagIdType>;
};


export type RootQueryTagsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<RootQueryToTagConnectionWhereArgs>;
};


export type RootQueryTaxRateArgs = {
  id?: Maybe<Scalars['ID']>;
  idType?: Maybe<TaxRateIdTypeEnum>;
};


export type RootQueryTaxRatesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<RootQueryToTaxRateConnectionWhereArgs>;
};


export type RootQueryTaxonomiesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


export type RootQueryTaxonomyArgs = {
  id: Scalars['ID'];
  idType?: Maybe<TaxonomyIdTypeEnum>;
};


export type RootQueryTermNodeArgs = {
  id: Scalars['ID'];
  idType?: Maybe<TermNodeIdTypeEnum>;
  taxonomy?: Maybe<TaxonomyEnum>;
};


export type RootQueryTermsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<RootQueryToTermNodeConnectionWhereArgs>;
};


export type RootQueryThemeArgs = {
  id: Scalars['ID'];
};


export type RootQueryThemesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


export type RootQueryUserArgs = {
  id: Scalars['ID'];
  idType?: Maybe<UserNodeIdTypeEnum>;
};


export type RootQueryUserRoleArgs = {
  id: Scalars['ID'];
};


export type RootQueryUserRolesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


export type RootQueryUsersArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<RootQueryToUserConnectionWhereArgs>;
};


export type RootQueryVariableProductArgs = {
  id?: Maybe<Scalars['ID']>;
  idType?: Maybe<ProductIdTypeEnum>;
};


export type RootQueryVisibleProductArgs = {
  id: Scalars['ID'];
  idType?: Maybe<VisibleProductIdType>;
};


export type RootQueryVisibleProductsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<RootQueryToVisibleProductConnectionWhereArgs>;
};

export type RootQueryToCategoryConnection = {
  __typename?: 'RootQueryToCategoryConnection';
  edges?: Maybe<Array<Maybe<RootQueryToCategoryConnectionEdge>>>;
  nodes?: Maybe<Array<Maybe<Category>>>;
  pageInfo?: Maybe<WpPageInfo>;
};

export type RootQueryToCategoryConnectionEdge = {
  __typename?: 'RootQueryToCategoryConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<Category>;
};

export type RootQueryToCategoryConnectionWhereArgs = {
  cacheDomain?: Maybe<Scalars['String']>;
  childOf?: Maybe<Scalars['Int']>;
  childless?: Maybe<Scalars['Boolean']>;
  descriptionLike?: Maybe<Scalars['String']>;
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  hideEmpty?: Maybe<Scalars['Boolean']>;
  hierarchical?: Maybe<Scalars['Boolean']>;
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  nameLike?: Maybe<Scalars['String']>;
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  order?: Maybe<OrderEnum>;
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  padCounts?: Maybe<Scalars['Boolean']>;
  parent?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

export type RootQueryToCommentConnection = {
  __typename?: 'RootQueryToCommentConnection';
  edges?: Maybe<Array<Maybe<RootQueryToCommentConnectionEdge>>>;
  nodes?: Maybe<Array<Maybe<Comment>>>;
  pageInfo?: Maybe<WpPageInfo>;
};

export type RootQueryToCommentConnectionEdge = {
  __typename?: 'RootQueryToCommentConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<Comment>;
};

export type RootQueryToCommentConnectionWhereArgs = {
  authorEmail?: Maybe<Scalars['String']>;
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  authorUrl?: Maybe<Scalars['String']>;
  commentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  commentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  commentType?: Maybe<Scalars['String']>;
  commentTypeIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  commentTypeNotIn?: Maybe<Scalars['String']>;
  contentAuthor?: Maybe<Array<Maybe<Scalars['ID']>>>;
  contentAuthorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  contentAuthorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  contentId?: Maybe<Scalars['ID']>;
  contentIdIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  contentIdNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  contentName?: Maybe<Scalars['String']>;
  contentParent?: Maybe<Scalars['Int']>;
  contentStatus?: Maybe<Array<Maybe<PostStatusEnum>>>;
  contentType?: Maybe<Array<Maybe<ContentTypeEnum>>>;
  includeUnapproved?: Maybe<Array<Maybe<Scalars['ID']>>>;
  karma?: Maybe<Scalars['Int']>;
  order?: Maybe<OrderEnum>;
  orderby?: Maybe<CommentsConnectionOrderbyEnum>;
  parent?: Maybe<Scalars['Int']>;
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  search?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['ID']>;
};

export type RootQueryToConfigConnection = {
  __typename?: 'RootQueryToConfigConnection';
  edges?: Maybe<Array<Maybe<RootQueryToConfigConnectionEdge>>>;
  nodes?: Maybe<Array<Maybe<Config>>>;
  pageInfo?: Maybe<WpPageInfo>;
};

export type RootQueryToConfigConnectionEdge = {
  __typename?: 'RootQueryToConfigConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<Config>;
};

export type RootQueryToConfigConnectionWhereArgs = {
  dateQuery?: Maybe<DateQueryInput>;
  hasPassword?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  mimeType?: Maybe<MimeTypeEnum>;
  name?: Maybe<Scalars['String']>;
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  parent?: Maybe<Scalars['ID']>;
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  password?: Maybe<Scalars['String']>;
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  title?: Maybe<Scalars['String']>;
};

export type RootQueryToContentNodeConnection = {
  __typename?: 'RootQueryToContentNodeConnection';
  edges?: Maybe<Array<Maybe<RootQueryToContentNodeConnectionEdge>>>;
  nodes?: Maybe<Array<Maybe<ContentNode>>>;
  pageInfo?: Maybe<WpPageInfo>;
};

export type RootQueryToContentNodeConnectionEdge = {
  __typename?: 'RootQueryToContentNodeConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<ContentNode>;
};

export type RootQueryToContentNodeConnectionWhereArgs = {
  contentTypes?: Maybe<Array<Maybe<ContentTypeEnum>>>;
  dateQuery?: Maybe<DateQueryInput>;
  hasPassword?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  mimeType?: Maybe<MimeTypeEnum>;
  name?: Maybe<Scalars['String']>;
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  parent?: Maybe<Scalars['ID']>;
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  password?: Maybe<Scalars['String']>;
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  title?: Maybe<Scalars['String']>;
};

export type RootQueryToContentRevisionUnionConnection = {
  __typename?: 'RootQueryToContentRevisionUnionConnection';
  edges?: Maybe<Array<Maybe<RootQueryToContentRevisionUnionConnectionEdge>>>;
  nodes?: Maybe<Array<Maybe<ContentRevisionUnion>>>;
  pageInfo?: Maybe<WpPageInfo>;
};

export type RootQueryToContentRevisionUnionConnectionEdge = {
  __typename?: 'RootQueryToContentRevisionUnionConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<ContentRevisionUnion>;
};

export type RootQueryToContentRevisionUnionConnectionWhereArgs = {
  contentTypes?: Maybe<Array<Maybe<ContentTypeEnum>>>;
  dateQuery?: Maybe<DateQueryInput>;
  hasPassword?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  mimeType?: Maybe<MimeTypeEnum>;
  name?: Maybe<Scalars['String']>;
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  parent?: Maybe<Scalars['ID']>;
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  password?: Maybe<Scalars['String']>;
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  title?: Maybe<Scalars['String']>;
};

export type RootQueryToContentTypeConnection = {
  __typename?: 'RootQueryToContentTypeConnection';
  edges?: Maybe<Array<Maybe<RootQueryToContentTypeConnectionEdge>>>;
  nodes?: Maybe<Array<Maybe<ContentType>>>;
  pageInfo?: Maybe<WpPageInfo>;
};

export type RootQueryToContentTypeConnectionEdge = {
  __typename?: 'RootQueryToContentTypeConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<ContentType>;
};

export type RootQueryToCouponConnection = {
  __typename?: 'RootQueryToCouponConnection';
  edges?: Maybe<Array<Maybe<RootQueryToCouponConnectionEdge>>>;
  nodes?: Maybe<Array<Maybe<Coupon>>>;
  pageInfo?: Maybe<WpPageInfo>;
};

export type RootQueryToCouponConnectionEdge = {
  __typename?: 'RootQueryToCouponConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<Coupon>;
};

export type RootQueryToCouponConnectionWhereArgs = {
  code?: Maybe<Scalars['String']>;
  dateQuery?: Maybe<DateQueryInput>;
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>;
  include?: Maybe<Array<Maybe<Scalars['Int']>>>;
  orderby?: Maybe<Array<Maybe<PostTypeOrderbyInput>>>;
  parent?: Maybe<Scalars['Int']>;
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  search?: Maybe<Scalars['String']>;
};

export type RootQueryToCustomerConnection = {
  __typename?: 'RootQueryToCustomerConnection';
  edges?: Maybe<Array<Maybe<RootQueryToCustomerConnectionEdge>>>;
  nodes?: Maybe<Array<Maybe<Customer>>>;
  pageInfo?: Maybe<WpPageInfo>;
};

export type RootQueryToCustomerConnectionEdge = {
  __typename?: 'RootQueryToCustomerConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<Customer>;
};

export type RootQueryToCustomerConnectionWhereArgs = {
  email?: Maybe<Scalars['String']>;
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>;
  include?: Maybe<Array<Maybe<Scalars['Int']>>>;
  order?: Maybe<OrderEnum>;
  orderby?: Maybe<CustomerConnectionOrderbyEnum>;
  search?: Maybe<Scalars['String']>;
};

export type RootQueryToEnqueuedScriptConnection = {
  __typename?: 'RootQueryToEnqueuedScriptConnection';
  edges?: Maybe<Array<Maybe<RootQueryToEnqueuedScriptConnectionEdge>>>;
  nodes?: Maybe<Array<Maybe<EnqueuedScript>>>;
  pageInfo?: Maybe<WpPageInfo>;
};

export type RootQueryToEnqueuedScriptConnectionEdge = {
  __typename?: 'RootQueryToEnqueuedScriptConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<EnqueuedScript>;
};

export type RootQueryToEnqueuedStylesheetConnection = {
  __typename?: 'RootQueryToEnqueuedStylesheetConnection';
  edges?: Maybe<Array<Maybe<RootQueryToEnqueuedStylesheetConnectionEdge>>>;
  nodes?: Maybe<Array<Maybe<EnqueuedStylesheet>>>;
  pageInfo?: Maybe<WpPageInfo>;
};

export type RootQueryToEnqueuedStylesheetConnectionEdge = {
  __typename?: 'RootQueryToEnqueuedStylesheetConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<EnqueuedStylesheet>;
};

export type RootQueryToGenderConnection = {
  __typename?: 'RootQueryToGenderConnection';
  edges?: Maybe<Array<Maybe<RootQueryToGenderConnectionEdge>>>;
  nodes?: Maybe<Array<Maybe<Gender>>>;
  pageInfo?: Maybe<WpPageInfo>;
};

export type RootQueryToGenderConnectionEdge = {
  __typename?: 'RootQueryToGenderConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<Gender>;
};

export type RootQueryToGenderConnectionWhereArgs = {
  cacheDomain?: Maybe<Scalars['String']>;
  childOf?: Maybe<Scalars['Int']>;
  childless?: Maybe<Scalars['Boolean']>;
  descriptionLike?: Maybe<Scalars['String']>;
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  hideEmpty?: Maybe<Scalars['Boolean']>;
  hierarchical?: Maybe<Scalars['Boolean']>;
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  nameLike?: Maybe<Scalars['String']>;
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  order?: Maybe<OrderEnum>;
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  padCounts?: Maybe<Scalars['Boolean']>;
  parent?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

export type RootQueryToMediaItemConnection = {
  __typename?: 'RootQueryToMediaItemConnection';
  edges?: Maybe<Array<Maybe<RootQueryToMediaItemConnectionEdge>>>;
  nodes?: Maybe<Array<Maybe<MediaItem>>>;
  pageInfo?: Maybe<WpPageInfo>;
};

export type RootQueryToMediaItemConnectionEdge = {
  __typename?: 'RootQueryToMediaItemConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<MediaItem>;
};

export type RootQueryToMediaItemConnectionWhereArgs = {
  author?: Maybe<Scalars['Int']>;
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  authorName?: Maybe<Scalars['String']>;
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  dateQuery?: Maybe<DateQueryInput>;
  hasPassword?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  mimeType?: Maybe<MimeTypeEnum>;
  name?: Maybe<Scalars['String']>;
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  parent?: Maybe<Scalars['ID']>;
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  password?: Maybe<Scalars['String']>;
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  title?: Maybe<Scalars['String']>;
};

export type RootQueryToMenuConnection = {
  __typename?: 'RootQueryToMenuConnection';
  edges?: Maybe<Array<Maybe<RootQueryToMenuConnectionEdge>>>;
  nodes?: Maybe<Array<Maybe<Menu>>>;
  pageInfo?: Maybe<WpPageInfo>;
};

export type RootQueryToMenuConnectionEdge = {
  __typename?: 'RootQueryToMenuConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<Menu>;
};

export type RootQueryToMenuConnectionWhereArgs = {
  id?: Maybe<Scalars['Int']>;
  location?: Maybe<MenuLocationEnum>;
  slug?: Maybe<Scalars['String']>;
};

export type RootQueryToMenuItemConnection = {
  __typename?: 'RootQueryToMenuItemConnection';
  edges?: Maybe<Array<Maybe<RootQueryToMenuItemConnectionEdge>>>;
  nodes?: Maybe<Array<Maybe<MenuItem>>>;
  pageInfo?: Maybe<WpPageInfo>;
};

export type RootQueryToMenuItemConnectionEdge = {
  __typename?: 'RootQueryToMenuItemConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<MenuItem>;
};

export type RootQueryToMenuItemConnectionWhereArgs = {
  id?: Maybe<Scalars['Int']>;
  location?: Maybe<MenuLocationEnum>;
  parentDatabaseId?: Maybe<Scalars['Int']>;
  parentId?: Maybe<Scalars['ID']>;
};

export type RootQueryToOrderConnection = {
  __typename?: 'RootQueryToOrderConnection';
  edges?: Maybe<Array<Maybe<RootQueryToOrderConnectionEdge>>>;
  nodes?: Maybe<Array<Maybe<Order>>>;
  pageInfo?: Maybe<WpPageInfo>;
};

export type RootQueryToOrderConnectionEdge = {
  __typename?: 'RootQueryToOrderConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<Order>;
};

export type RootQueryToOrderConnectionWhereArgs = {
  customerId?: Maybe<Scalars['Int']>;
  customersIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  dateQuery?: Maybe<DateQueryInput>;
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>;
  include?: Maybe<Array<Maybe<Scalars['Int']>>>;
  orderby?: Maybe<Array<Maybe<OrdersOrderbyInput>>>;
  parent?: Maybe<Scalars['Int']>;
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  productId?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
  statuses?: Maybe<Array<Maybe<OrderStatusEnum>>>;
};

export type RootQueryToPaColorConnection = {
  __typename?: 'RootQueryToPaColorConnection';
  edges?: Maybe<Array<Maybe<RootQueryToPaColorConnectionEdge>>>;
  nodes?: Maybe<Array<Maybe<PaColor>>>;
  pageInfo?: Maybe<WpPageInfo>;
};

export type RootQueryToPaColorConnectionEdge = {
  __typename?: 'RootQueryToPaColorConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<PaColor>;
};

export type RootQueryToPaColorConnectionWhereArgs = {
  cacheDomain?: Maybe<Scalars['String']>;
  childOf?: Maybe<Scalars['Int']>;
  childless?: Maybe<Scalars['Boolean']>;
  descriptionLike?: Maybe<Scalars['String']>;
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  hideEmpty?: Maybe<Scalars['Boolean']>;
  hierarchical?: Maybe<Scalars['Boolean']>;
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  nameLike?: Maybe<Scalars['String']>;
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  order?: Maybe<OrderEnum>;
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  padCounts?: Maybe<Scalars['Boolean']>;
  parent?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

export type RootQueryToPaSizeConnection = {
  __typename?: 'RootQueryToPaSizeConnection';
  edges?: Maybe<Array<Maybe<RootQueryToPaSizeConnectionEdge>>>;
  nodes?: Maybe<Array<Maybe<PaSize>>>;
  pageInfo?: Maybe<WpPageInfo>;
};

export type RootQueryToPaSizeConnectionEdge = {
  __typename?: 'RootQueryToPaSizeConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<PaSize>;
};

export type RootQueryToPaSizeConnectionWhereArgs = {
  cacheDomain?: Maybe<Scalars['String']>;
  childOf?: Maybe<Scalars['Int']>;
  childless?: Maybe<Scalars['Boolean']>;
  descriptionLike?: Maybe<Scalars['String']>;
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  hideEmpty?: Maybe<Scalars['Boolean']>;
  hierarchical?: Maybe<Scalars['Boolean']>;
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  nameLike?: Maybe<Scalars['String']>;
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  order?: Maybe<OrderEnum>;
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  padCounts?: Maybe<Scalars['Boolean']>;
  parent?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

export type RootQueryToPageConnection = {
  __typename?: 'RootQueryToPageConnection';
  edges?: Maybe<Array<Maybe<RootQueryToPageConnectionEdge>>>;
  nodes?: Maybe<Array<Maybe<Page>>>;
  pageInfo?: Maybe<WpPageInfo>;
};

export type RootQueryToPageConnectionEdge = {
  __typename?: 'RootQueryToPageConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<Page>;
};

export type RootQueryToPageConnectionWhereArgs = {
  author?: Maybe<Scalars['Int']>;
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  authorName?: Maybe<Scalars['String']>;
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  dateQuery?: Maybe<DateQueryInput>;
  hasPassword?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  mimeType?: Maybe<MimeTypeEnum>;
  name?: Maybe<Scalars['String']>;
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  parent?: Maybe<Scalars['ID']>;
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  password?: Maybe<Scalars['String']>;
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  title?: Maybe<Scalars['String']>;
};

export type RootQueryToPaymentGatewayConnection = {
  __typename?: 'RootQueryToPaymentGatewayConnection';
  edges?: Maybe<Array<Maybe<RootQueryToPaymentGatewayConnectionEdge>>>;
  nodes?: Maybe<Array<Maybe<PaymentGateway>>>;
  pageInfo?: Maybe<WpPageInfo>;
};

export type RootQueryToPaymentGatewayConnectionEdge = {
  __typename?: 'RootQueryToPaymentGatewayConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<PaymentGateway>;
};

export type RootQueryToPaymentGatewayConnectionWhereArgs = {
  all?: Maybe<Scalars['Boolean']>;
};

export type RootQueryToPluginConnection = {
  __typename?: 'RootQueryToPluginConnection';
  edges?: Maybe<Array<Maybe<RootQueryToPluginConnectionEdge>>>;
  nodes?: Maybe<Array<Maybe<Plugin>>>;
  pageInfo?: Maybe<WpPageInfo>;
};

export type RootQueryToPluginConnectionEdge = {
  __typename?: 'RootQueryToPluginConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<Plugin>;
};

export type RootQueryToPostConnection = {
  __typename?: 'RootQueryToPostConnection';
  edges?: Maybe<Array<Maybe<RootQueryToPostConnectionEdge>>>;
  nodes?: Maybe<Array<Maybe<Post>>>;
  pageInfo?: Maybe<WpPageInfo>;
};

export type RootQueryToPostConnectionEdge = {
  __typename?: 'RootQueryToPostConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<Post>;
};

export type RootQueryToPostConnectionWhereArgs = {
  author?: Maybe<Scalars['Int']>;
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  authorName?: Maybe<Scalars['String']>;
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  categoryId?: Maybe<Scalars['Int']>;
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  categoryName?: Maybe<Scalars['String']>;
  categoryNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  dateQuery?: Maybe<DateQueryInput>;
  hasPassword?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  mimeType?: Maybe<MimeTypeEnum>;
  name?: Maybe<Scalars['String']>;
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  parent?: Maybe<Scalars['ID']>;
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  password?: Maybe<Scalars['String']>;
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  tag?: Maybe<Scalars['String']>;
  tagId?: Maybe<Scalars['String']>;
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  tagNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>;
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  title?: Maybe<Scalars['String']>;
};

export type RootQueryToPostFormatConnection = {
  __typename?: 'RootQueryToPostFormatConnection';
  edges?: Maybe<Array<Maybe<RootQueryToPostFormatConnectionEdge>>>;
  nodes?: Maybe<Array<Maybe<PostFormat>>>;
  pageInfo?: Maybe<WpPageInfo>;
};

export type RootQueryToPostFormatConnectionEdge = {
  __typename?: 'RootQueryToPostFormatConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<PostFormat>;
};

export type RootQueryToPostFormatConnectionWhereArgs = {
  cacheDomain?: Maybe<Scalars['String']>;
  childOf?: Maybe<Scalars['Int']>;
  childless?: Maybe<Scalars['Boolean']>;
  descriptionLike?: Maybe<Scalars['String']>;
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  hideEmpty?: Maybe<Scalars['Boolean']>;
  hierarchical?: Maybe<Scalars['Boolean']>;
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  nameLike?: Maybe<Scalars['String']>;
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  order?: Maybe<OrderEnum>;
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  padCounts?: Maybe<Scalars['Boolean']>;
  parent?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

export type RootQueryToProductCategoryConnection = {
  __typename?: 'RootQueryToProductCategoryConnection';
  edges?: Maybe<Array<Maybe<RootQueryToProductCategoryConnectionEdge>>>;
  nodes?: Maybe<Array<Maybe<ProductCategory>>>;
  pageInfo?: Maybe<WpPageInfo>;
};

export type RootQueryToProductCategoryConnectionEdge = {
  __typename?: 'RootQueryToProductCategoryConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<ProductCategory>;
};

export type RootQueryToProductCategoryConnectionWhereArgs = {
  cacheDomain?: Maybe<Scalars['String']>;
  childOf?: Maybe<Scalars['Int']>;
  childless?: Maybe<Scalars['Boolean']>;
  descriptionLike?: Maybe<Scalars['String']>;
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  hideEmpty?: Maybe<Scalars['Boolean']>;
  hierarchical?: Maybe<Scalars['Boolean']>;
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  nameLike?: Maybe<Scalars['String']>;
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  order?: Maybe<OrderEnum>;
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  padCounts?: Maybe<Scalars['Boolean']>;
  parent?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

export type RootQueryToProductConnection = {
  __typename?: 'RootQueryToProductConnection';
  edges?: Maybe<Array<Maybe<RootQueryToProductConnectionEdge>>>;
  nodes?: Maybe<Array<Maybe<Product>>>;
  pageInfo?: Maybe<WpPageInfo>;
};

export type RootQueryToProductConnectionEdge = {
  __typename?: 'RootQueryToProductConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<Product>;
};

export type RootQueryToProductConnectionWhereArgs = {
  attribute?: Maybe<Scalars['String']>;
  attributeTerm?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  categoryId?: Maybe<Scalars['Int']>;
  categoryIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  categoryIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  categoryIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  categoryNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  dateQuery?: Maybe<DateQueryInput>;
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>;
  featured?: Maybe<Scalars['Boolean']>;
  include?: Maybe<Array<Maybe<Scalars['Int']>>>;
  maxPrice?: Maybe<Scalars['Float']>;
  minPrice?: Maybe<Scalars['Float']>;
  onSale?: Maybe<Scalars['Boolean']>;
  orderby?: Maybe<Array<Maybe<ProductsOrderbyInput>>>;
  parent?: Maybe<Scalars['Int']>;
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  search?: Maybe<Scalars['String']>;
  shippingClassId?: Maybe<Scalars['Int']>;
  sku?: Maybe<Scalars['String']>;
  slugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  status?: Maybe<Scalars['String']>;
  stockStatus?: Maybe<Array<Maybe<StockStatusEnum>>>;
  supportedTypesOnly?: Maybe<Scalars['Boolean']>;
  tag?: Maybe<Scalars['String']>;
  tagId?: Maybe<Scalars['Int']>;
  tagIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  tagIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  tagIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  tagNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  taxonomyFilter?: Maybe<ProductTaxonomyInput>;
  type?: Maybe<ProductTypesEnum>;
  typeIn?: Maybe<Array<Maybe<ProductTypesEnum>>>;
  typeNotIn?: Maybe<Array<Maybe<ProductTypesEnum>>>;
  visibility?: Maybe<CatalogVisibilityEnum>;
};

export type RootQueryToProductTagConnection = {
  __typename?: 'RootQueryToProductTagConnection';
  edges?: Maybe<Array<Maybe<RootQueryToProductTagConnectionEdge>>>;
  nodes?: Maybe<Array<Maybe<ProductTag>>>;
  pageInfo?: Maybe<WpPageInfo>;
};

export type RootQueryToProductTagConnectionEdge = {
  __typename?: 'RootQueryToProductTagConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<ProductTag>;
};

export type RootQueryToProductTagConnectionWhereArgs = {
  cacheDomain?: Maybe<Scalars['String']>;
  childOf?: Maybe<Scalars['Int']>;
  childless?: Maybe<Scalars['Boolean']>;
  descriptionLike?: Maybe<Scalars['String']>;
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  hideEmpty?: Maybe<Scalars['Boolean']>;
  hierarchical?: Maybe<Scalars['Boolean']>;
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  nameLike?: Maybe<Scalars['String']>;
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  order?: Maybe<OrderEnum>;
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  padCounts?: Maybe<Scalars['Boolean']>;
  parent?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

export type RootQueryToProductTypeConnection = {
  __typename?: 'RootQueryToProductTypeConnection';
  edges?: Maybe<Array<Maybe<RootQueryToProductTypeConnectionEdge>>>;
  nodes?: Maybe<Array<Maybe<ProductType>>>;
  pageInfo?: Maybe<WpPageInfo>;
};

export type RootQueryToProductTypeConnectionEdge = {
  __typename?: 'RootQueryToProductTypeConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<ProductType>;
};

export type RootQueryToProductTypeConnectionWhereArgs = {
  cacheDomain?: Maybe<Scalars['String']>;
  childOf?: Maybe<Scalars['Int']>;
  childless?: Maybe<Scalars['Boolean']>;
  descriptionLike?: Maybe<Scalars['String']>;
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  hideEmpty?: Maybe<Scalars['Boolean']>;
  hierarchical?: Maybe<Scalars['Boolean']>;
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  nameLike?: Maybe<Scalars['String']>;
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  order?: Maybe<OrderEnum>;
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  padCounts?: Maybe<Scalars['Boolean']>;
  parent?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

export type RootQueryToRealProjectConnection = {
  __typename?: 'RootQueryToRealProjectConnection';
  edges?: Maybe<Array<Maybe<RootQueryToRealProjectConnectionEdge>>>;
  nodes?: Maybe<Array<Maybe<RealProject>>>;
  pageInfo?: Maybe<WpPageInfo>;
};

export type RootQueryToRealProjectConnectionEdge = {
  __typename?: 'RootQueryToRealProjectConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<RealProject>;
};

export type RootQueryToRealProjectConnectionWhereArgs = {
  dateQuery?: Maybe<DateQueryInput>;
  hasPassword?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  mimeType?: Maybe<MimeTypeEnum>;
  name?: Maybe<Scalars['String']>;
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  parent?: Maybe<Scalars['ID']>;
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  password?: Maybe<Scalars['String']>;
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  title?: Maybe<Scalars['String']>;
};

export type RootQueryToRefundConnection = {
  __typename?: 'RootQueryToRefundConnection';
  edges?: Maybe<Array<Maybe<RootQueryToRefundConnectionEdge>>>;
  nodes?: Maybe<Array<Maybe<Refund>>>;
  pageInfo?: Maybe<WpPageInfo>;
};

export type RootQueryToRefundConnectionEdge = {
  __typename?: 'RootQueryToRefundConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<Refund>;
};

export type RootQueryToRefundConnectionWhereArgs = {
  dateQuery?: Maybe<DateQueryInput>;
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>;
  include?: Maybe<Array<Maybe<Scalars['Int']>>>;
  orderIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  orderby?: Maybe<Array<Maybe<PostTypeOrderbyInput>>>;
  parent?: Maybe<Scalars['Int']>;
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  search?: Maybe<Scalars['String']>;
  statuses?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type RootQueryToShippingClassConnection = {
  __typename?: 'RootQueryToShippingClassConnection';
  edges?: Maybe<Array<Maybe<RootQueryToShippingClassConnectionEdge>>>;
  nodes?: Maybe<Array<Maybe<ShippingClass>>>;
  pageInfo?: Maybe<WpPageInfo>;
};

export type RootQueryToShippingClassConnectionEdge = {
  __typename?: 'RootQueryToShippingClassConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<ShippingClass>;
};

export type RootQueryToShippingClassConnectionWhereArgs = {
  cacheDomain?: Maybe<Scalars['String']>;
  childOf?: Maybe<Scalars['Int']>;
  childless?: Maybe<Scalars['Boolean']>;
  descriptionLike?: Maybe<Scalars['String']>;
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  hideEmpty?: Maybe<Scalars['Boolean']>;
  hierarchical?: Maybe<Scalars['Boolean']>;
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  nameLike?: Maybe<Scalars['String']>;
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  order?: Maybe<OrderEnum>;
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  padCounts?: Maybe<Scalars['Boolean']>;
  parent?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

export type RootQueryToShippingMethodConnection = {
  __typename?: 'RootQueryToShippingMethodConnection';
  edges?: Maybe<Array<Maybe<RootQueryToShippingMethodConnectionEdge>>>;
  nodes?: Maybe<Array<Maybe<ShippingMethod>>>;
  pageInfo?: Maybe<WpPageInfo>;
};

export type RootQueryToShippingMethodConnectionEdge = {
  __typename?: 'RootQueryToShippingMethodConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<ShippingMethod>;
};

export type RootQueryToTagConnection = {
  __typename?: 'RootQueryToTagConnection';
  edges?: Maybe<Array<Maybe<RootQueryToTagConnectionEdge>>>;
  nodes?: Maybe<Array<Maybe<Tag>>>;
  pageInfo?: Maybe<WpPageInfo>;
};

export type RootQueryToTagConnectionEdge = {
  __typename?: 'RootQueryToTagConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<Tag>;
};

export type RootQueryToTagConnectionWhereArgs = {
  cacheDomain?: Maybe<Scalars['String']>;
  childOf?: Maybe<Scalars['Int']>;
  childless?: Maybe<Scalars['Boolean']>;
  descriptionLike?: Maybe<Scalars['String']>;
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  hideEmpty?: Maybe<Scalars['Boolean']>;
  hierarchical?: Maybe<Scalars['Boolean']>;
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  nameLike?: Maybe<Scalars['String']>;
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  order?: Maybe<OrderEnum>;
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  padCounts?: Maybe<Scalars['Boolean']>;
  parent?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

export type RootQueryToTaxRateConnection = {
  __typename?: 'RootQueryToTaxRateConnection';
  edges?: Maybe<Array<Maybe<RootQueryToTaxRateConnectionEdge>>>;
  nodes?: Maybe<Array<Maybe<TaxRate>>>;
  pageInfo?: Maybe<WpPageInfo>;
};

export type RootQueryToTaxRateConnectionEdge = {
  __typename?: 'RootQueryToTaxRateConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<TaxRate>;
};

export type RootQueryToTaxRateConnectionWhereArgs = {
  class?: Maybe<TaxClassEnum>;
  orderby?: Maybe<Array<Maybe<TaxRateConnectionOrderbyInput>>>;
  postCode?: Maybe<Scalars['String']>;
  postCodeIn?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type RootQueryToTaxonomyConnection = {
  __typename?: 'RootQueryToTaxonomyConnection';
  edges?: Maybe<Array<Maybe<RootQueryToTaxonomyConnectionEdge>>>;
  nodes?: Maybe<Array<Maybe<Taxonomy>>>;
  pageInfo?: Maybe<WpPageInfo>;
};

export type RootQueryToTaxonomyConnectionEdge = {
  __typename?: 'RootQueryToTaxonomyConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<Taxonomy>;
};

export type RootQueryToTermNodeConnection = {
  __typename?: 'RootQueryToTermNodeConnection';
  edges?: Maybe<Array<Maybe<RootQueryToTermNodeConnectionEdge>>>;
  nodes?: Maybe<Array<Maybe<TermNode>>>;
  pageInfo?: Maybe<WpPageInfo>;
};

export type RootQueryToTermNodeConnectionEdge = {
  __typename?: 'RootQueryToTermNodeConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<TermNode>;
};

export type RootQueryToTermNodeConnectionWhereArgs = {
  cacheDomain?: Maybe<Scalars['String']>;
  childOf?: Maybe<Scalars['Int']>;
  childless?: Maybe<Scalars['Boolean']>;
  descriptionLike?: Maybe<Scalars['String']>;
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  hideEmpty?: Maybe<Scalars['Boolean']>;
  hierarchical?: Maybe<Scalars['Boolean']>;
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  nameLike?: Maybe<Scalars['String']>;
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  order?: Maybe<OrderEnum>;
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  padCounts?: Maybe<Scalars['Boolean']>;
  parent?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>;
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

export type RootQueryToThemeConnection = {
  __typename?: 'RootQueryToThemeConnection';
  edges?: Maybe<Array<Maybe<RootQueryToThemeConnectionEdge>>>;
  nodes?: Maybe<Array<Maybe<Theme>>>;
  pageInfo?: Maybe<WpPageInfo>;
};

export type RootQueryToThemeConnectionEdge = {
  __typename?: 'RootQueryToThemeConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<Theme>;
};

export type RootQueryToUserConnection = {
  __typename?: 'RootQueryToUserConnection';
  edges?: Maybe<Array<Maybe<RootQueryToUserConnectionEdge>>>;
  nodes?: Maybe<Array<Maybe<User>>>;
  pageInfo?: Maybe<WpPageInfo>;
};

export type RootQueryToUserConnectionEdge = {
  __typename?: 'RootQueryToUserConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<User>;
};

export type RootQueryToUserConnectionWhereArgs = {
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>;
  hasPublishedPosts?: Maybe<Array<Maybe<ContentTypeEnum>>>;
  include?: Maybe<Array<Maybe<Scalars['Int']>>>;
  login?: Maybe<Scalars['String']>;
  loginIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  loginNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  nicename?: Maybe<Scalars['String']>;
  nicenameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  nicenameNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  orderby?: Maybe<Array<Maybe<UsersConnectionOrderbyInput>>>;
  role?: Maybe<UserRoleEnum>;
  roleIn?: Maybe<Array<Maybe<UserRoleEnum>>>;
  roleNotIn?: Maybe<Array<Maybe<UserRoleEnum>>>;
  search?: Maybe<Scalars['String']>;
  searchColumns?: Maybe<Array<Maybe<UsersConnectionSearchColumnEnum>>>;
};

export type RootQueryToUserRoleConnection = {
  __typename?: 'RootQueryToUserRoleConnection';
  edges?: Maybe<Array<Maybe<RootQueryToUserRoleConnectionEdge>>>;
  nodes?: Maybe<Array<Maybe<UserRole>>>;
  pageInfo?: Maybe<WpPageInfo>;
};

export type RootQueryToUserRoleConnectionEdge = {
  __typename?: 'RootQueryToUserRoleConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<UserRole>;
};

export type RootQueryToVisibleProductConnection = {
  __typename?: 'RootQueryToVisibleProductConnection';
  edges?: Maybe<Array<Maybe<RootQueryToVisibleProductConnectionEdge>>>;
  nodes?: Maybe<Array<Maybe<VisibleProduct>>>;
  pageInfo?: Maybe<WpPageInfo>;
};

export type RootQueryToVisibleProductConnectionEdge = {
  __typename?: 'RootQueryToVisibleProductConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<VisibleProduct>;
};

export type RootQueryToVisibleProductConnectionWhereArgs = {
  cacheDomain?: Maybe<Scalars['String']>;
  childOf?: Maybe<Scalars['Int']>;
  childless?: Maybe<Scalars['Boolean']>;
  descriptionLike?: Maybe<Scalars['String']>;
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>;
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>;
  hideEmpty?: Maybe<Scalars['Boolean']>;
  hierarchical?: Maybe<Scalars['Boolean']>;
  include?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Array<Maybe<Scalars['String']>>>;
  nameLike?: Maybe<Scalars['String']>;
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>;
  order?: Maybe<OrderEnum>;
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>;
  padCounts?: Maybe<Scalars['Boolean']>;
  parent?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
  slug?: Maybe<Array<Maybe<Scalars['String']>>>;
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>;
  updateTermMetaCache?: Maybe<Scalars['Boolean']>;
};

export type SeoBreadcrumbs = {
  __typename?: 'SEOBreadcrumbs';
  archivePrefix?: Maybe<Scalars['String']>;
  boldLast?: Maybe<Scalars['Boolean']>;
  enabled?: Maybe<Scalars['Boolean']>;
  homeText?: Maybe<Scalars['String']>;
  notFoundText?: Maybe<Scalars['String']>;
  prefix?: Maybe<Scalars['String']>;
  searchPrefix?: Maybe<Scalars['String']>;
  separator?: Maybe<Scalars['String']>;
  showBlogPage?: Maybe<Scalars['Boolean']>;
};

export enum SeoCardType {
  Summary = 'summary',
  SummaryLargeImage = 'summary_large_image'
}

export type SeoConfig = {
  __typename?: 'SEOConfig';
  breadcrumbs?: Maybe<SeoBreadcrumbs>;
  contentTypes?: Maybe<SeoContentTypes>;
  openGraph?: Maybe<SeoOpenGraph>;
  redirects?: Maybe<Array<Maybe<SeoRedirect>>>;
  schema?: Maybe<SeoSchema>;
  social?: Maybe<SeoSocial>;
  webmaster?: Maybe<SeoWebmaster>;
};

export type SeoContentType = {
  __typename?: 'SEOContentType';
  archive?: Maybe<SeoContentTypeArchive>;
  metaDesc?: Maybe<Scalars['String']>;
  metaRobotsNoindex?: Maybe<Scalars['Boolean']>;
  schema?: Maybe<SeoPageInfoSchema>;
  schemaType?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type SeoContentTypeArchive = {
  __typename?: 'SEOContentTypeArchive';
  archiveLink?: Maybe<Scalars['String']>;
  breadcrumbTitle?: Maybe<Scalars['String']>;
  fullHead?: Maybe<Scalars['String']>;
  hasArchive?: Maybe<Scalars['Boolean']>;
  metaDesc?: Maybe<Scalars['String']>;
  metaRobotsNoindex?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
};

export type SeoContentTypes = {
  __typename?: 'SEOContentTypes';
  config?: Maybe<SeoContentType>;
  mediaItem?: Maybe<SeoContentType>;
  page?: Maybe<SeoContentType>;
  post?: Maybe<SeoContentType>;
  product?: Maybe<SeoContentType>;
  realProject?: Maybe<SeoContentType>;
};

export type SeoOpenGraph = {
  __typename?: 'SEOOpenGraph';
  defaultImage?: Maybe<MediaItem>;
  frontPage?: Maybe<SeoOpenGraphFrontPage>;
};

export type SeoOpenGraphFrontPage = {
  __typename?: 'SEOOpenGraphFrontPage';
  description?: Maybe<Scalars['String']>;
  image?: Maybe<MediaItem>;
  title?: Maybe<Scalars['String']>;
};

export type SeoPageInfoSchema = {
  __typename?: 'SEOPageInfoSchema';
  raw?: Maybe<Scalars['String']>;
};

export type SeoPostTypeBreadcrumbs = {
  __typename?: 'SEOPostTypeBreadcrumbs';
  text?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type SeoPostTypePageInfo = {
  __typename?: 'SEOPostTypePageInfo';
  schema?: Maybe<SeoPageInfoSchema>;
};

export type SeoPostTypeSchema = {
  __typename?: 'SEOPostTypeSchema';
  articleType?: Maybe<Array<Maybe<Scalars['String']>>>;
  pageType?: Maybe<Array<Maybe<Scalars['String']>>>;
  raw?: Maybe<Scalars['String']>;
};

export type SeoRedirect = {
  __typename?: 'SEORedirect';
  format?: Maybe<Scalars['String']>;
  origin?: Maybe<Scalars['String']>;
  target?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['Int']>;
};

export type SeoSchema = {
  __typename?: 'SEOSchema';
  companyLogo?: Maybe<MediaItem>;
  companyName?: Maybe<Scalars['String']>;
  companyOrPerson?: Maybe<Scalars['String']>;
  inLanguage?: Maybe<Scalars['String']>;
  logo?: Maybe<MediaItem>;
  personLogo?: Maybe<MediaItem>;
  personName?: Maybe<Scalars['String']>;
  siteName?: Maybe<Scalars['String']>;
  siteUrl?: Maybe<Scalars['String']>;
  wordpressSiteName?: Maybe<Scalars['String']>;
};

export type SeoSocial = {
  __typename?: 'SEOSocial';
  facebook?: Maybe<SeoSocialFacebook>;
  instagram?: Maybe<SeoSocialInstagram>;
  linkedIn?: Maybe<SeoSocialLinkedIn>;
  mySpace?: Maybe<SeoSocialMySpace>;
  pinterest?: Maybe<SeoSocialPinterest>;
  twitter?: Maybe<SeoSocialTwitter>;
  wikipedia?: Maybe<SeoSocialWikipedia>;
  youTube?: Maybe<SeoSocialYoutube>;
};

export type SeoSocialFacebook = {
  __typename?: 'SEOSocialFacebook';
  defaultImage?: Maybe<MediaItem>;
  url?: Maybe<Scalars['String']>;
};

export type SeoSocialInstagram = {
  __typename?: 'SEOSocialInstagram';
  url?: Maybe<Scalars['String']>;
};

export type SeoSocialLinkedIn = {
  __typename?: 'SEOSocialLinkedIn';
  url?: Maybe<Scalars['String']>;
};

export type SeoSocialMySpace = {
  __typename?: 'SEOSocialMySpace';
  url?: Maybe<Scalars['String']>;
};

export type SeoSocialPinterest = {
  __typename?: 'SEOSocialPinterest';
  metaTag?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type SeoSocialTwitter = {
  __typename?: 'SEOSocialTwitter';
  cardType?: Maybe<SeoCardType>;
  username?: Maybe<Scalars['String']>;
};

export type SeoSocialWikipedia = {
  __typename?: 'SEOSocialWikipedia';
  url?: Maybe<Scalars['String']>;
};

export type SeoSocialYoutube = {
  __typename?: 'SEOSocialYoutube';
  url?: Maybe<Scalars['String']>;
};

export type SeoTaxonomySchema = {
  __typename?: 'SEOTaxonomySchema';
  raw?: Maybe<Scalars['String']>;
};

export type SeoUser = {
  __typename?: 'SEOUser';
  fullHead?: Maybe<Scalars['String']>;
  metaDesc?: Maybe<Scalars['String']>;
  metaRobotsNofollow?: Maybe<Scalars['String']>;
  metaRobotsNoindex?: Maybe<Scalars['String']>;
  schema?: Maybe<SeoUserSchema>;
  social?: Maybe<SeoUserSocial>;
  title?: Maybe<Scalars['String']>;
};

export type SeoUserSchema = {
  __typename?: 'SEOUserSchema';
  raw?: Maybe<Scalars['String']>;
};

export type SeoUserSocial = {
  __typename?: 'SEOUserSocial';
  facebook?: Maybe<Scalars['String']>;
  instagram?: Maybe<Scalars['String']>;
  linkedIn?: Maybe<Scalars['String']>;
  mySpace?: Maybe<Scalars['String']>;
  pinterest?: Maybe<Scalars['String']>;
  soundCloud?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  wikipedia?: Maybe<Scalars['String']>;
  youTube?: Maybe<Scalars['String']>;
};

export type SeoWebmaster = {
  __typename?: 'SEOWebmaster';
  baiduVerify?: Maybe<Scalars['String']>;
  googleVerify?: Maybe<Scalars['String']>;
  msVerify?: Maybe<Scalars['String']>;
  yandexVerify?: Maybe<Scalars['String']>;
};

export type SendPasswordResetEmailInput = {
  clientMutationId?: Maybe<Scalars['String']>;
  username: Scalars['String'];
};

export type SendPasswordResetEmailPayload = {
  __typename?: 'SendPasswordResetEmailPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export type Settings = {
  __typename?: 'Settings';
  discussionSettingsDefaultCommentStatus?: Maybe<Scalars['String']>;
  discussionSettingsDefaultPingStatus?: Maybe<Scalars['String']>;
  generalSettingsDateFormat?: Maybe<Scalars['String']>;
  generalSettingsDescription?: Maybe<Scalars['String']>;
  generalSettingsEmail?: Maybe<Scalars['String']>;
  generalSettingsLanguage?: Maybe<Scalars['String']>;
  generalSettingsStartOfWeek?: Maybe<Scalars['Int']>;
  generalSettingsTimeFormat?: Maybe<Scalars['String']>;
  generalSettingsTimezone?: Maybe<Scalars['String']>;
  generalSettingsTitle?: Maybe<Scalars['String']>;
  generalSettingsUrl?: Maybe<Scalars['String']>;
  readingSettingsPostsPerPage?: Maybe<Scalars['Int']>;
  writingSettingsDefaultCategory?: Maybe<Scalars['Int']>;
  writingSettingsDefaultPostFormat?: Maybe<Scalars['String']>;
  writingSettingsUseSmilies?: Maybe<Scalars['Boolean']>;
};

export type ShippingClass = Node & TermNode & UniformResourceIdentifiable & DatabaseIdentifier & {
  __typename?: 'ShippingClass';
  contentNodes?: Maybe<ShippingClassToContentNodeConnection>;
  count?: Maybe<Scalars['Int']>;
  databaseId: Scalars['Int'];
  description?: Maybe<Scalars['String']>;
  enqueuedScripts?: Maybe<TermNodeToEnqueuedScriptConnection>;
  enqueuedStylesheets?: Maybe<TermNodeToEnqueuedStylesheetConnection>;
  id: Scalars['ID'];
  isContentNode: Scalars['Boolean'];
  isRestricted?: Maybe<Scalars['Boolean']>;
  isTermNode: Scalars['Boolean'];
  link?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  seo?: Maybe<TaxonomySeo>;
  /** @deprecated Deprecated in favor of databaseId */
  shippingClassId?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  taxonomy?: Maybe<ShippingClassToTaxonomyConnectionEdge>;
  termGroupId?: Maybe<Scalars['Int']>;
  termTaxonomyId?: Maybe<Scalars['Int']>;
  uri?: Maybe<Scalars['String']>;
};


export type ShippingClassContentNodesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ShippingClassToContentNodeConnectionWhereArgs>;
};


export type ShippingClassEnqueuedScriptsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


export type ShippingClassEnqueuedStylesheetsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};

export enum ShippingClassIdType {
  DatabaseId = 'DATABASE_ID',
  Id = 'ID',
  Name = 'NAME',
  Slug = 'SLUG',
  Uri = 'URI'
}

export type ShippingClassToContentNodeConnection = {
  __typename?: 'ShippingClassToContentNodeConnection';
  edges?: Maybe<Array<Maybe<ShippingClassToContentNodeConnectionEdge>>>;
  nodes?: Maybe<Array<Maybe<ContentNode>>>;
  pageInfo?: Maybe<WpPageInfo>;
};

export type ShippingClassToContentNodeConnectionEdge = {
  __typename?: 'ShippingClassToContentNodeConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<ContentNode>;
};

export type ShippingClassToContentNodeConnectionWhereArgs = {
  contentTypes?: Maybe<Array<Maybe<ContentTypesOfShippingClassEnum>>>;
  dateQuery?: Maybe<DateQueryInput>;
  hasPassword?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  mimeType?: Maybe<MimeTypeEnum>;
  name?: Maybe<Scalars['String']>;
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  parent?: Maybe<Scalars['ID']>;
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  password?: Maybe<Scalars['String']>;
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  title?: Maybe<Scalars['String']>;
};

export type ShippingClassToTaxonomyConnectionEdge = {
  __typename?: 'ShippingClassToTaxonomyConnectionEdge';
  node?: Maybe<Taxonomy>;
};

export type ShippingLine = {
  __typename?: 'ShippingLine';
  databaseId?: Maybe<Scalars['Int']>;
  metaData?: Maybe<Array<Maybe<MetaData>>>;
  methodTitle?: Maybe<Scalars['String']>;
  orderId?: Maybe<Scalars['Int']>;
  shippingMethod?: Maybe<ShippingMethod>;
  taxClass?: Maybe<TaxClassEnum>;
  taxes?: Maybe<Array<Maybe<OrderItemTax>>>;
  total?: Maybe<Scalars['String']>;
  totalTax?: Maybe<Scalars['String']>;
};


export type ShippingLineMetaDataArgs = {
  key?: Maybe<Scalars['String']>;
  keysIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  multiple?: Maybe<Scalars['Boolean']>;
};

export type ShippingLineInput = {
  id?: Maybe<Scalars['ID']>;
  instanceId?: Maybe<Scalars['String']>;
  metaData?: Maybe<Array<Maybe<MetaDataInput>>>;
  methodId: Scalars['String'];
  methodTitle: Scalars['String'];
  total: Scalars['String'];
};

export type ShippingMethod = Node & {
  __typename?: 'ShippingMethod';
  databaseId: Scalars['ID'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
};

export enum ShippingMethodIdTypeEnum {
  DatabaseId = 'DATABASE_ID',
  Id = 'ID'
}

export type ShippingPackage = {
  __typename?: 'ShippingPackage';
  packageDetails?: Maybe<Scalars['String']>;
  rates?: Maybe<Array<Maybe<ShippingRate>>>;
  supportsShippingCalculator?: Maybe<Scalars['Boolean']>;
};

export type ShippingRate = {
  __typename?: 'ShippingRate';
  cost?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  instanceId?: Maybe<Scalars['Int']>;
  label?: Maybe<Scalars['String']>;
  methodId: Scalars['ID'];
};

export type SimpleAttribute = Attribute & {
  __typename?: 'SimpleAttribute';
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type SimpleProduct = Node & Product & NodeWithComments & NodeWithContentEditor & NodeWithFeaturedImage & ContentNode & UniformResourceIdentifiable & DatabaseIdentifier & {
  __typename?: 'SimpleProduct';
  attributes?: Maybe<ProductToProductAttributeConnection>;
  averageRating?: Maybe<Scalars['Float']>;
  backorders?: Maybe<BackordersEnum>;
  backordersAllowed?: Maybe<Scalars['Boolean']>;
  catalogVisibility?: Maybe<CatalogVisibilityEnum>;
  commentCount?: Maybe<Scalars['Int']>;
  commentStatus?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  contentType?: Maybe<ContentNodeToContentTypeConnectionEdge>;
  crossSell?: Maybe<SimpleProductToProductConnection>;
  databaseId: Scalars['Int'];
  date?: Maybe<Scalars['String']>;
  dateGmt?: Maybe<Scalars['String']>;
  dateOnSaleFrom?: Maybe<Scalars['String']>;
  dateOnSaleTo?: Maybe<Scalars['String']>;
  defaultAttributes?: Maybe<SimpleProductToVariationAttributeConnection>;
  description?: Maybe<Scalars['String']>;
  desiredSlug?: Maybe<Scalars['String']>;
  downloadExpiry?: Maybe<Scalars['Int']>;
  downloadLimit?: Maybe<Scalars['Int']>;
  downloadable?: Maybe<Scalars['Boolean']>;
  downloads?: Maybe<Array<Maybe<ProductDownload>>>;
  editingLockedBy?: Maybe<ContentNodeToEditLockConnectionEdge>;
  enclosure?: Maybe<Scalars['String']>;
  enqueuedScripts?: Maybe<ContentNodeToEnqueuedScriptConnection>;
  enqueuedStylesheets?: Maybe<ContentNodeToEnqueuedStylesheetConnection>;
  featured?: Maybe<Scalars['Boolean']>;
  featuredImage?: Maybe<NodeWithFeaturedImageToMediaItemConnectionEdge>;
  featuredImageDatabaseId?: Maybe<Scalars['Int']>;
  featuredImageId?: Maybe<Scalars['ID']>;
  galleryImages?: Maybe<ProductToMediaItemConnection>;
  genders?: Maybe<ProductToGenderConnection>;
  globalAttributes?: Maybe<ProductToGlobalProductAttributeConnection>;
  guid?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image?: Maybe<MediaItem>;
  isContentNode: Scalars['Boolean'];
  isPreview?: Maybe<Scalars['Boolean']>;
  isRestricted?: Maybe<Scalars['Boolean']>;
  isTermNode: Scalars['Boolean'];
  lastEditedBy?: Maybe<ContentNodeToEditLastConnectionEdge>;
  length?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  localAttributes?: Maybe<ProductToLocalProductAttributeConnection>;
  manageStock?: Maybe<Scalars['Boolean']>;
  menuOrder?: Maybe<Scalars['Int']>;
  metaData?: Maybe<Array<Maybe<MetaData>>>;
  modified?: Maybe<Scalars['String']>;
  modifiedGmt?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  onSale?: Maybe<Scalars['Boolean']>;
  paColors?: Maybe<ProductToPaColorConnection>;
  paSizes?: Maybe<ProductToPaSizeConnection>;
  parent?: Maybe<Product>;
  previewRevisionDatabaseId?: Maybe<Scalars['Int']>;
  previewRevisionId?: Maybe<Scalars['ID']>;
  price?: Maybe<Scalars['String']>;
  productCategories?: Maybe<ProductToProductCategoryConnection>;
  productTags?: Maybe<ProductToProductTagConnection>;
  productTypes?: Maybe<ProductToProductTypeConnection>;
  purchasable?: Maybe<Scalars['Boolean']>;
  purchaseNote?: Maybe<Scalars['String']>;
  regularPrice?: Maybe<Scalars['String']>;
  related?: Maybe<ProductToProductConnection>;
  reviewCount?: Maybe<Scalars['Int']>;
  reviews?: Maybe<ProductToCommentConnection>;
  reviewsAllowed?: Maybe<Scalars['Boolean']>;
  salePrice?: Maybe<Scalars['String']>;
  seo?: Maybe<PostTypeSeo>;
  shippingClassId?: Maybe<Scalars['Int']>;
  shippingClasses?: Maybe<ProductToShippingClassConnection>;
  shippingRequired?: Maybe<Scalars['Boolean']>;
  shippingTaxable?: Maybe<Scalars['Boolean']>;
  shortDescription?: Maybe<Scalars['String']>;
  sku?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  soldIndividually?: Maybe<Scalars['Boolean']>;
  status?: Maybe<Scalars['String']>;
  stockQuantity?: Maybe<Scalars['Int']>;
  stockStatus?: Maybe<StockStatusEnum>;
  taxClass?: Maybe<TaxClassEnum>;
  taxStatus?: Maybe<TaxStatusEnum>;
  template?: Maybe<ContentTemplate>;
  totalSales?: Maybe<Scalars['Int']>;
  type?: Maybe<ProductTypesEnum>;
  upsell?: Maybe<ProductToUpsellConnection>;
  uri?: Maybe<Scalars['String']>;
  virtual?: Maybe<Scalars['Boolean']>;
  visibleProducts?: Maybe<ProductToVisibleProductConnection>;
  weight?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['String']>;
};


export type SimpleProductAttributesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToProductAttributeConnectionWhereArgs>;
};


export type SimpleProductContentArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>;
};


export type SimpleProductCrossSellArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<SimpleProductToProductConnectionWhereArgs>;
};


export type SimpleProductDefaultAttributesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


export type SimpleProductDescriptionArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>;
};


export type SimpleProductEnqueuedScriptsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


export type SimpleProductEnqueuedStylesheetsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


export type SimpleProductGalleryImagesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToMediaItemConnectionWhereArgs>;
};


export type SimpleProductGendersArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToGenderConnectionWhereArgs>;
};


export type SimpleProductGlobalAttributesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToGlobalProductAttributeConnectionWhereArgs>;
};


export type SimpleProductLocalAttributesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToLocalProductAttributeConnectionWhereArgs>;
};


export type SimpleProductMetaDataArgs = {
  key?: Maybe<Scalars['String']>;
  keysIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  multiple?: Maybe<Scalars['Boolean']>;
};


export type SimpleProductPaColorsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToPaColorConnectionWhereArgs>;
};


export type SimpleProductPaSizesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToPaSizeConnectionWhereArgs>;
};


export type SimpleProductPriceArgs = {
  format?: Maybe<PricingFieldFormatEnum>;
};


export type SimpleProductProductCategoriesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToProductCategoryConnectionWhereArgs>;
};


export type SimpleProductProductTagsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToProductTagConnectionWhereArgs>;
};


export type SimpleProductProductTypesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToProductTypeConnectionWhereArgs>;
};


export type SimpleProductRegularPriceArgs = {
  format?: Maybe<PricingFieldFormatEnum>;
};


export type SimpleProductRelatedArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToProductConnectionWhereArgs>;
};


export type SimpleProductReviewsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToCommentConnectionWhereArgs>;
};


export type SimpleProductSalePriceArgs = {
  format?: Maybe<PricingFieldFormatEnum>;
};


export type SimpleProductShippingClassesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToShippingClassConnectionWhereArgs>;
};


export type SimpleProductShortDescriptionArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>;
};


export type SimpleProductUpsellArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToUpsellConnectionWhereArgs>;
};


export type SimpleProductVisibleProductsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToVisibleProductConnectionWhereArgs>;
};

export type SimpleProductToProductConnection = {
  __typename?: 'SimpleProductToProductConnection';
  edges?: Maybe<Array<Maybe<SimpleProductToProductConnectionEdge>>>;
  nodes?: Maybe<Array<Maybe<Product>>>;
  pageInfo?: Maybe<WpPageInfo>;
};

export type SimpleProductToProductConnectionEdge = {
  __typename?: 'SimpleProductToProductConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<Product>;
};

export type SimpleProductToProductConnectionWhereArgs = {
  attribute?: Maybe<Scalars['String']>;
  attributeTerm?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  categoryId?: Maybe<Scalars['Int']>;
  categoryIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  categoryIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  categoryIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  categoryNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  dateQuery?: Maybe<DateQueryInput>;
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>;
  featured?: Maybe<Scalars['Boolean']>;
  include?: Maybe<Array<Maybe<Scalars['Int']>>>;
  maxPrice?: Maybe<Scalars['Float']>;
  minPrice?: Maybe<Scalars['Float']>;
  onSale?: Maybe<Scalars['Boolean']>;
  orderby?: Maybe<Array<Maybe<ProductsOrderbyInput>>>;
  parent?: Maybe<Scalars['Int']>;
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  search?: Maybe<Scalars['String']>;
  shippingClassId?: Maybe<Scalars['Int']>;
  sku?: Maybe<Scalars['String']>;
  slugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  status?: Maybe<Scalars['String']>;
  stockStatus?: Maybe<Array<Maybe<StockStatusEnum>>>;
  supportedTypesOnly?: Maybe<Scalars['Boolean']>;
  tag?: Maybe<Scalars['String']>;
  tagId?: Maybe<Scalars['Int']>;
  tagIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  tagIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  tagIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  tagNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  taxonomyFilter?: Maybe<ProductTaxonomyInput>;
  type?: Maybe<ProductTypesEnum>;
  typeIn?: Maybe<Array<Maybe<ProductTypesEnum>>>;
  typeNotIn?: Maybe<Array<Maybe<ProductTypesEnum>>>;
  visibility?: Maybe<CatalogVisibilityEnum>;
};

export type SimpleProductToVariationAttributeConnection = {
  __typename?: 'SimpleProductToVariationAttributeConnection';
  edges?: Maybe<Array<Maybe<SimpleProductToVariationAttributeConnectionEdge>>>;
  nodes?: Maybe<Array<Maybe<VariationAttribute>>>;
  pageInfo?: Maybe<WpPageInfo>;
};

export type SimpleProductToVariationAttributeConnectionEdge = {
  __typename?: 'SimpleProductToVariationAttributeConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<VariationAttribute>;
};

export enum StockStatusEnum {
  InStock = 'IN_STOCK',
  OnBackorder = 'ON_BACKORDER',
  OutOfStock = 'OUT_OF_STOCK'
}

export type Tag = Node & TermNode & UniformResourceIdentifiable & DatabaseIdentifier & MenuItemLinkable & {
  __typename?: 'Tag';
  contentNodes?: Maybe<TagToContentNodeConnection>;
  count?: Maybe<Scalars['Int']>;
  databaseId: Scalars['Int'];
  description?: Maybe<Scalars['String']>;
  enqueuedScripts?: Maybe<TermNodeToEnqueuedScriptConnection>;
  enqueuedStylesheets?: Maybe<TermNodeToEnqueuedStylesheetConnection>;
  id: Scalars['ID'];
  isContentNode: Scalars['Boolean'];
  isRestricted?: Maybe<Scalars['Boolean']>;
  isTermNode: Scalars['Boolean'];
  link?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  posts?: Maybe<TagToPostConnection>;
  seo?: Maybe<TaxonomySeo>;
  slug?: Maybe<Scalars['String']>;
  /** @deprecated Deprecated in favor of databaseId */
  tagId?: Maybe<Scalars['Int']>;
  taxonomy?: Maybe<TagToTaxonomyConnectionEdge>;
  termGroupId?: Maybe<Scalars['Int']>;
  termTaxonomyId?: Maybe<Scalars['Int']>;
  uri?: Maybe<Scalars['String']>;
};


export type TagContentNodesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<TagToContentNodeConnectionWhereArgs>;
};


export type TagEnqueuedScriptsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


export type TagEnqueuedStylesheetsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


export type TagPostsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<TagToPostConnectionWhereArgs>;
};

export enum TagIdType {
  DatabaseId = 'DATABASE_ID',
  Id = 'ID',
  Name = 'NAME',
  Slug = 'SLUG',
  Uri = 'URI'
}

export type TagToContentNodeConnection = {
  __typename?: 'TagToContentNodeConnection';
  edges?: Maybe<Array<Maybe<TagToContentNodeConnectionEdge>>>;
  nodes?: Maybe<Array<Maybe<ContentNode>>>;
  pageInfo?: Maybe<WpPageInfo>;
};

export type TagToContentNodeConnectionEdge = {
  __typename?: 'TagToContentNodeConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<ContentNode>;
};

export type TagToContentNodeConnectionWhereArgs = {
  contentTypes?: Maybe<Array<Maybe<ContentTypesOfTagEnum>>>;
  dateQuery?: Maybe<DateQueryInput>;
  hasPassword?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  mimeType?: Maybe<MimeTypeEnum>;
  name?: Maybe<Scalars['String']>;
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  parent?: Maybe<Scalars['ID']>;
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  password?: Maybe<Scalars['String']>;
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  title?: Maybe<Scalars['String']>;
};

export type TagToPostConnection = {
  __typename?: 'TagToPostConnection';
  edges?: Maybe<Array<Maybe<TagToPostConnectionEdge>>>;
  nodes?: Maybe<Array<Maybe<Post>>>;
  pageInfo?: Maybe<WpPageInfo>;
};

export type TagToPostConnectionEdge = {
  __typename?: 'TagToPostConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<Post>;
};

export type TagToPostConnectionWhereArgs = {
  author?: Maybe<Scalars['Int']>;
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  authorName?: Maybe<Scalars['String']>;
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  categoryId?: Maybe<Scalars['Int']>;
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  categoryName?: Maybe<Scalars['String']>;
  categoryNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  dateQuery?: Maybe<DateQueryInput>;
  hasPassword?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  mimeType?: Maybe<MimeTypeEnum>;
  name?: Maybe<Scalars['String']>;
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  parent?: Maybe<Scalars['ID']>;
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  password?: Maybe<Scalars['String']>;
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  tag?: Maybe<Scalars['String']>;
  tagId?: Maybe<Scalars['String']>;
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  tagNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>;
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  title?: Maybe<Scalars['String']>;
};

export type TagToTaxonomyConnectionEdge = {
  __typename?: 'TagToTaxonomyConnectionEdge';
  node?: Maybe<Taxonomy>;
};

export enum TaxClassEnum {
  InheritCart = 'INHERIT_CART',
  ReducedRate = 'REDUCED_RATE',
  Standard = 'STANDARD',
  ZeroRate = 'ZERO_RATE'
}

export type TaxLine = {
  __typename?: 'TaxLine';
  databaseId?: Maybe<Scalars['Int']>;
  isCompound?: Maybe<Scalars['Boolean']>;
  label?: Maybe<Scalars['String']>;
  metaData?: Maybe<Array<Maybe<MetaData>>>;
  orderId?: Maybe<Scalars['Int']>;
  rateCode?: Maybe<Scalars['String']>;
  shippingTaxTotal?: Maybe<Scalars['String']>;
  taxRate?: Maybe<TaxRate>;
  taxTotal?: Maybe<Scalars['String']>;
};


export type TaxLineMetaDataArgs = {
  key?: Maybe<Scalars['String']>;
  keysIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  multiple?: Maybe<Scalars['Boolean']>;
};

export type TaxRate = Node & {
  __typename?: 'TaxRate';
  city?: Maybe<Array<Maybe<Scalars['String']>>>;
  class?: Maybe<TaxClassEnum>;
  compound?: Maybe<Scalars['Boolean']>;
  country?: Maybe<Scalars['String']>;
  databaseId?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  postcode?: Maybe<Array<Maybe<Scalars['String']>>>;
  priority?: Maybe<Scalars['Int']>;
  rate?: Maybe<Scalars['String']>;
  shipping?: Maybe<Scalars['Boolean']>;
  state?: Maybe<Scalars['String']>;
};

export enum TaxRateConnectionOrderbyEnum {
  Id = 'ID',
  Order = 'ORDER'
}

export type TaxRateConnectionOrderbyInput = {
  field: TaxRateConnectionOrderbyEnum;
  order?: Maybe<OrderEnum>;
};

export enum TaxRateIdTypeEnum {
  DatabaseId = 'DATABASE_ID',
  Id = 'ID'
}

export enum TaxStatusEnum {
  None = 'NONE',
  Shipping = 'SHIPPING',
  Taxable = 'TAXABLE'
}

export type Taxonomy = Node & {
  __typename?: 'Taxonomy';
  connectedContentTypes?: Maybe<TaxonomyToContentTypeConnection>;
  description?: Maybe<Scalars['String']>;
  graphqlPluralName?: Maybe<Scalars['String']>;
  graphqlSingleName?: Maybe<Scalars['String']>;
  hierarchical?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  isRestricted?: Maybe<Scalars['Boolean']>;
  label?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  public?: Maybe<Scalars['Boolean']>;
  restBase?: Maybe<Scalars['String']>;
  restControllerClass?: Maybe<Scalars['String']>;
  showCloud?: Maybe<Scalars['Boolean']>;
  showInAdminColumn?: Maybe<Scalars['Boolean']>;
  showInGraphql?: Maybe<Scalars['Boolean']>;
  showInMenu?: Maybe<Scalars['Boolean']>;
  showInNavMenus?: Maybe<Scalars['Boolean']>;
  showInQuickEdit?: Maybe<Scalars['Boolean']>;
  showInRest?: Maybe<Scalars['Boolean']>;
  showUi?: Maybe<Scalars['Boolean']>;
};


export type TaxonomyConnectedContentTypesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};

export enum TaxonomyEnum {
  Category = 'CATEGORY',
  Gender = 'GENDER',
  Pacolor = 'PACOLOR',
  Pasize = 'PASIZE',
  Postformat = 'POSTFORMAT',
  Productcategory = 'PRODUCTCATEGORY',
  Producttag = 'PRODUCTTAG',
  Producttype = 'PRODUCTTYPE',
  Shippingclass = 'SHIPPINGCLASS',
  Tag = 'TAG',
  Visibleproduct = 'VISIBLEPRODUCT'
}

export enum TaxonomyIdTypeEnum {
  Id = 'ID',
  Name = 'NAME'
}

export enum TaxonomyOperatorEnum {
  And = 'AND',
  Exists = 'EXISTS',
  In = 'IN',
  NotExists = 'NOT_EXISTS',
  NotIn = 'NOT_IN'
}

export type TaxonomySeo = {
  __typename?: 'TaxonomySEO';
  breadcrumbs?: Maybe<Array<Maybe<SeoPostTypeBreadcrumbs>>>;
  canonical?: Maybe<Scalars['String']>;
  cornerstone?: Maybe<Scalars['Boolean']>;
  focuskw?: Maybe<Scalars['String']>;
  fullHead?: Maybe<Scalars['String']>;
  metaDesc?: Maybe<Scalars['String']>;
  metaKeywords?: Maybe<Scalars['String']>;
  metaRobotsNofollow?: Maybe<Scalars['String']>;
  metaRobotsNoindex?: Maybe<Scalars['String']>;
  opengraphAuthor?: Maybe<Scalars['String']>;
  opengraphDescription?: Maybe<Scalars['String']>;
  opengraphImage?: Maybe<MediaItem>;
  opengraphModifiedTime?: Maybe<Scalars['String']>;
  opengraphPublishedTime?: Maybe<Scalars['String']>;
  opengraphPublisher?: Maybe<Scalars['String']>;
  opengraphSiteName?: Maybe<Scalars['String']>;
  opengraphTitle?: Maybe<Scalars['String']>;
  opengraphType?: Maybe<Scalars['String']>;
  opengraphUrl?: Maybe<Scalars['String']>;
  schema?: Maybe<SeoTaxonomySchema>;
  title?: Maybe<Scalars['String']>;
  twitterDescription?: Maybe<Scalars['String']>;
  twitterImage?: Maybe<MediaItem>;
  twitterTitle?: Maybe<Scalars['String']>;
};

export type TaxonomyToContentTypeConnection = {
  __typename?: 'TaxonomyToContentTypeConnection';
  edges?: Maybe<Array<Maybe<TaxonomyToContentTypeConnectionEdge>>>;
  nodes?: Maybe<Array<Maybe<ContentType>>>;
  pageInfo?: Maybe<WpPageInfo>;
};

export type TaxonomyToContentTypeConnectionEdge = {
  __typename?: 'TaxonomyToContentTypeConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<ContentType>;
};

export type Template_FullWidth = ContentTemplate & {
  __typename?: 'Template_FullWidth';
  templateName?: Maybe<Scalars['String']>;
};

export type Template_Homepage = ContentTemplate & {
  __typename?: 'Template_Homepage';
  templateName?: Maybe<Scalars['String']>;
};

export type TermNode = {
  count?: Maybe<Scalars['Int']>;
  databaseId: Scalars['Int'];
  description?: Maybe<Scalars['String']>;
  enqueuedScripts?: Maybe<TermNodeToEnqueuedScriptConnection>;
  enqueuedStylesheets?: Maybe<TermNodeToEnqueuedStylesheetConnection>;
  id: Scalars['ID'];
  isContentNode: Scalars['Boolean'];
  isRestricted?: Maybe<Scalars['Boolean']>;
  isTermNode: Scalars['Boolean'];
  link?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  termGroupId?: Maybe<Scalars['Int']>;
  termTaxonomyId?: Maybe<Scalars['Int']>;
  uri?: Maybe<Scalars['String']>;
};


export type TermNodeEnqueuedScriptsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


export type TermNodeEnqueuedStylesheetsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};

export enum TermNodeIdTypeEnum {
  DatabaseId = 'DATABASE_ID',
  Id = 'ID',
  Name = 'NAME',
  Slug = 'SLUG',
  Uri = 'URI'
}

export type TermNodeToEnqueuedScriptConnection = {
  __typename?: 'TermNodeToEnqueuedScriptConnection';
  edges?: Maybe<Array<Maybe<TermNodeToEnqueuedScriptConnectionEdge>>>;
  nodes?: Maybe<Array<Maybe<EnqueuedScript>>>;
  pageInfo?: Maybe<WpPageInfo>;
};

export type TermNodeToEnqueuedScriptConnectionEdge = {
  __typename?: 'TermNodeToEnqueuedScriptConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<EnqueuedScript>;
};

export type TermNodeToEnqueuedStylesheetConnection = {
  __typename?: 'TermNodeToEnqueuedStylesheetConnection';
  edges?: Maybe<Array<Maybe<TermNodeToEnqueuedStylesheetConnectionEdge>>>;
  nodes?: Maybe<Array<Maybe<EnqueuedStylesheet>>>;
  pageInfo?: Maybe<WpPageInfo>;
};

export type TermNodeToEnqueuedStylesheetConnectionEdge = {
  __typename?: 'TermNodeToEnqueuedStylesheetConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<EnqueuedStylesheet>;
};

export enum TermObjectsConnectionOrderbyEnum {
  Count = 'COUNT',
  Description = 'DESCRIPTION',
  Name = 'NAME',
  Slug = 'SLUG',
  TermGroup = 'TERM_GROUP',
  TermId = 'TERM_ID',
  TermOrder = 'TERM_ORDER'
}

export type Theme = Node & {
  __typename?: 'Theme';
  author?: Maybe<Scalars['String']>;
  authorUri?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isRestricted?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  screenshot?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  themeUri?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type UniformResourceIdentifiable = {
  id: Scalars['ID'];
  isContentNode: Scalars['Boolean'];
  isTermNode: Scalars['Boolean'];
  uri?: Maybe<Scalars['String']>;
};

export type UpdateCategoryInput = {
  aliasOf?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  parentId?: Maybe<Scalars['ID']>;
  slug?: Maybe<Scalars['String']>;
};

export type UpdateCategoryPayload = {
  __typename?: 'UpdateCategoryPayload';
  category?: Maybe<Category>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateCommentInput = {
  approved?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  authorEmail?: Maybe<Scalars['String']>;
  authorUrl?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
  commentOn?: Maybe<Scalars['Int']>;
  content?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Scalars['ID']>;
  type?: Maybe<Scalars['String']>;
};

export type UpdateCommentPayload = {
  __typename?: 'UpdateCommentPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  comment?: Maybe<Comment>;
  success?: Maybe<Scalars['Boolean']>;
};

export type UpdateConfigInput = {
  clientMutationId?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  menuOrder?: Maybe<Scalars['Int']>;
  password?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatusEnum>;
  title?: Maybe<Scalars['String']>;
};

export type UpdateConfigPayload = {
  __typename?: 'UpdateConfigPayload';
  config?: Maybe<Config>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateCouponInput = {
  amount?: Maybe<Scalars['Float']>;
  clientMutationId?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  dateExpires?: Maybe<Scalars['String']>;
  dateExpiresGmt?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  discountType?: Maybe<DiscountTypeEnum>;
  emailRestrictions?: Maybe<Array<Maybe<Scalars['String']>>>;
  excludeSaleItems?: Maybe<Scalars['Boolean']>;
  excludedProductCategories?: Maybe<Array<Maybe<Scalars['Int']>>>;
  excludedProductIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
  freeShipping?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  individualUse?: Maybe<Scalars['Boolean']>;
  limitUsageToXItems?: Maybe<Scalars['Int']>;
  maximumAmount?: Maybe<Scalars['String']>;
  metaData?: Maybe<Array<Maybe<MetaDataInput>>>;
  minimumAmount?: Maybe<Scalars['String']>;
  productCategories?: Maybe<Array<Maybe<Scalars['Int']>>>;
  productIds?: Maybe<Array<Maybe<Scalars['Int']>>>;
  usageLimit?: Maybe<Scalars['Int']>;
  usageLimitPerUser?: Maybe<Scalars['Int']>;
};

export type UpdateCouponPayload = {
  __typename?: 'UpdateCouponPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  coupon?: Maybe<Coupon>;
};

export type UpdateCustomerInput = {
  aim?: Maybe<Scalars['String']>;
  billing?: Maybe<CustomerAddressInput>;
  clientMutationId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  jabber?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  metaData?: Maybe<Array<Maybe<MetaDataInput>>>;
  nicename?: Maybe<Scalars['String']>;
  nickname?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  registered?: Maybe<Scalars['String']>;
  richEditing?: Maybe<Scalars['String']>;
  roles?: Maybe<Array<Maybe<Scalars['String']>>>;
  shipping?: Maybe<CustomerAddressInput>;
  shippingSameAsBilling?: Maybe<Scalars['Boolean']>;
  websiteUrl?: Maybe<Scalars['String']>;
  yim?: Maybe<Scalars['String']>;
};

export type UpdateCustomerPayload = {
  __typename?: 'UpdateCustomerPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  customer?: Maybe<Customer>;
};

export type UpdateGenderInput = {
  aliasOf?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};

export type UpdateGenderPayload = {
  __typename?: 'UpdateGenderPayload';
  gender?: Maybe<Gender>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateItemQuantitiesInput = {
  clientMutationId?: Maybe<Scalars['String']>;
  items?: Maybe<Array<Maybe<CartItemQuantityInput>>>;
};

export type UpdateItemQuantitiesPayload = {
  __typename?: 'UpdateItemQuantitiesPayload';
  cart?: Maybe<Cart>;
  clientMutationId?: Maybe<Scalars['String']>;
  items?: Maybe<Array<Maybe<CartItem>>>;
  removed?: Maybe<Array<Maybe<CartItem>>>;
  updated?: Maybe<Array<Maybe<CartItem>>>;
};

export type UpdateMediaItemInput = {
  altText?: Maybe<Scalars['String']>;
  authorId?: Maybe<Scalars['ID']>;
  caption?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
  commentStatus?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['String']>;
  dateGmt?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  filePath?: Maybe<Scalars['String']>;
  fileType?: Maybe<MimeTypeEnum>;
  id: Scalars['ID'];
  parentId?: Maybe<Scalars['ID']>;
  pingStatus?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  status?: Maybe<MediaItemStatusEnum>;
  title?: Maybe<Scalars['String']>;
};

export type UpdateMediaItemPayload = {
  __typename?: 'UpdateMediaItemPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  mediaItem?: Maybe<MediaItem>;
};

export type UpdateOrderInput = {
  billing?: Maybe<CustomerAddressInput>;
  clientMutationId?: Maybe<Scalars['String']>;
  coupons?: Maybe<Array<Maybe<Scalars['String']>>>;
  currency?: Maybe<Scalars['String']>;
  customerId?: Maybe<Scalars['Int']>;
  customerNote?: Maybe<Scalars['String']>;
  feeLines?: Maybe<Array<Maybe<FeeLineInput>>>;
  id?: Maybe<Scalars['ID']>;
  isPaid?: Maybe<Scalars['Boolean']>;
  lineItems?: Maybe<Array<Maybe<LineItemInput>>>;
  metaData?: Maybe<Array<Maybe<MetaDataInput>>>;
  orderId?: Maybe<Scalars['Int']>;
  parentId?: Maybe<Scalars['Int']>;
  paymentMethod?: Maybe<Scalars['String']>;
  paymentMethodTitle?: Maybe<Scalars['String']>;
  shipping?: Maybe<CustomerAddressInput>;
  shippingLines?: Maybe<Array<Maybe<ShippingLineInput>>>;
  status?: Maybe<OrderStatusEnum>;
  transactionId?: Maybe<Scalars['String']>;
};

export type UpdateOrderPayload = {
  __typename?: 'UpdateOrderPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  order?: Maybe<Order>;
};

export type UpdatePaColorInput = {
  aliasOf?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};

export type UpdatePaColorPayload = {
  __typename?: 'UpdatePaColorPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  paColor?: Maybe<PaColor>;
};

export type UpdatePaSizeInput = {
  aliasOf?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};

export type UpdatePaSizePayload = {
  __typename?: 'UpdatePaSizePayload';
  clientMutationId?: Maybe<Scalars['String']>;
  paSize?: Maybe<PaSize>;
};

export type UpdatePageInput = {
  authorId?: Maybe<Scalars['ID']>;
  clientMutationId?: Maybe<Scalars['String']>;
  commentStatus?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  menuOrder?: Maybe<Scalars['Int']>;
  parentId?: Maybe<Scalars['ID']>;
  password?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatusEnum>;
  title?: Maybe<Scalars['String']>;
};

export type UpdatePagePayload = {
  __typename?: 'UpdatePagePayload';
  clientMutationId?: Maybe<Scalars['String']>;
  page?: Maybe<Page>;
};

export type UpdatePostFormatInput = {
  aliasOf?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};

export type UpdatePostFormatPayload = {
  __typename?: 'UpdatePostFormatPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  postFormat?: Maybe<PostFormat>;
};

export type UpdatePostInput = {
  authorId?: Maybe<Scalars['ID']>;
  categories?: Maybe<PostCategoriesInput>;
  clientMutationId?: Maybe<Scalars['String']>;
  commentStatus?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['String']>;
  excerpt?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  menuOrder?: Maybe<Scalars['Int']>;
  password?: Maybe<Scalars['String']>;
  pingStatus?: Maybe<Scalars['String']>;
  pinged?: Maybe<Array<Maybe<Scalars['String']>>>;
  postFormats?: Maybe<PostPostFormatsInput>;
  slug?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatusEnum>;
  tags?: Maybe<PostTagsInput>;
  title?: Maybe<Scalars['String']>;
  toPing?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type UpdatePostPayload = {
  __typename?: 'UpdatePostPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  post?: Maybe<Post>;
};

export type UpdateProductCategoryInput = {
  aliasOf?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  parentId?: Maybe<Scalars['ID']>;
  slug?: Maybe<Scalars['String']>;
};

export type UpdateProductCategoryPayload = {
  __typename?: 'UpdateProductCategoryPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  productCategory?: Maybe<ProductCategory>;
};

export type UpdateProductTagInput = {
  aliasOf?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};

export type UpdateProductTagPayload = {
  __typename?: 'UpdateProductTagPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  productTag?: Maybe<ProductTag>;
};

export type UpdateProductTypeInput = {
  aliasOf?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};

export type UpdateProductTypePayload = {
  __typename?: 'UpdateProductTypePayload';
  clientMutationId?: Maybe<Scalars['String']>;
  productType?: Maybe<ProductType>;
};

export type UpdateRealProjectInput = {
  clientMutationId?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  menuOrder?: Maybe<Scalars['Int']>;
  password?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatusEnum>;
  title?: Maybe<Scalars['String']>;
};

export type UpdateRealProjectPayload = {
  __typename?: 'UpdateRealProjectPayload';
  realProject?: Maybe<RealProject>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateReviewInput = {
  approved?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  authorEmail?: Maybe<Scalars['String']>;
  authorUrl?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
  commentOn?: Maybe<Scalars['Int']>;
  content?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Scalars['ID']>;
  rating: Scalars['Int'];
};

export type UpdateReviewPayload = {
  __typename?: 'UpdateReviewPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Float']>;
  review?: Maybe<Comment>;
};

export type UpdateSettingsInput = {
  clientMutationId?: Maybe<Scalars['String']>;
  discussionSettingsDefaultCommentStatus?: Maybe<Scalars['String']>;
  discussionSettingsDefaultPingStatus?: Maybe<Scalars['String']>;
  generalSettingsDateFormat?: Maybe<Scalars['String']>;
  generalSettingsDescription?: Maybe<Scalars['String']>;
  generalSettingsEmail?: Maybe<Scalars['String']>;
  generalSettingsLanguage?: Maybe<Scalars['String']>;
  generalSettingsStartOfWeek?: Maybe<Scalars['Int']>;
  generalSettingsTimeFormat?: Maybe<Scalars['String']>;
  generalSettingsTimezone?: Maybe<Scalars['String']>;
  generalSettingsTitle?: Maybe<Scalars['String']>;
  generalSettingsUrl?: Maybe<Scalars['String']>;
  readingSettingsPostsPerPage?: Maybe<Scalars['Int']>;
  writingSettingsDefaultCategory?: Maybe<Scalars['Int']>;
  writingSettingsDefaultPostFormat?: Maybe<Scalars['String']>;
  writingSettingsUseSmilies?: Maybe<Scalars['Boolean']>;
};

export type UpdateSettingsPayload = {
  __typename?: 'UpdateSettingsPayload';
  allSettings?: Maybe<Settings>;
  clientMutationId?: Maybe<Scalars['String']>;
  discussionSettings?: Maybe<DiscussionSettings>;
  generalSettings?: Maybe<GeneralSettings>;
  readingSettings?: Maybe<ReadingSettings>;
  writingSettings?: Maybe<WritingSettings>;
};

export type UpdateShippingClassInput = {
  aliasOf?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};

export type UpdateShippingClassPayload = {
  __typename?: 'UpdateShippingClassPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  shippingClass?: Maybe<ShippingClass>;
};

export type UpdateShippingMethodInput = {
  clientMutationId?: Maybe<Scalars['String']>;
  shippingMethods?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type UpdateShippingMethodPayload = {
  __typename?: 'UpdateShippingMethodPayload';
  cart?: Maybe<Cart>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UpdateTagInput = {
  aliasOf?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};

export type UpdateTagPayload = {
  __typename?: 'UpdateTagPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  tag?: Maybe<Tag>;
};

export type UpdateUserInput = {
  aim?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  jabber?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  nicename?: Maybe<Scalars['String']>;
  nickname?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  registered?: Maybe<Scalars['String']>;
  richEditing?: Maybe<Scalars['String']>;
  roles?: Maybe<Array<Maybe<Scalars['String']>>>;
  websiteUrl?: Maybe<Scalars['String']>;
  yim?: Maybe<Scalars['String']>;
};

export type UpdateUserPayload = {
  __typename?: 'UpdateUserPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export type UpdateVisibleProductInput = {
  aliasOf?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};

export type UpdateVisibleProductPayload = {
  __typename?: 'UpdateVisibleProductPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  visibleProduct?: Maybe<VisibleProduct>;
};

export type User = Node & UniformResourceIdentifiable & Commenter & DatabaseIdentifier & {
  __typename?: 'User';
  avatar?: Maybe<Avatar>;
  capKey?: Maybe<Scalars['String']>;
  capabilities?: Maybe<Array<Maybe<Scalars['String']>>>;
  comments?: Maybe<UserToCommentConnection>;
  databaseId: Scalars['Int'];
  description?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  enqueuedScripts?: Maybe<UserToEnqueuedScriptConnection>;
  enqueuedStylesheets?: Maybe<UserToEnqueuedStylesheetConnection>;
  extraCapabilities?: Maybe<Array<Maybe<Scalars['String']>>>;
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isContentNode: Scalars['Boolean'];
  isRestricted?: Maybe<Scalars['Boolean']>;
  isTermNode: Scalars['Boolean'];
  lastName?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  mediaItems?: Maybe<UserToMediaItemConnection>;
  name?: Maybe<Scalars['String']>;
  nicename?: Maybe<Scalars['String']>;
  nickname?: Maybe<Scalars['String']>;
  pages?: Maybe<UserToPageConnection>;
  posts?: Maybe<UserToPostConnection>;
  registeredDate?: Maybe<Scalars['String']>;
  revisions?: Maybe<UserToContentRevisionUnionConnection>;
  roles?: Maybe<UserToUserRoleConnection>;
  seo?: Maybe<SeoUser>;
  slug?: Maybe<Scalars['String']>;
  uri?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  /** @deprecated Deprecated in favor of the databaseId field */
  userId?: Maybe<Scalars['Int']>;
  username?: Maybe<Scalars['String']>;
  wooSessionToken?: Maybe<Scalars['String']>;
};


export type UserAvatarArgs = {
  size?: Maybe<Scalars['Int']>;
  forceDefault?: Maybe<Scalars['Boolean']>;
  rating?: Maybe<AvatarRatingEnum>;
};


export type UserCommentsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<UserToCommentConnectionWhereArgs>;
};


export type UserEnqueuedScriptsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


export type UserEnqueuedStylesheetsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


export type UserMediaItemsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<UserToMediaItemConnectionWhereArgs>;
};


export type UserPagesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<UserToPageConnectionWhereArgs>;
};


export type UserPostsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<UserToPostConnectionWhereArgs>;
};


export type UserRevisionsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<UserToContentRevisionUnionConnectionWhereArgs>;
};


export type UserRolesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};

export enum UserNodeIdTypeEnum {
  DatabaseId = 'DATABASE_ID',
  Email = 'EMAIL',
  Id = 'ID',
  Slug = 'SLUG',
  Uri = 'URI',
  Username = 'USERNAME'
}

export type UserRole = Node & {
  __typename?: 'UserRole';
  capabilities?: Maybe<Array<Maybe<Scalars['String']>>>;
  displayName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isRestricted?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
};

export enum UserRoleEnum {
  Author = 'AUTHOR',
  Contributor = 'CONTRIBUTOR',
  Customer = 'CUSTOMER',
  Editor = 'EDITOR',
  SeoEditor = 'SEO_EDITOR',
  SeoManager = 'SEO_MANAGER',
  ShopManager = 'SHOP_MANAGER',
  Subscriber = 'SUBSCRIBER'
}

export type UserToCommentConnection = {
  __typename?: 'UserToCommentConnection';
  edges?: Maybe<Array<Maybe<UserToCommentConnectionEdge>>>;
  nodes?: Maybe<Array<Maybe<Comment>>>;
  pageInfo?: Maybe<WpPageInfo>;
};

export type UserToCommentConnectionEdge = {
  __typename?: 'UserToCommentConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<Comment>;
};

export type UserToCommentConnectionWhereArgs = {
  authorEmail?: Maybe<Scalars['String']>;
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  authorUrl?: Maybe<Scalars['String']>;
  commentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  commentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  commentType?: Maybe<Scalars['String']>;
  commentTypeIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  commentTypeNotIn?: Maybe<Scalars['String']>;
  contentAuthor?: Maybe<Array<Maybe<Scalars['ID']>>>;
  contentAuthorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  contentAuthorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  contentId?: Maybe<Scalars['ID']>;
  contentIdIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  contentIdNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  contentName?: Maybe<Scalars['String']>;
  contentParent?: Maybe<Scalars['Int']>;
  contentStatus?: Maybe<Array<Maybe<PostStatusEnum>>>;
  contentType?: Maybe<Array<Maybe<ContentTypeEnum>>>;
  includeUnapproved?: Maybe<Array<Maybe<Scalars['ID']>>>;
  karma?: Maybe<Scalars['Int']>;
  order?: Maybe<OrderEnum>;
  orderby?: Maybe<CommentsConnectionOrderbyEnum>;
  parent?: Maybe<Scalars['Int']>;
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  search?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['ID']>;
};

export type UserToContentRevisionUnionConnection = {
  __typename?: 'UserToContentRevisionUnionConnection';
  edges?: Maybe<Array<Maybe<UserToContentRevisionUnionConnectionEdge>>>;
  nodes?: Maybe<Array<Maybe<ContentRevisionUnion>>>;
  pageInfo?: Maybe<WpPageInfo>;
};

export type UserToContentRevisionUnionConnectionEdge = {
  __typename?: 'UserToContentRevisionUnionConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<ContentRevisionUnion>;
};

export type UserToContentRevisionUnionConnectionWhereArgs = {
  contentTypes?: Maybe<Array<Maybe<ContentTypeEnum>>>;
  dateQuery?: Maybe<DateQueryInput>;
  hasPassword?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  mimeType?: Maybe<MimeTypeEnum>;
  name?: Maybe<Scalars['String']>;
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  parent?: Maybe<Scalars['ID']>;
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  password?: Maybe<Scalars['String']>;
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  title?: Maybe<Scalars['String']>;
};

export type UserToEnqueuedScriptConnection = {
  __typename?: 'UserToEnqueuedScriptConnection';
  edges?: Maybe<Array<Maybe<UserToEnqueuedScriptConnectionEdge>>>;
  nodes?: Maybe<Array<Maybe<EnqueuedScript>>>;
  pageInfo?: Maybe<WpPageInfo>;
};

export type UserToEnqueuedScriptConnectionEdge = {
  __typename?: 'UserToEnqueuedScriptConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<EnqueuedScript>;
};

export type UserToEnqueuedStylesheetConnection = {
  __typename?: 'UserToEnqueuedStylesheetConnection';
  edges?: Maybe<Array<Maybe<UserToEnqueuedStylesheetConnectionEdge>>>;
  nodes?: Maybe<Array<Maybe<EnqueuedStylesheet>>>;
  pageInfo?: Maybe<WpPageInfo>;
};

export type UserToEnqueuedStylesheetConnectionEdge = {
  __typename?: 'UserToEnqueuedStylesheetConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<EnqueuedStylesheet>;
};

export type UserToMediaItemConnection = {
  __typename?: 'UserToMediaItemConnection';
  edges?: Maybe<Array<Maybe<UserToMediaItemConnectionEdge>>>;
  nodes?: Maybe<Array<Maybe<MediaItem>>>;
  pageInfo?: Maybe<WpPageInfo>;
};

export type UserToMediaItemConnectionEdge = {
  __typename?: 'UserToMediaItemConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<MediaItem>;
};

export type UserToMediaItemConnectionWhereArgs = {
  author?: Maybe<Scalars['Int']>;
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  authorName?: Maybe<Scalars['String']>;
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  dateQuery?: Maybe<DateQueryInput>;
  hasPassword?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  mimeType?: Maybe<MimeTypeEnum>;
  name?: Maybe<Scalars['String']>;
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  parent?: Maybe<Scalars['ID']>;
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  password?: Maybe<Scalars['String']>;
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  title?: Maybe<Scalars['String']>;
};

export type UserToPageConnection = {
  __typename?: 'UserToPageConnection';
  edges?: Maybe<Array<Maybe<UserToPageConnectionEdge>>>;
  nodes?: Maybe<Array<Maybe<Page>>>;
  pageInfo?: Maybe<WpPageInfo>;
};

export type UserToPageConnectionEdge = {
  __typename?: 'UserToPageConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<Page>;
};

export type UserToPageConnectionWhereArgs = {
  author?: Maybe<Scalars['Int']>;
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  authorName?: Maybe<Scalars['String']>;
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  dateQuery?: Maybe<DateQueryInput>;
  hasPassword?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  mimeType?: Maybe<MimeTypeEnum>;
  name?: Maybe<Scalars['String']>;
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  parent?: Maybe<Scalars['ID']>;
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  password?: Maybe<Scalars['String']>;
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  title?: Maybe<Scalars['String']>;
};

export type UserToPostConnection = {
  __typename?: 'UserToPostConnection';
  edges?: Maybe<Array<Maybe<UserToPostConnectionEdge>>>;
  nodes?: Maybe<Array<Maybe<Post>>>;
  pageInfo?: Maybe<WpPageInfo>;
};

export type UserToPostConnectionEdge = {
  __typename?: 'UserToPostConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<Post>;
};

export type UserToPostConnectionWhereArgs = {
  author?: Maybe<Scalars['Int']>;
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  authorName?: Maybe<Scalars['String']>;
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  categoryId?: Maybe<Scalars['Int']>;
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  categoryName?: Maybe<Scalars['String']>;
  categoryNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  dateQuery?: Maybe<DateQueryInput>;
  hasPassword?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  mimeType?: Maybe<MimeTypeEnum>;
  name?: Maybe<Scalars['String']>;
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  parent?: Maybe<Scalars['ID']>;
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  password?: Maybe<Scalars['String']>;
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  tag?: Maybe<Scalars['String']>;
  tagId?: Maybe<Scalars['String']>;
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  tagNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>;
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  title?: Maybe<Scalars['String']>;
};

export type UserToUserRoleConnection = {
  __typename?: 'UserToUserRoleConnection';
  edges?: Maybe<Array<Maybe<UserToUserRoleConnectionEdge>>>;
  nodes?: Maybe<Array<Maybe<UserRole>>>;
  pageInfo?: Maybe<WpPageInfo>;
};

export type UserToUserRoleConnectionEdge = {
  __typename?: 'UserToUserRoleConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<UserRole>;
};

export enum UsersConnectionOrderbyEnum {
  DisplayName = 'DISPLAY_NAME',
  Email = 'EMAIL',
  Login = 'LOGIN',
  LoginIn = 'LOGIN_IN',
  NiceName = 'NICE_NAME',
  NiceNameIn = 'NICE_NAME_IN',
  Registered = 'REGISTERED',
  Url = 'URL'
}

export type UsersConnectionOrderbyInput = {
  field: UsersConnectionOrderbyEnum;
  order?: Maybe<OrderEnum>;
};

export enum UsersConnectionSearchColumnEnum {
  Email = 'EMAIL',
  Id = 'ID',
  Login = 'LOGIN',
  Nicename = 'NICENAME',
  Url = 'URL'
}

export type VariableProduct = Node & Product & NodeWithComments & NodeWithContentEditor & NodeWithFeaturedImage & ContentNode & UniformResourceIdentifiable & DatabaseIdentifier & {
  __typename?: 'VariableProduct';
  attributes?: Maybe<ProductToProductAttributeConnection>;
  averageRating?: Maybe<Scalars['Float']>;
  backorders?: Maybe<BackordersEnum>;
  backordersAllowed?: Maybe<Scalars['Boolean']>;
  catalogVisibility?: Maybe<CatalogVisibilityEnum>;
  commentCount?: Maybe<Scalars['Int']>;
  commentStatus?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  contentType?: Maybe<ContentNodeToContentTypeConnectionEdge>;
  crossSell?: Maybe<VariableProductToProductConnection>;
  databaseId: Scalars['Int'];
  date?: Maybe<Scalars['String']>;
  dateGmt?: Maybe<Scalars['String']>;
  dateOnSaleFrom?: Maybe<Scalars['String']>;
  dateOnSaleTo?: Maybe<Scalars['String']>;
  defaultAttributes?: Maybe<VariableProductToVariationAttributeConnection>;
  description?: Maybe<Scalars['String']>;
  desiredSlug?: Maybe<Scalars['String']>;
  editingLockedBy?: Maybe<ContentNodeToEditLockConnectionEdge>;
  enclosure?: Maybe<Scalars['String']>;
  enqueuedScripts?: Maybe<ContentNodeToEnqueuedScriptConnection>;
  enqueuedStylesheets?: Maybe<ContentNodeToEnqueuedStylesheetConnection>;
  featured?: Maybe<Scalars['Boolean']>;
  featuredImage?: Maybe<NodeWithFeaturedImageToMediaItemConnectionEdge>;
  featuredImageDatabaseId?: Maybe<Scalars['Int']>;
  featuredImageId?: Maybe<Scalars['ID']>;
  galleryImages?: Maybe<ProductToMediaItemConnection>;
  genders?: Maybe<ProductToGenderConnection>;
  globalAttributes?: Maybe<ProductToGlobalProductAttributeConnection>;
  guid?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image?: Maybe<MediaItem>;
  isContentNode: Scalars['Boolean'];
  isPreview?: Maybe<Scalars['Boolean']>;
  isRestricted?: Maybe<Scalars['Boolean']>;
  isTermNode: Scalars['Boolean'];
  lastEditedBy?: Maybe<ContentNodeToEditLastConnectionEdge>;
  length?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  localAttributes?: Maybe<ProductToLocalProductAttributeConnection>;
  manageStock?: Maybe<Scalars['Boolean']>;
  menuOrder?: Maybe<Scalars['Int']>;
  metaData?: Maybe<Array<Maybe<MetaData>>>;
  modified?: Maybe<Scalars['String']>;
  modifiedGmt?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  onSale?: Maybe<Scalars['Boolean']>;
  paColors?: Maybe<ProductToPaColorConnection>;
  paSizes?: Maybe<ProductToPaSizeConnection>;
  parent?: Maybe<Product>;
  previewRevisionDatabaseId?: Maybe<Scalars['Int']>;
  previewRevisionId?: Maybe<Scalars['ID']>;
  price?: Maybe<Scalars['String']>;
  productCategories?: Maybe<ProductToProductCategoryConnection>;
  productTags?: Maybe<ProductToProductTagConnection>;
  productTypes?: Maybe<ProductToProductTypeConnection>;
  purchasable?: Maybe<Scalars['Boolean']>;
  purchaseNote?: Maybe<Scalars['String']>;
  regularPrice?: Maybe<Scalars['String']>;
  related?: Maybe<ProductToProductConnection>;
  reviewCount?: Maybe<Scalars['Int']>;
  reviews?: Maybe<ProductToCommentConnection>;
  reviewsAllowed?: Maybe<Scalars['Boolean']>;
  salePrice?: Maybe<Scalars['String']>;
  seo?: Maybe<PostTypeSeo>;
  shippingClassId?: Maybe<Scalars['Int']>;
  shippingClasses?: Maybe<ProductToShippingClassConnection>;
  shippingRequired?: Maybe<Scalars['Boolean']>;
  shippingTaxable?: Maybe<Scalars['Boolean']>;
  shortDescription?: Maybe<Scalars['String']>;
  sku?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  soldIndividually?: Maybe<Scalars['Boolean']>;
  status?: Maybe<Scalars['String']>;
  stockQuantity?: Maybe<Scalars['Int']>;
  stockStatus?: Maybe<StockStatusEnum>;
  taxClass?: Maybe<TaxClassEnum>;
  taxStatus?: Maybe<TaxStatusEnum>;
  template?: Maybe<ContentTemplate>;
  totalSales?: Maybe<Scalars['Int']>;
  type?: Maybe<ProductTypesEnum>;
  upsell?: Maybe<ProductToUpsellConnection>;
  uri?: Maybe<Scalars['String']>;
  variations?: Maybe<VariableProductToProductVariationConnection>;
  visibleProducts?: Maybe<ProductToVisibleProductConnection>;
  weight?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['String']>;
};


export type VariableProductAttributesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToProductAttributeConnectionWhereArgs>;
};


export type VariableProductContentArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>;
};


export type VariableProductCrossSellArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<VariableProductToProductConnectionWhereArgs>;
};


export type VariableProductDefaultAttributesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


export type VariableProductDescriptionArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>;
};


export type VariableProductEnqueuedScriptsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


export type VariableProductEnqueuedStylesheetsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


export type VariableProductGalleryImagesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToMediaItemConnectionWhereArgs>;
};


export type VariableProductGendersArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToGenderConnectionWhereArgs>;
};


export type VariableProductGlobalAttributesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToGlobalProductAttributeConnectionWhereArgs>;
};


export type VariableProductLocalAttributesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToLocalProductAttributeConnectionWhereArgs>;
};


export type VariableProductMetaDataArgs = {
  key?: Maybe<Scalars['String']>;
  keysIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  multiple?: Maybe<Scalars['Boolean']>;
};


export type VariableProductPaColorsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToPaColorConnectionWhereArgs>;
};


export type VariableProductPaSizesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToPaSizeConnectionWhereArgs>;
};


export type VariableProductPriceArgs = {
  format?: Maybe<PricingFieldFormatEnum>;
};


export type VariableProductProductCategoriesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToProductCategoryConnectionWhereArgs>;
};


export type VariableProductProductTagsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToProductTagConnectionWhereArgs>;
};


export type VariableProductProductTypesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToProductTypeConnectionWhereArgs>;
};


export type VariableProductRegularPriceArgs = {
  format?: Maybe<PricingFieldFormatEnum>;
};


export type VariableProductRelatedArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToProductConnectionWhereArgs>;
};


export type VariableProductReviewsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToCommentConnectionWhereArgs>;
};


export type VariableProductSalePriceArgs = {
  format?: Maybe<PricingFieldFormatEnum>;
};


export type VariableProductShippingClassesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToShippingClassConnectionWhereArgs>;
};


export type VariableProductShortDescriptionArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>;
};


export type VariableProductUpsellArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToUpsellConnectionWhereArgs>;
};


export type VariableProductVariationsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<VariableProductToProductVariationConnectionWhereArgs>;
};


export type VariableProductVisibleProductsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<ProductToVisibleProductConnectionWhereArgs>;
};

export type VariableProductToProductConnection = {
  __typename?: 'VariableProductToProductConnection';
  edges?: Maybe<Array<Maybe<VariableProductToProductConnectionEdge>>>;
  nodes?: Maybe<Array<Maybe<Product>>>;
  pageInfo?: Maybe<WpPageInfo>;
};

export type VariableProductToProductConnectionEdge = {
  __typename?: 'VariableProductToProductConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<Product>;
};

export type VariableProductToProductConnectionWhereArgs = {
  attribute?: Maybe<Scalars['String']>;
  attributeTerm?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  categoryId?: Maybe<Scalars['Int']>;
  categoryIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  categoryIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  categoryIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  categoryNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  dateQuery?: Maybe<DateQueryInput>;
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>;
  featured?: Maybe<Scalars['Boolean']>;
  include?: Maybe<Array<Maybe<Scalars['Int']>>>;
  maxPrice?: Maybe<Scalars['Float']>;
  minPrice?: Maybe<Scalars['Float']>;
  onSale?: Maybe<Scalars['Boolean']>;
  orderby?: Maybe<Array<Maybe<ProductsOrderbyInput>>>;
  parent?: Maybe<Scalars['Int']>;
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  search?: Maybe<Scalars['String']>;
  shippingClassId?: Maybe<Scalars['Int']>;
  sku?: Maybe<Scalars['String']>;
  slugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  status?: Maybe<Scalars['String']>;
  stockStatus?: Maybe<Array<Maybe<StockStatusEnum>>>;
  supportedTypesOnly?: Maybe<Scalars['Boolean']>;
  tag?: Maybe<Scalars['String']>;
  tagId?: Maybe<Scalars['Int']>;
  tagIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  tagIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  tagIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  tagNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  taxonomyFilter?: Maybe<ProductTaxonomyInput>;
  type?: Maybe<ProductTypesEnum>;
  typeIn?: Maybe<Array<Maybe<ProductTypesEnum>>>;
  typeNotIn?: Maybe<Array<Maybe<ProductTypesEnum>>>;
  visibility?: Maybe<CatalogVisibilityEnum>;
};

export type VariableProductToProductVariationConnection = {
  __typename?: 'VariableProductToProductVariationConnection';
  edges?: Maybe<Array<Maybe<VariableProductToProductVariationConnectionEdge>>>;
  nodes?: Maybe<Array<Maybe<ProductVariation>>>;
  pageInfo?: Maybe<WpPageInfo>;
};

export type VariableProductToProductVariationConnectionEdge = {
  __typename?: 'VariableProductToProductVariationConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<ProductVariation>;
};

export type VariableProductToProductVariationConnectionWhereArgs = {
  attribute?: Maybe<Scalars['String']>;
  attributeTerm?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  categoryId?: Maybe<Scalars['Int']>;
  categoryIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  categoryIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  categoryIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  categoryNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  dateQuery?: Maybe<DateQueryInput>;
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>;
  featured?: Maybe<Scalars['Boolean']>;
  include?: Maybe<Array<Maybe<Scalars['Int']>>>;
  maxPrice?: Maybe<Scalars['Float']>;
  minPrice?: Maybe<Scalars['Float']>;
  onSale?: Maybe<Scalars['Boolean']>;
  orderby?: Maybe<Array<Maybe<ProductsOrderbyInput>>>;
  parent?: Maybe<Scalars['Int']>;
  parentIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  parentNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  search?: Maybe<Scalars['String']>;
  shippingClassId?: Maybe<Scalars['Int']>;
  sku?: Maybe<Scalars['String']>;
  slugIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  status?: Maybe<Scalars['String']>;
  stockStatus?: Maybe<Array<Maybe<StockStatusEnum>>>;
  supportedTypesOnly?: Maybe<Scalars['Boolean']>;
  tag?: Maybe<Scalars['String']>;
  tagId?: Maybe<Scalars['Int']>;
  tagIdIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  tagIdNotIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  tagIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  tagNotIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  taxonomyFilter?: Maybe<ProductTaxonomyInput>;
  type?: Maybe<ProductTypesEnum>;
  typeIn?: Maybe<Array<Maybe<ProductTypesEnum>>>;
  typeNotIn?: Maybe<Array<Maybe<ProductTypesEnum>>>;
  visibility?: Maybe<CatalogVisibilityEnum>;
};

export type VariableProductToVariationAttributeConnection = {
  __typename?: 'VariableProductToVariationAttributeConnection';
  edges?: Maybe<Array<Maybe<VariableProductToVariationAttributeConnectionEdge>>>;
  nodes?: Maybe<Array<Maybe<VariationAttribute>>>;
  pageInfo?: Maybe<WpPageInfo>;
};

export type VariableProductToVariationAttributeConnectionEdge = {
  __typename?: 'VariableProductToVariationAttributeConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<VariationAttribute>;
};

export type VariationAttribute = Attribute & {
  __typename?: 'VariationAttribute';
  attributeId?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  label?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type VisibleProduct = Node & TermNode & UniformResourceIdentifiable & DatabaseIdentifier & {
  __typename?: 'VisibleProduct';
  contentNodes?: Maybe<VisibleProductToContentNodeConnection>;
  count?: Maybe<Scalars['Int']>;
  databaseId: Scalars['Int'];
  description?: Maybe<Scalars['String']>;
  enqueuedScripts?: Maybe<TermNodeToEnqueuedScriptConnection>;
  enqueuedStylesheets?: Maybe<TermNodeToEnqueuedStylesheetConnection>;
  id: Scalars['ID'];
  isContentNode: Scalars['Boolean'];
  isRestricted?: Maybe<Scalars['Boolean']>;
  isTermNode: Scalars['Boolean'];
  link?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  seo?: Maybe<TaxonomySeo>;
  slug?: Maybe<Scalars['String']>;
  taxonomy?: Maybe<VisibleProductToTaxonomyConnectionEdge>;
  termGroupId?: Maybe<Scalars['Int']>;
  termTaxonomyId?: Maybe<Scalars['Int']>;
  uri?: Maybe<Scalars['String']>;
  /** @deprecated Deprecated in favor of databaseId */
  visibleProductId?: Maybe<Scalars['Int']>;
};


export type VisibleProductContentNodesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  where?: Maybe<VisibleProductToContentNodeConnectionWhereArgs>;
};


export type VisibleProductEnqueuedScriptsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


export type VisibleProductEnqueuedStylesheetsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};

export enum VisibleProductIdType {
  DatabaseId = 'DATABASE_ID',
  Id = 'ID',
  Name = 'NAME',
  Slug = 'SLUG',
  Uri = 'URI'
}

export type VisibleProductToContentNodeConnection = {
  __typename?: 'VisibleProductToContentNodeConnection';
  edges?: Maybe<Array<Maybe<VisibleProductToContentNodeConnectionEdge>>>;
  nodes?: Maybe<Array<Maybe<ContentNode>>>;
  pageInfo?: Maybe<WpPageInfo>;
};

export type VisibleProductToContentNodeConnectionEdge = {
  __typename?: 'VisibleProductToContentNodeConnectionEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<ContentNode>;
};

export type VisibleProductToContentNodeConnectionWhereArgs = {
  contentTypes?: Maybe<Array<Maybe<ContentTypesOfVisibleProductEnum>>>;
  dateQuery?: Maybe<DateQueryInput>;
  hasPassword?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  mimeType?: Maybe<MimeTypeEnum>;
  name?: Maybe<Scalars['String']>;
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>;
  parent?: Maybe<Scalars['ID']>;
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>;
  password?: Maybe<Scalars['String']>;
  search?: Maybe<Scalars['String']>;
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>;
  status?: Maybe<PostStatusEnum>;
  title?: Maybe<Scalars['String']>;
};

export type VisibleProductToTaxonomyConnectionEdge = {
  __typename?: 'VisibleProductToTaxonomyConnectionEdge';
  node?: Maybe<Taxonomy>;
};

export type WpPageInfo = {
  __typename?: 'WPPageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  seo?: Maybe<SeoPostTypePageInfo>;
  startCursor?: Maybe<Scalars['String']>;
  total?: Maybe<Scalars['Int']>;
};

export type WriteReviewInput = {
  approved?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  authorEmail?: Maybe<Scalars['String']>;
  authorUrl?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
  commentOn?: Maybe<Scalars['Int']>;
  content?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['String']>;
  parent?: Maybe<Scalars['ID']>;
  rating: Scalars['Int'];
};

export type WriteReviewPayload = {
  __typename?: 'WriteReviewPayload';
  clientMutationId?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Float']>;
  review?: Maybe<Comment>;
};

export type WritingSettings = {
  __typename?: 'WritingSettings';
  defaultCategory?: Maybe<Scalars['Int']>;
  defaultPostFormat?: Maybe<Scalars['String']>;
  useSmilies?: Maybe<Scalars['Boolean']>;
};

export type EntitySeoFragment = { __typename?: 'PostTypeSEO', title?: Maybe<string>, metaDesc?: Maybe<string>, metaKeywords?: Maybe<string>, opengraphDescription?: Maybe<string>, opengraphImage?: Maybe<{ __typename?: 'MediaItem', sourceUrl?: Maybe<string> }>, breadcrumbs?: Maybe<Array<Maybe<{ __typename?: 'SEOPostTypeBreadcrumbs', text?: Maybe<string>, url?: Maybe<string> }>>>, schema?: Maybe<{ __typename?: 'SEOPostTypeSchema', raw?: Maybe<string> }> };

export type MediaItemFragment = { __typename?: 'MediaItem', id: string, altText?: Maybe<string>, title?: Maybe<string>, sourceUrl?: Maybe<string>, mediumUrl?: Maybe<string>, mediumLargeUrl?: Maybe<string>, largeUrl?: Maybe<string> };

export type PostCardFragment = { __typename: 'Post', id: string, slug?: Maybe<string>, title?: Maybe<string>, date?: Maybe<string>, modified?: Maybe<string>, link?: Maybe<string>, author?: Maybe<{ __typename?: 'NodeWithAuthorToUserConnectionEdge', node?: Maybe<{ __typename?: 'User', id: string, name?: Maybe<string> }> }>, categories?: Maybe<{ __typename?: 'PostToCategoryConnection', nodes?: Maybe<Array<Maybe<{ __typename?: 'Category', id: string, link?: Maybe<string>, name?: Maybe<string> }>>> }>, tags?: Maybe<{ __typename?: 'PostToTagConnection', nodes?: Maybe<Array<Maybe<{ __typename?: 'Tag', id: string, link?: Maybe<string>, name?: Maybe<string> }>>> }>, featuredImage?: Maybe<{ __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge', node?: Maybe<(
      { __typename?: 'MediaItem' }
      & MediaItemFragment
    )> }> };

export type PostCardListFragment = { __typename?: 'RootQueryToPostConnection', edges?: Maybe<Array<Maybe<{ __typename?: 'RootQueryToPostConnectionEdge', node?: Maybe<(
      { __typename?: 'Post' }
      & PostCardFragment
    )> }>>> };

export type ProductCard_ExternalProduct_Fragment = { __typename: 'ExternalProduct', salePrice?: Maybe<string>, regularPrice?: Maybe<string>, price?: Maybe<string>, id: string, slug?: Maybe<string>, link?: Maybe<string>, name?: Maybe<string>, featured?: Maybe<boolean>, image?: Maybe<(
    { __typename?: 'MediaItem' }
    & MediaItemFragment
  )>, attributes?: Maybe<{ __typename?: 'ProductToProductAttributeConnection', nodes?: Maybe<Array<Maybe<{ __typename?: 'GlobalProductAttribute', id: string, label: string, name: string } | { __typename?: 'LocalProductAttribute', id: string, label: string, name: string }>>> }> };

export type ProductCard_GroupProduct_Fragment = { __typename: 'GroupProduct', id: string, slug?: Maybe<string>, link?: Maybe<string>, name?: Maybe<string>, featured?: Maybe<boolean>, image?: Maybe<(
    { __typename?: 'MediaItem' }
    & MediaItemFragment
  )>, attributes?: Maybe<{ __typename?: 'ProductToProductAttributeConnection', nodes?: Maybe<Array<Maybe<{ __typename?: 'GlobalProductAttribute', id: string, label: string, name: string } | { __typename?: 'LocalProductAttribute', id: string, label: string, name: string }>>> }> };

export type ProductCard_SimpleProduct_Fragment = { __typename: 'SimpleProduct', salePrice?: Maybe<string>, regularPrice?: Maybe<string>, price?: Maybe<string>, id: string, slug?: Maybe<string>, link?: Maybe<string>, name?: Maybe<string>, featured?: Maybe<boolean>, image?: Maybe<(
    { __typename?: 'MediaItem' }
    & MediaItemFragment
  )>, attributes?: Maybe<{ __typename?: 'ProductToProductAttributeConnection', nodes?: Maybe<Array<Maybe<{ __typename?: 'GlobalProductAttribute', id: string, label: string, name: string } | { __typename?: 'LocalProductAttribute', id: string, label: string, name: string }>>> }> };

export type ProductCard_VariableProduct_Fragment = { __typename: 'VariableProduct', salePrice?: Maybe<string>, regularPrice?: Maybe<string>, price?: Maybe<string>, id: string, slug?: Maybe<string>, link?: Maybe<string>, name?: Maybe<string>, featured?: Maybe<boolean>, image?: Maybe<(
    { __typename?: 'MediaItem' }
    & MediaItemFragment
  )>, attributes?: Maybe<{ __typename?: 'ProductToProductAttributeConnection', nodes?: Maybe<Array<Maybe<{ __typename?: 'GlobalProductAttribute', id: string, label: string, name: string } | { __typename?: 'LocalProductAttribute', id: string, label: string, name: string }>>> }> };

export type ProductCardFragment = ProductCard_ExternalProduct_Fragment | ProductCard_GroupProduct_Fragment | ProductCard_SimpleProduct_Fragment | ProductCard_VariableProduct_Fragment;

export type ProductCardListFragment = { __typename?: 'ProductCategoryToProductConnection', edges?: Maybe<Array<Maybe<{ __typename?: 'ProductCategoryToProductConnectionEdge', node?: Maybe<(
      { __typename?: 'ExternalProduct' }
      & ProductCard_ExternalProduct_Fragment
    ) | (
      { __typename?: 'GroupProduct' }
      & ProductCard_GroupProduct_Fragment
    ) | (
      { __typename?: 'SimpleProduct' }
      & ProductCard_SimpleProduct_Fragment
    ) | (
      { __typename?: 'VariableProduct' }
      & ProductCard_VariableProduct_Fragment
    )> }>>> };

export type TermNode_Category_Fragment = { __typename: 'Category', id: string, slug?: Maybe<string>, name?: Maybe<string>, termTaxonomyId?: Maybe<number> };

export type TermNode_Gender_Fragment = { __typename: 'Gender', id: string, slug?: Maybe<string>, name?: Maybe<string>, termTaxonomyId?: Maybe<number> };

export type TermNode_PaColor_Fragment = { __typename: 'PaColor', id: string, slug?: Maybe<string>, name?: Maybe<string>, termTaxonomyId?: Maybe<number> };

export type TermNode_PaSize_Fragment = { __typename: 'PaSize', id: string, slug?: Maybe<string>, name?: Maybe<string>, termTaxonomyId?: Maybe<number> };

export type TermNode_PostFormat_Fragment = { __typename: 'PostFormat', id: string, slug?: Maybe<string>, name?: Maybe<string>, termTaxonomyId?: Maybe<number> };

export type TermNode_ProductCategory_Fragment = { __typename: 'ProductCategory', id: string, slug?: Maybe<string>, name?: Maybe<string>, termTaxonomyId?: Maybe<number> };

export type TermNode_ProductTag_Fragment = { __typename: 'ProductTag', id: string, slug?: Maybe<string>, name?: Maybe<string>, termTaxonomyId?: Maybe<number> };

export type TermNode_ProductType_Fragment = { __typename: 'ProductType', id: string, slug?: Maybe<string>, name?: Maybe<string>, termTaxonomyId?: Maybe<number> };

export type TermNode_ShippingClass_Fragment = { __typename: 'ShippingClass', id: string, slug?: Maybe<string>, name?: Maybe<string>, termTaxonomyId?: Maybe<number> };

export type TermNode_Tag_Fragment = { __typename: 'Tag', id: string, slug?: Maybe<string>, name?: Maybe<string>, termTaxonomyId?: Maybe<number> };

export type TermNode_VisibleProduct_Fragment = { __typename: 'VisibleProduct', id: string, slug?: Maybe<string>, name?: Maybe<string>, termTaxonomyId?: Maybe<number> };

export type TermNodeFragment = TermNode_Category_Fragment | TermNode_Gender_Fragment | TermNode_PaColor_Fragment | TermNode_PaSize_Fragment | TermNode_PostFormat_Fragment | TermNode_ProductCategory_Fragment | TermNode_ProductTag_Fragment | TermNode_ProductType_Fragment | TermNode_ShippingClass_Fragment | TermNode_Tag_Fragment | TermNode_VisibleProduct_Fragment;

export type AppQueryVariables = Exact<{ [key: string]: never; }>;


export type AppQuery = { __typename?: 'RootQuery', config?: Maybe<{ __typename?: 'Config', content?: Maybe<string> }>, allSettings?: Maybe<{ __typename?: 'Settings', generalSettingsTitle?: Maybe<string>, generalSettingsDescription?: Maybe<string> }>, terms?: Maybe<{ __typename?: 'RootQueryToTermNodeConnection', nodes?: Maybe<Array<Maybe<(
      { __typename?: 'Category' }
      & TermNode_Category_Fragment
    ) | (
      { __typename?: 'Gender' }
      & TermNode_Gender_Fragment
    ) | (
      { __typename?: 'PaColor' }
      & TermNode_PaColor_Fragment
    ) | (
      { __typename?: 'PaSize' }
      & TermNode_PaSize_Fragment
    ) | (
      { __typename?: 'PostFormat' }
      & TermNode_PostFormat_Fragment
    ) | (
      { __typename?: 'ProductCategory' }
      & TermNode_ProductCategory_Fragment
    ) | (
      { __typename?: 'ProductTag' }
      & TermNode_ProductTag_Fragment
    ) | (
      { __typename?: 'ProductType' }
      & TermNode_ProductType_Fragment
    ) | (
      { __typename?: 'ShippingClass' }
      & TermNode_ShippingClass_Fragment
    ) | (
      { __typename?: 'Tag' }
      & TermNode_Tag_Fragment
    ) | (
      { __typename?: 'VisibleProduct' }
      & TermNode_VisibleProduct_Fragment
    )>>> }> };

export type GenderPageQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type GenderPageQuery = { __typename?: 'RootQuery', products?: Maybe<{ __typename?: 'RootQueryToProductConnection', edges?: Maybe<Array<Maybe<{ __typename?: 'RootQueryToProductConnectionEdge', node?: Maybe<(
        { __typename?: 'ExternalProduct' }
        & ProductCard_ExternalProduct_Fragment
      ) | (
        { __typename?: 'GroupProduct' }
        & ProductCard_GroupProduct_Fragment
      ) | (
        { __typename?: 'SimpleProduct' }
        & ProductCard_SimpleProduct_Fragment
      ) | (
        { __typename?: 'VariableProduct' }
        & ProductCard_VariableProduct_Fragment
      )> }>>> }> };

export type HomePageQueryVariables = Exact<{ [key: string]: never; }>;


export type HomePageQuery = { __typename?: 'RootQuery', config?: Maybe<{ __typename?: 'Config', content?: Maybe<string> }>, allSettings?: Maybe<{ __typename?: 'Settings', generalSettingsTitle?: Maybe<string>, generalSettingsDescription?: Maybe<string> }>, posts?: Maybe<(
    { __typename?: 'RootQueryToPostConnection' }
    & PostCardListFragment
  )>, productCategories?: Maybe<{ __typename?: 'RootQueryToProductCategoryConnection', edges?: Maybe<Array<Maybe<{ __typename?: 'RootQueryToProductCategoryConnectionEdge', node?: Maybe<{ __typename?: 'ProductCategory', id: string, name?: Maybe<string>, products?: Maybe<(
          { __typename?: 'ProductCategoryToProductConnection' }
          & ProductCardListFragment
        )> }> }>>>, pageInfo?: Maybe<{ __typename?: 'WPPageInfo', startCursor?: Maybe<string>, hasPreviousPage: boolean, hasNextPage: boolean, endCursor?: Maybe<string> }> }> };

export type PostPageQueryVariables = Exact<{
  slug: Scalars['ID'];
}>;


export type PostPageQuery = { __typename?: 'RootQuery', post?: Maybe<{ __typename?: 'Post', id: string, slug?: Maybe<string>, title?: Maybe<string>, content?: Maybe<string>, featuredImage?: Maybe<{ __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge', node?: Maybe<{ __typename?: 'MediaItem', sourceUrl?: Maybe<string> }> }>, seo?: Maybe<(
      { __typename?: 'PostTypeSEO' }
      & EntitySeoFragment
    )> }> };

export type PostsPageQueryVariables = Exact<{
  where?: Maybe<RootQueryToPostConnectionWhereArgs>;
}>;


export type PostsPageQuery = { __typename?: 'RootQuery', posts?: Maybe<{ __typename?: 'RootQueryToPostConnection', edges?: Maybe<Array<Maybe<{ __typename?: 'RootQueryToPostConnectionEdge', node?: Maybe<(
        { __typename?: 'Post' }
        & PostCardFragment
      )> }>>>, pageInfo?: Maybe<{ __typename?: 'WPPageInfo', total?: Maybe<number> }> }> };

export type ProductPageQueryVariables = Exact<{
  slug: Scalars['ID'];
}>;


export type ProductPageQuery = { __typename: 'RootQuery', product?: Maybe<(
    { __typename?: 'ExternalProduct', galleryImages?: Maybe<{ __typename?: 'ProductToMediaItemConnection', nodes?: Maybe<Array<Maybe<(
        { __typename?: 'MediaItem' }
        & MediaItemFragment
      )>>> }>, attributes?: Maybe<{ __typename?: 'ProductToProductAttributeConnection', nodes?: Maybe<Array<Maybe<{ __typename?: 'GlobalProductAttribute', id: string, label: string, variation: boolean, visible: boolean, options?: Maybe<Array<Maybe<string>>> } | { __typename?: 'LocalProductAttribute', id: string, label: string, variation: boolean, visible: boolean, options?: Maybe<Array<Maybe<string>>> }>>> }>, seo?: Maybe<(
      { __typename?: 'PostTypeSEO' }
      & EntitySeoFragment
    )>, related?: Maybe<{ __typename?: 'ProductToProductConnection', nodes?: Maybe<Array<Maybe<(
        { __typename?: 'ExternalProduct' }
        & ProductCard_ExternalProduct_Fragment
      ) | (
        { __typename?: 'GroupProduct' }
        & ProductCard_GroupProduct_Fragment
      ) | (
        { __typename?: 'SimpleProduct' }
        & ProductCard_SimpleProduct_Fragment
      ) | (
        { __typename?: 'VariableProduct' }
        & ProductCard_VariableProduct_Fragment
      )>>> }> }
    & ProductCard_ExternalProduct_Fragment
  ) | (
    { __typename?: 'GroupProduct', galleryImages?: Maybe<{ __typename?: 'ProductToMediaItemConnection', nodes?: Maybe<Array<Maybe<(
        { __typename?: 'MediaItem' }
        & MediaItemFragment
      )>>> }>, attributes?: Maybe<{ __typename?: 'ProductToProductAttributeConnection', nodes?: Maybe<Array<Maybe<{ __typename?: 'GlobalProductAttribute', id: string, label: string, variation: boolean, visible: boolean, options?: Maybe<Array<Maybe<string>>> } | { __typename?: 'LocalProductAttribute', id: string, label: string, variation: boolean, visible: boolean, options?: Maybe<Array<Maybe<string>>> }>>> }>, seo?: Maybe<(
      { __typename?: 'PostTypeSEO' }
      & EntitySeoFragment
    )>, related?: Maybe<{ __typename?: 'ProductToProductConnection', nodes?: Maybe<Array<Maybe<(
        { __typename?: 'ExternalProduct' }
        & ProductCard_ExternalProduct_Fragment
      ) | (
        { __typename?: 'GroupProduct' }
        & ProductCard_GroupProduct_Fragment
      ) | (
        { __typename?: 'SimpleProduct' }
        & ProductCard_SimpleProduct_Fragment
      ) | (
        { __typename?: 'VariableProduct' }
        & ProductCard_VariableProduct_Fragment
      )>>> }> }
    & ProductCard_GroupProduct_Fragment
  ) | (
    { __typename?: 'SimpleProduct', galleryImages?: Maybe<{ __typename?: 'ProductToMediaItemConnection', nodes?: Maybe<Array<Maybe<(
        { __typename?: 'MediaItem' }
        & MediaItemFragment
      )>>> }>, attributes?: Maybe<{ __typename?: 'ProductToProductAttributeConnection', nodes?: Maybe<Array<Maybe<{ __typename?: 'GlobalProductAttribute', id: string, label: string, variation: boolean, visible: boolean, options?: Maybe<Array<Maybe<string>>> } | { __typename?: 'LocalProductAttribute', id: string, label: string, variation: boolean, visible: boolean, options?: Maybe<Array<Maybe<string>>> }>>> }>, seo?: Maybe<(
      { __typename?: 'PostTypeSEO' }
      & EntitySeoFragment
    )>, related?: Maybe<{ __typename?: 'ProductToProductConnection', nodes?: Maybe<Array<Maybe<(
        { __typename?: 'ExternalProduct' }
        & ProductCard_ExternalProduct_Fragment
      ) | (
        { __typename?: 'GroupProduct' }
        & ProductCard_GroupProduct_Fragment
      ) | (
        { __typename?: 'SimpleProduct' }
        & ProductCard_SimpleProduct_Fragment
      ) | (
        { __typename?: 'VariableProduct' }
        & ProductCard_VariableProduct_Fragment
      )>>> }> }
    & ProductCard_SimpleProduct_Fragment
  ) | (
    { __typename?: 'VariableProduct', salePrice?: Maybe<string>, regularPrice?: Maybe<string>, price?: Maybe<string>, variations?: Maybe<{ __typename?: 'VariableProductToProductVariationConnection', nodes?: Maybe<Array<Maybe<{ __typename?: 'ProductVariation', attributes?: Maybe<{ __typename?: 'ProductVariationToVariationAttributeConnection', nodes?: Maybe<Array<Maybe<{ __typename?: 'VariationAttribute', id: string, label?: Maybe<string>, value?: Maybe<string> }>>> }> }>>> }>, galleryImages?: Maybe<{ __typename?: 'ProductToMediaItemConnection', nodes?: Maybe<Array<Maybe<(
        { __typename?: 'MediaItem' }
        & MediaItemFragment
      )>>> }>, attributes?: Maybe<{ __typename?: 'ProductToProductAttributeConnection', nodes?: Maybe<Array<Maybe<{ __typename?: 'GlobalProductAttribute', id: string, label: string, variation: boolean, visible: boolean, options?: Maybe<Array<Maybe<string>>> } | { __typename?: 'LocalProductAttribute', id: string, label: string, variation: boolean, visible: boolean, options?: Maybe<Array<Maybe<string>>> }>>> }>, seo?: Maybe<(
      { __typename?: 'PostTypeSEO' }
      & EntitySeoFragment
    )>, related?: Maybe<{ __typename?: 'ProductToProductConnection', nodes?: Maybe<Array<Maybe<(
        { __typename?: 'ExternalProduct' }
        & ProductCard_ExternalProduct_Fragment
      ) | (
        { __typename?: 'GroupProduct' }
        & ProductCard_GroupProduct_Fragment
      ) | (
        { __typename?: 'SimpleProduct' }
        & ProductCard_SimpleProduct_Fragment
      ) | (
        { __typename?: 'VariableProduct' }
        & ProductCard_VariableProduct_Fragment
      )>>> }> }
    & ProductCard_VariableProduct_Fragment
  )> };

export type ProductsPageQueryVariables = Exact<{
  where?: Maybe<RootQueryToProductConnectionWhereArgs>;
}>;


export type ProductsPageQuery = { __typename?: 'RootQuery', products?: Maybe<{ __typename?: 'RootQueryToProductConnection', edges?: Maybe<Array<Maybe<{ __typename?: 'RootQueryToProductConnectionEdge', node?: Maybe<(
        { __typename?: 'ExternalProduct' }
        & ProductCard_ExternalProduct_Fragment
      ) | (
        { __typename?: 'GroupProduct' }
        & ProductCard_GroupProduct_Fragment
      ) | (
        { __typename?: 'SimpleProduct' }
        & ProductCard_SimpleProduct_Fragment
      ) | (
        { __typename?: 'VariableProduct' }
        & ProductCard_VariableProduct_Fragment
      )> }>>>, pageInfo?: Maybe<{ __typename?: 'WPPageInfo', total?: Maybe<number> }> }> };

export type SearchPageQueryVariables = Exact<{
  where?: Maybe<RootQueryToProductConnectionWhereArgs>;
}>;


export type SearchPageQuery = { __typename?: 'RootQuery', products?: Maybe<{ __typename?: 'RootQueryToProductConnection', edges?: Maybe<Array<Maybe<{ __typename?: 'RootQueryToProductConnectionEdge', node?: Maybe<(
        { __typename?: 'ExternalProduct' }
        & ProductCard_ExternalProduct_Fragment
      ) | (
        { __typename?: 'GroupProduct' }
        & ProductCard_GroupProduct_Fragment
      ) | (
        { __typename?: 'SimpleProduct' }
        & ProductCard_SimpleProduct_Fragment
      ) | (
        { __typename?: 'VariableProduct' }
        & ProductCard_VariableProduct_Fragment
      )> }>>>, pageInfo?: Maybe<{ __typename?: 'WPPageInfo', total?: Maybe<number> }> }> };
