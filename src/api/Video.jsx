export const getVideoList = async () => {
  const res = await fetch(
    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key=AIzaSyAXqdvmUzb9K5-kqKoYC8STGz4mDBDmMtQ`
  );
  await console.log(res);
  await console.log(111111111);
  return res.json();
};
