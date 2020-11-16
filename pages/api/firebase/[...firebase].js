import firebase from '../../../lib/firebase'

export default (req, res) => {
	let params = req.query.firebase;
	/*
		[...slug].js routes return array of routes 
		eg. /firebase/posts/abc returns ['posts', 'abc']
	*/
	if(params.length != 2) {
		res.statusCode = 414;
		res.json({"error" : "invalid route"});
	}

  firebase.firestore().collection(params[0]).doc(params[1]).get()
  .then((doc) => {
		if (!doc.exists) {
			res.statusCode = 404;
			res.json({ "error" : "firestore doc doesn't exist"});
    }
		res.statusCode = 200;
    res.json(doc.data());
  })
  .catch((error) => {
    res.json({ error });
  });
}
