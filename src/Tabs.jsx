//import necessary libraries for creating tabs

const TabGroup = () => {
    
    //tab labels
    const tabs = ["Host" , "Join"];



    // show the actual visual elements
    return (
        <div>
            <div className='flex gap-3 justify-center items-center'>
                {tabs.map((tabs => <button className = 'px-4 border py-3 hover:bg-blue300'>
                    {tabs}</button>))}
            </div>

            <div className ='flex flex-col mx-auto'>
                    <div>Content One</div>
                    <div>Content Two</div>
                    <div>Content Three</div>
            </div>
        </div>
    )
}

export default TabGroup