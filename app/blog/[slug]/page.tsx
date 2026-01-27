'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import ReactMarkdown from 'react-markdown'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Calendar, User, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

interface BlogPost {
  id: string
  title: string
  content: string
  coverImage?: string
  author: string
  publishedAt: string
  tags: string[]
}

export default function BlogPostPage() {
  const params = useParams()
  const [post, setPost] = useState<BlogPost | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`/api/blog?slug=${params.slug}`)
      .then(res => res.json())
      .then(data => {
        setPost(data)
        setLoading(false)
      })
  }, [params.slug])

  if (loading) {
    return (
      <div className="min-h-screen bg-dark flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-dark flex items-center justify-center">
        <div className="text-center">
          <h1 className="heading-2 mb-4">Post Not Found</h1>
          <Link href="/blog" className="btn-primary">Back to Blog</Link>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-dark">
      <Header />
      
      <article className="section-padding pt-32">
        <div className="max-w-4xl mx-auto px-6">
          <Link href="/blog" className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all mb-8">
            <ArrowLeft size={16} /> Back to Blog
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {post.coverImage && (
              <div className="w-full h-96 bg-dark-secondary rounded-lg mb-8 overflow-hidden">
                <img 
                  src={post.coverImage} 
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            <div className="flex items-center gap-6 text-text-secondary body-small mb-6">
              <div className="flex items-center gap-2">
                <Calendar size={14} />
                <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-2">
                <User size={14} />
                <span>{post.author}</span>
              </div>
            </div>

            <h1 className="heading-1 mb-8">{post.title}</h1>

            {post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-8">
                {post.tags.map(tag => (
                  <span key={tag} className="px-4 py-2 bg-primary/10 text-primary rounded-full body-small">
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <div className="prose prose-invert prose-lg max-w-none">
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>
          </motion.div>
        </div>
      </article>

      <Footer />
    </main>
  )
}
