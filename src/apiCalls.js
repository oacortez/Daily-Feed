const apiKey = process.env.REACT_APP_API_KEY

const api = () => {
  return fetch(`https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=${apiKey}`)
    .then(response => response.json())
}

export default api;