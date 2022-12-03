import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import {
  GetPlaceBySlugQuery,
  GetPlacesQuery
} from '../../graphql/generated/graphql'
import { GET_PLACES, GET_PLACE_BY_SLUG } from '../../graphql/queries'
import { PlacesTemplate, PlacesTemplateProps } from '../../templates/Places'
import graphQLClient from '../../graphql/client'

const Place = ({ place }: PlacesTemplateProps) => {
  const router = useRouter()

  //return a loading component for exemple
  if (router.isFallback) return null

  return <PlacesTemplate place={place} />
}

export const getStaticPaths = async () => {
  const { places } = await graphQLClient.request<GetPlacesQuery>(GET_PLACES, {
    first: 3
  })
  const paths = places.map(({ slug }) => ({ params: { slug } }))

  return {
    paths,
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { place } = await graphQLClient.request<GetPlaceBySlugQuery>(
    GET_PLACE_BY_SLUG,
    {
      slug: `${params?.slug}`
    }
  )

  if (!place) return { notFound: true }

  return {
    props: {
      place
    },
    revalidate: 60 * 60 // 1 hour
  }
}

export default Place
