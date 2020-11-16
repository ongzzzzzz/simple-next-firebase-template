export default (req, res) => {
  res.statusCode = 418
  res.json({ message : "hey! once you've initialized your app, visit /api/firebase/collection/doc to query your firestore" })
}
