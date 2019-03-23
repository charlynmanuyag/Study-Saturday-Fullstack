import React, { Component } from 'react';
import axios from 'axios';
import NewStudentForm from './NewStudentForm';
import StudentList from './StudentList.js';
import SingleStudent from './SingleStudent.js';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
      selectedStudent: {},
      isToggleOn: false,
    };

    this.selectStudent = this.selectStudent.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.addStudent = this.addStudent.bind(this);
  }

  componentDidMount() {
    this.getStudents();
  }

  async getStudents() {
    console.log('fetching');
    try {
      const { data } = await axios.get('/student');
      this.setState({ students: data });
    } catch (err) {
      console.error(err);
    }
  }

  selectStudent(student) {
    return this.setState({
      selectedStudent: student,
    });
  }

  handleClick() {
    this.setState({ isToggleOn: !this.state.isToggleOn });
  }

  async addStudent(newStudent) {
    try {
      const { data } = await axios.post('/student', newStudent);
      this.setState({ students: [...this.state.students, data] });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return (
      <div>
        <h1>Students</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Tests</th>
            </tr>
          </thead>
          <StudentList
            students={this.state.students}
            selectStudent={this.selectStudent}
          />
        </table>
        {this.state.selectedStudent.id ? (
          <SingleStudent student={this.state.selectedStudent} />
        ) : null}
        <div className="newStudent">
          <button onClick={this.handleClick}>Add New Student</button>
          {this.state.isToggleOn && (
            <NewStudentForm addStudent={this.addStudent} />
          )}
        </div>
      </div>
    );
  }
}
