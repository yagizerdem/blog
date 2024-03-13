import '../styles/ContactLayout.css'
export default function ContactLayout(){

    return(
        <>
            <div className="contact-container">
                <div className="card">
                    <form>
                        <div>
                        <input type='text' placeholder='enter first name' />
                        <input type='text' placeholder='enter last name' />
                        <input type='mail' placeholder='enter email' /> 
                        <input type='password' placeholder='enter password' />

                        <button className='submitbtn' type='submit'>
                            Send mail
                        </button>
                        </div>
     
                    </form>
                </div>
            </div>
        </>
    )
}