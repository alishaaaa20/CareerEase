import React, { useEffect, useState, useContext } from "react";
import "./ArtistDashboard.css"; // Import your CSS styles here
import { AuthContext } from "../../context/AuthContext";
import api from "../../utils/api";


const ArtistDashboard = () => {
  const [tab, setTab] = useState("about");
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    location: "",
    specialization: "",
    phone: "",
    experience: "",
    qualification: "",
    price:"",
    date:"",
  });

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleUpdateClick = async () => {
    try {
      console.log(formData)
      // Send a request to update the artist's information using formData
      const response = await api.put(`/artists/${user._id}`, formData);

      if (response.status === 200) {
        // Assuming the API returns the updated artist data
        const updatedData = response.data;
        setFormData(updatedData); // Update state with the response data
        setEditMode(false); // Disable edit mode after successful update
        alert("Artist information updated successfully");
      } else {
        console.error("Error updating artist information");
        // Handle other status codes (e.g., 400 for validation errors) here
        // You can display error messages to the user if needed
      }
    } catch (error) {
      console.error("Error updating artist information", error);
      // Handle network errors or other exceptions here
      // You can display a generic error message to the user
    }
  };

  const { user } = useContext(AuthContext);

  useEffect(() => {
    api.get(`/artists/${user._id}`).then(({ data }) => {
      console.log(data.data);
      if (data.error) {
        console.log(data.error);
      }
      setFormData({
        
        location: data.data.location,
        specialization: data.data.specialization,
        phone: data.data.phone,
        experience: data.data.experience,
        qualification: data.data.qualification,
        price:data.data.price,
        date:data.data.date,  
      });
    });
  }, [user._id]);
  return (
    <section>
      <div className="max-w-[1170px] px-5 mx-auto">
        <div className="grid grid-cols-3 gap-5">
          <div className="md:col-span-2">
            <div className="flex items-center gap-5">
              <div>
                <div className="flex items-center gap-[6px]">
                  <p className="text__para text-[16px] leading-6 lg:max-w-[390px] md:text-[20px]">
                    Location:{" "}
                    {editMode ? (
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            location: e.target.value
                          })
                        }
                      />
                    ) : (
                      formData.location
                    )}
                  </p>
                </div>
                <p className="text__para text-[14px] leading-6 lg:max-w-[390px] md:text-[20px]">
                  Service:{" "}
                  {editMode ? (
                    <input
                      type="text"
                      name="specialization"
                      value={formData.specialization}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          specialization: e.target.value
                        })
                      }
                    />
                  ) : (
                    formData.specialization
                  )}
                </p>
                <p className="text__para text-[14px] leading-6 lg:max-w-[390px] md:text-[20px]">
                  Phone:{" "}
                  {editMode ? (
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          phone: e.target.value
                        })
                      }
                    />
                  ) : (
                    formData.phone
                  )}
                </p>
                <p className="text__para text-[14px] leading-6 lg:max-w-[390px] md:text-[20px]">
                  Experience:{" "}
                  {editMode ? (
                    <input
                      type="text"
                      name="experience"
                      value={formData.experience}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          experience: e.target.value
                        })
                      }
                    />
                  ) : (
                    formData.experience
                  )}
                </p>
                <p className="text__para text-[14px] leading-6 lg:max-w-[390px] md:text-[20px]">
                  Qualification:{" "}
                  {editMode ? (
                    <input
                      type="text"
                      name="qualification"
                      value={formData.qualification}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          qualification: e.target.value
                        })
                      }
                    />
                  ) : (
                    formData.qualification
                  )}
                </p>

                <p className="text__para text-[14px] leading-6 lg:max-w-[390px] md:text-[20px]">
                  price:{" "}
                  {editMode ? (
                    <input
                      type="text"
                      name="price"
                      value={formData.price}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          price: e.target.value
                        })
                      }
                    />
                  ) : (
                    formData.price
                  )}
                </p>


                <p className="text__para text-[14px] leading-6 lg:max-w-[390px] md:text-[20px]">
                  date:{" "}
                  {editMode ? (
                    <input
                      type="text"
                      name="date"
                      value={formData.date}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          date: e.target.value
                        })
                      }
                    />
                  ) : (
                    formData.date
                  )}
                </p>

              </div>
            </div>

            <div className="mt-[50px]">
              {tab === "about" ? (
                <div>
                  {editMode ? (
                    <button
                      onClick={handleUpdateClick}
                      className="bg-primaryColor text-white py-2 px-4 rounded-lg"
                    >
                      Update
                    </button>
                  ) : (
                    <button
                      onClick={handleEditClick}
                      className="bg-primaryColor text-white py-2 px-4 rounded-lg"
                    >
                      Edit
                    </button>
                  )}
                </div>
              ) : null}
            </div>
          </div>
      
        </div>
      </div>
    </section>
  );
};

export default ArtistDashboard;
