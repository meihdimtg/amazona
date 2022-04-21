import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Meihdi',
      email: 'meihdi.mtg@gmail.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Karl',
      email: 'karl.mtg@gmail.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      // _id: '1',
      name: 'Nike Slim Shirt',
      slug: 'nile-slim-shirt',
      category: 'Shirts',
      image: '/images/p1.jpg',
      price: 120,
      countInStock: 0,
      brand: 'nike',
      rating: 4.5,
      numReviews: 10,
      description: 'High quality shirt',
    },
    {
      // _id: '2',
      name: 'Cargo Nike Pant',
      slug: 'cargo-nike-pant',
      category: 'Pant',
      image: '/images/p2.jpg',
      price: 100,
      countInStock: 10,
      brand: 'nike',
      rating: 4.0,
      numReviews: 10,
      description: 'High quality pant',
    },
    {
      // _id: '3',
      name: 'Polar big boy pant',
      slug: 'polar-big-boy-pant',
      category: 'Pant',
      image: '/images/p3.jpg',
      price: 160,
      countInStock: 10,
      brand: 'Polar',
      rating: 4.5,
      numReviews: 10,
      description: 'High Pant quality',
    },
    {
      //  _id: '4',
      name: 'Adidas Shirt',
      slug: 'adidas-shirt',
      category: 'Shirts',
      image: '/images/p4.jpg',
      price: 80,
      countInStock: 10,
      brand: 'Adidas',
      rating: 3.5,
      numReviews: 10,
      description: 'High quality shirt, but size not good',
    },
  ],
};

export default data;
