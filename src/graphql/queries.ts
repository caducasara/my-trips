import { gql } from 'graphql-request'

export const GET_PAGES = gql`
  query GetPages($first: Int) {
    pages(first: $first) {
      id
      heading
      slug
      body {
        html
      }
    }
  }
`

export const GET_PAGE_BY_SLUG = gql`
  query getPageBySlug($slug: String) {
    page(where: { slug: $slug }) {
      id
      heading
      body {
        html
      }
    }
  }
`

export const GET_PLACES = gql`
  query getPlaces {
    places {
      id
      slug
      name
      location {
        latitude
        longitude
      }
      description {
        html
      }
      gallery {
        url
        width
        height
      }
    }
  }
`
