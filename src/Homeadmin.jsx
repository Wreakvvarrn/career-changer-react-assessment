const HomeAdmin = (props) =>{
    const  employee = props.formEmployee 
    console.log(employee)
    return(
        <div>
            <form>
                <h3>Create User Here</h3>
                <input type="text" placeholder="Name"/>
                <input type="text" placeholder="Last Name"/>
                <input type="text" placeholder="Position"/>
                <button>Save</button>
            </form>
            <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Full name</th>
                    <th>Organization</th>
                </tr>
            </thead>
            <tbody>
            {employee.map((dataForm) => (
                <tr key={dataForm.id}>
                    <td>{dataForm.name}</td>
                    <td>{dataForm.lastname}</td>
                    <td>{dataForm.position}</td>
                    <td>{dataForm.id}</td>
                </tr>
            ))} 
            </tbody>
            </table>
        </div>
    )
}
export default HomeAdmin;