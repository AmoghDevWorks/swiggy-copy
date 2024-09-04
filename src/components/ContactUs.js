const ContactUs = () =>{
    return(
        <div className="m-4 p-5">
            <div className="p-3 w-fit m-4 border-solid border-red-100 border-2">
                <h1 className="font-extrabold font-sans underline uppercase">contact us on:</h1>
                <p><span className="font-bold underline m-4 capitalize">email:</span>abc@gmail.com</p>
                <p><span className="font-bold underline m-4 capitalize">Mobile Number:</span>1234567890</p>
            </div>
            <form>
                <input className="w-80 h-fit p-2 m-5 border-solid border-red-300 border-2 rounded-md" type="text" placeholder="name" />
                <input className="w-80 h-fit p-2 m-5 border-solid border-red-300 border-2 rounded-md" type="text" placeholder="message" />
                <button className="text-white font-semibold border-solid border-black p-2 border-2 rounded-md bg-red-400">Submit</button>
            </form>
        </div>
    )
}

export default ContactUs;