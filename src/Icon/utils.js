

export const getViewbox = (svg) => {
  const match = svg.match(/view[bB]ox=['"]([\s\S]*?)['"]/m)

  return match && match[1]
}

export const trimSvg = svg => svg.replace(/^<svg[^>]*>|<\/svg>$/g, '')
