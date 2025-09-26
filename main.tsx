import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Layout from '@/components/Layout'
import ResearchIndex from '@/pages/ResearchIndex'
import ResearchPost from '@/pages/ResearchPost'
import BlogIndex from '@/pages/BlogIndex'
import BlogPost from '@/pages/BlogPost'
import Footer from '@/components/Footer'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route
          path="/research"
          element={(
            <Layout>
              <ResearchIndex />
              <Footer />
            </Layout>
          )}
        />
        <Route
          path="/research/:slug"
          element={(
            <Layout>
              <ResearchPost />
              <Footer />
            </Layout>
          )}
        />
        <Route
          path="/blog"
          element={(
            <Layout>
              <BlogIndex />
              <Footer />
            </Layout>
          )}
        />
        <Route
          path="/blog/:slug"
          element={(
            <Layout>
              <BlogPost />
              <Footer />
            </Layout>
          )}
        />
      </Routes>
    </HashRouter>
  </React.StrictMode>
)
