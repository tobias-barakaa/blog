import { Footer as FlowbiteFooter } from 'flowbite-react';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <FlowbiteFooter container className='border border-t-8 border-teal-500'>
            <div className=''>
                <div className=''>
                    <div className=''>
                    <Link to="/" className="self-center
         whitespace-nowrap text-sm sm:text-xl
         font-semibold
         dard:text-white hover:text-gray-300">
        
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500
            via-purple-500 to-pink-500 rounded-lg text-white">Tobiland</span>
        </Link> 
                    </div> 
                    <div className='grid grid-cols-2 gap-4'>
                        
                    </div>

                </div>
                
            </div>
        </FlowbiteFooter>
    )
}

export default Footer
