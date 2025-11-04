//import necessary libraries for creating tabs

const TabGroup = () => {
    const tabs = ["Host" , "Join"];



    // show the actual visual elements
    return (
        <div>
            <div className='flex gap-3 justify-center items-center'>
                {tabs.map((tabs => <button>{tabs}</button>))}
            </div>

            <div className =''>

            </div>
        </div>
    )
}

export default TabGroup