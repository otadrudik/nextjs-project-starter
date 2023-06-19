import type { NextPage } from 'next'
import { useContext, useState } from 'react'
import Layout from 'src/components/Layout'
import Table from 'src/components/Table'
import Pagination from 'src/components/Pagination'
import AppContext from 'src/components/AppContext'
const PAGE_SIZE = 5

const PlanetsPage: NextPage = (props: any) => {
  //@viewOn:hooks
  const context: any = useContext(AppContext)
  const [activePage, setActivePage] = useState(0)
  //@viewOff:hooks

  const paginationData = {
    activePage,
    setActivePage,
    paginationSelect: Array.from(
      Array(Math.ceil(context.planetList.length / PAGE_SIZE)).keys()
    ),
  }
  const paginatedData: object[] = context.planetList.slice(
    activePage * PAGE_SIZE,
    activePage * PAGE_SIZE + PAGE_SIZE
  )
  return (
    <Layout>
      <Table data={paginatedData}></Table>
      <Pagination data={paginationData} />
      <button onClick={() => props.setReloadData(new Date().getTime())}>
        Reload
      </button>
    </Layout>
  )
}

export default PlanetsPage
