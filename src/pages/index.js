import React from "react"
import { Link } from "gatsby"


import Layout from "../components/layout";
import Home from '../components/Home';
import Who from '../components/Who';


const IndexPage = () => (
  <Layout>
    <Home/>
    <Who/>
  </Layout>
)

export default IndexPage
