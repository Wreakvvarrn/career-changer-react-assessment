const HomeUser = (props) =>{
    const  employee = props.formEmployee 
    console.log(employee)
    return(
        <div>
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
                </tr>
            ))} 
            </tbody>
            </table>
        </div>
    )
}
export default HomeUser;