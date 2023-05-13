const Profile = ({ user }) => {
    return (
        <>
            <h1>Perfil de usuario</h1>
            <p>Email: {user.email}</p>
            <p>Nombre: {user.name} </p>
        </>
    )
}
export default Profile;