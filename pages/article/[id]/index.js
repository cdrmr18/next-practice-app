import { useRouter } from 'next/router';
const article = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Article {id} </h1>
    </div>
  );
};

export default article;
