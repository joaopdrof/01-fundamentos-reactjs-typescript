import { Header } from "./components/Header"
import { Post, PostType } from "./components/Post"
import { Sidebar } from "./components/Sidebar";

import styles from './App.module.css';

import './global.css'

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/53498198?v=4',
      name: 'JoÃ£o Pedro',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa ð' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. Ã um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto Ã© DoctorCare ð' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2023-06-01 16:00:00'),
  },

  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernadnes',
      role: 'CTO Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa ð' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. Ã um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto Ã© DoctorCare ð' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2023-06-02 16:00:00'),
  },
]

export function App() {
  return (
    <>
     <Header />

     <div className={styles.wrapper}>
      <Sidebar />
      <main>
        
        {posts.map(post => {
          return (
            <Post 
              key={post.id}
             post={post}
            />
          )
        })}

      </main>
     </div>

    </>
  )
}


