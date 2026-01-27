# API Documentation

## Authentication

All admin endpoints require authentication via NextAuth session.

```javascript
// Check authentication
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth/config'

const session = await getServerSession(authOptions)
if (!session) return Response.json({ error: 'Unauthorized' }, { status: 401 })
```

## Downloads API

### GET /api/downloads
Get all enabled downloads

**Response:**
```json
[
  {
    "id": "clx...",
    "platform": "windows",
    "version": "2.1.0",
    "filename": "SolarAutopilot-2.1.0-win64.exe",
    "fileUrl": "https://downloads.yourdomain.com/downloads/2.1.0/windows/...",
    "size": "45.2 MB",
    "enabled": true,
    "downloads": 1234,
    "createdAt": "2024-01-15T10:00:00Z"
  }
]
```

### POST /api/downloads
Upload new installer (Admin only)

**Request:** multipart/form-data
- file: File
- platform: string
- version: string
- checksum: string (optional)

**Response:**
```json
{
  "id": "clx...",
  "platform": "windows",
  "version": "2.1.0",
  "fileUrl": "https://downloads.yourdomain.com/..."
}
```

### PUT /api/downloads
Enable/disable download (Admin only)

**Request:**
```json
{
  "id": "clx...",
  "enabled": false
}
```

### DELETE /api/downloads?id=xxx
Delete download (Admin only)

## Blog API

### GET /api/blog
Get all published posts

**Query params:**
- slug: string (optional) - Get specific post

**Response:**
```json
[
  {
    "id": "clx...",
    "title": "Getting Started with SolarAutopilot",
    "slug": "getting-started",
    "excerpt": "Learn how to...",
    "content": "# Getting Started\n\n...",
    "coverImage": "https://...",
    "published": true,
    "tags": ["tutorial", "setup"],
    "author": "CARBONOZ Team",
    "publishedAt": "2024-01-15T10:00:00Z"
  }
]
```

### POST /api/blog
Create post (Admin only)

**Request:**
```json
{
  "title": "Post Title",
  "slug": "post-title",
  "excerpt": "Short description",
  "content": "# Markdown content",
  "coverImage": "https://...",
  "published": true,
  "tags": ["tag1", "tag2"]
}
```

### PUT /api/blog
Update post (Admin only)

**Request:**
```json
{
  "id": "clx...",
  "title": "Updated Title",
  "published": true
}
```

### DELETE /api/blog?id=xxx
Delete post (Admin only)

## Changelog API

### GET /api/changelog
Get all published changelogs

**Response:**
```json
[
  {
    "id": "clx...",
    "version": "2.1.0",
    "title": "Major Update",
    "content": "## New Features\n- Feature 1\n- Feature 2",
    "type": "release",
    "releaseDate": "2024-01-15T00:00:00Z"
  }
]
```

### POST /api/changelog
Create changelog (Admin only)

**Request:**
```json
{
  "version": "2.1.0",
  "title": "Major Update",
  "content": "## Changes\n...",
  "type": "release",
  "releaseDate": "2024-01-15T00:00:00Z"
}
```

## Roadmap API

### GET /api/roadmap
Get all enabled roadmap items

**Response:**
```json
[
  {
    "id": "clx...",
    "title": "Multi-inverter support",
    "description": "Support for multiple inverters",
    "status": "in-progress",
    "priority": "high",
    "category": "Features",
    "targetDate": "2024-06-01T00:00:00Z"
  }
]
```

### POST /api/roadmap
Create roadmap item (Admin only)

**Request:**
```json
{
  "title": "Feature name",
  "description": "Description",
  "status": "planned",
  "priority": "medium",
  "category": "Features",
  "order": 0
}
```

## Contact API

### POST /api/contact
Submit contact form (Public)

**Request:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Question about...",
  "message": "I would like to know..."
}
```

**Response:**
```json
{
  "success": true
}
```

## Pages API

### GET /api/pages?slug=about
Get page content

**Response:**
```json
{
  "id": "clx...",
  "slug": "about",
  "title": "About Us",
  "content": "# About\n\nContent...",
  "published": true
}
```

### PUT /api/pages
Update page (Admin only)

**Request:**
```json
{
  "slug": "about",
  "title": "About Us",
  "content": "# Updated content"
}
```

## Error Responses

All endpoints return consistent error format:

```json
{
  "error": "Error message"
}
```

**Status codes:**
- 200: Success
- 400: Bad Request
- 401: Unauthorized
- 404: Not Found
- 500: Server Error

## Rate Limiting

Recommended implementation:

```javascript
// middleware.ts
import { Ratelimit } from '@upstash/ratelimit'
import { Redis } from '@upstash/redis'

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(10, '10 s'),
})

export async function middleware(request: Request) {
  const ip = request.headers.get('x-forwarded-for') ?? 'anonymous'
  const { success } = await ratelimit.limit(ip)
  
  if (!success) {
    return new Response('Rate limit exceeded', { status: 429 })
  }
}
```

## Webhooks (Future)

Plan to add webhooks for:
- New download uploaded
- Blog post published
- Contact form submitted

```json
{
  "event": "download.created",
  "data": {
    "id": "clx...",
    "platform": "windows",
    "version": "2.1.0"
  },
  "timestamp": "2024-01-15T10:00:00Z"
}
```
