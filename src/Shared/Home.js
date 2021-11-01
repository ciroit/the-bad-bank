import react from 'react'
import {Card, UserContext} from '../Shared/Context'

function Home(){

    const ctx = react.useContext(UserContext);

    return (
        <Card 
            bgColor = 'primary'
            txtColor = 'black'
            header = 'BAD BANK'
            title = 'Welcome the BAD BANK'
            text = 'The only bank that doesnt have security.  '
            body = {  
            
                <>
                    <hr/>
                    { ctx.userSession ? null : 
                        (<p> Login to be able to make deposits and withdrawals.If you don't have an account you can create one <a className="link-danger" href="#/createaccount/" ><strong>HERE</strong></a></p>)
                    }
                    
                    <img src='/bank.png' className='img-fluid' alt='Responsive Image'/>
                </>
            }
        />
    );

}

export default Home;