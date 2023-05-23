import React from 'react';
import '../App.css';


const CardSection = () => {
  const cardsData = [
    {
      title: '3D Sign board',
      imageSrc: '/images/3D Sign board.jpeg',
      description: 'Description for Card 1',
    },
    {
      title: 'Books',
      imageSrc: '/images/Books.jpg',
      description: 'Description for Card 2',
    },
    {
      title: 'Brouchers',
      imageSrc: '/images/Brouchers.jpg',
      description: 'Description for Card 3',
    },
    {
        title: 'Envelops',
        imageSrc: '/images/Envelops.jpg',
        description: 'Description for Card 3',
      },
      {
        title: 'Flyers',
        imageSrc: '/images/Flyers.jpg',
        description: 'Description for Card 3',
      },
      {
        title: 'Food Boxes',
        imageSrc: '/images/Food Boxes.jpg',
        description: 'Description for Card 3',
      },
      {
        title: 'Invoice Book',
        imageSrc: '/images/invoice book.jpg',
        description: 'Description for Card 3',
      },
      {
        title: 'Letterhead',
        imageSrc: '/images/letterhead.jpg',
        description: 'Description for Card 3',
      },
      {
        title: 'Magzines',
        imageSrc: '/images/Magzines.jpg',
        description: 'Description for Card 3',
      },
      {
        title: 'NCR books',
        imageSrc: '/images/NCR books.jpg',
        description: 'Description for Card 3',
      },
      {
        title: 'Paper Bags',
        imageSrc: '/images/Paper begs.jpg',
        description: 'Description for Card 3',
      },
      {
        title: 'Penaaflex',
        imageSrc: '/images/Penaflex.jpg',
        description: 'Description for Card 3',
      },
      {
        title: 'Perfume Boxes',
        imageSrc: '/images/Perfume Boxes.jpg',
        description: 'Description for Card 3',
      },
      {
        title: 'Posters',
        imageSrc: '/images/Posters.jpg',
        description: 'Description for Card 3',
      },
      {
        title: 'Sign Boards',
        imageSrc: '/images/Sign Boards.jpg',
        description: 'Description for Card 3',
      },
      {
        title: 'Stickers',
        imageSrc: '/images/Stickers.jpg',
        description: 'Description for Card 3',
      },
      {
        title: 'Visting Card',
        imageSrc: '/images/Visiting Cards.jpg',
        description: 'Description for Card 3',
      },
      {
        title: 'Vouchers',
        imageSrc: '/images/Vouchers.png',
        description: 'Description for Card 3',
      },
  ];

  return (
    <div className="card-section">
      {cardsData.map((card, index) => (
        <div className="card" key={index}>
          <img src={card.imageSrc} alt={card.title} className="card-image" />
          <h3 className="card-title">{card.title}</h3>
          <p className="card-description">{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default CardSection;
