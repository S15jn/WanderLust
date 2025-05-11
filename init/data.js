const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    location: "Malibu",
    country: "United States",
  },
  {
    title: "Modern Loft in Downtown",
    description:
      "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "New York City",
    country: "United States",
  },
  {
    title: "Mountain Retreat",
    description:
      "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1000,
    location: "Aspen",
    country: "United States",
  },
  {
    title: "Historic Villa in Tuscany",
    description:
      "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 2500,
    location: "Florence",
    country: "Italy",
  },
  {
    title: "Secluded Treehouse Getaway",
    description:
      "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 800,
    location: "Portland",
    country: "United States",
  },
  {
    title: "Beachfront Paradise",
    description:
      "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 2000,
    location: "Cancun",
    country: "Mexico",
  },
  {
    title: "Rustic Cabin by the Lake",
    description:
      "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 900,
    location: "Lake Tahoe",
    country: "United States",
  },
  {
    title: "Luxury Penthouse with City Views",
    description:
      "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 3500,
    location: "Los Angeles",
    country: "United States",
  },
  {
    title: "Ski-In/Ski-Out Chalet",
    description:
      "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 3000,
    location: "Verbier",
    country: "Switzerland",
  },
  {
    title: "Safari Lodge in the Serengeti",
    description:
      "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Serengeti National Park",
    country: "Tanzania",
  },
  {
    title: "Historic Canal House",
    description:
      "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Amsterdam",
    country: "Netherlands",
  },
  {
    title: "Private Island Retreat",
    description:
      "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 10000,
    location: "Fiji",
    country: "Fiji",
  },
  {
    title: "Charming Cottage in the Cotswolds",
    description:
      "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjB2YWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "Cotswolds",
    country: "United Kingdom",
  },
  {
    title: "Historic Brownstone in Boston",
    description:
      "Step back in time in this elegant historic brownstone located in the heart of Boston.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 2200,
    location: "Boston",
    country: "United States",
  },
  {
    title: "Beachfront Bungalow in Bali",
    description:
      "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Bali",
    country: "Indonesia",
  },
  {
    title: "Mountain View Cabin in Banff",
    description:
      "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    location: "Banff",
    country: "Canada",
  },
  {
    title: "Art Deco Apartment in Miami",
    description:
      "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1600,
    location: "Miami",
    country: "United States",
  },
  {
    title: "Tropical Villa in Phuket",
    description:
      "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 3000,
    location: "Phuket",
    country: "Thailand",
  },
  {
    title: "Historic Castle in Scotland",
    description:
      "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlYWNoJTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Scottish Highlands",
    country: "United Kingdom",
  },
  {
    title: "Desert Oasis in Dubai",
    description:
      "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 5000,
    location: "Dubai",
    country: "United Arab Emirates",
  },
  {
    title: "Rustic Log Cabin in Montana",
    description:
      "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1100,
    location: "Montana",
    country: "United States",
  },
  {
    title: "Beachfront Villa in Greece",
    description:
      "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 2500,
    location: "Mykonos",
    country: "Greece",
  },
  {
    title: "Eco-Friendly Treehouse Retreat",
    description:
      "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 750,
    location: "Costa Rica",
    country: "Costa Rica",
  },
  {
    title: "Historic Cottage in Charleston",
    description:
      "Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1600,
    location: "Charleston",
    country: "United States",
  },
  {
    title: "Modern Apartment in Tokyo",
    description:
      "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 2000,
    location: "Tokyo",
    country: "Japan",
  },
  {
    title: "Lakefront Cabin in New Hampshire",
    description:
      "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "New Hampshire",
    country: "United States",
  },
  {
    title: "Luxury Villa in the Maldives",
    description:
      "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 6000,
    location: "Maldives",
    country: "Maldives",
  },
  {
    title: "Ski Chalet in Aspen",
    description:
      "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Aspen",
    country: "United States",
  },
  {
    title: "Secluded Beach House in Costa Rica",
    description:
      "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Costa Rica",
    country: "Costa Rica",
  },
  {
    title: "Seaside Sanctuary",
    description: "A peaceful oceanfront escape with breathtaking sunsets.",
    image: {
      url: "https://media.istockphoto.com/id/171259869/photo/villa-sri-lanka.jpg?s=612x612&w=0&k=20&c=KxBqowg7IOR5J0G81fkouPh_xAc5S7cN7TAQmsVjAio=",
      filename: "seaside.jpg",
    },
    price: 2250,
    location: "Malibu, CA",
    country: "USA",
  },
  {
    title: "Cabin in the Pines",
    description: "Cozy rustic cabin surrounded by towering pines and trails.",
    image: {
      url: "https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsfGVufDB8fDB8fHww",
      filename: "pines.jpg",
    },
    price: 1600,
    location: "Flagstaff, AZ",
    country: "USA",
  },
  {
    title: "Urban Loft Downtown",
    description: "Stylish loft with city views, perfect for remote work.",
    image: {
      url: "https://media.istockphoto.com/id/1216946182/photo/tropical-beach-pool-with-palm-trees.jpg?s=612x612&w=0&k=20&c=WsmPi4lhhU09JYC7sIU0-muNoetB8GqTLuloxBEyk6g=",
      filename: "loft.jpg",
    },
    price: 1450,
    location: "Denver, CO",
    country: "USA",
  },
  {
    title: "Desert Dreamscape",
    description: "A unique desert stay with modern comfort and nature.",
    image: {
      url: "https://media.istockphoto.com/id/1171744291/photo/luxury-house-with-pool-and-terrace-for-relaxing.jpg?s=612x612&w=0&k=20&c=JjyYUhKoFafg1jq78uBxJnUQwOkMZXuuzEJ1p0q4opI=",
      filename: "desert.jpg",
    },
    price: 1900,
    location: "Sedona, AZ",
    country: "USA",
  },
  {
    title: "Skyline View Apartment",
    description: "Modern high-rise apartment with panoramic city views.",
    image: {
      url: "https://media.istockphoto.com/id/1084264178/photo/3d-render-bungalow-near-endless-pool-over-sea-on-tropical-island-summer-vacation-concept.jpg?s=612x612&w=0&k=20&c=gMic-MydE57GIS0MelfmiVQDHFY-koKEpZBqHmKdh5I=",
      filename: "skyline.jpg",
    },
    price: 2100,
    location: "Chicago, IL",
    country: "USA",
  },
  {
    title: "Cozy River Cottage",
    description: "Charming riverside cottage for a tranquil getaway.",
    image: {
      url: "https://media.istockphoto.com/id/950698398/photo/attractive-woman-walks-on-a-wooden-jetty-in-the-maldives.jpg?s=612x612&w=0&k=20&c=4cp7pzIMMRGFhdRzTK-VS9Vje1qNbnUyz-PHMFMbZbU=",
      filename: "cottage.jpg",
    },
    price: 1705,
    location: "Asheville, NC",
    country: "USA",
  },
  {
    title: "Historic Brownstone",
    description: "Elegant brownstone with vintage charm in a quiet area.",
    image: {
      url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWx8ZW58MHx8MHx8fDA%3D",
      filename: "brownstone.jpg",
    },
    price: 2400,
    location: "Boston, MA",
    country: "USA",
  },
  {
    title: "Mountain Escape",
    description: "Perfect retreat for hikers and nature lovers.",
    image: {
      url: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdGVsfGVufDB8fDB8fHww",
      filename: "mountain.jpg",
    },
    price: 1800,
    location: "Bozeman, MT",
    country: "USA",
  },
  {
    title: "The Redwood Retreat",
    description: "Stay among towering redwoods in a luxury eco-lodge.",
    image: {
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG90ZWx8ZW58MHx8MHx8fDA%3D",
      filename: "redwood.jpg",
    },
    price: 2600,
    location: "Eureka, CA",
    country: "USA",
  },
  {
    title: "Modern Studio Flat",
    description: "Compact and stylish flat in a buzzing arts district.",
    image: {
      url: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "studio.jpg",
    },
    price: 1300,
    location: "Austin, TX",
    country: "USA",
  },

  {
    title: "Cozy Mountain Cabin",
    description: "A peaceful retreat in the mountains with stunning views.",
    image: {
      url: "https://media.istockphoto.com/id/1364616767/photo/woman-relaxes-in-luxury-hotel-she-uses-a-digital-tablet.jpg?s=612x612&w=0&k=20&c=Ih8QLVcPNnj2hJ8Sjn_7p3GmQRgFGBOtzTJpgDmXPaA=",
      filename: "cabin1.jpg",
    },
    price: 1200,
    location: "Aspen, CO",
    country: "USA",
  },
  {
    title: "Beachfront Bungalow",
    description: "Wake up to ocean waves and sunrises on the shore.",
    image: {
      url: "https://media.istockphoto.com/id/865648502/photo/illuminated-union-square-in-oradea.jpg?s=612x612&w=0&k=20&c=VkcBpMgzuL0rIASVGv_mprx-tYQ0XJ07JTNl9vGRhik=",
      filename: "beach1.jpg",
    },
    price: 2000,
    location: "Maui, HI",
    country: "USA",
  },
  {
    title: "Historic City Apartment",
    description: "Charming flat in the heart of the old city.",
    image: {
      url: "https://example.com/images/city1.jpg",
      filename: "city1.jpg",
    },
    price: 85,
    location: "Florence",
    country: "Italy",
  },
  {
    title: "Desert Escape Villa",
    description: "Modern luxury surrounded by desert tranquility.",
    image: {
      url: "https://media.istockphoto.com/id/2161698669/photo/woman-walking-on-stairs-on-the-background-of-amber-fort.jpg?s=612x612&w=0&k=20&c=gC9wB_3Rh8JLKkklxrgKYmx85A9ksuFuNf9R2IVzqWg=",
      filename: "desert1.jpg",
    },
    price: 1800,
    location: "Sedona, AZ",
    country: "USA",
  },
  {
    title: "Lakeside Cottage",
    description: "Perfect for fishing and family getaways.",
    image: {
      url: "https://media.istockphoto.com/id/497686593/photo/houseboat.jpg?s=612x612&w=0&k=20&c=3U21YnYOCgF-0lfHAX4vS0KGL5rHHMdMqg2GxFTODR8=",
      filename: "lake1.jpg",
    },
    price: 9500,
    location: "Lake Tahoe, CA",
    country: "USA",
  },
  {
    title: "Alpine Ski Lodge",
    description: "Steps away from the slopes and apres-ski fun.",
    image: {
      url: "https://media.istockphoto.com/id/1302220304/photo/latest-views-of-snowfall-in-shimla.jpg?s=612x612&w=0&k=20&c=vt1mgbrvVx67mCfJibaX50juXN73BVrfAnYcIk__a6c=",
      filename: "ski1.jpg",
    },
    price: 1500,
    location: "Zermatt",
    country: "Switzerland",
  },
  {
    title: "Jungle Treehouse",
    description: "Live among the trees in this eco-friendly retreat.",
    image: {
      url: "https://media.istockphoto.com/id/183755381/photo/goa-resort-on-beach.jpg?s=612x612&w=0&k=20&c=iBoeOtRey_VltX8NErYE_p1VPuslJo0qWymc2CxC2aY=",
      filename: "treehouse1.jpg",
    },
    price: 1100,
    location: "Ubud, Bali",
    country: "Indonesia",
  },
  {
    title: "Urban Loft Studio",
    description: "Minimalist living in the heart of the city.",
    image: {
      url: "https://media.istockphoto.com/id/1210328194/photo/ocean-sunset-view-from-bedroom-balcony-for-travel-concept.jpg?s=612x612&w=0&k=20&c=UU944NTbhzZ209d2Qm7sDrMtkBHqmBNo7sOlrqdsKdc=",
      filename: "loft1.jpg",
    },
    price: 1300,
    location: "New York, NY",
    country: "USA",
  },
  {
    title: "Countryside Barn Stay",
    description: "Rustic charm with modern comforts.",
    image: {
      url: "https://media.istockphoto.com/id/503019528/photo/road-front-of-luxury-building-in-clear-sky-at-night.jpg?s=612x612&w=0&k=20&c=xkjUByXNE5SdMSeYxLqIwweZMg9XZ6xnWEK7ypdeO4I=",
      filename: "barn1.jpg",
    },
    price: 9000,
    location: "Devon",
    country: "UK",
  },
  {
    title: "Seaside Studio",
    description: "Enjoy fresh sea breeze and panoramic views.",
    image: {
      url: "https://media.istockphoto.com/id/857422752/photo/taj-lake-palace-on-lake-pichola-in-udaipur-rajasthan-india.jpg?s=612x612&w=0&k=20&c=-NSFkuSW8oqxWRSX69lUiejeC_U_vygIB4Ukg6G8X_k=",
      filename: "seaside1.jpg",
    },
    price: 1050,
    location: "Nice",
    country: "France",
  },
  {
    title: "Modern Penthouse",
    description: "Top-floor views with luxury amenities.",
    image: {
      url: "https://media.istockphoto.com/id/1482333772/photo/bedroom-with-a-bed-and-pink-color-bed-head-with-2-side-table-and-lamp-hanging-from-the-ceiling.jpg?s=612x612&w=0&k=20&c=rcMCJbbu_xyZqVxkWWXZnHZBqNAgm7E7jQtydUnfvnk=",
      filename: "penthouse1.jpg",
    },
    price: 2500,
    location: "Dubai",
    country: "UAE",
  },
  {
    title: "Charming Village Cottage",
    description: "Step back in time with modern touches.",
    image: {
      url: "https://media.istockphoto.com/id/2167379324/photo/maldives-swimming-pool-sun-bed-lounge-with-parasols-under-palm-trees-on-sunny-day-on-a.jpg?s=612x612&w=0&k=20&c=P3Dau_ss3gNrqQwcvxDP8en1DhEfbExbkwcR6KneF4Y=",
      filename: "village1.jpg",
    },
    price: 8000,
    location: "Cotswolds",
    country: "UK",
  },
  {
    title: "Hilltop Retreat",
    description: "Breathtaking views from a serene location.",
    image: {
      url: "https://media.istockphoto.com/id/1157912183/photo/hotel-on-lake-pichola-in-udaipur-rajasthan-india.jpg?s=612x612&w=0&k=20&c=5i5hnmWGYRjXXkWGISzg6s3ll4QljGubpF9Z0Ky4b64=",
      filename: "hilltop1.jpg",
    },
    price: 1400,
    location: "Tuscany",
    country: "Italy",
  },
  {
    title: "Coastal Retreat",
    description: "Relax in style by the sea.",
    image: {
      url: "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
      filename: "coast1.jpg",
    },
    price: 1700,
    location: "Santorini",
    country: "Greece",
  },
  {
    title: "Rainforest Lodge",
    description: "Explore wildlife from your wooden hideaway.",
    image: {
      url: "https://media.istockphoto.com/id/1299305938/photo/drone-view-of-luxury-bungalows-in-the-maldives-man-on-the-stairs-arms-outstretched.jpg?s=612x612&w=0&k=20&c=PtW2fAcb3zX3NpstPy6kA22Z0vRRS-iVgqQFtUSNjm4=",
      filename: "rainforest1.jpg",
    },
    price: 1150,
    location: "Costa Rica",
    country: "Costa Rica",
  },
  {
    title: "Modern Tokyo Studio",
    description: "Compact and stylish with all essentials.",
    image: {
      url: "https://media.istockphoto.com/id/520136175/photo/hotel-bedroom-in-india.jpg?s=612x612&w=0&k=20&c=7TsiIPEPFZIlCGeJyboyoIcSBxxvmLgjH9FWSK655cA=",
      filename: "tokyo1.jpg",
    },
    price: 19000,
    location: "Tokyo",
    country: "Japan",
  },
  {
    title: "Snowy Chalet",
    description: "Warm up by the fire in a winter wonderland.",
    image: {
      url: "https://media.istockphoto.com/id/115868883/photo/entrance-of-kuchaman-fort-rajasthan-india.jpg?s=612x612&w=0&k=20&c=41EIPNyi3qoetdDpLza7TRuMwZZDuQz-STreubyGDoI=",
      filename: "chalet1.jpg",
    },
    price: 1600,
    location: "Banff",
    country: "Canada",
  },
  {
    title: "Historic Stone House",
    description: "Centuries-old charm with modern upgrades.",
    image: {
      url: "https://media.istockphoto.com/id/1440288655/photo/udaipur-city-palace-and-lake-pichola-udaipur-rajasthan-india.jpg?s=612x612&w=0&k=20&c=4O0uWUJYtQ8fpDuMmOJARN1K6wkT63z2q4cgXzbL30E=",
      filename: "stone1.jpg",
    },
    price: 13000,
    location: "Provence",
    country: "France",
  },
  {
    title: "Desert Dome",
    description: "Experience glamping under the stars.",
    image: {
      url: "https://media.istockphoto.com/id/1149891777/photo/savannah-convention-center-hotel.jpg?s=612x612&w=0&k=20&c=Xb9iSivUCZHPs-eJtnbWQl8arPJNYxeGHiStbl59DnE=",
      filename: "dome1.jpg",
    },
    price: 1450,
    location: "Joshua Tree, CA",
    country: "USA",
  },
  {
    title: "Canal-side Studio",
    description: "Quiet and picturesque with scenic canals.",
    image: {
      url: "https://media.istockphoto.com/id/588958958/photo/umaid-bhawan-palace-of-jodhpur-rajasthan-india.jpg?s=612x612&w=0&k=20&c=rU2QsgBZhwbshHhdBliCIZCyNIipoAKgb7gOOJzDOH0=",
      filename: "canal1.jpg",
    },
    price: 1020,
    location: "Amsterdam",
    country: "Netherlands",
  },
  {
    title: "Rustic Forest Cabin",
    description: "Surrounded by pine trees and perfect for unplugging.",
    image: {
      url: "https://media.istockphoto.com/id/2191538376/photo/old-traditional-stone-buildings-houses-resturants-on-the-banks-of-lake-pichola-fateh-sagar-in.jpg?s=612x612&w=0&k=20&c=rFz6wR6qlVXkT-oyaPPQBB-1FNo0BmIeDCzNRdKkKEI=",
      filename: "forest1.jpg",
    },
    price: 10000,
    location: "Big Bear, CA",
    country: "USA",
  },
  {
    title: "Luxury Urban Flat",
    description: "Walk to cafes, museums, and nightlife.",
    image: {
      url: "https://media.istockphoto.com/id/654350338/photo/hotel-exterior-with-empty-swimming-pool-sri-lanka.jpg?s=612x612&w=0&k=20&c=ICX-GN4NfIYQxMlmbIFyUpVYAEYceMIbwOvDz8xilOk=",
      filename: "urban1.jpg",
    },
    price: 1800,
    location: "Berlin",
    country: "Germany",
  },
  {
    title: "Secluded Riverfront Home",
    description: "Private and peaceful with river views.",
    image: {
      url: "https://media.istockphoto.com/id/1397925224/photo/palace-room.jpg?s=612x612&w=0&k=20&c=7YBRvZjBkagtT1W934_6IVurQxhyMhKfr4nrilq7c0g=",
      filename: "river1.jpg",
    },
    price: 1350,
    location: "Boise, ID",
    country: "USA",
  },
  {
    title: "Hillside Getaway",
    description: "Panoramic views and a cozy fireplace.",
    image: {
      url: "https://media.istockphoto.com/id/188014849/photo/island-villa.jpg?s=612x612&w=0&k=20&c=9sLWQKHnFW_O4KjXoFwPu9ymL0VmSYr12l9ntKgYb84=",
      filename: "hillside1.jpg",
    },
    price: 1450,
    location: "Medellín",
    country: "Colombia",
  },
  {
    title: "Beach Shack",
    description: "Laid-back living steps from the sand.",
    image: {
      url: "https://media.istockphoto.com/id/157533612/photo/indian-palace.jpg?s=612x612&w=0&k=20&c=6Q2B7L2iSiYihFfMtDpNi9V0RSSECCV-vXhlLTf9t6s=",
      filename: "shack1.jpg",
    },
    price: 950,
    location: "Byron Bay",
    country: "Australia",
  },
  {
    title: "Farmhouse Stay",
    description: "Farm animals, open fields, and fresh air.",
    image: {
      url: "https://media.istockphoto.com/id/185083188/photo/luxury-shangri-la-hotel-room.jpg?s=612x612&w=0&k=20&c=5O6xdH0CYU008xoBbySJ81pKaNlvaRki5CFcM2orcBQ=",
      filename: "farm1.jpg",
    },
    price: 900,
    location: "Vermont",
    country: "USA",
  },
  {
    title: "Rooftop Apartment",
    description: "Open-air terrace in a bustling neighborhood.",
    image: {
      url: "https://media.istockphoto.com/id/185083188/photo/luxury-shangri-la-hotel-room.jpg?s=612x612&w=0&k=20&c=5O6xdH0CYU008xoBbySJ81pKaNlvaRki5CFcM2orcBQ=",
      filename: "rooftop1.jpg",
    },
    price: 1500,
    location: "Barcelona",
    country: "Spain",
  },
  {
    title: "Mountain View Studio",
    description: "Waking up to snow-capped peaks never gets old.",
    image: {
      url: "https://media.istockphoto.com/id/1206473179/photo/mount-abu-hill-station-india.jpg?s=612x612&w=0&k=20&c=Fhf8cRmWE_qsyIzRDUgbM9B_8GQhqpO84Z04UyqQJOw=",
      filename: "mountain1.jpg",
    },
    price: 1300,
    location: "Queenstown",
    country: "New Zealand",
  },
  {
    title: "Island Bungalow",
    description: "Thatched roof, hammock, and ocean breeze.",
    image: {
      url: "https://media.istockphoto.com/id/94390726/photo/endless-hotel-corridor.jpg?s=612x612&w=0&k=20&c=KmpH3Z6okpWrM_XWtDi0Pt7lOr9dt_wnDm3PsKQTiw8=",
      filename: "island1.jpg",
    },
    price: 1400,
    location: "Phuket",
    country: "Thailand",
  },
  {
    title: "Artistic Loft",
    description: "Colorful and quirky, perfect for creatives.",
    image: {
      url: "https://media.istockphoto.com/id/1001294906/photo/luxury-breakfast-food-on-wooden-table.jpg?s=612x612&w=0&k=20&c=Ndz-yHGKcRWyM-ImGdgEkwZzgh3CyaOONNQ55Ur_k5U=",
      filename: "artloft1.jpg",
    },
    price: 1250,
    location: "Austin, TX",
    country: "USA",
  },
  {
    title: "Wine Country Villa",
    description: "Surrounded by vineyards and rolling hills.",
    image: {
      url: "https://media.istockphoto.com/id/2202645982/photo/interior-modern-luxury-co-sharing-office-creative-working-space.jpg?s=612x612&w=0&k=20&c=tQjXXQoQ4PzfJg6r6X1xmPCIHih8WSpIDJFDrZeoHsU=",
      filename: "vineyard1.jpg",
    },
    price: 1750,
    location: "Napa Valley, CA",
    country: "USA",
  },
  {
    title: "Tropical Hideaway",
    description: "Lush gardens and privacy await.",
    image: {
      url: "https://media.istockphoto.com/id/2045439958/photo/english-architecture.jpg?s=612x612&w=0&k=20&c=Ep5-LkV6uKO13b5WeLP-bmQfuCM6Pcz3ro2etYNYxPM=",
      filename: "tropical1.jpg",
    },
    price: 1500,
    location: "Hilo, HI",
    country: "USA",
  },
  {
    title: "Historic Parisian Flat",
    description: "Classic charm with a view of the Seine.",
    image: {
      url: "https://media.istockphoto.com/id/1216950633/photo/tropical-swimming-pool-in-maldives.jpg?s=612x612&w=0&k=20&c=V2bjesenbWJegyCZAk6LlQmYRoxp30amCBDZiPdgmks=",
      filename: "paris1.jpg",
    },
    price: 1900,
    location: "Paris",
    country: "France",
  },
  {
    title: "Ski-In Chalet",
    description: "Hit the slopes straight from your door.",
    image: {
      url: "https://media.istockphoto.com/id/470455143/photo/cheap-motel-room-bed.jpg?s=612x612&w=0&k=20&c=kquWQfvZ4Y_ffwPn0ypJOoinvUPy4T09KODxZe4c0fA=",
      filename: "ski2.jpg",
    },
    price: 2100,
    location: "Whistler",
    country: "Canada",
  },
  {
    title: "Countryside Manor",
    description: "Grand rooms and peaceful gardens.",
    image: {
      url: "https://media.istockphoto.com/id/162137765/photo/summer-swimming-pool.jpg?s=612x612&w=0&k=20&c=Wv3DeS8S-yygZpJ6eE90iu7861DRVd177MlGTZVWd1I=",
      filename: "manor1.jpg",
    },
    price: 2200,
    location: "Surrey",
    country: "UK",
  },
  {
    title: "Downtown Micro-Apartment",
    description: "Tiny but efficient, perfect for solo travelers.",
    image: {
      url: "https://media.istockphoto.com/id/106393587/photo/luxury-hotel.jpg?s=612x612&w=0&k=20&c=vbt66vTRaL4Dn-ZDHo_28jAg6rFon8Ezv5Ad9CtHppE=",
      filename: "micro1.jpg",
    },
    price: 8000,
    location: "Tokyo",
    country: "Japan",
  },
  {
    title: "Secluded Hillside Cabin",
    description: "Your own private mountainside getaway.",
    image: {
      url: "https://media.istockphoto.com/id/96669695/photo/luxury-palace-courtyard.jpg?s=612x612&w=0&k=20&c=CAAsyEccQsjiIXST3omGGYzmYNgcad8SrucOyEOxCAs=",
      filename: "hillside2.jpg",
    },
    price: 1400,
    location: "Blue Ridge, GA",
    country: "USA",
  },
  {
    title: "Colonial House",
    description: "Classic design with historic detail.",
    image: {
      url: "https://media.istockphoto.com/id/157645252/photo/goa-resort-on-beach.jpg?s=612x612&w=0&k=20&c=8kq6ky9Yzh_M48KTwJAn5Q9dBBykbjFKF3zbdd5DOfw=",
      filename: "colonial1.jpg",
    },
    price: 1600,
    location: "Charleston, SC",
    country: "USA",
  },
  {
    title: "Lakeview Condo",
    description: "Watch the sunset over the lake each night.",
    image: {
      url: "https://media.istockphoto.com/id/182718074/photo/goa-resort.jpg?s=612x612&w=0&k=20&c=7x8xLOmCCZv_rTdxdV5oRk6V_eydVfz77vALU4Jntv0=",
      filename: "lake2.jpg",
    },
    price: 1100,
    location: "Chicago, IL",
    country: "USA",
  },
  {
    title: "Treetop Nest",
    description: "Sleep in the canopy in this unique stay.",
    image: {
      url: "https://media.istockphoto.com/id/1302442919/photo/luxury-beach-villa-at-night.jpg?s=612x612&w=0&k=20&c=oP0fE8SOcrejuCnbBmFAPB8pH47gbCM6m_dvtLihisI=",
      filename: "nest1.jpg",
    },
    price: 1250,
    location: "Rio de Janeiro",
    country: "Brazil",
  },
];

module.exports = { data: sampleListings };
