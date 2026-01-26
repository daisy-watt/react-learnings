
export default function UserCard({userData}) {
    const { title, first, last } = userData.name;
    
    return (
        <> 
            <div>
                <h1>{title} {first} {last} </h1>
            </div>
        </>
    );
}