import React from 'react'
import PropTypes from 'prop-types'

const ChildComponents = ({ name, age, skills, lang, testCallBackFn, isStudent }) => {
    // console.log(props)
    const a = "test call back"
    return (
        <div>
            <h1>Hello from child component</h1>
            <h2>{name}</h2>
            <h2>{age}</h2>
            <h2>Skills : {skills}</h2>
            <h2>English : {lang.english}</h2>
            <h2>French : {lang.french}</h2>
            {isStudent &&
                <button onClick={() => testCallBackFn(a)}>Click here</button>
            }
        </div>
    )
}

export default ChildComponents



ChildComponents.defaultProps = {
    name: "Sofien"
}


/** Proptypes */
ChildComponents.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    skills: PropTypes.arrayOf(PropTypes.string),
    lang: PropTypes.shape({
        english: PropTypes.string,
        french: PropTypes.string
    })
}