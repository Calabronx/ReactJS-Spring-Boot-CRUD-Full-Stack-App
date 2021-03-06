import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';


class ListEmployeeComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
                employees: []
        }
        this.addEmployee = this.addEmployee.bind(this);
    }

    componentDidMount() {
        EmployeeService.getEmployees().then((res) => {
            this.setState({ employees: res.data });
        });
    }

    addEmployee() {
        this.props.history.push('/add-employee');
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Employees List</h2>
                <div className="row">

                    <a href='/add-employee'> < button className="btn btn-primary col-lg-2" onClick={this.addEmployee}> Add Employee</button></a>
                </div>
                 <br></br>
                <div className="row">
                </div>
                <table className="table table-striped table-bordered">

                        <thead>
                            <tr>
                                <th> Employee First Name </th>
                                <th> Employee Last Name </th>
                                <th> Employee Email Id</th>
                                <th> Actions</th>
                                </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.employees.map(
                                    employee =>
                                        <tr key={employee.id}>
                                            <td> { employee.firstName} </td>
                                            <td> {employee.lastName}</td>
                                            <td> {employee.emailId}</td>
                                            <td>
                                            </td>
                                        </tr>
                                )
                            }

                        </tbody>
                        </table>

            </div>
        )
    }
}

export default ListEmployeeComponent;