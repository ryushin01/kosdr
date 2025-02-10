interface FakeDetailProps {
  fakeDetailData: FakeDetailDataProps[];
}

export type FakeDetailDataProps = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  rating: fakeDetailRatingProps[];
}

export type fakeDetailRatingProps = {
  rate: number;
  count: number;
}

const FakeDetail = ({ fakeDetailData }: FakeDetailProps) => {

  const { id, title, price, description, category, rating } = fakeDetailData;


  return (
    <>
      {id}
      {title}
      {price}
      {description}
      {category}
      {rating}
    </>
  );
};

export default FakeDetail;
