import config from '@/config'

export function generateTitle(...titleSegments: string[]): string {
  titleSegments.push(config.name)
  return titleSegments.filter((t) => t).join(' - ')
}

type thumbnailOption = {
  height?: number
  width?: number
  interlace?: boolean
}

export function getThumbnail(url: string, options?: thumbnailOption) {
  const imgOptions = Object.assign({ width: 400, height: 600, interlace: true }, options)
  return `${url.replace('i.loyep.com', 'static.loyep.com')}?imageMogr2/thumbnail/${
    imgOptions.height
  }x${imgOptions.width}/interlace/${Number(imgOptions.interlace)}}`
}

export const isBrowser = () => typeof window !== 'undefined'
