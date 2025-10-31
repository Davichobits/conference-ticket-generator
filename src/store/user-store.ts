import { create } from 'zustand'

interface User {
  url: string;
  fullName: string;
  email: string;
  githubUser: string;
  setUser: (user: {
    url: string;
    fullName: string;
    email: string;
    githubUser: string;
  }) => void
}

export const useUserStore = create<User>()((set)=>({
  url: '',
  fullName: '',
  email: '',
  githubUser: '',
  setUser: (user) => set(() => ({
    url: user.url,
    fullName: user.fullName,
    email: user.email,
    githubUser: user.githubUser
  }))
})) 