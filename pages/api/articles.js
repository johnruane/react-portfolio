import data from '../../data/articles.json';

export default (req, res) => {
  res.statusCode = 200
  res.json(data)
}
