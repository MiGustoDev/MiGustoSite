type CardItemProps = {
  image: string;
  title: string;
  description: string;
};

export const CardItem = ({ image, title, description }: CardItemProps) => (
  <div className="max-w-sm rounded-2xl shadow-lg p-4 bg-black">
    <img src={image} alt={title} className="w-full h-48 object-cover rounded-xl mb-3" />
    <h3 className="text-lg font-bold mb-2 text-white">{title}</h3>
    <p className="text-sm text-gray-300">{description}</p>
  </div>
);
