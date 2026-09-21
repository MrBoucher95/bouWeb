const PROJECT_MAP = import.meta.glob('../assets/img/project/*.{png,jpg,jpeg,webp}', {
  eager: true,
  import: 'default',
})

function fileName(path) {
  return path.split('/').pop() ?? path
}

function byName(a, b) {
  return a[0].localeCompare(b[0], undefined, { numeric: true })
}

const ads = []
const shots = []

for (const [path, src] of Object.entries(PROJECT_MAP)) {
  if (!src) continue
  const name = fileName(path)
  if (name.toLowerCase().startsWith('googleadd')) ads.push([name, src])
  else shots.push([name, src])
}

ads.sort(byName)
shots.sort(byName)

const mixed = []
const longest = Math.max(ads.length, shots.length)
for (let i = 0; i < longest; i += 1) {
  if (shots[i]) mixed.push(shots[i][1])
  if (ads[i]) mixed.push(ads[i][1])
}

export const PROJECT_IMAGES = mixed
