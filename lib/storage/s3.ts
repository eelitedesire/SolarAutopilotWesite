import { S3Client, PutObjectCommand, DeleteObjectCommand, GetObjectCommand } from '@aws-sdk/client-s3'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'

const s3Client = new S3Client({
  region: 'auto',
  endpoint: process.env.STORAGE_ENDPOINT,
  credentials: {
    accessKeyId: process.env.STORAGE_ACCESS_KEY!,
    secretAccessKey: process.env.STORAGE_SECRET_KEY!,
  },
})

const BUCKET = process.env.STORAGE_BUCKET!
const PUBLIC_URL = process.env.STORAGE_PUBLIC_URL!

export async function uploadFile(file: File, key: string) {
  const buffer = Buffer.from(await file.arrayBuffer())
  
  await s3Client.send(
    new PutObjectCommand({
      Bucket: BUCKET,
      Key: key,
      Body: buffer,
      ContentType: file.type,
    })
  )

  return `${PUBLIC_URL}/${key}`
}

export async function deleteFile(key: string) {
  await s3Client.send(
    new DeleteObjectCommand({
      Bucket: BUCKET,
      Key: key,
    })
  )
}

export async function getDownloadUrl(key: string, expiresIn = 3600) {
  const command = new GetObjectCommand({
    Bucket: BUCKET,
    Key: key,
  })
  
  return await getSignedUrl(s3Client, command, { expiresIn })
}

export function generateFileKey(platform: string, version: string, filename: string) {
  return `downloads/${version}/${platform}/${filename}`
}
