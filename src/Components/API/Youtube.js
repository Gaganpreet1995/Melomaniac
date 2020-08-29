import youtubeSearch from "simple-youtube-api";

const API_KEY = "AIzaSyCLcupFcD0r3cnej5i-JSKozCoqVkkel1E";

export const getPopularList = async () => {
  const ob = new youtubeSearch(API_KEY);

  var data = await ob.searchVideos("techno+house", 5).catch((e) => {
    console.log(e);
  });

  return await data;
};

export const getBollywoodLongSongs = async () => {
  const ob = new youtubeSearch(API_KEY);

  var data = await ob.searchVideos("eric+prydz", 5).catch((e) => {
    console.log(e);
  });

  return await data;
};

export const getHollywoodSongs = async () => {
  const ob = new youtubeSearch(API_KEY);

  var data = await ob.searchVideos("boris+brejha", 10).catch((e) => {
    console.log(e);
  });

  return await data;
};

export const getGhazalList = async () => {
  const ob = new youtubeSearch(API_KEY);

  var data = await ob.searchVideos("babbu+maan", 5).catch((e) => {
    console.log(e);
  });

  return await data;
};

export const getSearchData = async (query) => {
  const ob = new youtubeSearch(API_KEY);

  var data = await ob.searchVideos(query + " song", 10).catch((e) => {
    console.log(e);
  });

  return await data;
};
