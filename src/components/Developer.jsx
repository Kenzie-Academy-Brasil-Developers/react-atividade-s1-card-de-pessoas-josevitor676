import './Developer.css';

const Developer = ({name,age,country}) => {
    return (
        <>
            <label className='devName'>Dev: {name}</label>
            <label className='devAge'>Idade: {age}</label>
            <label className='devCountry'>País: {country}</label>
        </>
    )
}

export default Developer