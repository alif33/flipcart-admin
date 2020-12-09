import React from 'react'
import Layout from '../../components/layout/index'
import { Jumbotron } from 'react-bootstrap'

const Home = props =>{
  return(
    <Layout>
      <Jumbotron style={{ margin: '5rem', background: '#fff' }}className="text-center">
        <h1>Welcome to our dashboard</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
      </Jumbotron>
    </Layout>
  )
}

export default Home