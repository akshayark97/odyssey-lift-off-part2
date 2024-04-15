const resolvers = {
  Query: {
    // get all tracks, will be used to populate the homepage grid of our web client
    tracksForHome: (_, __, { dataSources }) => {
      return dataSources.trackAPI.getTracksForHome();
    },
    tracksForHomeFetch: async () => {
      // const baseURL = "https://odyssey-lift-off-rest-api.herokuapp.com";
      // const res = await fetch(`${baseURL}/tracks`);
      // return res.json();
      return dataSources.trackAPI.getTracksForHome()
    },
  },
  Track: {
    author: async ({ authorId }, _, { dataSources }) => {
      // const baseURL = "https://odyssey-lift-off-rest-api.herokuapp.com";
      // const res = await fetch(`${baseURL}/author/${authorId}`);
      // return res.json();
      return dataSources.trackAPI.getAuthor(authorId);
    },
  },
};

module.exports = resolvers;
