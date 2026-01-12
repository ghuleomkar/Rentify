const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description: "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?auto=format&fit=crop&w=800&q=60",
    },
    price: 150000,
    location: "Malibu",
    country: "United States",
  },
  {
    title: "Modern Loft in Downtown",
    description: "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "New York City",
    country: "United States",
  },
  {
    title: "Mountain Retreat",
    description: "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=60",
    },
    price: 1000,
    location: "Aspen",
    country: "United States",
  },
  {
    title: "Historic Villa in Tuscany",
    description: "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=60",
    },
    price: 2500,
    location: "Florence",
    country: "Italy",
  },
  {
    title: "Secluded Treehouse Getaway",
    description: "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=60",
    },
    price: 800,
    location: "Portland",
    country: "United States",
  },
  {
    title: "Desert Oasis with Pool",
    description: "Relax in this luxurious desert home with a private pool. Enjoy the serene landscape and starry nights.",
    image: {
      filename: "listingimage",
      url: "https://i.pinimg.com/736x/f0/fc/17/f0fc17618d45910665e1efb85c1c0a72.jpg",
    },
    price: 1800,
    location: "Palm Springs",
    country: "United States",
  },
  {
    title: "Charming Countryside B&B",
    description: "Cozy bed and breakfast in the countryside. Perfect for a weekend escape from the city.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=800&q=60",
    },
    price: 700,
    location: "Cotswolds",
    country: "United Kingdom",
  },
  {
    title: "Luxury Penthouse Suite",
    description: "Experience luxury living in this modern penthouse with panoramic city views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=60",
    },
    price: 3000,
    location: "Dubai",
    country: "United Arab Emirates",
  },
  {
    title: "Rustic Lakehouse",
    description: "Beautiful lakehouse with direct lake access, kayaks, and a cozy fireplace.",
    image: {
      filename: "listingimage",
      url: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?cs=srgb&dl=pexels-binyaminmellish-1396122.jpg&fm=jpg",
    },
    price: 1400,
    location: "Lake Tahoe",
    country: "United States",
  },
  {
    title: "Tropical Bungalow",
    description: "Charming bungalow surrounded by lush gardens and just minutes from the beach.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=60",
    },
    price: 900,
    location: "Bali",
    country: "Indonesia",
  },
  {
    title: "Ski-in/Ski-out Chalet",
    description: "Hit the slopes from your doorstep in this comfortable ski chalet.",
    image: {
      filename: "listingimage",
      url: "https://i.pinimg.com/1200x/a1/99/15/a19915a1ef53e01e347add0c4dab309e.jpg"
    },
    price: 2200,
    location: "Whistler",
    country: "Canada",
  },
  {
    title: "Minimalist Studio",
    description: "Aesthetic and functional studio apartment with minimalist interiors.",
    image: {
      filename: "listingimage",
      url: "https://depanache.in/depanache-ui/uploads/2022/05/best-home-interior-designers-in-bengaluru.webp",
    },
    price: 600,
    location: "Tokyo",
    country: "Japan",
  },
  {
    title: "Romantic Parisian Apartment",
    description: "Charming apartment with Eiffel Tower views. Perfect for couples.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=60",
    },
    price: 2000,
    location: "Paris",
    country: "France",
  },
  {
    title: "Remote Cabin in the Woods",
    description: "Disconnect from the world in this off-grid forest cabin.",
    image: {
      filename: "listingimage",
      url: "https://i.pinimg.com/736x/72/e1/7d/72e17d51309ec64a4a22ccf8cf2d1875.jpg",
    },
    price: 500,
    location: "Maine",
    country: "United States",
  },
  {
    title: "Ocean View Apartment",
    description: "Enjoy stunning ocean views from this sleek and sunny apartment.",
    image: {
      filename: "listingimage",
      url: "https://media.designcafe.com/wp-content/uploads/2021/09/15180410/pop-ceiling-designs-for-hall.jpg",
    },
    price: 1600,
    location: "Barcelona",
    country: "Spain",
  },
  {
    title: "Jungle Eco Lodge",
    description: "Sustainable eco lodge in the heart of the jungle. Experience nature up close.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=60",
    },
    price: 1100,
    location: "Amazonas",
    country: "Brazil",
  },
  {
    title: "City Center Flat",
    description: "Convenient flat located in the bustling city center. Walk everywhere!",
    image: {
      filename: "listingimage",
      url: "https://i.pinimg.com/564x/3b/f7/a1/3bf7a122968abeceabb99000df1453c1.jpg",
    },
    price: 1300,
    location: "Berlin",
    country: "Germany",
  },
  {
    title: "Cliffside Ocean Villa",
    description: "Stunning cliffside villa with breathtaking ocean views and infinity pool.",
    image: {
      filename: "listingimage",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUdXv7BuNqI4v1Yre87SK9N9eRuvyaJPBSsN-ojEeupATEh7AyYZsOAnz2T59SH56eNoE&usqp=CAU",
    },
    price: 3500,
    location: "Santorini",
    country: "Greece",
  },
  {
    title: "Traditional Ryokan",
    description: "Stay in a traditional Japanese inn with tatami floors and onsen baths.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=60",
    },
    price: 1700,
    location: "Kyoto",
    country: "Japan",
  },
  {
    title: "Artistic Bohemian Flat",
    description: "Colorful flat with boho decor, art, and a cozy vibe in a trendy neighborhood.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=60",
    },
    price: 950,
    location: "Lisbon",
    country: "Portugal",
  }
];


module.exports = { data: sampleListings };