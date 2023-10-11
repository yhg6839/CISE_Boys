import ArticleModel from "../../../../server/models/Article";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { title, authors, source, pubyear, doi, claim, evidence } = req.body;

    // Create a new document using your Mongoose model
    const newArticle = new ArticleModel({
      title,
      authors,
      source,
      pubyear,
      doi,
      claim,
      evidence,
    });

    try {
      // Save the new document to the database
      await newArticle.save();
      res.status(200).json({ message: "Data inserted successfully" });
    } catch (error) {
      // Handle any errors that occur during the insertion
      res.status(500).json({ message: "Error inserting data", error: error.message });
    }
  } else {
    res.status(405).end(); // Method Not Allowed if not a POST request
  }
}
