import { FeedGridItem, FeedGridItemProps } from 'components';

type Props = {
  items: FeedGridItemProps[];
};

export function FeedGrid({ items }: Props) {
  return (
    <>
      <div className="grid gap-4 grid-cols-1 lg:grid-cols-3">
        {items.map((item, index) => (
          <FeedGridItem {...item} key={index} />
        ))}
      </div>
    </>
  );
}
