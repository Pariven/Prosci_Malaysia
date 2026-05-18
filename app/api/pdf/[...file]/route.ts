import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET(_req: Request, { params }: { params: { file?: string[] } }) {
  const parts = params?.file ?? []
  const fileName = parts.join('/')
  const decoded = decodeURIComponent(fileName)
  const filePath = path.join(process.cwd(), 'pdf', decoded)

  try {
    const stat = await fs.promises.stat(filePath)
    if (!stat.isFile()) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 })
    }

    const buffer = await fs.promises.readFile(filePath)
    return new NextResponse(buffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="${path.basename(decoded)}"`,
      },
    })
  } catch (err) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  }
}
