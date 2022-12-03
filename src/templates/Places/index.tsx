import Image from 'next/image'
import { NextSeo } from 'next-seo'

import { CloseOutline } from '@styled-icons/evaicons-outline'
import { LinkWrapper } from '../../components/LinkWrapper'

import * as S from './styles'

interface ImageProps {
  url: string
  height: number
  width: number
}

export interface PlacesTemplateProps {
  place: {
    slug: string
    name: string
    description: {
      html: string
      text: string
    }
    gallery: ImageProps[]
  }
}

export const PlacesTemplate = ({ place }: PlacesTemplateProps) => {
  return (
    <>
      <NextSeo
        title={`${place.name} - My Trips`}
        description={place.description?.text}
        canonical="https://my-trips-rouge.vercel.app"
        openGraph={{
          url: 'https://my-trips-rouge.vercel.app',
          title: `${place.name} - My Trips`,
          description: place.description?.text,
          images: [
            {
              url: place.gallery[0].url,
              width: place.gallery[0].width,
              height: place.gallery[0].height,
              alt: `${place.name}`
            }
          ]
        }}
      />
      <LinkWrapper href="/">
        <CloseOutline size={32} aria-label="Go back to Map" />
      </LinkWrapper>
      <S.Wrapper>
        <S.Container>
          <S.Heading>{place.name}</S.Heading>
          <S.Body
            dangerouslySetInnerHTML={{ __html: place.description?.html || '' }}
          />
          <S.Gallery>
            {place?.gallery.map((image, index) => (
              <Image
                key={index}
                src={image.url}
                alt={place.name}
                width={1000}
                height={600}
                quality={75}
              />
            ))}
          </S.Gallery>
        </S.Container>
      </S.Wrapper>
    </>
  )
}
