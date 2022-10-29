import { HomeTemplate } from '../templates/Home'
import { MapProps } from '../components/Map'
import { GetStaticProps } from 'next'
import graphQLClient from '../graphql/client'
import { GET_PLACES } from '../graphql/queries'
import { GetPlacesQuery } from '../graphql/generated/graphql'

export default function Home({ places }: MapProps) {
  return <HomeTemplate places={places} />
}

export const getStaticProps: GetStaticProps = async () => {
  const { places } = await graphQLClient.request<GetPlacesQuery>(GET_PLACES)

  return {
    props: {
      places
    }
  }
}
