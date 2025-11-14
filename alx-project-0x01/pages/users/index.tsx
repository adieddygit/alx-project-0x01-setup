import Header from "@/components/layout/Header";
import Button from "@/components/common/Button";
import UserCard from "@/components/common/UserCard";
import UserModal from "@/components/common/UserModal";
import { UserProps, UserData } from "@/interfaces";
import React, {useState} from 'react';
 
const Users: React.FC<{ posts: UserProps[] }> = ({ posts }) => {
  const [isModalOpen, setModalOpen] = useState(false)

  const handleAddUser = (newUser: UserData) =>{
    console.log("New User", newUser)
  }
  return (
    <div className="flex flex-col h-screen">
      <Header />

      <main className="p-4">
        <h1 className="text-2xl font-semibold mb-4">Users List</h1>
        <Button
          title="Add User"
          onClick={() => setModalOpen(true)}
          className="bg-green-600 hover:bg-green-700"
        />
        <div className="grid grid-cols-3 gap-4">
          {posts.map((user) => (
            <UserCard key={user.id} {...user} />
      ))}
      </div>
      </main>
      {isModalOpen && (
        <UserModal
          onClose={() => setModalOpen(false)}
          onSubmit={handleAddUser}
        />
      )}
    </div>
    );
  };

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await response.json();

  return { props: { posts } };
;}

export default Users;
