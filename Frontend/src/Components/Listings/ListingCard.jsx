// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import SearchBar from '../SearchBar/SearchBar';
// import CategoriesBar from '../CategoriesBar/CategoriesBar';
// import { getListings } from '../../services/listingService'; // Adjusted import path

// const ListingCard = () => {
//   const [listings, setListings] = useState([]);

//   useEffect(() => {
//     const fetchListings = async () => {
//       try {
//         const data = await getListings();
//         setListings(data);
//       } catch (error) {
//         console.error('Error fetching listings:', error);
//       }
//     };

//     fetchListings();
//   }, []);

//   return (
//     <div className="listing-container container mx-auto p-4">
//       <SearchBar />
//       <hr className="mt-6 mb-4 text-gray-200 w-full" />
//       <CategoriesBar />
//       <div className="listings grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
//         {Array.isArray(listings) ? (
//           listings.map((listing) => (
//             <div key={listing._id} className="listing-card rounded-lg overflow-hidden">
//               <Link to={`/listings/${listing._id}`} className="block">
//                 <img
//                   src={listing.image_urls[0]}
//                   alt={listing.title}
//                   className="w-full h-72 object-cover border border-gray-200 rounded-lg"
//                 />
//                 <div className="p-0 bg-white bg-opacity-80 mt-2">
//                   <div className="flex items-center justify-between mb-2">
//                     <h2 className="text-sm truncate font-semibold">{listing.title}</h2>
//                     <div className="flex items-center space-x-1 text-black text-sm">
//                       <span >★</span>
//                       <span >{listing.rating}</span>
//                     </div>
//                   </div>
//                   <p className="text-gray-700 mb-2">{listing.description}</p>
//                   <p className="text-gray-900 font-medium">${listing.price_per_night} <span className='font-light text-gray-600'>night</span></p>
//                 </div>
//               </Link>
//             </div>
//           ))
//         ) : (
//           <p className="text-center text-gray-500">No listings available</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ListingCard;











