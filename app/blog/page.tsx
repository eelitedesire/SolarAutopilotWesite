'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Calendar, Clock, ArrowRight } from 'lucide-react'

interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  coverImage?: string
  author: string
  publishedAt: string
  tags: string[]
}

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/blog')
      .then(res => res.json())
      .then(data => {
        setPosts(data)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-dark flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-dark">
      <Header />
      
      <section className="section-padding pt-32">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="heading-1 mb-6">
              Blog & <span className="text-primary">Updates</span>
            </h1>
            <p className="body-large text-text-secondary max-w-3xl mx-auto">
              Latest news, tutorials, and insights about solar energy management and AI optimization
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-interactive group"
              >
                {post.coverImage && (
                  <div className="w-full h-48 bg-dark-secondary rounded-lg mb-6 overflow-hidden">
                    <img 
                      src={post.coverImage} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                
                <div className="flex items-center gap-4 text-text-secondary body-small mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar size={14} />
                    <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                  </div>
                </div>

                <h2 className="heading-4 mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                
                <p className="body-base text-text-secondary mb-6">
                  {post.excerpt}
                </p>

                {post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {post.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <Link 
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all"
                >
                  Read More <ArrowRight size={16} />
                </Link>
              </motion.article>
            ))}
          </div>

          {posts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-text-secondary body-large">No blog posts yet. Check back soon!</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
