import type { Schema, Attribute } from '@strapi/strapi';

export interface WishlistWishlist extends Schema.Component {
  collectionName: 'components_wishlist_wishlists';
  info: {
    displayName: 'wishlist';
    icon: 'heart';
    description: '';
  };
  attributes: {
    products: Attribute.Relation<
      'wishlist.wishlist',
      'oneToMany',
      'api::product.product'
    >;
  };
}

export interface ReviewReviews extends Schema.Component {
  collectionName: 'components_review_reviews';
  info: {
    displayName: 'reviews';
  };
  attributes: {
    accounts: Attribute.Relation<
      'review.reviews',
      'oneToOne',
      'api::accounte.accounte'
    >;
    comment: Attribute.Text;
    rate: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
          max: 5;
        },
        number
      >;
  };
}

export interface ProductProducts extends Schema.Component {
  collectionName: 'components_product_products';
  info: {
    displayName: 'products';
    icon: 'cube';
    description: '';
  };
  attributes: {
    product: Attribute.Relation<
      'product.products',
      'oneToOne',
      'api::product.product'
    >;
    color: Attribute.String & Attribute.Required;
    count: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
  };
}

export interface ColorColors extends Schema.Component {
  collectionName: 'components_color_colors';
  info: {
    displayName: 'colors';
    icon: 'brush';
    description: '';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    example: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true> &
      Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'wishlist.wishlist': WishlistWishlist;
      'review.reviews': ReviewReviews;
      'product.products': ProductProducts;
      'color.colors': ColorColors;
    }
  }
}
