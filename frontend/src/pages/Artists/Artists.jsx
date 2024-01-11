import React, { useState, useEffect } from 'react';
import ArtistCard from '../../components/Artists/ArtistCard';
import { BASE_URL } from '../../utils/config';
import { useNavigate } from 'react-router-dom';
import ArtistList from '../../components/Artists/ArtistList';

const Artists = () => {
  const [searchInput, setSearchInput] = useState('');
  const [filteredArtists, setFilteredArtists] = useState([]);
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    e.preventDefault(); // Prevent form submission and page refresh

    try {
      let endpoint = `${BASE_URL}/artists/search/getAllArtist`;

      // Check if searchInput contains alphabetic characters (assumed as a name)
      if (/[a-zA-Z]/.test(searchInput)) {
        endpoint += `?name=${searchInput}`;
      } else {
        endpoint += `?specialization=${searchInput}`;
      }

      const response = await fetch(endpoint);

      if (response.ok) {
        const data = await response.json();

        // Ensure data is an array, and if not, handle it
        if (Array.isArray(data)) {
          setFilteredArtists(data); // Update filteredArtists with the fetched data
        } else {
          // Handle the case where data is not an array (e.g., data is not found)
          setFilteredArtists([]);
        }
      } else {
        // Handle HTTP error (e.g., 404, 500) here
        console.error('Error fetching artist data - HTTP Error:', response.status);
        setFilteredArtists([]);
      }
    } catch (error) {
      // Handle other errors (e.g., network error) here
      console.error('Error fetching artist data:', error);
      setFilteredArtists([]);
    }
  };

  useEffect(() => {
    // Initialize filteredArtists as an empty array
    setFilteredArtists([]);
  }, []);


  return (
    <>
      <section className="bg-[#fff9ea]">
        <div className="container text-center">
          <h2 className="heading text-center text-[40px] text-primaryColor">Find a Makeup Artist</h2>
          <form onSubmit={handleSearch}>
            <div className="max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between">
              <input
                type="search"
                placeholder="Search Makeup Artists"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                className="py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-textColor"
              />
              <button type="submit" className="btn mt-0 rounded-[0px] rounded-r-md">Search</button>
            </div>
          </form>
        </div>
      </section>

     <section>
        <div className="container">
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
            {filteredArtists.map(artist => (
              <ArtistCard key={artist._id} artist={artist} />
            ))}
          </div>
        </div>
      </section>

       {/*-----Artist section starts-----*/}

  <section>
  <div className="container">
    <div className="xl:w-[470px] mx-auto">
      <h2 className="heading text-center text-primaryColor">
        Top Makeup Artists
      </h2>
      <p className="text__para text-center">
        Best and affordable makeup artists near you.
      </p>
    </div>
    <ArtistList query={searchInput} />
  </div>
</section>

      {/*-----artist section ends-----*/}

    </>
  );
};


     

export default Artists;
