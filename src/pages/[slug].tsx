import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import graphQLClient from '../graphql/client'
import { GetPageBySlugQuery, GetPagesQuery } from '../graphql/generated/graphql'
import { GET_PAGES, GET_PAGE_BY_SLUG } from '../graphql/queries'
import { PageTemplate, PageTemplateProps } from '../templates/Pages'

const Page = ({ heading, body }: PageTemplateProps) => {
  const router = useRouter()

  //return a loading component for exemple
  if (router.isFallback) return null

  return <PageTemplate heading={heading} body={body} />
}

export const getStaticPaths = async () => {
  const { pages } = await graphQLClient.request<GetPagesQuery>(GET_PAGES, {
    first: 3
  })
  const paths = pages.map(({ slug }) => ({ params: { slug } }))

  return {
    paths,
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { page } = await graphQLClient.request<GetPageBySlugQuery>(
    GET_PAGE_BY_SLUG,
    {
      slug: `${params?.slug}`
    }
  )

  if (!page) return { notFound: true }

  return {
    props: {
      heading: page.heading,
      body: page.body.html
    },
    revalidate: 60 * 60 // 1 hour
  }
}

export default Page
