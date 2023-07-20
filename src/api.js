import axios from "axios";

const searchImages = async () => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID KmnSWFFepDh_NBoSsEMF61Vayl_2nLNCgksfmD9YZjM",
    },
    params :{
        query : 'cars',
    }
  });
  console.log(response);

};

export default searchImages;
