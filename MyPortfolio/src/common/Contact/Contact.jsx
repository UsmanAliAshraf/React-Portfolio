import styles from './ContactStyle.module.css';

function Contact() {
  return (
    <section id='contact' className={styles.container}>
        <h1 className='sectionTitle'>Contact</h1>


        <form action="">
            <div className="fromGroup">
                <label htmlFor="name" hidden>
                    Name
                </label>
                <input type="text" id='name' name='name' placeholder='Name' required />
            </div>

            <div className="fromGroup">
                <label htmlFor="email" hidden>
                    Email
                </label>
                <input type="text" id='email' Name='email' placeholder='Email' required />
            </div>

            <div className="fromGroup">
                <label htmlFor="message" hidden>
                    Message
                </label>
                <textarea  id='message' name='message' placeholder='Message' required>  </textarea> 
            </div>
            <input type="submit" className='hover btn' value='Submit' />
        </form>
    </section>
  )
}

export default Contact
