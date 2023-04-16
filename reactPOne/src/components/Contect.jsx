import React from "react";

function Contect(){
    return (
    <div className="contect">
        <main>
            <h1>Contact Us</h1>

            <form>
                <div>
                    <label>Name</label>
                    <input type="text" required placeholder = "Abc" />
                </div>

                <div>
                    <label>Email</label>
                    <input type="text" required placeholder = "Abc@gmail.com" />
                </div>

                <div>
                    <label>Message</label>
                    <input type="text" required placeholder = "tell us about your Quiry..." />
                </div>

                <button type="submit">Send</button>



            </form>

        </main>
    </div>
    )
    
}; 


export default Contect;