import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import CategoriesBar from '../CategoriesBar/CategoriesBar';
import { getListings } from '../../services/listingService'; // Adjusted import path

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const ListingCard = () => {
  const [listings, setListings] = useState([]);
  const query = useQuery();
  const category = query.get("category");

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const data = await getListings();
        if (category) {
          setListings(data.filter(listing => listing.category === category));
        } else {
          setListings(data);
        }
      } catch (error) {
        console.error('Error fetching listings:', error);
      }
    };

    fetchListings();
  }, [category]);

  return (
    <div className="listing-container container mx-auto p-4">
      <SearchBar />
      <hr className="mt-6 mb-4 text-gray-200 w-full" />
      <CategoriesBar />
      <div className="listings grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
        {Array.isArray(listings) ? (
          listings.map((listing) => (
            <div key={listing._id} className="listing-card rounded-lg overflow-hidden">
              <Link to={`/listings/${listing._id}`} className="block">
                <img
                  src={listing.image_urls[0]}
                  alt={listing.title}
                  className="w-full h-72 object-cover border border-gray-200 rounded-lg"
                />
                <div className="p-0 bg-white bg-opacity-80 mt-2">
                  <div className="flex items-center justify-between mb-2">
                    <h2 className="text-sm truncate font-semibold">{listing.title}</h2>
                    <div className="flex items-center space-x-1 text-black text-sm">
                      <span>★</span>
                      <span>{listing.rating}</span>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-2">{listing.description}</p>
                  <p className="text-gray-900 font-medium">${listing.price_per_night} <span className='font-light text-gray-600'>night</span></p>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No listings available</p>
        )}
      </div>
    </div>
  );
};

export default ListingCard;





// db.listings.insertMany([
//   {
//     title: "Secluded Beachfront Villa in Bali, Indonesia",
//     description: "Bali, Indonesia",
//     price_per_night: 150,
//     rating: 4.8,
//     reviews: 210,
//     image_urls: [
//       "https://plus.unsplash.com/premium_photo-1691858887511-1ec118550193?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Ds://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
//       "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       "https://images.unsplash.com/photo-1513689125086-6c432170e843?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       "https://images.unsplash.com/photo-1601924582972-0d1e4b5ff8b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80",
//       "https://images.unsplash.com/photo-1601924582974-9cd0f3efb2b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
//     ],
//     category: "Beach"
//   },
//   {
//     title: "Luxury Beach House in Malibu, USA",
//     description: "Malibu, USA",
//     price_per_night: 300,
//     rating: 4.9,
//     reviews: 320,
//     image_urls: [
//       "https://images.unsplash.com/photo-1662180255446-d0d78f565bf3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       "https://media.istockphoto.com/id/185276330/photo/luxury-home-overlooks-the-big-sur-coastline-and-sea.jpg?s=1024x1024&w=is&k=20&c=DeXV8q4Yxo5cnoVa0lF74W-9RPbDVHk1-Ruk7D_WrSY=",
//       "https://media.istockphoto.com/id/185276330/photo/luxury-home-overlooks-the-big-sur-coastline-and-sea.jpg?s=1024x1024&w=is&k=20&c=DeXV8q4Yxo5cnoVa0lF74W-9RPbDVHk1-Ruk7D_WrSY=",
//       "https://images.unsplash.com/photo-1580472873191-167cfd780e27?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
//     ],
//     category: "Beach"
//   },
//   {
//     title: "Entire home in Budleigh Salterton, UK",
//     description: "Cornwall, UK",
//     price_per_night: 130,
//     rating: 4.7,
//     reviews: 180,
//     image_urls: [
//       "https://a0.muscache.com/im/pictures/35b28b37-72bd-4e7c-9e4f-aeb4b36ce3f6.jpg?im_w=1200&im_format=avif",
//       "https://a0.muscache.com/im/pictures/1db34751-e9cd-4b9d-b19f-2967b1dfc0cb.jpg?im_w=720&im_format=avif",
//       "https://a0.muscache.com/im/pictures/144100e5-f65e-424a-b4e7-139f64edaf27.jpg?im_w=720&im_format=avif",
//       "https://a0.muscache.com/im/pictures/71924ae8-5210-4c6c-b1ca-d527910d8517.jpg?im_w=720&im_format=avif",
//       "https://a0.muscache.com/im/pictures/miso/Hosting-16696867/original/c9394afc-0231-491e-880f-d112be7a81fc.jpeg?im_w=720&im_format=avif"
//     ],
//     category: "Beach"
//   },
//   {
//     title: "Oceanfront Paradise in Phuket, Thailand",
//     description: "Phuket, Thailand",
//     price_per_night: 180,
//     rating: 4.8,
//     reviews: 250,
//     image_urls: [
//       "https://a0.muscache.com/im/pictures/miso/Hosting-1074607843996876120/original/af0ff223-8291-40a2-93ea-4f35b1d5ac0c.jpeg?im_w=1200&im_format=avif",
//       "https://a0.muscache.com/im/pictures/miso/Hosting-1074607843996876120/original/ba9a2ed5-2b62-4ce3-8fa5-ffd7ee170dce.jpeg?im_w=720&im_format=avif",
//       "https://a0.muscache.com/im/pictures/miso/Hosting-1074607843996876120/original/2b58fc78-d276-493d-ad01-0f61ed8d6ace.jpeg?im_w=720&im_format=avif",
//       "https://a0.muscache.com/im/pictures/hosting/Hosting-1074607843996876120/original/c32eb2d8-a3af-4f03-acb6-37da8629cda1.jpeg?im_w=720&im_format=avif",
//       "https://a0.muscache.com/im/pictures/hosting/Hosting-1074607843996876120/original/2e9af031-78b8-43a4-b4c6-16572a3254b3.jpeg?im_w=720&im_format=avif"
//     ],
//     category: "Beach"
//   },
//   {
//     title: "Entire rental unit in Castellammare di Stabia, Italy",
//     description: "Stabia, Italy",
//     price_per_night: 160,
//     rating: 4.7,
//     reviews: 220,
//     image_urls: [
//       "https://a0.muscache.com/im/pictures/7e0293b0-5f9a-4695-bb82-82f65780083d.jpg?im_w=1200&im_format=avif",
//       "https://a0.muscache.com/im/pictures/miso/Hosting-943473674611016431/original/617a53a2-9a12-4b16-ba71-7d874ef189f9.jpeg?im_w=720&im_format=avif",
//       "https://a0.muscache.com/im/pictures/miso/Hosting-943473674611016431/original/d3ea45f9-d14e-48b4-be74-b21854f0fa41.jpeg?im_w=720&im_format=avif",
//       "https://a0.muscache.com/im/pictures/miso/Hosting-943473674611016431/original/57f71a54-423c-4af0-9b80-e1886c467331.jpeg?im_w=720&im_format=avif",
//       "https://a0.muscache.com/im/pictures/miso/Hosting-943473674611016431/original/e6e31a7d-0d86-414d-840c-c3fdca430c70.jpeg?im_w=720&im_format=avif"
//     ],
//     category: "Beach"
//   },
//   {
//     title: "Tropical Retreat in the Maldives",
//     description: "Maldives",
//     price_per_night: 250,
//     rating: 4.9,
//     reviews: 300,
//     image_urls: [
//       "https://a0.muscache.com/im/pictures/78486387-fc1f-4773-9d2a-a43d56e85979.jpg?im_w=1200&im_format=avif",
//       "https://a0.muscache.com/im/pictures/fec8526b-2be4-4024-9942-7819071836b2.jpg?im_w=720&im_format=avif",
//       "https://a0.muscache.com/im/pictures/a351eab7-de07-4b2a-b4a8-06654aeb19f2.jpg?im_w=720&im_format=avif",
//       "https://a0.muscache.com/im/pictures/f5ae6f0e-b069-4ce3-af84-7ad8b6fea1b0.jpg?im_w=720&im_format=avif",
//       "https://a0.muscache.com/im/pictures/miso/Hosting-46593200/original/9887184c-9f4c-42e0-bca3-4e50b5c8af9e.jpeg?im_w=720&im_format=avif"
//     ],
//     category: "Beach"
//   },
//   {
//     title: "Cozy Beachfront Cottage in Santorini, Greece",
//     description: "Santorini, Greece",
//     price_per_night: 140,
//     rating: 4.8,
//     reviews: 210,
//     image_urls: [
//       "https://a0.muscache.com/im/pictures/a4363b54-77f4-4d5b-8fcc-ba6bd3aee5b3.jpg?im_w=1200&im_format=avif",
//       "https://a0.muscache.com/im/pictures/ce56653e-c3ef-4ede-a327-d21576b22671.jpg?im_w=720&im_format=avif",
//       "https://a0.muscache.com/im/pictures/c1ac35ff-ed13-40a5-9fb1-db1963b0672e.jpg?im_w=720&im_format=avif",
//       "https://a0.muscache.com/im/pictures/6a6e71cf-b40f-44c1-8bbb-474a187e6f35.jpg?im_w=720&im_format=avif",
//       "https://a0.muscache.com/im/pictures/698fdb5c-319c-4533-8530-71da85b84efe.jpg?im_w=720&im_format=avif"
//     ],
//     category: "Beach"
//   },
//   {
//     title: "Alicante, Spain",
//     description: "Spain",
//     price_per_night: 200,
//     rating: 4.9,
//     reviews: 270,
//     image_urls: [
//       "https://a0.muscache.com/im/pictures/miso/Hosting-1105158445164767083/original/bbd9be25-b87f-4bce-b013-59ca887220c6.jpeg?im_w=1200&im_format=avif",
//       "https://a0.muscache.com/im/pictures/miso/Hosting-1105158445164767083/original/15fba38c-4cd1-469c-924e-62b02d0466f6.jpeg?im_w=720&im_format=avif",
//       "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEwNTE1ODQ0NTE2NDc2NzA4Mw%3D%3D/original/4bc70969-6a70-49ce-93e9-acdd514d3491.jpeg?im_w=720&im_format=avif",
//       "https://a0.muscache.com/im/pictures/miso/Hosting-1105158445164767083/original/8515170d-0a91-4b32-9cd5-086cea56474a.jpeg?im_w=720&im_format=avif",
//     "https://a0.muscache.com/im/pictures/miso/Hosting-1105158445164767083/original/67b9a67e-d759-4b07-b99f-14c9740dee3e.jpeg?im_w=720&im_format=avif"    ],
//     category: "Beach"
//   }
// ]);