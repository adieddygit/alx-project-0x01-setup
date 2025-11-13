import Header from '@/components/layout/Header'
const User: React.FC = ()=>{
    return (
        <div className="flex justify-center items-center">
            <h1></h1>
            <Header/>
        </div>
    )
}

export async function getStaticProps(){
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const posts = await response.json()

    return {
        props:{
            posts
        }
    }
}

export default User