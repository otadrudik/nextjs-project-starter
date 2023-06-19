import styled from 'styled-components'

export const Table = styled.table`
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
`
export const Td = styled.td`
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
`
export const Th = styled.th`
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
`
export const Tr = styled.tr`
  :first-child {
    background-color: lightblue;
  }
  :nth-child(even) {
    background-color: #f5f8ff;
  }
  :not(:first-child):hover {
    background-color: lightsteelblue;
  }
`
