import PropTypes from 'prop-types';
function Student(props){
    return(
        <div className="student-card">
            <p>Name: {props.name}</p>  
            <p>Age: {props.age}</p>
            <p>IsStudent: {props.isStudent ? "Yes" : "No"}</p>  
        </div>
    );
}
Student.PropTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool
}
Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false
}

export default Student;