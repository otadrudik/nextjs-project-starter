import { PropsWithChildren } from 'react'
import * as S from './styled'

type Props = PropsWithChildren<{
  data: object
}>
interface paginationOtions {
  paginationSelect?: number[]
  activePage?: number
  setActivePage?: any
}

const renderPaginationItems = (data: paginationOtions) => {
  return data.paginationSelect?.map((item, index) => {
    if (data.activePage === index) {
      return (
        <S.CounterSet key={index} onClick={() => data.setActivePage(index)}>
          {item + 1}
        </S.CounterSet>
      )
    } else
      return (
        <S.Counter key={index} onClick={() => data.setActivePage(index)}>
          {item + 1}
        </S.Counter>
      )
  })
}
const Pagination: React.FC<Props> = ({ data }: any) => {
  return <S.Cover>{renderPaginationItems(data)}</S.Cover>
}

export default Pagination
