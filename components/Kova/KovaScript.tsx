import { NextScript } from 'next/document'

type DocumentFiles = {
  sharedFiles: readonly string[]
  pageFiles: readonly string[]
  allFiles: readonly string[]
}

const isProduction = process.env.NODE_ENV === 'production'

export const isChunk = (scriptSrc: string | undefined) => {
  return scriptSrc ? scriptSrc.includes('static/chunks') : false
}

export const isStyles = (scriptSrc: string | undefined) => {
  return scriptSrc ? scriptSrc.includes('static/chunks/styles') : false
}

export class KovaScript extends NextScript {
  getScripts(files: DocumentFiles) {
    const scripts = super.getScripts(files)
    if (isProduction) {
      scripts.forEach((script) => {
        if (isStyles(script.props.src)) {
          script.props.async = false
        }
      })
    }
    return scripts
  }
}
