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

export interface ShippingAddressShippingAddress extends Schema.Component {
  collectionName: 'components_shipping_address_shipping_addresses';
  info: {
    displayName: 'shipping-address';
    description: '';
  };
  attributes: {
    street: Attribute.String;
    country: Attribute.String;
    city: Attribute.String;
    state: Attribute.String;
    ZIPCode: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 5;
        maxLength: 10;
      }>;
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

export interface ContactInfoContactInformation extends Schema.Component {
  collectionName: 'components_contact_info_contact_informations';
  info: {
    displayName: 'contact information';
    description: '';
  };
  attributes: {
    firstName: Attribute.String & Attribute.Required;
    lastName: Attribute.String;
    phoneNumber: Attribute.String;
    email: Attribute.Email;
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

export interface ArticleSectionArticleSection extends Schema.Component {
  collectionName: 'components_article_section_article_sections';
  info: {
    displayName: 'articleSection';
  };
  attributes: {
    sectionTitle: Attribute.String & Attribute.Required;
    body: Attribute.Blocks & Attribute.Required;
    images: Attribute.Media<'images' | 'videos', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'wishlist.wishlist': WishlistWishlist;
      'shipping-address.shipping-address': ShippingAddressShippingAddress;
      'review.reviews': ReviewReviews;
      'product.products': ProductProducts;
      'contact-info.contact-information': ContactInfoContactInformation;
      'color.colors': ColorColors;
      'article-section.article-section': ArticleSectionArticleSection;
    }
  }
}
