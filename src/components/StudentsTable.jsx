function StudentsTable() {
    const student_details = [
        { id: 1, firstname: "John", lastname: "Doe", age: 30 },
        { id: 2, firstname: "Ivy", lastname: "Lily", age: 60 },
        { id: 3, firstname: "Peter", lastname: "Washington", age: 90 },
    ];

    return (
        <table className="table table-bordered">
            <thead className="thead-dark">
                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
                {student_details.map((student) => (
                    <tr key={student.id}>
                        <td>{student.id}</td>
                        <td>{student.firstname}</td>
                        <td>{student.lastname}</td>
                        <td>{student.age}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default StudentsTable;
