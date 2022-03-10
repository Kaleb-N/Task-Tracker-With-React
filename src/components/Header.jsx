import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import Button from './Button'

const Header = ({ title, onAdd, displayAdd }) => {
  const location = useLocation()
  
  return (
    <header className='header'>
        <h1>{title}</h1>
        {location.pathname === '/' && (<Button 
        color={displayAdd ? 'red' : 'green'} 
        text={displayAdd ? 'Close' : 'Add'} 
        onClick={onAdd} 
        />)}
    </header>
  )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// CSS IN JS
// const headingStyle = {
//     color: 'red',
//     backgroundColor: green
// }

export default Header