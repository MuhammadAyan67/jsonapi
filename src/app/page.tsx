
import PostCard from "@/components/PostCard";
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode } from "react";
export interface Post{
  userId:number,
  id:number,
  title: string,
  body : string,

}

export default async function Home() {
  const response = await fetch ("http://localhost:3000/api/external")
  if(!response.ok){
    return <div>Something went wrong</div>
  }
  const data = await response.json()
  const posts :Post[] =data.data
  return (
 <div className="grid grid-col-1 sm:grid-cols-2 shadow-xl md:grid-cols-4 lg:grid-cols-5 p-8 gap-8">
  {posts.map((post)=>(
   <PostCard key={post.id}
   body={post.body}
   title={post.title}
   />
  ))}
 </div>
  );
}
