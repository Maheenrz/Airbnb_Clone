// import React, { useState } from "react";
// import axios from "axios";
// import ProgressBar from "./ProgressBar";
// import Step0 from "./Step0";
// import Step1 from "./Step1/Step1";
// import Step1_2 from "./Step1/Step1_2";
// import Step1_3 from "./Step1/Step1_3";
// import Step1_4 from "./Step1/Step1_4";
// import Step1_5 from "./Step1/Step1_5";
// import Step2 from "./Step2/Step2";
// import Step2_2 from "./Step2/Step2_2";
// import Step2_3 from "./Step2/Step2_3";
// import Step2_4 from "./Step2/Step2_4";
// import Step2_5 from "./Step2/Step2_5";
// import Step3 from "./Step3/Step3";
// import Step3_2 from "./Step3/Step3_2";
// import { motion } from "framer-motion";

// const ListingForm = () => {
//   const pageVariants = {
//     initial: { opacity: 0, x: "-100vw" },
//     animate: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 120 } },
//     exit: { opacity: 0, x: "100vw", transition: { ease: "easeInOut", duration: 0.5 } },
//   };

//   const [step, setStep] = useState(0);
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [pricePerNight, setPricePerNight] = useState("");
//   const [category, setCategory] = useState("");
//   const [address, setAddress] = useState("");
//   const [city, setCity] = useState("");
//   const [state, setState] = useState("");
//   const [country, setCountry] = useState("");
//   const [place, setPlace] = useState("");
//   const [bedrooms, setBedrooms] = useState(0);
//   const [bathrooms, setBathrooms] = useState(0);
//   const [maxGuests, setMaxGuests] = useState(0);
//   const [infants, setInfants] = useState(0);
//   const [adults, setAdults] = useState(1);
//   const [children, setChildren] = useState(0);
//   const [pets, setPets] = useState(0);
//   const [images, setImages] = useState([]);
//   const [amenities, setAmenities] = useState([]);
//   const [availability, setAvailability] = useState([{ startDate: "", endDate: "" }]);
//   const [destination, setDestination] = useState("");
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append("title", title);
//     formData.append("description", description);
//     formData.append("price_per_night", pricePerNight);
//     formData.append("category", category);
//     formData.append("location[address]", address);
//     formData.append("location[city]", city);
//     formData.append("location[state]", state);
//     formData.append("location[country]", country);
//     formData.append("bedrooms", bedrooms);
//     formData.append("bathrooms", bathrooms);
//     formData.append("maxGuests", maxGuests);
//     formData.append("infants", infants);
//     formData.append("place", place);
//     formData.append("adults", adults);
//     formData.append("children", children);
//     formData.append("pets", pets);
//     formData.append("destination", destination);
//     availability.forEach((date, index) => {
//       formData.append(`availability[${index}][startDate]`, date.startDate);
//       formData.append(`availability[${index}][endDate]`, date.endDate);
//     });
//     amenities.forEach((amenity, index) => {
//       formData.append(`amenities[${index}]`, amenity);
//     });

//     for (let i = 0; i < images.length; i++) {
//       formData.append("images", images[i]);
//     }

//     try {
//       const response = await axios.post(
//         "http://localhost:5000/api/listings",
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         }
//       );
//       setSuccess("Listing uploaded successfully!");
//       setError("");
//     } catch (err) {
//       console.error("Error uploading listing:", err.response ? err.response.data : err.message);
//       setError("Error uploading listing. Please try again.");
//       setSuccess("");
//     }
//   };

//   return (
//     <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" className=" w-full">
//       {step === 0 && <Step0 />}
//       {step === 1 && <Step1 />}
//       {step === 2 && <Step1_2 category={category} setCategory={setCategory} />}
//       {step === 3 && <Step1_3 place={place} setPlace={setPlace} />}
//       {step === 4 && <Step1_4 address={address} city={city} state={state} country={country} setAddress={setAddress} setCity={setCity} setState={setState} setCountry={setCountry} />}
//       {step === 5 && <Step1_5 infants={infants} adults={adults} children={children} pets={pets} setInfants={setInfants} setAdults={setAdults} setChildren={setChildren} setPets={setPets} setMaxGuests={setMaxGuests} />}
//       {step === 6 && <Step2 images={images} setImages={setImages} />}
//       {step === 7 && <Step2_2 amenities={amenities} setAmenities={setAmenities} />}
//       {step === 8 && <Step2_3 title={title} setTitle={setTitle} />}
//       {step === 9 && <Step2_4 description={description} setDescription={setDescription} />}
//       {step === 10 && <Step2_5 bedrooms={bedrooms} bathrooms={bathrooms} setBedrooms={setBedrooms} setBathrooms={setBathrooms} setAvailability={setAvailability} setDestination={setDestination} />}
//       {step === 11 && <Step3 pricePerNight={pricePerNight} setPricePerNight={setPricePerNight} />}
//       {step === 12 && <Step3_2 title={title} description={description} pricePerNight={pricePerNight} category={category} address={address} city={city} state={state} country={country} place={place} bedrooms={bedrooms} bathrooms={bathrooms} maxGuests={maxGuests} infants={infants} adults={adults} children={children} pets={pets} images={images} amenities={amenities} destination={destination} availability={availability} />}

