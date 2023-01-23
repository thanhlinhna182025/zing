import { Fragment } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from '~/layouts/MainLayout'
import { PublicRoutes } from '~/RoutesData'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {PublicRoutes.map((route, index) => {
          let Layout = MainLayout
          if (route.layout) {
            Layout = route.layout
          } else if (route.layout === null) {
            Layout = Fragment
          }
          const Page = route.element
          const path = route.path
          return (
            <Route
              key={route.path}
              path={path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          )
        })}
      </Routes>
    </BrowserRouter>
  )
}

export default App
