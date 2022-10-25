import { render, screen } from '@testing-library/react'
import Map from '.'

describe('<Main />', () => {
  it('should render without any marker', () => {
    render(<Map />)

    expect(
      screen.getByRole('link', {
        name: /a javascript library for interactive maps/i
      })
    ).toBeInTheDocument()
  })

  it('should render with the marker in correct place', () => {
    const place = {
      id: '1',
      name: 'Parobé',
      slug: 'Parobé-rs',
      location: {
        latitude: 0,
        longitude: 0
      }
    }
    const secondPlace = {
      id: '2',
      name: 'Hawaii',
      slug: 'Hawaii - USA',
      location: {
        latitude: 50,
        longitude: -10
      }
    }

    render(<Map places={[place, secondPlace]} />)

    expect(screen.getByTitle(/Parobé/i)).toBeInTheDocument()
  })
})
