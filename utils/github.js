async function getRepoContent(owner, repo, path) {
    const response = await fetch(`https://raw.githubusercontent.com/${owner}/${repo}/master/${path}`);
    return response.text();
  }
  
  module.exports = {
    getRepoContent,
  };
  