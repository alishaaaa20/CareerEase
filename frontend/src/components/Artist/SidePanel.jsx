import React, { useState } from 'react';
import { formateDate } from '../../utils/formateDate';

const SidePanel = ({ initialData }) => {
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState(initialData || {
    price: '', // Provide default values for each field here
    sundayDate: '',
    // Add other fields here
  });

  const handleToggleEdit = () => {
    setEditMode(!editMode);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(formData)
  };

  const handleUpdate = async () => {
    const { user } = useContext(AuthContext);
    try {
      // Send a PUT request to update data with formData
      const response = await fetch(`/api/updateData/${user._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // Adjust the API endpoint and data as needed
      });

      if (response.ok) {
        // Update successful, exit edit mode
        setEditMode(false);
      } else {
        console.error('Failed to update data');
      }
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  return (
    <div className='shadow-panelShadow p-3 lg:p-5 rounded-md'>
      <div className='flex items-center justify-between'>
        <p className='text__para mt-0 font-semibold'>Price:</p>
        <span className='text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor font-bold'>
          {editMode ? (
            <input
              type="text"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
            />
          ) : (
            `Rs. ${formData.price}`
          )}
        </span>
      </div>
      <div className='mt-[30px]'>
        <p className='text__para mt-0 font-semibold text-headingColor'>
          Available Time Slots:
        </p>
        <ul className='mt-3'>
          {editMode ? (
            <li className='flex items-center justify-between mb-2'>
              <label className='text-[15px] leading-6 text-textColor font-semibold'>
                Sunday:
                <input
                  type="text"
                  name="sundayDate"
                  value={formData.sundayDate}
                  onChange={handleInputChange}
                />
              </label>
            </li>
          ) : (
            <li className='flex items-center justify-between mb-2'>
              <p className='text-[15px] leading-6 text-textColor font-semibold'>
                Date
              </p>
              <p className='text-[15px] leading-6 text-textColor font-semibold'>
                {formateDate(formData.sundayDate)}
              </p>
            </li>
          )}

          {/* Repeat similar code for other days */}
        </ul>
      </div>
      <div className="mt-3">
        {editMode ? (
          <button className='btn px-2 w-full rounded-md' onClick={handleUpdate}>
            Update
          </button>
        ) : (
          <button className='btn px-2 w-full rounded-md' onClick={handleToggleEdit}>
            Edit
          </button>
        )}
      </div>
    </div>
  );
};

export default SidePanel;