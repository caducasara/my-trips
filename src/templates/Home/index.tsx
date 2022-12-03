import dynamic from 'next/dynamic'
import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline'
import { NextSeo } from 'next-seo'

import { LinkWrapper } from '../../components/LinkWrapper'
import { MapProps } from '../../components/Map'
import { Subtitle } from '../../components/Subtitle'

const Map = dynamic(() => import('../../components/Map'), { ssr: false })

const siteDescription =
  'Hey everyone, this is my where I put all the places that I went, some photos and things and I enjoyed in those places. i hope you like it.'

export const HomeTemplate = ({ places }: MapProps) => {
  return (
    <>
      <NextSeo
        title="My Trips - Carlos Casara"
        description={siteDescription}
        canonical="https://my-trips.carloscasara.com.br"
        openGraph={{
          url: 'https://my-trips.carloscasara.com.br',
          title: 'My Trips - Carlos Casara',
          description: siteDescription,
          images: [
            {
              url: 'https://my-trips.carloscasara.com.br/img/cover.png',
              width: 1280,
              height: 720,
              alt: 'My Trips'
            }
          ],
          site_name: 'My Trips - Carlos Casara'
        }}
      />
      <LinkWrapper href="/about">
        <InfoOutline size={32} aria-label="About" />
      </LinkWrapper>
      <Map places={places} />
      <Subtitle />
    </>
  )
}
