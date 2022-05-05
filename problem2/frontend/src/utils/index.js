export const getImageUrl = (item) => {
  // console.log(
  //   "getImageUrl farm: ",
  //   item.farm + "\nid: " + item.id + "\nowner " + item.owner,
  //   "\nsecret: " + item.secret,
  //   "\nserver: " + item.server,
  //   "\ntitle: " + item.title
  // );

  return (
    "https://farm" +
    item.farm +
    ".staticflickr.com/" +
    item.server +
    "/" +
    item.id +
    "_" +
    item.secret +
    ".jpg"
  );
};
