export const getVideoList = async (keyword) => {
  await console.log(keyword);
  const res = await fetch(
    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${keyword}&key=AIzaSyAXqdvmUzb9K5-kqKoYC8STGz4mDBDmMtQ`
  );
  return res.json();
};
