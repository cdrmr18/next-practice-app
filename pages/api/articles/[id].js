import { articles } from '../../../data';

export default function handler({ query: { id } }, res) {
  const filrted = artciles.filter((article) => article.id === id);

  if (filrted.length > 0) {
    res.status(200).json(filtered[0]);
  } else {
    res.status(404).json({ message: `Article - id ${id} not found` });
  }
}
