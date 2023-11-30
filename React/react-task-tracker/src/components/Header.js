import PropTypes from "prop-types"
import Button from "./Button"

const Header = ({ title }) => {
  return (
    <header className='header'>
      <h1>{title}</h1>  
      <Button color='green' text='Hello'/>          
    </header>
  )
}

Header.defaultProps = {
  title:'Task Trackers'
}

Header.propTypes = {
  title: PropTypes.string,
}

Button.defaultProps = {
  color: 'steelblue'
}

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string
}

const headingStyle = {
  color : 'blue', 
  backgroundColor:'yellow'
}


export default Header
