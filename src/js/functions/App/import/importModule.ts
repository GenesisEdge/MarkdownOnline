export default async function importModule(urls: string[]) {
  if (!Array.isArray(urls) || urls.length === 0) {
    throw new Error("A non-empty array of URLs must be provided.")
  }

  for (const url of urls) {
    try {
      const module = await import(/* @vite-ignore */ url)
      console.log("Successfully loaded module from ", url)
      return module.default || module
    } catch (error) {
      console.warn("Failed to load module from ", url)
    }
  }

  throw new Error("Failed to load module from all provided URLs.")
}
