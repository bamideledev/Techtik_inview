import React from 'react';
 const Head = () => {

    return (
        <div>
            <section className='head'>
                <div className="container d_flex">
                    <div className="left row">
                           <i className='fa fa-phone'> </i>
                            <label> +234 8183 8372</label>
                            <i className='fa fa-envelope'> </i>
                            <label> @gmail.com</label>
                     </div>
                   <div className="right row RText">
                        <label>FAQs</label>
                        <label>Need Help?</label>
                        <span>🇺🇳</span>
                        <label htmlFor=''>EN</label>
                        <span>🇺🇸</span>
                        <label htmlFor=''>USD</label>
                    </div>
                    </div>

            </section>
        </div>
    )
    
}
export default Head;