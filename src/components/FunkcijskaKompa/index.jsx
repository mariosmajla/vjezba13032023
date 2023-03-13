import PropTypes from 'prop-types'

function FunkcijskaKompa ({name, age}) {
    return (
        <div>
            <h1>Primjer funkcijske kompe s propsima iz array-a</h1>
            <p>Korisnik: {name} ima godina: {age}</p>
            
        </div>
    )
}

FunkcijskaKompa.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired
}


export default FunkcijskaKompa;