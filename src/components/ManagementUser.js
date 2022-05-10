import React from 'react';
import Flash from '../services/Flash';
import '../components/css/ManagementUser.css';
import Request from '../services/Request';

class ManagementUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            roles: []
        }
    }

    fetchRoles = () => {
        
        let url = 'http://localhost:8080/QuizWit/FetchRoles';
        Request.get(url).then((res) => {
            if(res.success) {
                let roles = res.roles;
                for(let i=0; i<roles.length; i++)
                    roles[i]["serialNo"] = i + 1;
                this.setState({
                    roles: roles
                })
            }
            else {
                Flash.message(res.error, 'bg-danger');
            }
        })
    }
    componentDidMount = () => {
        this.fetchRoles();
    }

    render = () => {
        return (
            <div className='management-user'>
                <h2 className='secondary mb-10'>Management User</h2>
                <p className='primary mb-10'>Users within the account to perform restricted actions.</p>
                <div className='table-container'>
                    <table>
                        <thead>
                            <tr>
                                <th style={{width: "50px", textAlign: "left"}}>S No.</th>
                                <th style={{textAlign: "left"}}>Role Code</th>
                                <th  style={{textAlign: "left"}}>Role Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.roles.map((d, k) => {
                                    return <tr>
                                        <td className='text-left'>{d.serialNo}</td>
                                        <td className='text-left'>{d.code}</td>
                                        <td className='text-left'>{d.description}</td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ManagementUser;