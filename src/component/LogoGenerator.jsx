import React, {useRef, useState} from 'react';
import Purple from '../assets/purple.png'
import White from '../assets/white.png'
import Dark from '../assets/dark.png'
import Round from '../assets/round.png'
import html2canvas from "html2canvas";
import "../Logo.css"
import '../index.css'

const LogoGenerator = () => {
    const [city, setCity] = useState('');
    const [logo, setLogo] = useState(Purple);
    const [preview, setPreview] = useState(null);
    const [trigger, setTrigger] = useState('#2C1752');
    const [textColor, setTextColor] = useState('#fff')
    const [selClass, setSelClass] = useState('rounded')

    //input function handler
    const handleChange = (e) => setCity(e.target.value)

    //set logo src and city text color
    const selectLogo = (e, img, t) => {
        setLogo(`${img}`)
        setTrigger(e.target.value)
        setTextColor(e.target.value)
        if(t===1){
            setSelClass('centered')
        }
        if(t===2){
            setSelClass('rounded')
        }
    }

    const handleSubmit = event => {
        event.preventDefault();
        setPreview(`${preview}, ${trigger}`);
        setTextColor(`${trigger}`)
    };

    //create an image and download
    const exportAsImage = async (el, imageFileName) => {
        const canvas = await html2canvas(el);
        const image = canvas.toDataURL("image/png", 1.0);
        downloadImage(image, imageFileName);
    };

    //download image function with fake anchor tag
    const downloadImage = (blob, fileName) => {
        const fakeLink = window.document.createElement("a");
        fakeLink.style = "display:none;";
        fakeLink.download = fileName;

        fakeLink.href = blob;

        document.body.appendChild(fakeLink);
        fakeLink.click();
        document.body.removeChild(fakeLink);

        fakeLink.remove();
    };

    const exportRef = useRef();

    return (
        <div className="grid grid-cols-1 xl:grid-cols-1 lg:grid-cols-3 md:grid-cols-3 mb-8 gap-8 ">
            <form onSubmit={handleSubmit}>
                <h3 className="mb-4 font-semibold text-secondary dark:text-secondary flex justify-center">Select Logo
                    Type</h3>
                {/* logo type selection */}
                <div className='flex justify-center w-full'>
                    <div>
                        <ul className="text-sm font-medium text-white bg-white border border-white rounded-lg sm:flex dark:bg-transparent dark:border-secondary dark:text-white">
                            <li className="border-b border-white sm:border-b-0 sm:border-r dark:border-white">
                                <div className="flex items-center p-3">
                                    <input id="purple-logo" type="radio" value="#ffffff" name="logo"
                                        onChange={(e) => selectLogo(e, `${Purple}`, 1)}
                                        className="w-4 h-4 text-black bg-gray-100 border-gray-300 focus:ring-white dark:focus:ring-white dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                                    <label htmlFor="purple-logo"
                                        className="w-full py-3 ml-2 text-sm font-medium text-white dark:text-white"><img
                                        src={Purple} alt="purple logo" width={150}/></label>

                                </div>
                            </li>
                            <li className="border-b border-white sm:border-b-0 sm:border-r dark:border-white">
                                <div className="flex items-center p-3">
                                    <input id="white-logo" type="radio" value="#8248E5" name="logo"
                                        onChange={(e) => selectLogo(e, `${White}`, 1)}
                                        className="w-4 h-4 text-black bg-gray-100 border-gray-300 focus:ring-white dark:focus:ring-white dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                                    <label htmlFor="white-logo"
                                        className="w-full py-3 ml-2 text-sm font-medium text-white dark:text-white"><img
                                        src={White} alt="purple logo" width={150}/> </label>
                                </div>
                            </li>
                            <li className="border-b border-white sm:border-b-0 sm:border-r-none dark:border-white">
                                <div className="flex items-center p-3">
                                    <input id="dark-logo" type="radio" value="#ffffff" name="logo"
                                        onChange={(e) => selectLogo(e, `${Dark}`, 1)}
                                        className="w-4 h-4 text-black bg-gray-100 border-gray-300 focus:ring-white dark:focus:ring-white dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                                    <label htmlFor="dark-logo"
                                        className="w-full py-3 ml-2 text-sm font-medium text-white dark:text-white"><img
                                        src={Dark} alt="purple logo" width={150}/> </label>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <ul style={{marginLeft: 10}} className=" text-sm font-medium text-white bg-white border border-white rounded-lg sm:flex dark:bg-transparent dark:border-secondary dark:text-white">
                        <li className="border-b border-white sm:border-b-0 sm:border-r-none dark:border-white">
                            <div className="flex items-center p-3">
                                <input id="round-logo" type="radio" value="#ffffff" name="logo"
                                       onChange={(e) => selectLogo(e, `${Round}`, 2)}
                                       className="w-4 h-4 text-black bg-gray-100 border-gray-300 focus:ring-white dark:focus:ring-white dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                                <label htmlFor="round-logo"
                                       className="w-full py-3 ml-2 text-sm font-medium text-white dark:text-white"><img
                                    src={Round} alt="rounded logo" width={70}/> </label>
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
                            <input type="text" value={city} placeholder="enter your city name" onChange={handleChange} maxLength="17"
                                   className="w-full pr-40 bg-neutral input input-lg text-primary"/>
                            <button type="submit"
                                    className="absolute top-0 right-0 rounded-l-none bg-secondary text-white w-25 btn btn-lg hover:bg-primary">Generate
                            </button>
                        </label>
                    </div>
                </div>


            </form>

            {/* Logo preview before download */}
            <div className=" text-center " >
                <h3 className="mb-4 font-semibold text-secondary dark:text-secondary flex justify-center">Preview</h3>
                    {preview && <div id='logoPreview'>
                        <div className="card bg-dark text-white" ref={exportRef}>
                            <img className="card-img card-img-top rounded-lg" src={logo} alt="Logo"/>
                            <span className={"text-white "+selClass} style={{'color': `${textColor}`}}>{city}</span>
                        </div>
                        <br/>
                        <button onClick={() => exportAsImage(exportRef.current, `${city}-polygon-logo`)}
                                className="btn btn-primary justify-center">
                            Download
                        </button>
                    </div>
                    }
            </div>
        </div>
    );
};

export default LogoGenerator;