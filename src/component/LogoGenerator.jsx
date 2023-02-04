import React, { useState } from 'react';
import Purple from '../assets/purple-logo.png'
import White from '../assets/white-logo.png'
import Dark from '../assets/dark-logo.png'

const LogoGenerator = () => {
  const [city, setCity] = useState('');
  const [logo, setLogo] = useState(null);

   //input function handler
   const handleChange = (e) => setCity(e.target.value)

  const handleSubmit = event => {
    event.preventDefault();
    // Example code to generate logo based on city name
    // Replace this with a real logo generation code
    setLogo(`${city}`);
  };

  return (
    <div  className="grid grid-cols-1 xl:grid-cols-1 lg:grid-cols-3 md:grid-cols-3 mb-8 gap-8">
      <form onSubmit={handleSubmit}>
        <h3 class="mb-4 font-semibold text-secondary dark:text-secondary flex justify-center">Select Logo Type</h3>
        {/* logo type selection */} 
          <div className='flex justify-center w-full'>
              <ul class="text-sm font-medium text-white bg-white border border-white rounded-lg sm:flex dark:bg-transparent dark:border-secondary dark:text-white">
                  <li class="border-b border-white sm:border-b-0 sm:border-r dark:border-white">
                      <div class="flex items-center p-3">
                          <input id="purple-logo" type="radio" value="purple" name="list-radio" class="w-4 h-4 text-black bg-gray-100 border-gray-300 focus:ring-white dark:focus:ring-white dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                          <label for="purple-logo" class="w-full py-3 ml-2 text-sm font-medium text-white dark:text-white"><img src={Purple} alt="purple logo" width={150} /></label>
                          
                      </div>
                  </li>
                  <li class="border-b border-white sm:border-b-0 sm:border-r dark:border-white">
                      <div class="flex items-center p-3">
                          <input id="white-logo" type="radio" value="white" name="list-radio" class="w-4 h-4 text-black bg-gray-100 border-gray-300 focus:ring-white dark:focus:ring-white dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                          <label for="white-logo" class="w-full py-3 ml-2 text-sm font-medium text-white dark:text-white"><img src={White} alt="purple logo" width={150} /> </label>
                      </div>
                  </li>
                  <li class="border-b border-white sm:border-b-0 sm:border-r dark:border-white">
                      <div class="flex items-center p-3">
                          <input id="dark-logo" type="radio" value="dark" name="list-radio" class="w-4 h-4 text-black bg-gray-100 border-gray-300 focus:ring-white dark:focus:ring-white dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                          <label for="dark-logo" class="w-full py-3 ml-2 text-sm font-medium text-white dark:text-white"><img src={Dark} alt="purple logo" width={150} /> </label>
                      </div>
                  </li>
              </ul>
          </div>

        {/* divider */}
        <div className="flex flex-col w-full border-opacity-50">
          <div className="divider">Generate Logo</div>
        </div>

        {/* input field for city */}
        <div className='form-control'>
          <div className='relative'>
              <label className='input-group'>
                <input type="text" value={city} placeholder="enter your city name" onChange={handleChange} className="w-full pr-40 bg-neutral input input-lg text-primary" />
                <button type="submit" className="absolute top-0 right-0 rounded-l-none bg-secondary text-white w-25 btn btn-lg hover:bg-primary">Generate</button>
              </label>
          </div>
        </div>
      </form>
      
      {/* Logo preview before download */}
      <h3 class="mb-4 font-semibold text-secondary dark:text-secondary flex justify-center">Preview</h3>
      {logo && <div>{logo}</div>}
    </div>
  );
};

export default LogoGenerator;