const API_BASE = "http://localhost:3001"

const getArtifacts = () => {
  const url = `${API_BASE}/artifacts`;

  return fetch(url)
    .then(response => response.json());
  // .then(artifacts => /artifacts);

}

export default {
  getArtifacts
};