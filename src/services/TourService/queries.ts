export const getTourDataQuery = (limit: number = 20) => {
    return `{ 
histories(limit: ${limit}) {
    flight {
      links {
        flickr_images
      }
      mission_name
    }
    id
    title
  }
}`
}
