import UserCard from '@/components/common/UserCard';
import Header from '@/components/layout/Header';
import { UserProps } from '@/interfaces';

interface UsersPageProps{
    users: UserProps[]
}

const Users: React.FC<UsersPageProps> = ({users})=>{
    return (
        <div className="flex flex-col h-screen">
            <Header/>
            <main>
                <h1>Users</h1>
                <div>{users.map((user)=>(
                    <UserCard key={user.id}{...user}/>
                ))}</div>
            </main>
        </div>
    );  
};

export async function getStaticProps(){
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users: UserProps[] = await response.json();

    return {
        props:{
            users,
        },
    };
}

export default Users;