//       <ProgressBar step={step} setStep={setStep} handleSubmit={handleSubmit} />
//     </motion.div>
//   );
// };

// export default ListingForm;




import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import ProgressBar from "./ProgressBar";
import Step0 from "./Step0";
import Step1 from "./Step1/Step1";
import Step1_2 from "./Step1/Step1_2";
import Step1_3 from "./Step1/Step1_3";
import Step1_4 from "./Step1/Step1_4";
import Step1_5 from "./Step1/Step1_5";
import Step2 from "./Step2/Step2";
import Step2_2 from "./Step2/Step2_2";
import Step2_3 from "./Step2/Step2_3";
import Step2_4 from "./Step2/Step2_4";
import Step2_5 from "./Step2/Step2_5";
import Step3 from "./Step3/Step3";
import Step3_2 from "./Step3/Step3_2";
import { motion } from "framer-motion";

const ListingForm = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const pageVariants = {
    initial: { opacity: 0, x: "-100vw" },
    animate: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 120 } },
    exit: { opacity: 0, x: "100vw", transition: { ease: "easeInOut", duration: 0.5 } },
  };

  const [step, setStep] = useState(0);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [pricePerNight, setPricePerNight] = useState("");
  const [category, setCategory] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [place, setPlace] = useState("");
  const [bedrooms, setBedrooms] = useState(0);
  const [bathrooms, setBathrooms] = useState(0);
  const [maxGuests, setMaxGuests] = useState(0);
  const [infants, setInfants] = useState(0);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [pets, setPets] = useState(0);
  const [images, setImages] = useState([]);
  const [amenities, setAmenities] = useState([]);
  const [availability, setAvailability] = useState([{ startDate: "", endDate: "" }]);
  const [destination, setDestination] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("price_per_night", pricePerNight);
    formData.append("category", category);
    formData.append("location[address]", address);
    formData.append("location[city]", city);
    formData.append("location[state]", state);
    formData.append("location[country]", country);
    formData.append("bedrooms", bedrooms);
    formData.append("bathrooms", bathrooms);
    formData.append("maxGuests", maxGuests);
    formData.append("infants", infants);
    formData.append("place", place);
    formData.append("adults", adults);
    formData.append("children", children);
    formData.append("pets", pets);
    formData.append("destination", destination);
    availability.forEach((date, index) => {
      formData.append(`availability[${index}][startDate]`, date.startDate);
      formData.append(`availability[${index}][endDate]`, date.endDate);
    });
    amenities.forEach((amenity, index) => {
      formData.append(`amenities[${index}]`, amenity);
    });

    for (let i = 0; i < images.length; i++) {
      formData.append("images", images[i]);
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/listings",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setSuccess("Listing uploaded successfully!");
      setError("");
      alert("Listing created successfully!"); // Show alert message
      navigate("/listing-card"); // Redirect to the main page of listings
    } catch (err) {
      console.error("Error uploading listing:", err.response ? err.response.data : err.message);
      setError("Error uploading listing. Please try again.");
      setSuccess("");
    }
  };

  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" className=" w-full">
      {step === 0 && <Step0 />}
      {step === 1 && <Step1 />}
      {step === 2 && <Step1_2 category={category} setCategory={setCategory} />}
      {step === 3 && <Step1_3 place={place} setPlace={setPlace} />}
      {step === 4 && <Step1_4 address={address} city={city} state={state} country={country} setAddress={setAddress} setCity={setCity} setState={setState} setCountry={setCountry} />}
      {step === 5 && <Step1_5 infants={infants} adults={adults} children={children} pets={pets} setInfants={setInfants} setAdults={setAdults} setChildren={setChildren} setPets={setPets} setMaxGuests={setMaxGuests} />}
      {step === 6 && <Step2 images={images} setImages={setImages} />}
      {step === 7 && <Step2_2 amenities={amenities} setAmenities={setAmenities} />}
      {step === 8 && <Step2_3 title={title} setTitle={setTitle} />}
      {step === 9 && <Step2_4 description={description} setDescription={setDescription} />}
      {step === 10 && <Step2_5 bedrooms={bedrooms} bathrooms={bathrooms} setBedrooms={setBedrooms} setBathrooms={setBathrooms} setAvailability={setAvailability} setDestination={setDestination} />}
      {step === 11 && <Step3 pricePerNight={pricePerNight} setPricePerNight={setPricePerNight} />}
      {step === 12 && <Step3_2 title={title} description={description} pricePerNight={pricePerNight} category={category} address={address} city={city} state={state} country={country} place={place} bedrooms={bedrooms} bathrooms={bathrooms} maxGuests={maxGuests} infants={infants} adults={adults} children={children} pets={pets} images={images} amenities={amenities} destination={destination} availability={availability} />}

      <ProgressBar step={step} setStep={setStep} handleSubmit={handleSubmit} />
    </motion.div>
  );
};

export default ListingForm;