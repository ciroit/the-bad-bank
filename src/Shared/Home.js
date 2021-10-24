import {Card} from '../Shared/Context'

function Home(){

    return (
        <Card 
            bgColor = 'primary'
            txtColor = 'black'
            header = 'BAD BANK'
            title = 'Welcome the BAD BANK'
            text = 'The only bank that doesnt have security'
            body = {(<img src='/bank.png' className='img-fluid' alt='Responsive Image'/>)}
        />
    );

}

export default Home;