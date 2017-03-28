

export const getDimensionsFromViewBox = (svg) => {
  const match = svg.match(/view[bB]ox=['"]([\s\S]*?)['"]/m)

  if (!match) return false

  const [, , width, height] = match[1].split(' ')

  return { width, height }
}

export const getInnerSvg = svg => svg.replace(/^<svg[^>]*>|<\/svg>$/g, '')
