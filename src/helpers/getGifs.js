export const getGifs = async (category) => {
  const q = encodeURI(category);
  const limit = 20;
  const api_key = "pqKdrBwIlqvaYoTC3BSY6BEvfMEJHM8E";

  const url = `https://api.giphy.com/v1/gifs/search?q=${q}&limit=${limit}&api_key=${api_key}`;
  const response = await fetch(url);
  const { data } = await response.json();

  const gifs = data.map((image) => {
    return {
      id: image.id,
      title: image.title.replace(/GIF/g, ""),
      url: image.images?.downsized_medium.url,
    };
  });

  return gifs;
};
