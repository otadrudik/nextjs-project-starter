import { PropsWithChildren } from 'react'
import * as S from './styled'

type Props = PropsWithChildren<{ data: object }>
interface planetOptions {
  name?: string
  rotation_period?: string
  orbital_period?: string
  diameter?: string
  climate?: string
  gravity?: string
  terrain?: string
  surface_water?: number
  population?: number
  residents?: string[]
  films?: string[]
  created?: string
  edited?: string
  url?: string
}

const getPlanetRows = (data: planetOptions[]) => {
  return data?.map((planet: planetOptions, index: number) => {
    return (
      <S.Tr key={index}>
        <S.Td>{planet.name}</S.Td>
        <S.Td>{planet.climate}</S.Td>
        <S.Td>{planet.population}</S.Td>
        <S.Td>{planet.terrain}</S.Td>
        <S.Td>
          <a href=''>Detail (not implemented) </a>
        </S.Td>
      </S.Tr>
    )
  })
}

const Table: React.FC<Props> = ({ data }: any) => {
  return (
    <S.Table>
      <tbody>
        <S.Tr>
          <S.Th>Name</S.Th>
          <S.Th>Climate</S.Th>
          <S.Th>Population</S.Th>
          <S.Th>Terrain</S.Th>
          <S.Th></S.Th>
        </S.Tr>
        {getPlanetRows(data)}
      </tbody>
    </S.Table>
  )
}

export default Table
