import type { Schema, Attribute } from '@strapi/strapi';

export interface PropertiesMarketInfo extends Schema.Component {
  collectionName: 'components_properties_market_info';
  info: {
    name: 'marketInfo';
    description: 'Market information about the property';
  };
  attributes: {
    dateListed: Attribute.Date;
    dateSold: Attribute.Date;
    historicalPricingData: Attribute.Text;
  };
}

export interface PropertiesLocation extends Schema.Component {
  collectionName: 'components_properties_locations';
  info: {
    name: 'location';
    description: 'Property location details';
  };
  attributes: {
    address: Attribute.String;
    city: Attribute.String;
    state: Attribute.String;
    postalCode: Attribute.String;
    country: Attribute.String &
      Attribute.CustomField<'plugin::country-select.country'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    geo: Attribute.JSON;
  };
}

export interface PropertiesFeatures extends Schema.Component {
  collectionName: 'components_properties_features';
  info: {
    name: 'features';
    description: 'Luxury features and amenities of the property';
  };
  attributes: {
    pool: Attribute.String;
    gym: Attribute.Boolean;
    homeTheater: Attribute.Boolean;
    securityFeatures: Attribute.Boolean;
    smartHomeFeatures: Attribute.Boolean;
    additionalFacilities: Attribute.Text;
  };
}

export interface PropertiesDetails extends Schema.Component {
  collectionName: 'components_properties_details';
  info: {
    name: 'details';
    description: 'Detailed information about the property';
  };
  attributes: {
    bedrooms: Attribute.Integer;
    bathrooms: Attribute.Integer;
    totalArea: Attribute.Float;
    lotSize: Attribute.Float;
    yearBuilt: Attribute.Integer;
    propertyCondition: Attribute.String;
  };
}

export interface PropertiesAgent extends Schema.Component {
  collectionName: 'components_properties_agents';
  info: {
    name: 'agent';
    description: 'Real estate agent information for the property';
  };
  attributes: {
    name: Attribute.String;
    contactPhone: Attribute.String;
    email: Attribute.Email;
    agency: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'properties.market-info': PropertiesMarketInfo;
      'properties.location': PropertiesLocation;
      'properties.features': PropertiesFeatures;
      'properties.details': PropertiesDetails;
      'properties.agent': PropertiesAgent;
    }
  }
}
